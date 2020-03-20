import React from 'react'
import Task from "./Task"

export default ({ tasks }) => {
    if(!tasks.length) {
        return <h5 className="text-center">Задач нет</h5>
    }
    return tasks.map((task) => <Task key={task} task={task}/>)
}