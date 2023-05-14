import React from "react";
import { useDispatch } from "react-redux";
import {completeTask} from "../Redux/actions/taskActions"

const Task = ({ task }) => {
    const dispatch=useDispatch()
  return (
    <div>
      <div className={task.isDone ? "completed" : ""}>
        <div>
          <p onClick={()=> dispatch(completeTask(task))}> {task.description}</p>
          <button>edit</button>
        </div>
      </div>
    </div>
  );
};

export default Task;
