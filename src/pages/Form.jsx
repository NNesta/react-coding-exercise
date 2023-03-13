import { useState } from "react";

const Form = () => {
  const [names, setNames] = useState({ firstName: "", lastName: "" });
  let fullName = names.firstName + " " + names.lastName;
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
      <div className="flex items-center justify-center h-full">
        <form
          onSubmit={() =>
            fullName.trim()
              ? alert(`Hello ${names.firstName} ${names.lastName}`)
              : alert("Please enter your names")
          }
          className="w-full max-w-sm flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="First Name"
            className="border border-gray-300 p-2 block rounded-lg"
            onChange={(event) =>
              setNames({ ...names, firstName: event.target.value })
            }
            value={names.firstName}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border border-gray-300 p-2 block rounded-lg"
            onChange={(event) =>
              setNames({ ...names, lastName: event.target.value })
            }
            value={names.lastName}
          />
          <input
            type="submit"
            value="Greet me"
            className="bg-[#F0003C] text-white font-600 px-4 py-2 text-3xl focus:shadow-none shadow-2xl shadow-[#F0003C] rounded-2xl"
          />
        </form>
      </div>
    </div>
  );
};

export default Form;
