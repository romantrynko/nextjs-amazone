import { PayPalButtons } from '@paypal/react-paypal-js';
import React from 'react';
import useOrderPage from './useOrderPage';
import styles from './styles.module.css';

const OrderSummary = () => {
  const { order, isPending, loadingPay, createOrder, onApprove, onError } =
    useOrderPage();

  const { itemsPrice, taxPrice, shippingPrice, totalPrice, isPaid } = order;
  const shippingDetails = [
    { value: itemsPrice, name: 'Items' },
    { value: taxPrice, name: 'Tax' },
    { value: shippingPrice, name: 'Shipping' },
    { value: totalPrice, name: 'Total' }
  ];
  
  return (
    <div>
      <div className="card p-5 min-w-min sf">
        <h2 className="mb-2 text-lg">Order Summary</h2>
        <ul>
          {shippingDetails.map((item, index) => (
            <li key={index}>
              <div className={styles.jb}>
                <div>{item.name}</div>
                <div>${item.value}</div>
              </div>
            </li>
          ))}

          {!isPaid && (
            <li>
              {isPending ? (
                <div>Loading...</div>
              ) : (
                <div className="w-full">
                  <PayPalButtons
                    createOrder={createOrder}
                    onApprove={onApprove}
                    onError={onError}></PayPalButtons>
                </div>
              )}
              {loadingPay && <div>Loading...</div>}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default OrderSummary;
