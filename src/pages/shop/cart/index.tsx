import React from 'react';
import { useCart } from '@/context/cart-context';
import Image from 'next/image';
import { FaTrashAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { FaPlus } from 'react-icons/fa6';
import { FaMinus } from 'react-icons/fa6';
const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const handleIncreaseQuantity = (id: number) => {
    const item = cart.find((item) => item.id === id);
    if (item) {
      updateQuantity(id, 1); // Increase by 1
    }
  };

  const handleDecreaseQuantity = (id: number) => {
    const item = cart.find((item) => item.id === id);
    if (item && item.quantity > 1) {
      updateQuantity(id, -1); // Decrease by 1
    }
  };

  return (
    <section>
      <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
        <div className='mx-auto max-w-3xl'>
          <header className='text-center'>
            <h1 className='text-xl font-bold text-gray-900 sm:text-3xl'>
              Your Cart
            </h1>
          </header>

          <div className='mt-8'>
            <ul className='space-y-4'>
              {cart.map((item) => (
                <li key={item.id} className='flex items-center gap-4'>
                  <Image
                    src={item.images[0]}
                    alt={item.title}
                    className='size-16 rounded object-cover'
                    width={64}
                    height={64}
                  />

                  <div>
                    <h1 className='text-md font-bold text-gray-900'>
                      {item.title}
                    </h1>
                    <div className='flex flex-row justify-normal gap-3'>
                      <h2 className='text-md text-gray-900'>Price</h2>
                      <h2 className='text-md text-gray-900'>${item.price}</h2>
                    </div>
                  </div>

                  <div className='flex flex-1 items-center justify-end gap-2'>
                    <button
                      onClick={() => handleDecreaseQuantity(item.id)}
                      className='flex items-center justify-center h-8 w-8 rounded border border-gray-300 bg-gray-50 text-gray-600 transition hover:bg-gray-100'
                      aria-label='Decrease quantity'>
                      <FaMinus size={16} />
                    </button>

                    <span className='text-xs text-gray-600'>
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => handleIncreaseQuantity(item.id)}
                      className='flex items-center justify-center h-8 w-8 rounded border border-gray-300 bg-gray-50 text-gray-600 transition hover:bg-gray-100'
                      aria-label='Increase quantity'>
                      <FaPlus size={16} />
                    </button>

                    <button
                      onClick={() => {
                        removeFromCart(item.id);
                        toast('Item removed from cart.');
                      }}
                      className='text-gray-600 transition hover:text-red-600'>
                      <span className='sr-only'>Remove item</span>
                      <FaTrashAlt />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
