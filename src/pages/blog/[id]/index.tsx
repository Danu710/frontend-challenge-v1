'use client';
import React from 'react';
import useSWR from 'swr';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Data } from '@/types/blog';
import { Comment } from '@/types/comments';
import Article from '@/components/Article';
import Comments from '@/components/Comments';
import CommentsComponent from '@/components/Comments';

const fetcher = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

const PostDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR<Data>(
    `https://dev.to/api/articles/${id}`,
    fetcher
  );

  const { data: commentsData, error: commentsError } = useSWR<Comment[]>(
    `https://dev.to/api/comments?a_id=${id}`,
    fetcher
  );

  return (
    <div className='max-w-4xl mx-auto mt-6'>
      {data && <Article article={data} />}
      <div className='pt-10 p-4 bg-white shadow-lg rounded-lg'>
        <h1 className='text-xl text-black'>Comments</h1>
        {commentsData?.map((comment) => (
          <CommentsComponent key={comment.id_code} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default PostDetail;
