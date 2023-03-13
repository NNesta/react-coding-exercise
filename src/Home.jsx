import React from "react";

const Home = () => {
  return (
    <div className=" h-screen ">
      <h1 className="text-7xl font-bold text-center">React coding exercices</h1>
      <ul className=" text-center flex items-center justify-center h-full">
        <li>
          <a href="/clickme">user click exercise</a>
        </li>
      </ul>
    </div>
  );
};

export default Home;
