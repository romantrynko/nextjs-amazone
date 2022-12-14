import React from 'react';
import Button from '../Button';
import useShippingPage from './useShippingPage';

const ShippingPageComponent = () => {
  const { handleSubmit, submitHandler, register, errors } = useShippingPage();

  return (
    <form
      className="mx-auto max-w-screen-md"
      onSubmit={handleSubmit(submitHandler)}>
      <h1 className="mb-4 text-xl mf">Shipping Address</h1>
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
        <Button type='submit'>Next</Button>
      </div>
    </form>
  );
};

export default ShippingPageComponent;
