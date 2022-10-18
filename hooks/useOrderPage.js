import { usePayPalScriptReducer } from '@paypal/react-paypal-js';
import { useRouter } from 'next/router';
import { useReducer } from 'react';
import { toast } from 'react-toastify';
import { getError } from '../utils/error';
import axios from 'axios';

const useOrderPage = () => {
  function reducer(state, action) {
    switch (action.type) {
      case 'FETCH_REQUEST':
        return { ...state, loading: true, error: '' };
      case 'FETCH_SUCCESS':
        return { ...state, loading: false, order: action.payload, error: '' };
      case 'FETCH_FAIL':
        return { ...state, loading: false, error: action.payload };
      case 'PAY_REQUEST':
        return { ...state, loadingPay: true };
      case 'PAY_SUCCESS':
        return { ...state, loadingPay: false, successPay: true };
      case 'PAY_FAIL':
        return { ...state, loadingPay: false, errorPay: action.payload };
      case 'PAY_RESET':
        return { ...state, loadingPay: false, errorPay: '' };
      default:
        return state;
    }
  }

  const { query } = useRouter();
  const orderId = query.id;
  const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();

  const [
    { loading, error, order, successPay, loadingPay },
    dispatch
  ] = useReducer(reducer, {
    loading: true,
    order: {},
    error: ''
  });

  function createOrder(data, actions) {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: { value: order.totalPrice }
          }
        ]
      })
      .then((orderId) => {
        return orderId;
      });
  }

  function onApprove(data, actions) {
    return actions.order.capture().then(async (details) => {
      try {
        dispatch({ type: 'PAY_REQUEST' });
        const { data } = await axios.put(
          `/api/orders/${order._id}/pay`,
          details
        );
        dispatch({ type: 'PAY_SUCCESS', payload: data });
        toast.success('Order is paid successfully');
      } catch (err) {
        dispatch({ type: 'PAY_FAIL', payload: getError(err) });
        toast.error(getError(err));
      }
    });
  }

  function onError(err) {
    toast.error(getError(err));
  }

  return {
    dispatch,
    orderId,
    order,
    successPay,
    paypalDispatch,
    loading,
    error,
    isPending,
    loadingPay, createOrder,
    onApprove,
    onError
  }
}

export default useOrderPage;