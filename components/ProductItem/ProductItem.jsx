/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import Button from '../UI/Button';
import styles from './styles.module.css';

const ProductItem = ({ product, addToCartHandler }) => {
  return (
    <div className="card border-none">
      <Link href={`/product/${product.slug}`}>
        <a>
          <img
            src={product.image}
            alt={product.name}
            className="rounded-lg"
          />
        </a>
      </Link>

      <div className={styles.wrapper}>
        <Link href={`/product/${product.slug}`}>
          <a>
            <h2 className="text-lg mf">{product.name}</h2>
          </a>
        </Link>
        <p className="mb-2 text-2xl sf">{product.brand}</p>
        <p className="sf">${product.price}</p>
        <Button onClick={() => addToCartHandler(product)}>Add to Cart</Button>
      </div>
    </div>
  );
};

export default ProductItem;
