import React, { useState } from "react";

const StateComponent = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="max-w-xl mx-auto h-screen">
      <ul className="flex text-blue-500 items-center gap-4">
        <li className="underline">
          <a href="/">Home</a>
        </li>
        <li className="underline">
          <a href="/">Exercise1</a>
        </li>
        <li className="underline">
          <a href="/">Exercise2</a>
        </li>
        <li className="underline">
          <a href="/">Exercise3</a>
        </li>
        <li className="underline">
          <a href="/">Exercise4</a>
        </li>
        <li className="underline">
          <a href="/">Exercise5</a>
        </li>
        <li className="underline">
          <a href="/">Exercise6</a>
        </li>
        <li className="underline">
          <a href="/">Exercise7</a>
        </li>
        <li className="underline">
          <a href="/">Exercise8</a>
        </li>
        <li className="underline">
          <a href="/">Exercise9</a>
        </li>
      </ul>
      <div className="flex flex-col gap-12 items-center justify-center h-full">
        <p className="text-center">Button has been clicked: {counter} times</p>
        <button
          className="border border-black bg-gray-200 p-2"
          onClick={() => setCounter((prevCounter) => prevCounter + 1)}
        >
          Click me
        </button>
      </div>
    </div>
  );
};

export default StateComponent;
