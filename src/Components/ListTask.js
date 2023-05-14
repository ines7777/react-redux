import React from 'react'
import Task from './Task'
import { useSelector } from 'react-redux'

const ListTask = () => {
    const tasks=useSelector(state=> state.taskReducers.tasks)
  return (
    <div>
      <div>

      </div>
      <div>
          {tasks.map(task=>{
            return <Task key={task.id} task={task} />})}
      </div>
    </div>
  )
}

export default ListTask
