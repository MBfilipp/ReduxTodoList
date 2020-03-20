import { ADD_TASK, DELETE_TASK, COMPLETE_TASK, UNCOMPLETE_TASK } from "./types"

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

export const completeTask = (id) => {
    return { 
        type: COMPLETE_TASK,
        payload: id
    }
}

export const uncompleteTask = (id) => {
    return { 
        type: UNCOMPLETE_TASK,
        payload: id
    }
}