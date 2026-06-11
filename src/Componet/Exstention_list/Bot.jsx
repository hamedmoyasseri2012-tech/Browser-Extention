const Bot = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-4 ">
      <section>
        <div className="flex flex-col relative justify-center items-center gap-4 pl-4 pr-4 border bg-[#2f354b] rounded-xl w-[400px] h-[236px]">
          <div className="flex gap-4 ">
            <img
              className="w-[60px] h-[60px] justify-center items-center mt-7 "
              src="./public/logo-devlens.svg"
              alt=""
            />
            <div className="gap-4 mb-8 ">
              <h1 className="w-[276px] h-[22] text-xl font-bold text-[#e4f1f6]">
                DevLens
              </h1>
              <p className="w-[276px] h-[67px] text-xl text-[#9db5cf] font-bold">
                Quickly inspect page layouts and visualize element boundaries.
              </p>
            </div>
          </div>
          <div
            className="flex justify-center gap-56
           items-center"
          >
            <button className="border border-[#535969] text-xl font-medium text-[#aad1da] bg-[#535969] w-[113px] h-[46px] rounded-2xl">
              Remove
            </button>
            <label className="onoffswitch-label" htmlFor="myonoffswitch-0">
              d
            </label>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Bot;
