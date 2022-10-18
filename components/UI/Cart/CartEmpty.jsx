import Link from 'next/link';
import React from 'react'

const CartEmpty = () => {
  return (
    <div>
      Cart is empty. <Link href="/">Go shopping</Link>
    </div>
  );
}

export default CartEmpty