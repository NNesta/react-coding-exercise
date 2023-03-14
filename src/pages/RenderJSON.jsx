import data from "../data.json";
import CardJoke from "../components/CardJoke";

const RenderJSON = () => {
  return (
    <div className="max-w-6xl mx-auto h-screen">
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
          <a href="/render-json">Exercise8</a>
        </li>
        <li className="underline">
          <a href="/">Exercise9</a>
        </li>
      </ul>
      <div className="w-full my-16">
        <ul className="bg-[#E0F8DB] flex  gap-10 p-8">
          {data.map((punch, index) => (
            <CardJoke
              key={index}
              setup={punch.setup}
              punchline={punch.punchline}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RenderJSON;
