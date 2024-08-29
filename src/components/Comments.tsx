import React from 'react';
import { Comment } from '@/types/comments';
import Image from 'next/image';

type CommentProps = {
  comment: Comment;
};

const CommentsComponent: React.FC<CommentProps> = ({ comment }) => {
  const renderChildren = (children: Comment[]) => {
    return (
      <div className='comment-children pl-4'>
        {children.map((child) => (
          <div
            key={child.id_code}
            className='comment border-b border-gray-200 py-2'>
            <div className='flex items-start'>
              <Image
                src={child.user.profile_image_90}
                alt={child.user.name}
                className='w-12 h-12 rounded-full'
                width={40}
                height={40}
              />
              <div className='ml-3 flex-1'>
                <p className='font-semibold'>
                  {child.user.name} (@{child.user.username})
                </p>
                <div dangerouslySetInnerHTML={{ __html: child.body_html }} />
                <p className='text-gray-500 text-sm'>
                  {new Date(child.created_at).toLocaleString()}
                </p>
              </div>
            </div>

            {child.children && child.children.length > 0 && (
              <div className='ml-4 mt-2'>
                {child.children.map((subChild) => (
                  <div key={subChild.id_code} className='flex items-start mb-2'>
                    <Image
                      src={subChild.user.profile_image_90}
                      alt={subChild.user.name}
                      className='w-8 h-8 rounded-full mr-2'
                      width={32}
                      height={32}
                    />
                    <div className='flex-1'>
                      <p className='font-semibold'>
                        {subChild.user.name} (@{subChild.user.username})
                      </p>
                      <div
                        dangerouslySetInnerHTML={{ __html: subChild.body_html }}
                      />
                      <p className='text-gray-500 text-sm'>
                        {new Date(subChild.created_at).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className='max-w-6xl mx-auto py-5'>
      <div className='flex items-start space-x-3 rounded-lg shadow transition hover:shadow-lg'>
        <Image
          src={comment.user.profile_image}
          alt={comment.user.name}
          className='w-12 h-12 rounded-full'
          width={40}
          height={40}
        />
        <div className='comment-content flex-1'>
          <p className='font-semibold'>
            {comment.user.name} (@{comment.user.username})
          </p>
          <div dangerouslySetInnerHTML={{ __html: comment.body_html }} />
          <p className='text-gray-500 text-sm'>
            {new Date(comment.created_at).toLocaleString()}
          </p>
          {comment.children.length > 0 && renderChildren(comment.children)}
        </div>
      </div>
    </div>
  );
};

export default CommentsComponent;
