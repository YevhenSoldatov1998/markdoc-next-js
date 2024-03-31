require('dotenv').config();

const path = require('path');
const glob = require("glob");
const fs = require("fs").promises;


const domain = process.env.NEXT_PUBLIC_DOMAIN;
const locales = process.env.NEXT_PUBLIC_LOCALES.split(',');

async function generateSitemap() {
  let urls = []

  locales.forEach((locale) => {
    urls.push(`${domain}/${locale}/`);
    urls.push(`${domain}/${locale}/about/`);
  });

  for (const locale of locales) {
    const posts = await glob.sync(path.join(__dirname, `markdoc/${locale}/posts/**/*.mdoc`));

    posts.forEach((file) => {
      const slug = path.basename(file, '.mdoc');
      urls.push(`${domain}/${locale}/blog/${slug}/`);
    });
  }

  const sitemapContent = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls.map(url => `<url><loc>${url}</loc></url>`).join('\n      ')}
    </urlset>
  `;

  await fs.writeFile('public/sitemap.xml', sitemapContent.trim());
  console.log('Sitemap generated!');
}

generateSitemap().catch(console.error);
