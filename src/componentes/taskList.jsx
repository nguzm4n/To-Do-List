import React, { useState } from 'react'
import Formulario from './formulario'
import Task from './task'
import '../styles/taskList.css'

const TaskList = () => {

  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    if(task.text.trim()) {
      const totalTasks = [task, ...tasks]
      setTasks(totalTasks)
    }
    
  }

  const deleteTask = id => {
    const totalTasks = tasks.filter(task => task.id !== id)
    setTasks(totalTasks)
  }

  return (
    <>
    <Formulario 
    sendInput={addTask}/>
    <div className='task-list-container'>
    {tasks.map(task => (
        <Task
          key={task.id}
          id={task.id}
          text={task.text}
          deleteTask={deleteTask}
        />
      ))}
      {tasks.length == 1 ? <h2>You Have 1 Pending Task</h2> : <h2>You Have {tasks.length} Pending Tasks</h2> }
      </div>
    </>
  )
}

export default TaskList