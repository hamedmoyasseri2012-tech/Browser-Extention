const Top = () => {
  console.log("hello");
  return (
    <div className="flex justify-between pt-8">
      <h1 className="text-header-color text-4xl font-bold ">
        Extensions List (12)
      </h1>
      <div className="flex gap-4">
        <button
          type="button"
          className="py-2 px-4 bg-secondary-button-color cursor-pointer rounded-2xl text-header-color"
        >
          All
        </button>
        <button
          type="button"
          className="py-2 px-4 bg-secondary-button-color cursor-pointer rounded-2xl text-header-color"
        >
          Active ({8})
        </button>
        <button
          type="button"
          className="py-2 px-4 bg-secondary-button-color cursor-pointer rounded-2xl text-header-color"
        >
          Inactive ({4})
        </button>
      </div>
    </div>
  );
};
export default Top;
