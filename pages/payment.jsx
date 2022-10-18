import CheckoutWizard from '../components/CheckoutWizard';
import Layout from '../components/Layout';
import React from 'react';
import usePaymentPage from '../hooks/usePaymentPage';

const PaymentScreen = () => {
const {
  submitHandler,
  selectedPaymentMethod,
  setSelectedPaymentMethod,
  router
} = usePaymentPage();

  return (
    <Layout title="Payment Method">
      <CheckoutWizard activeStep={2} />
      <form
        className="mx-auto"
        onSubmit={submitHandler}>
        <h1 className="mb-4 text-xl">Payment Method</h1>
        {['PayPal', 'Stripe', 'CashOnDelivery'].map((payment) => (
          <div
            key={payment}
            className="mb-4">
            <input
              name="paymentMethod"
              className="p-2 outline-none focus:ring-0"
              id={payment}
              type="radio"
              checked={selectedPaymentMethod === payment}
              onChange={() => setSelectedPaymentMethod(payment)}
            />
            <label
              className="p-2"
              htmlFor={payment}>
              {payment}
            </label>
          </div>
        ))}
        <div className="mb-4 flex justify-between">
          <button
            onClick={() => router.push('/shipping')}
            type="button"
            className="default-button">
            Back
          </button>
          <button className="primary-button">Next</button>
        </div>
      </form>
    </Layout>
  );
};

PaymentScreen.auth = true; 

export default PaymentScreen;
