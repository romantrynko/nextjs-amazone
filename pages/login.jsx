import Layout from '../components/Layout/Layout';
import React from 'react';
import LoginPageComponent from '../components/UI/Login/LoginPageComponent';

const LoginScreen = () => {
  return (
    <Layout title="login">
      <LoginPageComponent/>
    </Layout>
  );
};

export default LoginScreen;
