import React from 'react';

const Input = (props) => {
  const { ...rest } = props;
  return (
    <input
      className="w-full text-sm text-blue-900 rounded-md focus:outline-none border-2 border-blue-900 p-1 px-2"
      {...rest}
    />
  );
};

export default Input;
