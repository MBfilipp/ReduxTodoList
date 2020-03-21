import { ADD_TASK, DELETE_TASK, TOGGLE_COMPLETE_TASK } from "./types"

export const addTask = (task) => {
    return {
        type: ADD_TASK,
        payload: task
    }
}

export const deleteTask = (id) => {
    return {
        type: DELETE_TASK,
        payload: id
    }
}

export const toggleCompleteTask = (id) => {
    return { 
        type: TOGGLE_COMPLETE_TASK,
        payload: id
    }
}