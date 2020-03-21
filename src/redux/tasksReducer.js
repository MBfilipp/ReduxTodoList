import { ADD_TASK, DELETE_TASK, TOGGLE_COMPLETE_TASK } from "./types"

const initialState = {
    tasks: []
}

export const tasksReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TASK: 
            return { ...state, tasks: state.tasks.concat([action.payload]) }
        case DELETE_TASK: 
            return Object.assign({}, state, {
                tasks: state.tasks.filter(task => task.id !== action.payload)
            })
        case TOGGLE_COMPLETE_TASK: 
            return Object.assign({}, state, {
                tasks: state.tasks.map(task => {
                    return task.id === action.payload ? 
                    Object.assign({}, task, { isCompleted: !task.isCompleted }) : task
                })
            })
        default: 
            return state
    }
}