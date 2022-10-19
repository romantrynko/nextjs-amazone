import React from 'react';

const Button = (btnProps) => {
  return (
    <button
      className="primary-button"
      {...btnProps}>
      {btnProps.children}
    </button>
  );
};

export default Button;
