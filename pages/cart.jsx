import Layout from '../components/Layout/Layout';
import React from 'react';
import dynamic from 'next/dynamic';
import CartPageComponent from '../components/UI/Cart/CartPageComponent';
import CartEmpty from '../components/UI/Cart/CartEmpty';
import useCartPage from '../components/UI/Cart/useCartPage';

const CartScreen = () => {
  const { cartItems } = useCartPage();

  return (
    <Layout title="Shopping Cart">
      <h1 className="mb-4 text-xl mf">Shopping Cart</h1>
      {cartItems.length === 0 ? <CartEmpty /> : <CartPageComponent />}
    </Layout>
  );
};

export default dynamic(() => Promise.resolve(CartScreen), { ssr: false });
