import React from 'react';

const Button = (btnProps) => {
  return (
    <button
      className="primary-button"
      type="button"
      {...btnProps}>
      {btnProps.name}
    </button>
  );
};

export default Button;
