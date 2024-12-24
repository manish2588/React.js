
import Button from "./Button";
import img from "../assets/A.png"
function Part1() {
    const arr = [
        "JavaScript",
        "Gaming",
        "Video",
        "Popular",
        "Technology",
        "Code",
        "Latest",
        "Gaming",
        "Gaming",
        "Video",
        "Popular",
        "Technology",
        "Code",
        "Latest",
        "Gaming",
      ];
  return (
   <>
    {/* Header Section */}
    <div className="container mx-auto px-4 sm:px-6 py-6 bg-slate-400">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-slate-200 text-center py-2">
          Welcome to My Website: Hi
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl bg-gray-500 text-center p-2 rounded-lg">
          This content is inside a container that is responsive and centers
          itself. Hello, this is a Tailwind CSS Tutorial.
        </p>
      </div>

      {/* Inline Blocks Section */}
      <div className="bg-slate-400 flex flex-wrap justify-center gap-4 py-4">
        <div className="w-full sm:w-[48%] md:w-[30%] bg-slate-300 p-4 rounded-lg text-justify">
          This is an inline-block element. This is an inline-block element. This
          is an inline-block element.
        </div>
        <div className="w-full sm:w-[48%] md:w-[30%] bg-slate-300 p-4 rounded-lg text-justify">
          This is an inline-block element. This is an inline-block element. This
          is an inline-block element.
        </div>
      </div>

      {/* Image and Text Section */}
      <div className="bg-zinc-600 w-[90%] lg:w-[80%] h-auto py-6 mx-auto flex flex-col lg:flex-row items-center">
        <img src={img} alt="Sample" className=" aspect-square" />
        <p className="text-white text-sm sm:text-base lg:text-lg p-4 leading-6">
          This is an inline-block element. This is an inline-block element. This
          is an inline-block element. This is an inline-block element. This is
          an inline-block element.
        </p>
      </div>

      {/* Button Grid Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-6 w-[90%] mx-auto bg-slate-300 rounded-lg">
        {arr.map((item, index) => (
          <Button
            key={index}
            value={item}
            className="bg-gray-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-700"
          />
        ))}
      </div>
      <div className="columns-1 md:columns-2 mt-4">
        <p>Well, let me tell you something, ...</p>
        <p className="md:break-after-column">Sure, go ahead, laugh...</p>
        <p>Maybe we can live without...</p>
        <p>Look. If you think this is...</p>
      </div>
      <div className="columns-2 mt-6">
        <p>Well, let me tell you something, ...</p>
        <p className="break-before-column">Sure, go ahead, laugh...</p>
        <p>Maybe we can live without...</p>
        <p>Look. If you think this is...</p>
      </div>

      <div className="columns-2">
        <p>Well, let me tell you something, ...</p>
        <p className="break-inside-avoid-column">Sure, go ahead, laugh...</p>
        <p>Maybe we can live without...</p>
        <p>Look. If you think this is...</p>
      </div>

      <span className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">
        Hello
        <br />
        World
      </span>
      <span className="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">
        Hello
        <br />
        World
      </span>

      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 w-64 box-decoration-slice border-4 border-solid border-black">
        This is an example using <strong>box-decoration-slice</strong>.
      </div>
      <div className="bg-gradient-to-r from-green-500 to-yellow-500 text-white p-4 w-64 box-decoration-clone border-4 border-dashed border-gray-700">
        This is an example using <strong>box-decoration-clone</strong>.
      </div>

      <div className="bg-blue-200 max-w-full px-4 mx-6 ">
        Hello This is box . this is box Hello This is box . this is box Hello
        This is box . this is boxHello This is box . this is box Hello This is
        box . this is box Hello This is box . this is box Hello This is box .
        this is box Hello This is box . this is box Hello This is box . this is
        box Hello This is box . this is box Hello This is box . this is box
      </div>
      <div className="bg-blue-200 w-auto px-4 mx-6">
        Hello This is box . this is box Hello This is box . this is boxHello
        This is box . this is box Hello This is box . this is box Hello This is
        box . this is box Hello This is box . this is box Hello This is box .
        this is box Hello This is box . this is box Hello This is box . this is
        box Hello This is box . this is box
      </div>
      <div className="bg-blue-200 w-[100%] px-4 box-border">
        Hello This is box . this is box Hello This is box . this is box Hello
        This is box . this is box Hello This is box . this is box Hello This is
        box . this is box Hello This is box . this is box Hello This is box .
        this is box Hello This is box . this is box Hello This is box . this is
        box
      </div>

      <div className="flex flex-col lg:flex-row bg-red-400">
        <div className="lg:basis-1/2 bg-slate-900">Flex</div>
        <div className="lg:basis-1/2 bg-slate-200">flex</div>
      </div>

      <div className="flex">
        <div className="flex-1 bg-red-200">Flex 1</div>
        <div className="flex-auto bg-blue-200">Flex Auto</div>
        <div className="flex-initial bg-green-200">Flex Initial</div>
        <div className="flex-none bg-yellow-200">Flex None Not Shrink</div>
      </div>
      <div className="flex ...">
        <div className="flex-none w-14 h-14 ...">01</div>
        <div className="grow bg-slate-300  h-14 ...">02</div>
        <div className="flex-none w-14 h-14 ...">03</div>
      </div>

      <div className="flex ">
        <div className="flex-1 bg-red-200">Flex 1</div>
        <div className="flex-1 bg-red-400">Flex 2 Flex 2</div>
      </div>

      <div className="flex ">
        <div className="flex-auto bg-red-200">Flex 1 Flex 1</div>
        <div className="flex-auto bg-red-400">Flex 2</div>
      </div>
      <div className="flex ">
        <div className="flex-initial bg-red-200">Flex 1 Flex 1</div>
        <div className="flex-initial bg-red-400">Flex 2</div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="bg-red-400 col-span-2 lg:col-span-4">
          Spans 2 columns on small screens, 4 on large screens
        </div>
        <div className="bg-blue-400 col-span-2">Always spans 2 columns</div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-slate-400 col-span-2">Flex-1</div>
        <div>Flex-1</div>
        <div>Flex-1</div>
        <div>Flex-1</div>
        <div>Flex-1</div>
      </div>

      <div className="grid grid-cols-4 grid-flow-row gap-4">
        <div className="bg-red-500 p-4">1</div>
        <div className="bg-blue-500 p-4">2</div>
        <div className="bg-green-500 p-4">3</div>
        <div className="bg-yellow-500 p-4">4</div>
        <div className="bg-purple-500 p-4">5</div>
        <div className="bg-pink-500 p-4">6</div>
        <div className="bg-teal-500 p-4">7</div>
        <div className="bg-indigo-500 p-4">8</div>
        <div className="bg-gray-500 p-4">9</div>
        <div className="bg-orange-500 p-4">10</div>
        <div className="bg-lime-500 p-4">11</div>
      </div>

      <div className="flex justify-between">
        <div className="bg-slate-400 w-14">1</div>
        <div className="bg-slate-600 w-14">2</div>
        <div className="bg-slate-800 w-14">3</div>
      </div>
      <div className="flex justify-around">
        <div className="bg-slate-400 w-14">1</div>
        <div className="bg-slate-600 w-14">2</div>
        <div className="bg-slate-800 w-14">3</div>
      </div>
     
   </>
  )
}

export default Part1