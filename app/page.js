"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask,setmainTask] = useState([]);
  const submitHandler=(e)=>{
    e.preventDefault();
    setmainTask([...mainTask,{ title,desc }]);
    settitle("");
    setdesc(""); 
    console.log(mainTask);
  };

  const Deletehandler =(i) =>{
    let copytask =[...mainTask]
    copytask.splice(i,1)
    setmainTask(copytask)

  }
  let renderTask = <h2 > No Task Available</h2>;
  if(mainTask.length>0){
    renderTask = mainTask.map((t,i)=>{
      return(
        <li className='flex items-center justify-between'>
          <div className='flex items-center justify-between  mb-5 w-2/3'>
          <h5 className='text-2xl font-semibold'>{t.title}</h5>
          <h6 className='text-xl font-semibold'>{t.desc}</h6>
          <button onClick={()=>{
            Deletehandler(i)
          }}
           className='bg-red-400 text-white px-4 py-2 rounded font-bold'>
            Delete
          </button>
        </div>
        </li>
      )
    })
  }

  return (
    <> 
    <h1 className=' text-[#ffffff] bg-[#1F2833] p-5 text-5xl font-bold text-center'>
       Todo's List
    </h1>
    <form className='text-center' onSubmit={submitHandler}>
      <input
      type="text"
      className='text-2xl bg-[#1F2833] border-grey text-white px-y py-4 m-8 rounded-xl'
      placeholder=" Enter Title here" 
      value={title}
      onChange={(e)=>{
        settitle(e.target.value)

      }}
      />

      <input
      type="text"
      className='text-2xl bg-[#1F2833] border-grey text-white px-y py-4 m-8 rounded-xl'
      placeholder=" Enter description here" 
      value={desc}
      onChange={(e)=>{
        setdesc(e.target.value)

      }}
      />
      <button className='text-[#ffffff] bg-[#1F2833] rounded-xl font-bold px-3 py-4 text-2xl' >Add Task</button>
    </form>
    <hr/>
    <div className='p-8 bg-[#C5C6C7]'  >
      <ul>
        {renderTask}
      
      </ul>


    </div>
    
    </>
  )
}

export default page