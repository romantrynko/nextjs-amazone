import OrderItemsComponent from './OrderItemsComponent';
import OrderPaymentMethod from './OrderPaymentMethod';
import OrderShippingAddress from './OrderShippingAddress';
import OrderSummary from './OrderSummary';
import React from 'react';
import useOrderPage from './useOrderPage';

const OrderPageComponent = () => {
  const { orderId, order, loading, error } = useOrderPage();

  const {
    deliveredAt,
    isDelivered,
    isPaid,
    paidAt,
    paymentMethod,
    shippingAddress,
  } = order;

  return (
    <>
      <h1 className="mb-4 text-xl mf">{`Order #${orderId}`}</h1>
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
          <OrderSummary />
        </div>
      )}
    </>
  );
};

export default OrderPageComponent;
