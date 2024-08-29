import React from 'react';
import { Data } from '@/types/blog';
import Image from 'next/image';

interface ArticleProps {
  article: Data;
}

const Article: React.FC<ArticleProps> = ({ article }) => {
  return (
    <article className='overflow-hidden rounded-lg shadow transition hover:shadow-xl'>
      <Image
        alt={article.title}
        src={article.cover_image || article.social_image}
        className='h-56 w-full object-cover'
        width={1200}
        height={600}
      />
      <div className='bg-white p-4 sm:p-6'>
        <h1 className='mt-0.5 text-lg text-gray-900'>{article.title}</h1>
        <div className='flex flex-row justify-start gap-3'>
          <Image
            src={article.user.profile_image}
            alt={article.user.name}
            className='h-10 w-10 rounded-full'
            width={40}
            height={40}
          />
          <h1 className='text-lg text-gray-900'>{article.user.name}</h1>
        </div>

        <p className='block text-md text-gray-500'>
          Published on {new Date(article.published_at).toLocaleDateString()} by{' '}
          {article.user.name}
        </p>

        <div className='flex flex-row justify-start gap-5'>
          <h2 className='mt-0.5 text-lg text-gray-900 rounded-full bg-gray-300 px-3'>
            {article.user.github_username}
          </h2>
          <h2 className='mt-0.5 text-lg text-gray-900 rounded-full bg-gray-300 px-3'>
            {article.user.twitter_username}
          </h2>
          <h2 className='mt-0.5 text-lg text-gray-900 rounded-full bg-gray-300 px-3'>
            {article.tag_list}
          </h2>
        </div>

        <p className='mt-2 line-clamp-3 text-sm/relaxed text-gray-500'>
          {article.description}
        </p>
      </div>
    </article>
  );
};

export default Article;
