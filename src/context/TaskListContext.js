import React, { createContext, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
    const initialstate = JSON.parse(localStorage.getItem('tasks')) || [];
    const [ tasks, setTask ] = useState(initialstate)

    const [editItem, setEditItem] = useState(null)

    const addTask = (title) => {
        setTask([...tasks, {title, id: uuidv4()}])
    }

    const removeTask = id => {
        setTask(tasks.filter(task => task.id !== id))
    }

    const clearList = () => {
        setTask([]);
    }

    const findItem = id => setEditItem(tasks.find(task => task.id === id))
    

    const editTask = (title, id) => {
        const newTasks = tasks.map(task => task.id === id ? { title, id } : task);
        setTask(newTasks);
        setEditItem(null)
    }

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])


    return <TaskListContext.Provider value={ { tasks, addTask, removeTask, clearList, findItem, editTask, editItem } }>
    { props.children }
    </TaskListContext.Provider>
};

export default TaskListContextProvider;
