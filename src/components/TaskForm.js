import React, { useContext, useState } from 'react'
import {TaskListContext} from '../context/TaskListContext'

const TaskForm = () => {
    const { addTask, clearList } = useContext(TaskListContext);
    const [title, setTitle] = useState('')

    const handleChnage = event => {
        setTitle(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        addTask(title)
        setTitle('');
    }

    const handleClear = (event) => {
        event.preventDefault();
        clearList();
    }

    return (
        <form className="form" onSubmit={ handleSubmit }>
            <input type="text" className="task-input" placeholder="Add Task..." required value={ title } onChange={ handleChnage } />
            <div className="buttons">
                <button className="btn add-task-btn">Add Task</button>
                <button className="btn clear-btn" onClick={ handleClear }>Clear</button>
            </div>
        </form>
    )
}

export default TaskForm
