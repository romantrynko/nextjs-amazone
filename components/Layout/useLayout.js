import Cookies from 'js-cookie';
import { signOut, useSession } from 'next-auth/react';
import { useContext, useEffect, useState } from 'react';
import { Store } from '../../utils/Store';

const useLayout = () => {
  const { status, data: session } = useSession();

  const { state, dispatch } = useContext(Store);
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
    Cookies.remove('cart');
    dispatch({ type: 'CART_RESET' });
    signOut({ callbackUrl: '/login' });
  };
  return {
    status, session, cartItemsCount, logoutClickHandler
  }
}

export default useLayout