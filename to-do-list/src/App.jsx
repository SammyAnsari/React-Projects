import React, { useState } from 'react'
const App = () => {

const [task, setTask] = useState("")
const [taskList, setTaskList] = useState([])

 const taskAdded = (e) =>{
  e.preventDefault()
  setTaskList([...taskList,{task}])
  setTask('')
 }

 const taskDeleted = (index) =>{
  let newTask = [...taskList]
  newTask.splice(index,1)
  setTaskList(newTask)
 }

 
  return (
    <div className = 'bg-black text-white h-screen item-center'>
      <form 
      onSubmit={(e)=>{
        taskAdded(e)
      }}
       className='text-center'>
        <input
         type="text" 
         placeholder="ENTER YOUR TASK" 
         className="px-5 py-2 rounded border-2 m-5"
         value={task}
         onChange={(e)=>{
          setTask(e.target.value)
        }}
         />
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Add</button>
      </form>
      <div>
        {taskList.map((elem, index)=>(
          <div key={index} className='p-2 text-white flex justify-between items-center border-b-2 border-gray-700'>
            <h3>{elem.task}</h3>
            <button className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600' onClick={() => taskDeleted(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
