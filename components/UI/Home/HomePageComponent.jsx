import React from 'react';
import ProductItem from '../../ProductItem';
import styles from './styles.module.css';
import useHomePage from './useHomePage';

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
