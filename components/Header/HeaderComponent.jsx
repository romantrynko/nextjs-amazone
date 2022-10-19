import { Menu } from '@headlessui/react';
import Link from 'next/link';
import React from 'react';
import DropdownLink from '../DropdownLink';
import styles from './styles.module.css';

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
          <a className={styles.headerTitle}>Oni-Noi</a>
        </Link>
        <div>
          <Link href="/cart">
            <a className="p-2">
              Cart
              {cartItemsCount > 0 && (
                <span className={styles.headerCartLabel}>{cartItemsCount}</span>
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
              <Menu.Items className={styles.headerMenu}>
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
  );
};

export default HeaderComponent;
