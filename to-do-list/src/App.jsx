import React, { useState } from 'react'
const App = () => {

const [task, setTask] = useState("")
const [taskList, setTaskList] = useState([])

 const taskHandler = (elem) =>{
  setTask(elem)

 }

 const submitHandler = (elem) =>{
  elem.preventDefault()
  if(!task) return;
  setTaskList([...taskList, task]);
  setTask("");
 }

 const deleteHandler = (index) =>{
  const newTaskList = taskList.filter((currValue, i) => i !== index);
  setTaskList(newTaskList);
 }



  return (
    <div className = 'bg-black text-white h-screen item-center'>
      <form 
      onSubmit={submitHandler}
       className='text-center'>
        <input
         type="text" 
         placeholder="ENTER YOUR TASK" 
         className="px-5 py-2 rounded border-2 m-5"
         value={task}
         onChange={(elem)=>{
          setTask(elem.target.value)
        }}
         />
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Add</button>
      </form>
      <div>
        {taskList.map((elem, index)=>(
          <div key={index} className='p-2 text-white flex justify-between items-center border-b-2 border-gray-700'>
            <div>
            <h3>{elem}</h3>
            </div>
            <div className='flex gap-2'>
            <button 
              onClick={() => deleteHandler(index)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Delete
            </button>
            <button
              onClick={() => editHandler(index)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Edit
            </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
