import Layout from '../components/Layout/Layout';
import ProfilePageComponent from '../components/UI/Profile/ProfilePageComponent';
import React from 'react';

export default function ProfileScreen() {
  return (
    <Layout title="Profile">
      <ProfilePageComponent />
    </Layout>
  );
}

ProfileScreen.auth = true;
