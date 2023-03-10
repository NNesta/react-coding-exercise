import React from "react";

const Home = () => {
  return (
    <div className="text-center h-screen">
      <h1 className="text-7xl font-bold">React coding exercices</h1>
      <ul className="flex items-center justify-center h-full">
        <li>
          <a href="/stateprops">State and props exercise</a>
        </li>
      </ul>
    </div>
  );
};

export default Home;
