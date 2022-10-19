import React from 'react'

const OrderPaymentMethod = ({ paymentMethod, isPaid, paidAt }) => {
  return (
    <div className="card p-5 sf">
      <h2 className="mb-2 text-lg">Payment Method</h2>
      {paymentMethod}
      {isPaid ? (
        <div className="alert-success">Paid at {paidAt}</div>
      ) : (
        <div className="alert-error">Not paid</div>
      )}
    </div>
  );
};

export default OrderPaymentMethod