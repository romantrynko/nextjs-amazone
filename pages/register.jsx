import Layout from '../components/Layout';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { getError } from '../utils/error';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

const RegisterScreen = () => {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm();
  const { data: session } = useSession();
  const router = useRouter();

  const { redirect } = router.query;

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || '/');
    }
  }, [redirect, router, session]);

  const submitHandler = async ({ email, password }) => {
    try {
      const result = await signIn('credentials', {
        redirect: 'false',
        email,
        password
      });
      if (result.error) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(getError.error);
    }
  };

  return (
    <Layout title="login">
      <form
        className="mx-auto max-w-screen-md"
        onSubmit={handleSubmit(submitHandler)}>
        <h1 className="mb-4 text-xl">Login</h1>

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
          <label htmlFor="confirmPassword">confirmPassword</label>
          <input
            {...register('confirmPassword', {
              required: 'Please confirm password',
              minLength: {
                value: 3,
                message: 'cassword is less than 3 characters'
              }
            })}
            type="confirmPassword"
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
          <Link href="register">Register</Link>
        </div>
      </form>
    </Layout>
  );
};

export default RegisterScreen;
