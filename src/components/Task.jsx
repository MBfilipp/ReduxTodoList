import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask, toggleCompleteTask} from '../redux/actions'

export default ({ task }) => {

    const stateTasks = useSelector(state => state.tasks.tasks) // Array

    const taskIsCompeted = stateTasks.find(e => e.id === task.id).isCompleted // True / False

    const dispatch = useDispatch()

    const onDeleteTask = () => dispatch(deleteTask(task.id))      

    const onChangeCompletedTask = () => dispatch(toggleCompleteTask(task.id))

    return (
        <div className="card mt-1 mb-1">
            <div className="card-body">

                    <h3 className="float-left">
                        <input onClick={onChangeCompletedTask} type="checkbox" aria-label="Checkbox for following text input" style={{ width: 50 }}></input>
                    </h3>
                    <h3 className="float-left ">
                        {taskIsCompeted 
                            ? <s>{task.text}</s> 
                            : <>{task.text}</>
                        }
                    </h3>
                    <h4 onClick={onDeleteTask} className="float-right">&#10006;</h4>
                
            </div>
        </div>
    )
}