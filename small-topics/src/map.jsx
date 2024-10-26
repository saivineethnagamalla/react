import React from 'react';

const things = ['table', 'chair', 'pillow'];

function mapOfThings() {
    return (
        <ul>
            {
                things.map((thing, index) => (
                    <li key={index}> {thing}</li>
                ))}

        </ul>
    );
}


export default mapOfThings;