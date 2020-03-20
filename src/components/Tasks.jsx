import React from 'react'
import Task from "./Task"
import { useSelector } from 'react-redux'

export default () => {
    const tasks = useSelector(state => state.tasks.tasks)
    if(!tasks.length) {
        return <h5 className="text-center">Задач нет</h5>
    }
    return tasks.map((task) => <Task key={task.id} task={task}/>)
}