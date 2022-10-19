import CheckoutWizard from '../components/CheckoutWizard';
import Layout from '../components/Layout';
import PaymentPageComponent from '../components/UI/Payment/PaymentPageComponent';
import React from 'react';

const PaymentScreen = () => {
  return (
    <Layout title="Payment Method">
      <CheckoutWizard activeStep={2} />
      <PaymentPageComponent />
    </Layout>
  );
};

PaymentScreen.auth = true;

export default PaymentScreen;
