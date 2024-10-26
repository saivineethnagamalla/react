import React, { useState } from 'react';


const SimpleForm = () => {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim() === '') {
            setError('Input should not be empty');
        } else {
            setError('');
            console.log(`The input value is sumbmited :`, inputValue);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>input</label>
                <input type="text"
                    value={inputValue}
                    onChange={handleChange}
                />
                {error && <p> {error}</p>}
            </div>
            <button type="submit"> Submit</button>
        </form>
    );
};

export default SimpleForm;