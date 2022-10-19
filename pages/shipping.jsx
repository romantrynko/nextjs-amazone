import CheckoutWizard from '../components/CheckoutWizard';
import Layout from '../components/Layout';
import React from 'react';
import ShippingPageComponent from '../components/UI/Shipping/ShippingPageComponent';

const ShippingScreen = () => {
  return (
    <Layout title="Shipping Address">
      <CheckoutWizard activeStep={1} />
      <ShippingPageComponent/>
    </Layout>
  );
};

ShippingScreen.auth = true;

export default ShippingScreen;
