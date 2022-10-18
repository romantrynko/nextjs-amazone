import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import { getError } from '../utils/error';

const useRegisterPage = () => {
  const {
    handleSubmit,
    register,
    getValues,
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

  const submitHandler = async ({ name, email, password }) => {
    try {
      await axios.post('/api/auth/signup', {
        name,
        email,
        password
      });

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

  return { handleSubmit, submitHandler, register, errors, getValues, redirect }
}

export default useRegisterPage