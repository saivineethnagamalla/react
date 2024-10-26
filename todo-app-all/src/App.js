import React, { useState } from 'react';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css'; // Optional, for additional styles

function App() {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const removeTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    return (
        <div className="app">
            <Header />
            <TodoInput addTask={addTask} />
            <TodoList tasks={tasks} removeTask={removeTask} />
        </div>
    );
}

export default App;
