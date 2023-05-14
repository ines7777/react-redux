import { ADD_TASK, COMPLETE_TASK } from "../Constants/actionTypes"

export const addTask=(task)=>{
return{
    type: ADD_TASK,
    payload: task
}
}

export const completeTask=(task)=>{
    return{
        type:COMPLETE_TASK,
        payload:task
    }
}