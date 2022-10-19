import React from 'react';
import Layout from '../components/Layout/Layout';
import UnauthorizedPageComponent from '../components/UI/UnauthorizedPageComponent';

const Unathorized = () => {
  return (
    <Layout title="Unauthorized Page">
      <UnauthorizedPageComponent />
    </Layout>
  );
};

export default Unathorized;
