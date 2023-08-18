import React, { useState } from 'react'

export const TodoForm = ({addTodo}) => {
const [task,setTask]=useState("");
function handleSubmit(e){
    e.preventDefault();

    const trimValue = task.trim();
    if(trimValue=='') {
        alert("enter a proper value")
        return;
    }
    addTodo(task);
    setTask("");


}
  return (
   <form className='TodoForm' onSubmit={handleSubmit}>
    <input type='text' value={task} className='todo-input' placeholder='what is task of today?' onChange={(e)=>{
        setTask(e.target.value)
    }}/>
    <button type='submit' className="todo-btn">Add Task</button>
   </form>
  )
}
