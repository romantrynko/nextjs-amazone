import Layout from '../../components/Layout/Layout';
import Product from '../../models/Product';
import ProductPageComponent from '../../components/UI/Product/ProductPageComponent';
import db from '../../utils/db';
import useProductPage from '../../components/UI/Product/useProductPage';


export default function ProductScreen(props) {
  const { product } = useProductPage(props);

  if (!product) {
    return <Layout title="Product Not Found">Product Not Found</Layout>;
  }

  return (
    <Layout title={product.name}>
      <ProductPageComponent {...props} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;

  await db.connect();
  const product = await Product.findOne({ slug }).lean();
  await db.disconnect();
  return {
    props: {
      product: product ? db.convertDocToObj(product) : null
    }
  };
}
