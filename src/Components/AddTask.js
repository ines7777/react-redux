
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addTask} from "../Redux/actions/taskActions"
import { Button, TextField } from '@mui/material'
const AddTask = () => {
    const [task,setTask]= useState("")
    const dispatch=useDispatch()
    const AddTaskFunction=()=>{
           if(task){
            dispatch(addTask(task))
            setTask("")
           }
           else {
            alert("please enter a task")
           }
    }
  return (
    <div>
      <TextField label="Outlined" variant="outlined" type='text' value={task} onChange={(e)=> setTask(e.target.value)}/>
      <Button variant="outlined" color="error" onClick={AddTaskFunction}> Add task</Button>
    </div>
  )
}

export default AddTask
