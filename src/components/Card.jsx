const Card = (props) => {
  return (
    <div className=" bg-white w-[400px] h-[350px]">
      <div class="flip-card h-full">
        <div class="flip-card-inner h-full">
          <div class="flip-card-back  my-12">
            <div className="text-2xl text-black font-bold text-center h-full">
              More information here
            </div>
          </div>
          <div class="flip-card-front text-black flex flex-col gap-2 ">
            <img
              className="object-cover w-52 h-52 mx-auto"
              src={props.avatar}
              alt=""
            />
            <p className="text-xl font-semibold">{props.fullName}</p>
            <p>{props.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
