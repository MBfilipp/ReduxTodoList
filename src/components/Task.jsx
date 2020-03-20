import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask, uncompleteTask, completeTask } from '../redux/actions'

export default ({ task }) => {
    const dispatch = useDispatch()
    const tasks = useSelector(state => state.tasks.tasks)
    const id = task.id

    const elem = tasks.find(taskOne => {
        if(taskOne.id === id) return taskOne
    })
    
    const taskId = tasks.indexOf(elem)

    const onDeleteTask = () => dispatch(deleteTask(taskId))      

    const onChangeCompletedTask = () => tasks[taskId].isCompleted ? dispatch(uncompleteTask(taskId)) : dispatch(completeTask(taskId))

    return (
        <div className="card mt-1 mb-1">
            <div className="card-body">
                <h3>
                    <input onClick={onChangeCompletedTask} type="checkbox" aria-label="Checkbox for following text input" style={{ width: 50 }}></input>
                    {tasks[taskId].isCompleted ? <s>{task.text}</s> : <>{task.text}</>}
                    <h4 onClick={onDeleteTask} className="float-right">&#10006;</h4>
                </h3>
            </div>
        </div>
    )
}