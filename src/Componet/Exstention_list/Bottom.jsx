const Bot = ({dC}) => {
    console.log("data Center:",dC);
  return (
    <div className="grid grid-cols-2 gap-4 mt-4 justify-center items-center px-22 ">
      {dC.map((item,index) => (
        <section key={item.id}>
          <div className="flex flex-col relative justify-center items-center gap-4 pl-4 pr-4 border bg-[#2f354b] rounded-xl w-100 h-59">
            <div className="flex gap-4 ">
              <img
                className="w-15 h-15 justify-center items-center mt-7 "
                src="./public/logo-devlens.svg"
                alt=""
              />
              <div className="gap-4 mb-8 ">
                <h1 className="w-69 h-[22] text-xl font-bold text-[#e4f1f6]">
                  {item.name}
                </h1>
                <p className="w-69 h-16.75 text-xl text-[#9db5cf] font-bold">
                  Quickly inspect page layouts and visualize element boundaries.
                </p>
              </div>
            </div>
            <div
              className="flex justify-center gap-56
           items-center"
            >
              <button className="border border-[#535969] text-xl font-medium text-[#aad1da] bg-[#535969] w-28.25 h-11.5 rounded-2xl">
                Remove
              </button>
              <label className="onoffswitch-label" htmlFor="myonoffswitch-0">
                d
              </label>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};
export default Bot;
