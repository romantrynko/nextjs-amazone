import React from 'react';
import styles from './styles.module.css';
import useHomePage from './useHomePage';
import ProductItem from '../../ProductItem/ProductItem';

const HomePageComponent = ({ products }) => {
  const { addToCartHandler } = useHomePage();

  return (
    <div className={styles.homePage}>
      {products.map((product) => (
        <ProductItem
          product={product}
          key={product.slug}
          addToCartHandler={addToCartHandler}></ProductItem>
      ))}
    </div>
  );
};

export default HomePageComponent;
