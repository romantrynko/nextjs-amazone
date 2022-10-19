import 'react-toastify/dist/ReactToastify.css';
import FooterComponent from '../Footer/FooterComponent';
import Head from 'next/head';
import HeaderComponent from '../Header/HeaderComponent';
import React from 'react';
import styles from './styles.module.css'
import useLayout from './useLayout';
import { ToastContainer } from 'react-toastify';

function Layout({ title, children }) {
  const { status, session, cartItemsCount, logoutClickHandler } = useLayout();

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

      <ToastContainer position="top-center" />

      <div className={styles.layout}>
        <HeaderComponent
          cartItemsCount={cartItemsCount}
          session={session}
          status={status}
          logoutClickHandler={logoutClickHandler}
        />

        <main className={styles.main}>{children}</main>

        <FooterComponent />
      </div>
    </>
  );
}

export default Layout;
