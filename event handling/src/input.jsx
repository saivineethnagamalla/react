import React, { useState } from 'react';

function Input() {
    const [text, setText] = useState('');

    function handlechange(event) {
        setText(event.target.value);
    }

    return (
        <div>
            <input type="text" value={text} onChange={handlechange} />
            <p> you are type: {text}</p>
        </div>
    )
}

export default Input;