import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import useOrderPage from './useOrderPage';
import styles from './styles.module.css';

const tableHeadItems = ['Quantity', 'Price', 'Subtotal'];

const OrderItemsComponent = () => {
  const {
    order: { orderItems }
  } = useOrderPage();

  return (
    <div className="card overflow-x-auto p-5">
      <h2 className="mb-2 text-lg">Order Items</h2>
      <table className="min-w-full">
        <thead className="border-b">
          <tr>
            <th className="px-5 text-left">Item</th>
            {tableHeadItems.map((item, index) => (
              <th
                key={index}
                className={styles.textRight}>
                {item}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {orderItems?.map((item) => (
            <tr
              key={item._id}
              className="border-b">
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
              <td className={styles.textRight}>{item.quantity}</td>
              <td className={styles.textRight}>{item.price}</td>
              <td className={styles.textRight}>${item.quantity * item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderItemsComponent;
