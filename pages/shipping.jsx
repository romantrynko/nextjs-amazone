import CheckoutWizard from '../components/CheckoutWizard';
import Cookies from 'js-cookie';
import Layout from '../components/Layout';
import React, { useContext, useEffect } from 'react';
import { Store } from '../utils/Store';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

const ShippingScreen = () => {
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

  return (
    <Layout title="Shipping Address">
      <CheckoutWizard activeStep={1} />
      <form
        className="mx-auto max-w-screen-md"
        onSubmit={handleSubmit(submitHandler)}>
        <h1 className="mb-4 text-xl">Shipping Address</h1>
        <div className="mb-4">
          <label htmlFor="fullName">Full Name</label>
          <input
            className="w-full"
            id="fullName"
            autoFocus
            {...register('fullName', {
              required: 'Please enter full name'
            })}
            type="text"
          />
          {errors.fullName && (
            <div className="text-red-500">{errors.fullName.message}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="address">Address</label>
          <input
            className="w-full"
            id="address"
            autoFocus
            {...register('address', {
              required: 'Please enter address',
              minLength: {
                value: 3,
                message: 'Address is more than 2 characters'
              }
            })}
            type="text"
          />
          {errors.address && (
            <div className="text-red-500">{errors.address.message}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="city">City</label>
          <input
            className="w-full"
            id="city"
            autoFocus
            {...register('city', {
              required: 'Please enter city'
            })}
            type="text"
          />
          {errors.city && (
            <div className="text-red-500">{errors.city.message}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="postalCode">Postal Code</label>
          <input
            className="w-full"
            id="postalCode"
            autoFocus
            {...register('postalCode', {
              required: 'Please enter postal code'
            })}
            type="text"
          />
          {errors.postalCode && (
            <div className="text-red-500">{errors.postalCode.message}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="country">Country</label>
          <input
            className="w-full"
            id="country"
            autoFocus
            {...register('country', {
              required: 'Please enter country',
              minLength: {
                value: 3,
                message: 'country is more than 2 characters'
              }
            })}
            type="text"
          />
          {errors.country && (
            <div className="text-red-500">{errors.country.message}</div>
          )}
        </div>

        <div className="mb-4 flex justify-between">
          <button className="primary-button">Next</button>
        </div>
      </form>
    </Layout>
  );
};

ShippingScreen.auth = true;

export default ShippingScreen;
