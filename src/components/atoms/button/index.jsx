import React from 'react';

const Button = (props) => {
  const { children, icon, className, ...rest } = props;
  return (
    <button
      className={`text-white text-sm px-2 py-1 rounded-md flex gap-2 justify-center items-center hover:shadow-lg ${className}`}
      {...rest}
    >
      {icon && icon}
      {children}
    </button>
  );
};

export default Button;
