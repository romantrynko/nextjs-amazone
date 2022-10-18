import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { Store } from '../utils/Store';
import usePrice from '../utils/usePrice';
import axios from 'axios';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { getError } from '../utils/error';

const usePlaceOrderPage = () => {
  const { state, dispatch } = useContext(Store);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const { cart } = state;
  const {
    cart: { cartItems, shippingAddress, paymentMethod }
  } = state;

  const { itemsPrice, shippingPrice, taxPrice, totalPrice } =
    usePrice(cartItems);

  useEffect(() => {
    if (!paymentMethod) {
      router.push('/payment');
    }
  }, [paymentMethod, router]);

  const placeOrderHandler = async () => {
    try {
      setLoading(true);

      const { data } = await axios.post('/api/orders', {
        itemsPrice,
        orderItems: cartItems,
        paymentMethod,
        shippingAddress,
        shippingPrice,
        taxPrice,
        totalPrice
      });

      setLoading(false);

      dispatch({ type: 'CART_CLEAR_ITEMS' });

      Cookies.set(
        'cart',
        JSON.stringify({
          ...cart,
          cartItems: []
        })
      );

      router.push(`/order/${data._id}`);
    } catch (error) {
      setLoading(false);
      toast.error(getError(error));
    }
  };

  return {
    cartItems,
    itemsPrice,
    loading,
    paymentMethod,
    placeOrderHandler,
    shippingAddress,
    shippingPrice,
    taxPrice,
    totalPrice,
  }
}

export default usePlaceOrderPage