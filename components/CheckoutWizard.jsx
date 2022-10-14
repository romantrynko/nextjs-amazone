import React from 'react';

const CheckoutWizard = ({ activeStep = 0 }) => {
  return (
    <div className="mb-5 flex flex-wrap">
      {['User Login', 'Shipping Address', 'Payment Method', 'Place Order'].map(
        (step, index) => (
          <div
            key={index}
            className={`flex-1 hover:cursor-pointer border-b-2 text-center pb-2 mx-1 mb-5 mt-2 ${
              index <= activeStep
                ? 'border-indigo-600 text-indigo-600'
                : 'border-gray-300 text-gray-300'
            }`}>
            {step}
          </div>
        )
      )}
    </div>
  );
};

export default CheckoutWizard;
