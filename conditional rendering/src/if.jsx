import React from 'react';

function User(props) {
    const check = props.isCheckIn;

    if (check) {
        return <h1> welcome</h1>
    }
    else {
        return <h1> not allowed</h1>
    }
}
function App() {
    return (
        <div>
            <check isCheckIn={true} />;
        </div>

    )


}

export default App;

