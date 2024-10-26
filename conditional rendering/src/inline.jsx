import React from 'react';

function App() {
    const isCheckIn = false;
    return (
        <div>
            {isCheckIn ? (<h1>welcome </h1>) : (<h1>not allowed</h1>)}

        </div>

    )


}

export default App;

