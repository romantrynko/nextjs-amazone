import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const UnauthorizedPageComponent = () => {
  const router = useRouter();
  const { message } = router.query;
  return (
    <>
      <h1 className="text-xl">Access Denied</h1>
      {message && (
        <div className="mb-4 text-red-500">
          {message}.{' '}
          <Link href="/login">
            <a>Login</a>
          </Link>
        </div>
      )}
    </>
  );
};

export default UnauthorizedPageComponent;
