import React from 'react';

const Button = (props) => {
  const { children, icon, ...rest } = props;
  return (
    <button
      className="text-white text-sm bg-blue-900 px-2 py-1 rounded-md flex gap-2 justify-center items-center hover:shadow-lg hover:bg-blue-800"
      {...rest}
    >
      {icon && icon}
      {children}
    </button>
  );
};

export default Button;
