


const Top=()=>{

    console.log("hello");
    return (
      <div className="flex justify-between">
        <h1 className="text-header-color text-3xl">Extensions List (12)</h1>
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
            Active{"2"}
          </button>
          <button
            type="button"
            className="py-2 px-4 bg-secondary-button-color cursor-pointer rounded-2xl text-header-color"
          >
            Inactive{"1"}
          </button>
        </div>
      </div>
    ); 


}
export default Top;