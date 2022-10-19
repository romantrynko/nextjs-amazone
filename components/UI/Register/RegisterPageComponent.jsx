import React from 'react';
import Link from 'next/link';
import useRegisterPage from './useRegisterPage';

const RegisterPageComponent = () => {
  const { handleSubmit, submitHandler, register, errors, getValues, redirect } =
    useRegisterPage();

  return (
    <form
      className="mx-auto max-w-screen-md"
      onSubmit={handleSubmit(submitHandler)}>
      <h1 className="mb-4 text-xl">Create Account</h1>

      <div className="mb-4">
        <label htmlFor="email">Name</label>
        <input
          type="text"
          {...register('name', {
            required: 'Please enter Name'
          })}
          id="email"
          className="w-full"
          autoFocus></input>
        {errors.name && (
          <div className="text-red-500">{errors.name.message}</div>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          {...register('email', {
            required: 'Please enter email',
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
              message: 'Please enter valid email'
            }
          })}
          id="email"
          className="w-full"></input>
        {errors.email && (
          <div className="text-red-500">{errors.email.message}</div>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="password">Password</label>
        <input
          {...register('password', {
            required: 'Please enter password',
            minLength: {
              value: 3,
              message: 'Password is less than 3 characters'
            }
          })}
          type="password"
          id="password"
          className="w-full"></input>
        {errors.password && (
          <div className="text-red-500">{errors.password.message}</div>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          {...register('confirmPassword', {
            required: 'Please confirm password',
            validate: (value) => value === getValues('password'),
            minLength: {
              value: 3,
              message: 'confirm password is less than 3 characters'
            }
          })}
          type="password"
          id="confirmPassword"
          className="w-full"
        />

        {errors.confirmPassword && (
          <div className="text-red-500">{errors.confirmPassword.message}</div>
        )}

        {errors.confirmPassword &&
          errors.confirmPassword.type === 'validate' && (
            <div className="text-red-500">Password does not match!</div>
          )}
      </div>

      <div className="mb-4">
        <button className="primary-button">Register</button>
      </div>

      <div className="mb-4">
        Don&apos;t have an account? &nbsp;
        <Link href={`/register?redirect=${redirect || '/'}`}>Register</Link>
      </div>
    </form>
  );
};

export default RegisterPageComponent;
