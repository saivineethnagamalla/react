import React from 'react';

const things = ['table', 'chair', 'pillow'];

function filterOfThings() {

    const filterdThings = things.filter(thing => thing.endsWith('e'));

    return (
        <ul>
            {
                filterdThings.map((thing, index) => (
                    <li key={index}> {thing}</li>
                ))}

        </ul>
    );
}


export default filterOfThings;