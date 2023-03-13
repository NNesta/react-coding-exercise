import { useState, useEffect } from "react";
import Card from "../components/Card";

const WorkingAPI = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    fetch(" https://random-data-api.com/api/users/random_user?size=10")
      .then((response) => response.json())
      .then((result) => setData(result));
  }, [count]);
  console.log(data);
  return (
    <div className="max-w-8xl mx-auto h-screen">
      <ul className="flex text-blue-500 items-center gap-4 justify-center">
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
      <div className="w-full my-16 flex flex-col items-center gap-12">
        <button
          onClick={() => setCount((prevCount) => prevCount + 1)}
          className="bg-[#F0003C] text-white font-600 px-4 py-2 text-3xl hover:shadow-none shadow-2xl shadow-[#F0003C] rounded-2xl "
        >
          Fetch Random
        </button>

        <div className="bg-[#E0F8DB] grid md:grid-cols-2 lg:grid-cols-3 gap-10 p-8">
          {data.map((punch, index) => (
            <Card
              key={index}
              avatar={punch.avatar}
              fullName={punch.first_name + " " + punch.last_name}
              title={punch.employment.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkingAPI;
