import React from "react";

const Button = ({ children }) => {
  return (
    <div>
      <button
        onClick={() => alert(`You clicked on ${children}`)}
        className="p-2 border border-black bg-gray-200"
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
