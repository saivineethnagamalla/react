import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = ({ tasks, removeTask }) => {
    return (
        <ul className="todo-list">
            {tasks.map((task, index) => (
                <TodoItem key={index} task={task} index={index} removeTask={removeTask} />
            ))}
        </ul>
    );
};

export default TodoList;
