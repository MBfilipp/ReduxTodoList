import React from 'react'

export class TaskForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            tasks: ''
        }
    }

    render() {
        return (
            <div class="form-group w-75">
                <input type="text" class="form-control" id="title" name="task" placeholder="Введите текст новой задачи"/>
                <button type="submit" className="btn btn-primary mt-3">Добавить</button>
            </div>
        )
    }
}