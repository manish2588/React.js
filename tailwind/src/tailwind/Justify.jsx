import image from "../assets/A.png";
function Justify() {
  return (
    <div className="bg-blue-500">
      <div>Image</div>
      <div className="bg-blue-300 flex  w-full px-1 lg:px-2">
        <div className="bg-slate-200 w-1/2 lg:w-1/4 flex space-x-2 lg:space-x-6 flex-wrap items-center">
          <img src={image} className="lg:h-12 lg:w-12 rounded-full h-8 w-8" />
          <div className="flex flex-col ">
            <span> Name</span>
            <span> Million</span>
          </div>

          <button className="bg-black text-white px-1 rounded-xl h-8 ">
            {" "}
            Subscribe
          </button>
        </div>

        <div className="bg-slate-400 w-1/2 lg:w-3/4 flex space-x-2 overflow-x-auto lg:space-x-6">
          <div>
            <p>Like</p>
          </div>
          <div>
            <p>Dislike</p>
            
          </div>
          <div>
            <p>Download </p>
          </div>
          <div>
            <p>Download </p>
          </div>
          <div>
            <p>Download </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Justify;
