import React, { useState, useEffect } from 'react';
import { useCart } from '@/context/cart-context';
import axios from 'axios';
import useSWR from 'swr';
import { Product, Data } from '@/types/shop';
import ProductCard from '@/components/ProductCard';
import useDebounce from '@/hooks/useDebounce';

const fetcher = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

const ProductList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { debounce } = useDebounce();

  const { data, error } = useSWR<Data>(
    `https://dummyjson.com/products/search?q=${searchQuery}`,
    fetcher
  );
  console.log(data);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    debounce(() => setSearchQuery(value), 500)();
  };

  if (!data) return <div>Loading...</div>;

  return (
    <div className='max-w-6xl mx-auto mt-6'>
      <div className='flex justify-center items-center'>
        <h1 className='text-3xl font-bold text-black'>Product List</h1>
      </div>
      <div className='flex justify-center items-center'>
        <input
          type='text'
          id='Search'
          placeholder='Search Product'
          className='w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm'
          onChange={handleSearch}
        />
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3'>
        {data?.products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
