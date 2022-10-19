import Layout from '../components/Layout/Layout';
import React from 'react';
import RegisterPageComponent from '../components/UI/Register/RegisterPageComponent';

const RegisterScreen = () => {
  return (
    <Layout title="Create Account">
      <RegisterPageComponent />
    </Layout>
  );
};

export default RegisterScreen;
