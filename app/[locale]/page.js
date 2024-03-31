import React, {Fragment} from 'react';
import fs from "fs/promises";
import path from "path";
import {getTranslations} from "next-intl/server";
import matter from "gray-matter";
import PageNavigation from "@/components/page-navigation";
import {Separator} from "@/components/ui/separator";
import PostItem from "@/components/post-item";


const postPerPage = (process.env.NEXT_PUBLIC_POST_PER_PAGE || 10)

const getPosts = async ({page, locale}) => {
  const postsDirectory = path.join(process.cwd(), 'markdoc', locale, 'posts')
  const fileNames = await fs.readdir(postsDirectory)


  const posts = await Promise.all(fileNames.map(async (fileName) => {
    const filePath = path.join(postsDirectory, fileName);
    const fileContents = await fs.readFile(filePath, 'utf8');
    const {data} = matter(fileContents);
    return {
      slug: fileName.replace(/\.mdoc$/, ''),
      title: data?.title,
      description: data.description,
      previewImage: data?.previewImage,
      date: data?.date,
    };
  }));

  const sortedPosts = posts.sort((a, b) => {
    if (a.date > b.date) {
      return -1;
    }
    if (a.date < b.date) {
      return 1;
    }
    return 0;
  })

  const startIndex = (page - 1) * postPerPage;
  const endIndex = page * postPerPage;

  const countOfPages = Math.ceil(fileNames.length / postPerPage)
  const postsPerPage = sortedPosts.slice(startIndex, endIndex)

  return {posts: postsPerPage, countOfPages};
}
const Page = async (props) => {
  const currentPage = Number(props.searchParams.page || 1)
  const {params} = props
  const {posts, countOfPages} = await getPosts({locale: props.params.locale, page: currentPage})
  const t = await getTranslations();

  return (
    <div className='pb-10'>
      <ul>
        {posts.map((post) => (
            <Fragment key={post.slug}>
              <li>
                <PostItem post={post} locale={params.locale}/>
              </li>
              <Separator className='my-8'/>
            </Fragment>
          )
        )}
      </ul>
      <PageNavigation
        currentPage={currentPage}
        locale={params.locale}
        countOfPages={countOfPages}
      />
    </div>
  );
};

export default Page;