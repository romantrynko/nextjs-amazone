import Layout from '../components/Layout/Layout';
import OrderHistoryPageComponent from '../components/UI/OrderHistory/OrderHistoryPageComponent';
import React from 'react';

const OrderHistoryScreen = () => {
  return (
    <Layout title="Order History">
      <OrderHistoryPageComponent />
    </Layout>
  );
};

OrderHistoryScreen.auth = true;

export default OrderHistoryScreen;
