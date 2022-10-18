import Layout from '../components/Layout';
import Product from '../models/Product';
import ProductItem from '../components/ProductItem';
import db from '../utils/db';
import useHomePage from '../hooks/useHomePage';

export default function Home({ products }) {
  const { addToCartHandler } = useHomePage();

  return (
    <Layout title={'Home Page'}>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductItem
            product={product}
            key={product.slug}
            addToCartHandler={addToCartHandler}></ProductItem>
        ))}
      </div>
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
