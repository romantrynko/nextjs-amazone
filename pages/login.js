import Link from 'next/link';
import React from 'react'
import Layout from '../components/Layout';

const LoginScreen = () => {
  return (
    <Layout title='login'>
      <form className='mx-auto max-w-screen-md'>
        <h1 className='mb-4 text-xl'>Login</h1>
        <div className='mb-4'>
          <label for="email">Email</label>
          <input type="email" id="email" className='w-full' autoFocus></input>
        </div>
        <div className='mb-4'>
          <label for="password">Password</label>
          <input type="password" id="password" className='w-full' autoFocus></input>
        </div>
        <div className='mb-4'>
          <button className="primary-button">Login</button>
        </div>
        <div className='mb-4'>
          Don&apos;t have an account? &nbsp;
          <Link href='register'>Register</Link>
        </div>
      </form>
    </Layout>
  )
}

export default LoginScreen