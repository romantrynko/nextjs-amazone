import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

function Auth({ children }) {
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/unauthorized?message=Login required');
    }
  });

  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  return children;
}

export default Auth