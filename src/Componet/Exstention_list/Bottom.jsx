const Bottom = ({ dC }) => {
  // console.log("data Center:", dC);

  return (
    <div className="grid  grid-cols-[repeat(auto-fit,minmax(350px,1fr))] w-full  gap-5 mt-2 justify-center  px-22 ">
      {dC.map((items, index) => (
        <section key={index}>
          <div className="flex flex-col  justify-center items-center gap-4 pl-4 pr-4 border bg-[#2f354b] rounded-xl w-100 h-55 ">
            <div className="flex gap-4 ">
              <img
                className="w-15 h-15 justify-center items-center mt-7 "
                src={items.logo}
                alt=""
              />
              <div className="gap-4 mb-8 ">
                <h1 className="w-69 h-[22] text-xl font-bold text-[#e4f1f6]">
                  {items.name}
                </h1>
                <p className="w-69 h-16.75 text-xl text-[#9db5cf] font-bold">
                  {items.description}
                </p>
              </div>
            </div>
            <div
              className="flex justify-between w-full
           items-center"
            >
              <button className="border border-[#535969] text-xl font-medium text-[#aad1da] bg-[#535969] w-28.25 h-11.5 rounded-2xl">
                Remove
              </button>
              <label class="relative inline-flex cursor-pointer items-center">
                <input type="checkbox" class="peer sr-only" checked />
                <div class="h-8 w-16 rounded-full bg-red-400 transition peer-checked:bg-red-400"></div>
                <div class="absolute right-1 h-6 w-6 rounded-full bg-white transition peer-checked:translate-x-0"></div>
              </label>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Bottom;
