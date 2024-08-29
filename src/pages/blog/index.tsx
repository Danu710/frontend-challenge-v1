import React, { useState } from 'react';
import axios from 'axios';
import useSWR from 'swr';
import { Data } from '@/types/blog';
import TagFilter from '@/components/TagFilter';
import CardBlog from '@/components/CardBlog';

const fetcher = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

const BlogList: React.FC = () => {
  const { data, error } = useSWR<Data[]>(
    'https://dev.to/api/articles?limit=6',
    fetcher
  );
  const [filteredTag, setFilteredTag] = useState<string>('');

  if (error) return <div>Error loading blogs</div>;
  if (!data) return <div>Loading...</div>;

  const allTags = Array.from(new Set(data.flatMap((blog) => blog.tag_list)));

  const filteredData = filteredTag
    ? data.filter((blog) => blog.tag_list.includes(filteredTag))
    : data;
  return (
    <div className='max-w-6xl mx-auto mt-6'>
      <TagFilter tags={allTags} onFilterChange={setFilteredTag} />
      <div className='grid grid-cols-3 gap-3'>
        {filteredData.map((blog) => (
          <CardBlog key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
