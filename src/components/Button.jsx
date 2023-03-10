import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <div>
      <button onClick={onClick} className="p-2 border border-black bg-gray-200">
        {children}
      </button>
    </div>
  );
};

export default Button;
