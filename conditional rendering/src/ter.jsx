import React from 'react';

function User(props) {
    return (
        <h1>
            {check.isCheckIn ? "welcom" : "not allowed"}
        </h1>
    )
}
function App() {
    return (
        <div>
            <User isCheckIn={true} />;
        </div>

    )


}

export default App;

