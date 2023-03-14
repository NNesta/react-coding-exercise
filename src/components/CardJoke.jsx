const CardJoke = (props) => {
  return (
    <div className="p-6 bg-white">
      <h1 className="text-4xl font-bold text-center">{props.setup}</h1>
      <p className="text-center text-gray-600 my-6">{props.punchline}</p>
    </div>
  );
};

export default CardJoke;
