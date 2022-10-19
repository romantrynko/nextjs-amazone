import axios from 'axios';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { Store } from '../../../utils/Store';

const useCartPage = () => {
  const { state, dispatch } = useContext(Store);
  const router = useRouter();

  const {
    cart: { cartItems }
  } = state;

  const subtotal = cartItems.reduce((a, c) => a + c.quantity, 0);
  const quantity = cartItems.reduce((a, c) => a + c.quantity * c.price, 0);

  const removeItemHandler = (item) => {
    dispatch({ type: 'CART_REMOVE_ITEM', payload: item });

    toast.success(`${item.name} removed from cart`);
  };

  const updateCartHandler = async (item, qty) => {
    const quantity = Number(qty);

    const { data } = await axios.get(`/api/products/${item._id}`);

    if (data.countInStock < quantity) {
      return toast.error('Sorry. Product is out of stock');
    }

    dispatch({ type: 'CART_ADD_ITEM', payload: { ...item, quantity } });

    toast.success(`You have slected ${quantity} ${item.name} `);
  };

  return {
    cartItems,
    updateCartHandler,
    removeItemHandler,
    subtotal,
    quantity,
    router
  }
}

export default useCartPage