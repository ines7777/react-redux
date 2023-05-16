import React, { useState } from 'react'
import Task from './Task'
import { useSelector } from 'react-redux'
import { Button } from '@mui/material'


const ListTask = () => {
    const tasks=useSelector(state=> state.taskReducers.tasks)
    const[filter,setFilter]=useState('ALL')
    console.log(filter)
  return (
    <div>
      <div>
       <Button variant="contained" color="secondary" onClick={()=>{setFilter('All')}}>all</Button>
       <Button variant="contained" color="error" onClick={()=>{setFilter('To Do')}}>to do </Button>
       <Button variant="contained" color="success" onClick={()=>{setFilter('Done')}}>done</Button>


      </div>
      <div>
          {(filter==="Done" 
          ? tasks.filter(task=>task.isDone===true)
          : filter==="To Do"
          ? tasks.filter(task=>task.isDone===false)
          : tasks
          ).map(task=>{
            return(  <Task key={task.id} task={task} />)
             
            
          })}
      </div>
    </div>
  )
}

export default ListTask
