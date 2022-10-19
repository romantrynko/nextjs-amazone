import { PayPalButtons } from '@paypal/react-paypal-js';
import React from 'react';
import useOrderPage from './useOrderPage';
import styles from './styles.module.css';

const OrderSummary = () => {
  const {
    order,
    isPending,
    loadingPay,
    createOrder,
    onApprove,
    onError
  } = useOrderPage();

  const { itemsPrice, taxPrice, shippingPrice, totalPrice, isPaid } = order;
  return (
    <div>
      <div className="card p-5">
        <h2 className="mb-2 text-lg">Order Summary</h2>
        <ul>
          <li>
            <div className={styles.jb}>
              <div>Items</div>
              <div>${itemsPrice}</div>
            </div>
          </li>
          <li>
            <div className={styles.jb}>
              <div>Tax</div>
              <div>${taxPrice}</div>
            </div>
          </li>
          <li>
            <div className={styles.jb}>
              <div>Shipping</div>
              <div>${shippingPrice}</div>
            </div>
          </li>
          <li>
            <div className={styles.jb}>
              <div>Total</div>
              <div>${totalPrice}</div>
            </div>
          </li>
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
