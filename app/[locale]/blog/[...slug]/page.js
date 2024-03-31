import path from 'path';
import React from 'react';
import fs from 'fs/promises';
import Markdoc from "@markdoc/markdoc";
import slugConfig from "@/lib/slugConfig";
import config from "@/lib/mdoc";
import {notFound} from "next/navigation";
import '@/public/assets/styles/highlights.css'


async function getMarkdown({params}) {
  const slug = (slugConfig)?.[params.locale]?.[params?.slug] ?? params.slug
  const filePath = path.join(process.cwd(), 'markdoc', `${params.locale}/posts/${slug}.mdoc`);
  try {
    const content = await fs.readFile(filePath, 'utf8')
    const parse = Markdoc.parse(content)
    const doc = Markdoc.transform(parse, config)
    const result = Markdoc.renderers.react(doc, React)
    return {result, slug};
  } catch (e) {
    return notFound();
  }

}

const Blog = async (props) => {

  const {result} = await getMarkdown(props)

  return (
    <div className='blog'>
      {result}
    </div>
  );
};

export default Blog;