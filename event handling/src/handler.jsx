import React from 'react'

function ButtonHandler() {
    function handleButton(name) {
        alert(`button was clicking by, ${name}`);
    }

    return (
        <button onClick={() => handleButton('saivineeth')}>
            click this
        </button>
    )


}
export default ButtonHandler;
