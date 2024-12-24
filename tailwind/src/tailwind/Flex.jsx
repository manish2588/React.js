import image from "../assets/A.png";

function Flex() {
  return (
    <>
      <div className="bg-slate-500 flex">
        {" "}
        {/* justify-main axis and items-cross axis (if flex col used then main axis is vertical)*/}
        <div className="bg-blue-200 basis-1/2 flex flex-col items-center justify-center w-full h-full">
          <h1>This is an example of flex basis</h1>
          <div className="flex w-full justify-center">
            <img src={image} className="w-1/3" alt="example" />
          </div>
        </div>
        <div className="bg-blue-400 basis-1/2 h-full">
          This is an example of flex basis
        </div>
      </div>
      <div className="bg-slate-400 flex flex-wrap gap-4 p-2 w-full box-border ">
        <div className="bg-blue-400 basis-[calc(50%-1rem)] h-32 lg:h-64">
          Box
        </div>
        <div className="bg-blue-600 basis-[calc(50%-1rem)] h-32 lg:h-64">
          Box
        </div>
        <div className="bg-blue-800 basis-[calc(50%-1rem)] h-32 lg:h-64">
          Box
        </div>
        <div className="bg-blue-100 basis-[calc(50%-1rem)] h-32 lg:h-64">
          Box
        </div>
        <div className="bg-blue-900 basis-[calc(50%-1rem)] h-32 lg:h-64">
          Box
        </div>
      </div>
    </>
  );
}

export default Flex;
