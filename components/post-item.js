import React from 'react';
import Link from "next/link";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import Image from "next/image";

const PostItem = ({post, locale}) => {
  return (
    <div>
      <Link href={`${locale}/blog/${post.slug}`}>
        {post?.previewImage ?
          <div className="w-full mb-8">
            <AspectRatio ratio={16 / 9}>
              <Image src={post?.previewImage} fill alt='Post image'
                     className="rounded-md object-cover"/>
            </AspectRatio>
          </div>
          : null}
        <h1 className='mb-4'>{post.title}</h1>
      </Link>
      <p className='text-xl mt-4'>{post.description}</p>
      <p className='text-sm mt-4 text-gray-400 text-right'>{post.date}</p>
    </div>
  );
};

export default PostItem;