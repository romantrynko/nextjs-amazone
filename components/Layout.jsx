import Head from 'next/head';
import Link from 'next/link';
import React, { useContext, useState, useEffect } from 'react';
import { Store } from '../utils/Store';

function Layout({ title, children }) {
  const { state } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);

  useEffect(() => {
    const itemsCount = cart.cartItems.reduce(
      (acc, curr) => acc + curr.quantity,
      0
    );
    setCartItemsCount(itemsCount);
  }, [cart.cartItems]);

  return (
    <>
      <Head>
        <title>{title ? `${title} - Oni-Noi` : 'Oni-Noi'}</title>
        <meta
          name="description"
          content="Ecommerce Website"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow-md">
            <Link href="/">
              <a className="text-lg font-bold">Oni-Noi</a>
            </Link>
            <div>
              <Link href="/cart">
                <a className="p-2">
                  Cart
                  {cartItemsCount > 0 && (
                    <span className="ml-1 rounded-full bg-red-600 text-xs px-2 py-1 font-bold text-white">
                      {cartItemsCount}
                    </span>
                  )}
                </a>
              </Link>
              <Link href="/login">
                <a className="p-2">Login</a>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
          <p>Copyright ⓒ 2022 Oni-Noi</p>
        </footer>
      </div>
    </>
  );
}

export default Layout;
