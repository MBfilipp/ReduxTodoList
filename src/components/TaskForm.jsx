import React from 'react'
import { addTask } from '../redux/actions'
import { connect } from 'react-redux'

class TaskForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            text: ''
        }
    }

    addSubmitHandler = event => {
        event.preventDefault()

        const {text} = this.state

        if(!text.trim()) return

        const newTask = {
            id: Date.now(),
            text,
            isCompleted: false
        }

        this.props.addTask(newTask)
        this.setState({ text: "" })
    }

    onChangeHandler = event => {
        event.persist()
        this.setState(prev => ({...prev, ...{
            [event.target.name]: event.target.value 
        }}))
    }

    render() {
        return (
            <form className="form-group w-75" onSubmit={this.addSubmitHandler}>
                <input onChange={this.onChangeHandler} type="text" className="form-control" id="title" name="text" value={this.state.text} placeholder="Введите текст новой задачи"/>
                <button type="submit" className="btn btn-primary mt-3">Добавить</button>
            </form>
        )
    }
}

const mapDispatchToProps = {
    addTask
}

export default connect(null, mapDispatchToProps)(TaskForm)