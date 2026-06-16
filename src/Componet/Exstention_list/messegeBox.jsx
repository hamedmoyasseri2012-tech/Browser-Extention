const MessageBox = () => {
  return (
    <>
      <div className="flex flex-col gap-4 bg-[#2f354b] w-143.5 h-38.75 hidden border-3 border-[#f35c55]">
        <h3 className="text-[#eceae6] text-4xl">
          Are you sure you want to remove this extension?
        </h3>
        <button className="flex gap-4 justify-center items-center">
          <button className="w-28.25 h-11.5 bg-[#54586a] hover:bg-[#2f354b] hover:border-3 hover:border-[#f35c55]">
            Remove
          </button>
          <button className="w-25.25 h-11.5 bg-[#54586a] hover:bg-[#2f354b] hover:border-3 hover:border-[#f35c55]">
            Cancel
          </button>
        </button>
      </div>
    </>
  );
};
export default MessageBox;
