import Layout from '../components/Layout';
import Product from '../models/Product';
import db from '../utils/db';
import HomePageComponent from '../components/UI/Home/HomePageComponent';

export default function Home({ products }) {
  return (
    <Layout title="Home Page">
      <HomePageComponent products={products} />
    </Layout>
  );
}

export const getServerSideProps = async () => {
  await db.connect();
  const products = await Product.find().lean();
  return {
    props: {
      products: products.map(db.convertDocToObj)
    }
  };
};
