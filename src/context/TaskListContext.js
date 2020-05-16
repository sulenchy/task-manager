import React, { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
    const [ tasks, setTask ] = useState([
        { title: 'do laundry', id: 1 },
        { title: 'wash car', id: 2 },
        { title: 'write some code', id: 3 }
    ])

    const addTask = (title) => {
        setTask([...tasks, {title, id: uuidv4()}])
    }

    const removeTask = id => {
        setTask(tasks.filter(task => task.id !== id))
    }

    const clearList = () => {
        setTask([]);
    }
    
    return <TaskListContext.Provider value={ { tasks, addTask, removeTask, clearList } }>
    { props.children }
    </TaskListContext.Provider>
};

export default TaskListContextProvider;
