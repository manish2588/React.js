import { useEffect, useState } from "react";
import { deletePost, getData } from "./getData";
import Card from "./Card";
import Form from "./Form";

function Data() {
  const [result, setResult] = useState([]); // Initialize state for data

  const getUser = async () => {
    const res = await getData();
    const data = res.data;
    setResult(data); // Update state with fetched data
  };

  useEffect(() => {
    getUser(); // Fetch data on component mount
  }, []);
  console.log(result);

   const handleClick= async (id)=>{
    const res=await deletePost(id);
    console.log(res);
   }
  return (
    <>

      <h1 className="m-6 font-medium text-2xl">User Data</h1>
      <Form/>
      <ul className="flex flex-col gap-6 m-6">
        {result.map((item) => (
          <li key={item.id}>
            {" "}
            {/* Corrected tag to 'li' */}
            <p>Name: {item.name}</p>
            <p>Email: {item.email}</p>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap border-box">
        {result.map((item) => (
          <div
            key={item.id}
            className="w-full sm:w-1/2 lg:w-1/3 p-2 box-border "
          >
            <Card name={item.name} email={item.email} onclick={()=>handleClick(item.id)}/>
          </div>
        ))}
      </div>
    </>
  );
}

export default Data;
