/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import Button from './UI/Button';

const ProductItem = ({ product, addToCartHandler }) => {
  const btnProps = {
    onClick: () => addToCartHandler(product),
    name: 'Add to Cart'
  };

  return (
    <div className="card">
      <Link href={`/product/${product.slug}`}>
        <a>
          <img
            src={product.image}
            alt={product.name}
            className="rounded shadow"
          />
        </a>
      </Link>

      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.slug}`}>
          <a>
            <h2 className="text-lg">{product.name}</h2>
          </a>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <p>${product.price}</p>
        <Button {...btnProps}/>
      </div>
    </div>
  );
};

export default ProductItem;
