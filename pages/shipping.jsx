import React from 'react';
import Layout from '../components/Layout';
import CheckoutWizard from '../components/CheckoutWizard';

const ShippingScreen = () => {
  return (
    <Layout title="Shipping Address">
      <CheckoutWizard activeStep={1} />
    </Layout>
  );
};

export default ShippingScreen;
