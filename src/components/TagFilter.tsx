import React, { useState } from 'react';

interface TagFilterProps {
  tags: string[];
  onFilterChange: (selectedTag: string) => void;
}

const TagFilter: React.FC<TagFilterProps> = ({ tags, onFilterChange }) => {
  const [selectedTag, setSelectedTag] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const tag = e.target.value;
    setSelectedTag(tag);
    onFilterChange(tag);
  };

  return (
    <div className='mb-4'>
      <label htmlFor='tag-filter' className='mr-2'>
        Filter by tag:
      </label>
      <select
        id='tag-filter'
        value={selectedTag}
        onChange={handleChange}
        className='border border-gray-300 rounded px-3 py-2'>
        <option value=''>All Tags</option>
        {tags.map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TagFilter;
