import Link from 'next/link';
import React from 'react';
import styles from './styles.module.css';
import HeaderMenuComponent from './HeaderMenuComponent';

const HeaderComponent = ({
  cartItemsCount,
  session,
  logoutClickHandler,
  status
}) => {
  return (
    <header className={styles.container}>
      <nav className={styles.headerNav}>
        <Link href="/">
          <a className={`${styles.headerTitle} mf`}>Oni-Noi</a>
        </Link>
        <div>
          <Link href="/cart">
            <a className="p-2 mf hover:text-white">
              Cart
              {cartItemsCount > 0 && (
                <span className={styles.headerCartLabel}>{cartItemsCount}</span>
              )}
            </a>
          </Link>

          {status === 'loading' ? (
            'Loading'
          ) : session?.user ? (
            <HeaderMenuComponent {...{ session, logoutClickHandler }} />
          ) : (
            <Link href="/login">
              <a className="p-2">Login</a>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;
