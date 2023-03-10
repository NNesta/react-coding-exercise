import React from "react";
import Button from "../components/Button";

const Custom = () => {
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
      <div className="flex items-center justify-center h-full gap-4">
        <Button onClick={() => alert(`You clicked on Button 1`)}>
          Button 1
        </Button>
        <Button onClick={() => alert(`You clicked on Button 2`)}>
          Button 2
        </Button>
        <Button onClick={() => alert(`You clicked on Button 3`)}>
          Button 3
        </Button>
      </div>
    </div>
  );
};

export default Custom;
