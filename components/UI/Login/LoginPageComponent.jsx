import Link from 'next/link';
import React from 'react'
import useLoginPage from './useLoginPage';
import Button from '../Button';

const regEx = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i

const LoginPageComponent = () => {
   const { handleSubmit, register, submitHandler, errors, redirect } =
     useLoginPage();

  return (
    <form
      className="mx-auto max-w-screen-md"
      onSubmit={handleSubmit(submitHandler)}>
      <h1 className="mb-4 text-xl">Login</h1>
      <div className="mb-4">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          {...register('email', {
            required: 'Please enter email',
            pattern: {
              value: regEx,
              message: 'Please enter valid email'
            }
          })}
          id="email"
          className="w-full"
          autoFocus></input>
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
          className="w-full"
          autoFocus></input>
        {errors.password && (
          <div className="text-red-500">{errors.password.message}</div>
        )}
      </div>
      <div className="mb-4">
        <Button className="primary-button">Login</Button>
      </div>
      <div className="mb-4">
        Don&apos;t have an account? &nbsp;
        <Link href={`/register?redirect=${redirect || '/'}`}>Register</Link>
      </div>
    </form>
  );
}

export default LoginPageComponent