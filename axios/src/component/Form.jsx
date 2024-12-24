import  { useState } from 'react'
import { postData } from './getData';
function Form() {
    const [add,setAdd]=useState({
        name:"",
        email:""
    })
    const handleChange = (e) => {
        const { name, value } = e.target; // Destructure 'name' and 'value' from the event
        setAdd((prev) => ({
          ...prev, // Keep the previous state
          [name]: value, // Update the field dynamically based on the input's name
        }));
      };
      console.log(add);

      const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        try {
          const res = await postData(add); // Use the 'add' state directly
          console.log("Response:", res.data); // Log the response data
          alert("Data submitted successfully!");
          setAdd({
            name: "",
            email: "",
          });
        } catch (error) {
          console.error("Error submitting data:", error); // Handle errors
        }
      };
  return (
   <>
   <form  onSubmit={handleSubmit}>
    <label htmlFor='name'> Name :</label>
    <input type='text'
    name='name'
    id='name'
    value={add.name}
    placeholder='Enter name'
    onChange={handleChange}
    />

<label htmlFor='email'> Email :</label>
    <input type='text'
    name='email'
    id='email'
    value={add.email}
    placeholder='Enter email'
    onChange={handleChange}
    />
   <button type='submit'> Submit</button>
   </form>
   </>
  )
}

export default Form;