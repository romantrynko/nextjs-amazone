import React from 'react'

const OrderShippingAddress = ({
  shippingAddress,
  isDelivered,
  deliveredAt
}) => {
  return (
    <div className="card p-5 sf">
      <h2 className="mb-2 text-lg">Shipping Address</h2>
      <div className="mb-2">
        {shippingAddress?.fullName}, {shippingAddress?.address},{' '}
        {shippingAddress?.city}, {shippingAddress?.postalCode},{' '}
        {shippingAddress?.country}
      </div>
      {isDelivered ? (
        <div className="alert-success">Delivered at {deliveredAt}</div>
      ) : (
        <div className="alert-error">Not delivered</div>
      )}
    </div>
  );
};

export default OrderShippingAddress