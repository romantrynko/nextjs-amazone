import React from 'react';
import CheckoutWizard from '../components/CheckoutWizard';
import Layout from '../components/Layout/Layout';
import PlaceOrderPageComponent from '../components/UI/PlaceOrder/PlaceOrderPageComponent';

const PlaceOrderScreen = () => {
  return (
    <Layout title="Place Order">
      <CheckoutWizard activeStep={3} />
      <PlaceOrderPageComponent />
    </Layout>
  );
};

PlaceOrderScreen.auth = true;

export default PlaceOrderScreen;
