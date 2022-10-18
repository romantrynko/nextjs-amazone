import React from 'react';
import Layout from '../components/Layout';
import useOrderHistoryPage from '../hooks/useOrderHistoryPage';
import OrderHistoryPageComponent from '../components/UI/OrderHistory/OrderHistoryPageComponent';

const OrderHistoryScreen = () => {
  const { loading, error } = useOrderHistoryPage();

  return (
    <Layout title="Order History">
      <h1 className="text-xl">Order History</h1>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="alert-error">{error}</div>
      ) : (
       <OrderHistoryPageComponent/>
      )}
    </Layout>
  );
};

OrderHistoryScreen.auth = true;

export default OrderHistoryScreen;
