import { useState } from "react";

function Form() {
  const [data, setData] = useState({
    name: " ",
    email: " ",
    message: " ",
  });
  const [display,setDisplay]=useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  console.log(data);
  const handleClick=()=>{
     setDisplay(!display)
  }
  return (
   <>
    <form className="bg-slate-400 mt-4 rounded-md mb-4 p-6 sm:w-1/2 sm:h-auto sm:mx-auto lg:w-1/3 lg:h-[550px]">
      <div className="my-6">
        <h1 className="text-center font-bold text-3xl text-white">
          Contact Form
        </h1>
      </div>
      <div className="flex flex-col space-y-4 items-center">
        <div className="w-full px-4">
          <label className="block font-medium mb-2">Name:</label>
          <input
            type="text"
            placeholder="Please Enter Your Name"
            className="rounded-md w-full p-2 border border-gray-300"
            onChange={handleChange}
            name="name"
            value={data.name}
          />
        </div>
        <div className="w-full px-4">
          <label className="block font-medium mb-2">Email:</label>
          <input
            type="text"
            placeholder="Please Enter Your Email"
            className="rounded-md w-full p-2 border border-gray-300"
            onChange={handleChange}
            name="email"
            value={data.email}
          />
        </div>
        <div className="w-full px-4">
          <label className="block font-medium mb-2">Message:</label>
          <textarea
            rows="5"
            placeholder="Message"
            className="rounded-md w-full p-2 border border-gray-300"
            onChange={handleChange}
            name="message"
            value={data.message}
          ></textarea>
        </div>
        <div className="mb-4">
          <button  onClick={handleClick} className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-2 rounded-lg text-xl transition">
            Submit
          </button>
        </div>
      </div>
    </form>
   </>
    
  );
}

export default Form;
