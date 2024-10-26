import React from 'react';

function Button() {
    function handleButton() {
        alert("button was clicking")
    }

    return (
        <button onClick={handleButton}>
            click on me
        </button>
    )


}
export default Button;