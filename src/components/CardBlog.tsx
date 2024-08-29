import React from 'react';
import { Data } from '@/types/blog';
import Image from 'next/image';
import Link from 'next/link';

interface CardBlogProps {
  blog: Data;
}

const CardBlog: React.FC<CardBlogProps> = ({ blog }) => {
  return (
    <Link
      href={`/blog/${blog.id}`}
      className='overflow-hidden rounded-lg shadow transition hover:shadow-lg'>
      <Image
        alt={blog.title}
        src={blog.cover_image || blog.social_image}
        className='h-56 w-full object-cover'
        width={1200}
        height={600}
      />

      <div className='bg-white p-4 sm:p-6'>
        <time
          dateTime={blog.published_timestamp}
          className='block text-xs text-gray-500'>
          {new Date(blog.published_timestamp).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })}
        </time>

        <a href={blog.url}>
          <h3 className='mt-0.5 text-lg text-gray-900'>{blog.title}</h3>
        </a>

        <p className='mt-2 line-clamp-3 text-sm text-gray-500'>
          {blog.description}
        </p>

        <div className='mt-2 text-xs text-gray-400'>
          {blog.tag_list.map((tag, index) => (
            <span key={index} className='mr-2'>
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default CardBlog;
