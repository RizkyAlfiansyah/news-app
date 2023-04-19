import React from 'react';

const Input = (props) => {
  const { ...rest } = props;
  return (
    <input
      className="w-full text-sm text-blue-900 rounded-md focus:outline-none p-1 px-2"
      {...rest}
    />
  );
};

export default Input;
