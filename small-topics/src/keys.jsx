import React from 'react';

const names = [
    { id: 1, name: 'sony' },
    { id: 2, name: 'vineeth' },
    { id: 3, name: 'nagamalla' }
];

function keyOfnames() {
    return (
        <ul>
            {
                names.map(name => (
                    <li key={name.id}> {name.id} : {name.name}</li>

                ))}

        </ul>
    );

}

export default keyOfnames;