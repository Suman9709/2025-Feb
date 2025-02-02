import React from 'react';

const Button = ({ value, color, handleClick }) => {
  return (
    <div className="flex m-2">
      <button
        style={{ backgroundColor: color }}
        className="text-3xl p-4 border-2 border-gray-400 rounded-lg shadow-xl transform transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-2xl active:scale-95 active:shadow-lg"
        onClick={() => handleClick(value)}
      >
        {value}
      </button>
    </div>
  );
};

export default Button;
