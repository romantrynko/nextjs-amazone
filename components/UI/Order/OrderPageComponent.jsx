import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useOrderPage from './useOrderPage';
import OrderSummary from './OrderSummary';
import OrderShippingAddress from './OrderShippingAddress';
import OrderPaymentMethod from './OrderPaymentMethod';
import OrderItemsComponent from './OrderItemsComponent';

const OrderPageComponent = () => {
  const { orderId, order, loading, error } = useOrderPage();

  const {
    shippingAddress,
    paymentMethod,
    orderItems,
    isPaid,
    paidAt,
    isDelivered,
    deliveredAt
  } = order;

  return (
    <>
      <h1 className="mb-4 text-xl">{`Order #${orderId}`}</h1>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="alert-error">{error}</div>
      ) : (
        <div className="grid md:grid-cols-4 md:gap-5">
          <div className="overflow-x-auto md:col-span-3">
            <OrderShippingAddress
              shippingAddress={shippingAddress}
              isDelivered={isDelivered}
              deliveredAt={deliveredAt}
            />

            <OrderPaymentMethod
              paymentMethod={paymentMethod}
              isPaid={isPaid}
              paidAt={paidAt}
            />

            <OrderItemsComponent />
          </div>
              <OrderSummary  />
        </div>
      )}
    </>
  );
};

export default OrderPageComponent;
