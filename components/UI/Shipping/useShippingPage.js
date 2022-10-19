import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Store } from '../../../utils/Store';

const useShippingPage = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
    setValue
  } = useForm();

  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const { shippingAddress } = cart;

  useEffect(() => {
    setValue('address', shippingAddress.address);
    setValue('city', shippingAddress.city);
    setValue('country', shippingAddress.country);
    setValue('fullName', shippingAddress.fullName);
    setValue('postalCode', shippingAddress.postalCode);
  }, [setValue, shippingAddress]);

  const submitHandler = ({ fullName, address, city, postalCode, country }) => {
    dispatch({
      type: 'SAVE_SHIPPING_ADDRESS',
      payload: {
        fullName,
        address,
        city,
        postalCode,
        country
      }
    });
    Cookies.set(
      'cart',
      JSON.stringify({
        ...cart,
        shippingAddress: {
          fullName,
          address,
          city,
          postalCode,
          country
        }
      })
    );

    router.push('/payment');
  };


  return { handleSubmit, submitHandler, register, errors }
}

export default useShippingPage