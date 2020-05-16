import React, { useContext, useState, useEffect } from 'react'
import {TaskListContext} from '../context/TaskListContext'

const TaskForm = () => {
    const { addTask, clearList, editItem, editTask } = useContext(TaskListContext);
    const [title, setTitle] = useState('')

    const handleChnage = event => {
        setTitle(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        editItem ? editTask(title, editItem.id) : addTask(title)
        setTitle('');
    }

    const handleClear = (event) => {
        event.preventDefault();
        clearList();
    }

    useEffect(() => {
        editItem ? setTitle(editItem.title) : setTitle('');

    }, [editItem])

    return (
        <form className="form" onSubmit={ handleSubmit }>
            <input type="text" className="task-input" placeholder="Add Task..." required value={ title } onChange={ handleChnage } />
            <div className="buttons">
                <button className="btn add-task-btn">{ editItem ? 'Edit Task' : 'Add Task' }</button>
                <button className="btn clear-btn" onClick={ handleClear }>Clear</button>
            </div>
        </form>
    )
}

export default TaskForm
