import { useRouter } from 'next/router';
import { useEffect, useReducer } from 'react';
import Layout from '../../components/Layout';
import axios from 'axios';
import { getError } from '../../utils/error';

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, order: action.payload, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

function OrderScreen() {
  const { query } = useRouter();
  const orderId = query.id;

  const [
    { loading, error, order, successPay, loadingDeliver, successDeliver },
    dispatch
  ] = useReducer(reducer, {
    loading: true,
    order: {},
    error: ''
  });

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/api/orders/${orderId}`);
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (error) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(error) });
      }
    };

    if (!order._id || (order._id && order._id !== orderId)) {
      fetchOrder();
    }
  }, [order, orderId]);

  return (
    <Layout title='Your order'>
      <h1 className="mb-4 text-xl">{`Order #${orderId}`}</h1>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="alert-error"> </div>
      ) : (
        <div className="grid md:grid-cols-4 md:gap-5"></div>
      )}
    </Layout>
  );
}

OrderScreen.auth = true;

export default OrderScreen;
