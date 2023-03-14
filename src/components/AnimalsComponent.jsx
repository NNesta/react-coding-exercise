const AnimalsComponent = ({ animals }) => {
  return (
    <ul className="flex flex-col items-center h-full my-40">
      {animals.map((animal, index) => (
        <li
          key={index}
          className="px-4 py-2 border border-gray-400 text-center w-32"
        >
          {animal}
        </li>
      ))}
    </ul>
  );
};

export default AnimalsComponent;
