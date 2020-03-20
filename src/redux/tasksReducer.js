import { ADD_TASK, DELETE_TASK, COMPLETE_TASK, UNCOMPLETE_TASK } from "./types"

const initialState = {
    tasks: []
}

export const tasksReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TASK: 
            return { ...state, tasks: state.tasks.concat([action.payload]) }
        case DELETE_TASK: 
            state.tasks.splice(action.payload, 1)
            return { ...state, tasks: [...state.tasks] }
        case COMPLETE_TASK: 
            state.tasks[action.payload].isCompleted = true
            return { ...state, tasks: [...state.tasks] }
        case UNCOMPLETE_TASK: 
            state.tasks[action.payload].isCompleted = false
            return { ...state, tasks: [...state.tasks] } 
        default: 
            return state
    }
}