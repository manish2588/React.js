import { useState } from 'react'

function ToDO() {
    const [task,setTask]=useState([])
    const [input,setInput]=useState("")
    const handleClick=()=>{
        setTask((prev)=>(
            [...prev,input]
        ))
        setInput("")
    }

    const handleChange=(e)=>{
       setInput(e.target.value)

    }
   
  return (
   <>
   <div className='bg-slate-400 flex flex-col gap-4 mt-4'>
     <div className='flex flex-row gap-5 p-2 w-[100%] box-border '>
        <input type='text' placeholder='Add task' name='task' value={input} onChange={handleChange}/>
        <button className='bg-blue-300 p-2 box-border rounded-lg' onClick={handleClick}>Add Task</button>
     </div>
     <div className='flex  flex-col items-center'>
        {
            task.map((item,index)=>(
                <p key={index}> {item}</p>
            ))
        }
     </div>
   </div>
   </>
  )
}

export default ToDO;