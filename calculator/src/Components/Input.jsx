import React from 'react';

const Input = ({ text, result }) => {
  return (
    <div className="w-[325px] h-[100px] bg-white p-4 rounded-xl shadow-xl flex flex-col justify-end items-end space-y-2">
      <div className="text-black text-4xl font-semibold">
        <h1>{result}</h1>
      </div>
      <div className="text-gray-700 text-2xl font-medium">
        <h3>{text}</h3>
      </div>
    </div>
  );
};

export default Input;
