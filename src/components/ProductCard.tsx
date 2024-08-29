import React, { useState } from 'react';
import { Product } from '../types/shop';
import Image from 'next/image';
import { useCart } from '@/context/cart-context';

interface CardProduct {
  product: Product;
}

interface CartItem {
  product: Product;
  quantity: number;
}

const ProductCard: React.FC<CardProduct> = ({ product }) => {
  const { addToCart, removeFromCart, cart } = useCart();

  const isInCart = cart.some((item) => item.id === product.id);
  return (
    <div className='group relative block overflow-hidden shadow-lg'>
      {product.images.slice(0, 1).map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`${product.title} image ${index + 1}`}
          className='h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72'
          width={400}
          height={400}
        />
      ))}

      <div className='relative border border-gray-100 bg-white p-6'>
        <span className='whitespace-nowrap text-white bg-blue-600 px-3 py-1.5 text-xs font-medium'>
          {' '}
          New{' '}
        </span>

        <h3 className='mt-4 text-lg font-medium text-gray-900'>
          {product.title}
        </h3>

        <p className='mt-1.5 text-sm text-gray-700'>${product.price}</p>

        <div className='mt-4 flex items-center'>
          <button
            className='block w-full rounded bg-blue-600 p-4 text-sm text-white font-medium transition hover:scale-105'
            onClick={() => addToCart(product)}
            disabled={isInCart}>
            {isInCart ? 'Added' : 'Add to Cart'}
          </button>
          {isInCart && (
            <button
              className='block w-full rounded bg-red-600 p-4 text-sm text-white font-medium transition hover:scale-105 ml-2'
              onClick={() => removeFromCart(product.id)}>
              Remove from Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
