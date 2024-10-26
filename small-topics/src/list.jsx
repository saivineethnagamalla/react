import React from 'react';

const names = ['sai', 'vineeth', 'nagamalla'];

function listOfnames() {
    return (
        <ul>
            {
                names.map((name, index) => (
                    <li key={index}> {name}</li>
                ))}

        </ul>
    );
}


export default listOfnames;