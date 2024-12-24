import image from "../assets/A.png";
function Flex1() {
  return (
    <>
      <div className="bg-slate-400 flex">
        <div className="bg-blue-400 flex flex-auto flex-col  items-center ">
          <h1>This is an example of flex basis</h1>
          <div className="flex w-full justify-center">
            <img src={image} className="w-1/3" alt="example" />
          </div>
        </div>
        <div className="bg-blue-400 flex flex-auto flex-col  items-center ">
          <h1>This is an example of flex basis</h1>
          <div className="flex w-full justify-center">
            <img src={image} className="w-1/3" alt="example" />
          </div>
        </div>
        <div className="bg-blue-400 flex flex-auto flex-col  items-center ">
          <h1>This is an example of flex basis</h1>
          <div className="flex w-full justify-center">
            <img src={image} className="w-1/3" alt="example" />
          </div>
        </div>
        <div className="bg-blue-500 flex-auto ">Box</div>
        <div className="bg-blue-800 flex-auto ">Box</div>
      </div>
    </>
  );
}

export default Flex1;
