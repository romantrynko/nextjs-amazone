import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';
import Link from 'next/link';
import React, { useContext, useState, useEffect } from 'react';
import { Store } from '../utils/Store';
import { ToastContainer } from 'react-toastify';
import { useSession } from 'next-auth/react';
import DropdownLink from './DropdownLink';
import { Menu } from '@headlessui/react';

function Layout({ title, children }) {
  const { status, data: session } = useSession();

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

  const logoutClickHandler = () => {
    
  }

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

      <ToastContainer
        position="bottom-center"
        limit={3}
      />

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

              {status === 'loading' ? (
                'Loading'
              ) : session?.user ? (
                <Menu
                  as="div"
                  className="relative inline-block">
                  <Menu.Button className="text-blue-600">
                    {session.user.name}
                  </Menu.Button>
                  <Menu.Items className="absolute right-0 w-56 origin-top-right bg-white shadow-lg">
                    <Menu.Item>
                      <DropdownLink
                        className="dropdown-link"
                        href="/profile">
                        Profile
                      </DropdownLink>
                    </Menu.Item>
                    <Menu.Item>
                      <DropdownLink
                        className="dropdown-link"
                        href="/order-history">
                        Order History
                      </DropdownLink>
                    </Menu.Item>
                    <Menu.Item>
                      <DropdownLink
                        className="dropdown-link"
                        href="#"
                        onClick={logoutClickHandler}>
                        Logout
                      </DropdownLink>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              ) : (
                <Link href="/login">
                  <a className="p-2">Login</a>
                </Link>
              )}
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
