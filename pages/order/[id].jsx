import Layout from '../../components/Layout';
import OrderPageComponent from '../../components/UI/Order/OrderPageComponent';

function OrderScreen() {
  return (
    <Layout title="Your order">
      <OrderPageComponent />
    </Layout>
  );
}

OrderScreen.auth = true;

export default OrderScreen;
