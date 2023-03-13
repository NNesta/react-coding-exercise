const Captures = () => {
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
        <button
          className="border border-black bg-gray-200 p-2"
          onClick={() => alert("Clicked!")}
        >
          Click me
        </button>
      </div>
    </div>
  );
};

export default Captures;
