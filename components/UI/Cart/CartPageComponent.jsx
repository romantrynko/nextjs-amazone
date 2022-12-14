import { XCircleIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Button from '../Button';
import useCartPage from './useCartPage';

const CartPageComponent = () => {
   const {
     cartItems,
     updateCartHandler,
     removeItemHandler,
     subtotal,
     quantity,
     router
   } = useCartPage();
  
  return (
    <div className="grid md:grid-col-4 md:gap-5">
      <div className="overflow-x-auto md:col-span-3">
        <table className="min-w-full">
          <thead className="border-b mf">
            <tr>
              <th className="px-5 text-left">Item</th>
              <th className="p-5 text-right">Quantity</th>
              <th className="p-5 text-right">Price</th>
              <th className="p-5">Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr
                key={item.slug}
                className="border-b sf">
                <td>
                  <Link href={`/product/${item.slug}`}>
                    <a className="flex items-center">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={50}
                        height={50}></Image>
                      &nbsp;
                      {item.name}
                    </a>
                  </Link>
                </td>
                <td className="p-5 text-right">
                  <select className='bg-gray-800 border-none'
                    value={item.quantity}
                    onChange={(e) => updateCartHandler(item, e.target.value)}>
                    {[...Array(item.countInStock).keys()].map((num) => (
                      <option
                        key={num + 1}
                        value={num + 1}>
                        {num + 1}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="p-5 text-right">${item.price}</td>
                <td className="p-5 text-center">
                  <Button className='bg-white' onClick={() => removeItemHandler(item)}>
                    <XCircleIcon className="h-5 w-5 mf bg-gray-800"></XCircleIcon>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="card p-5 sticky bottom-1 bg-gray-800 bg-opacity-90">
        <ul>
          <li>
            <div className="pb-3 text-xl mf">
              Subtotal ( {subtotal} ): ${quantity}
            </div>
          </li>
          <li>
            <Button
              onClick={() => router.push('login?redirect=/shipping')}
              className="primary-button w-full">
              Check Out
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CartPageComponent