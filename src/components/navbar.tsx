import React from 'react';
import { useCart } from '@/context/cart-context';
import { FaShoppingBag } from 'react-icons/fa';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const { cart } = useCart();

  const itemCount = cart.reduce(
    (total, item) => total + (item.quantity || 0),
    0
  );
  return (
    <header className='bg-blue-600 '>
      <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          <div className='flex-1 md:flex md:items-center md:gap-12'>
            <Link href='/blog'>
              <h1 className='text-white hover:text-white/75 text-lg'>
                My Shop
              </h1>
            </Link>
          </div>

          <div className='md:flex md:items-center md:gap-12'>
            <nav aria-label='Global' className='hidden md:block'>
              <ul className='flex items-center gap-6 text-sm'>
                <li>
                  <Link
                    className='text-white transition hover:text-white/75 text-lg'
                    href='/blog'>
                    {' '}
                    Blog{' '}
                  </Link>
                </li>

                <li>
                  <Link
                    className='text-white transition hover:text-white/75 text-lg'
                    href='/shop'>
                    {' '}
                    Product{' '}
                  </Link>
                </li>
              </ul>
            </nav>

            <div className='flex items-center gap-4'>
              <div className='sm:flex sm:gap-4 relative'>
                <Link href='/shop/cart'>
                  <FaShoppingBag width={24} height={24} />
                  {itemCount > 0 && (
                    <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-1'>
                      {itemCount}
                    </span>
                  )}
                </Link>
              </div>

              <div className='block md:hidden'>
                <button className='rounded bg-black p-2 text-white transition hover:text-white/75'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='size-5'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth='2'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
