import React from 'react'
export default ({ task }) => {
    return (
        <div className="card mt-1 mb-1">
            <div className="card-body">
                <h3>
                    <input type="checkbox" aria-label="Checkbox for following text input" style={{ width: 50 }}></input>
                    Text here - {task}
                    <h4 className="float-right" id={task}>&#10006;</h4>
                </h3>
            </div>
        </div>
    )
}