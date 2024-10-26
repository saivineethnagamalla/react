import React from 'react';
import './TodoItem.css';

const TodoItem = ({ task, index, removeTask }) => {
    return (
        <li className="todo-item">
            {task} <button onClick={() => removeTask(index)}>Remove</button>
        </li>
    );
};

export default TodoItem;
