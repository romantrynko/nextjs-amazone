import { Menu } from '@headlessui/react';
import React from 'react'
import styles from './styles.module.css';
import DropdownLink from '../DropdownLink';

const HeaderMenuComponent = ({ session, logoutClickHandler }) => {
  return (
    <Menu
      as="div"
      className="relative inline-block ">
      <Menu.Button className="sf ">{session.user.name}</Menu.Button>
      <Menu.Items className={styles.headerMenu}>
        <Menu.Item>
          <DropdownLink
            className={styles.menuLink}
            href="/profile">
            Profile
          </DropdownLink>
        </Menu.Item>
        <Menu.Item>
          <DropdownLink
            className={styles.menuLink}
            href="/order-history">
            Order History
          </DropdownLink>
        </Menu.Item>
        <Menu.Item>
          <DropdownLink
            className={styles.menuLink}
            href="#"
            onClick={logoutClickHandler}>
            Logout
          </DropdownLink>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};

export default HeaderMenuComponent