import React from 'react';

const employes = [
    { id: 101, salary: 40000 },
    { id: 102, salary: 30000 },
    { id: 103, salary: 45000 },
    { id: 104, salary: 46000 },
    { id: 105, salary: 58000 }
]

function totalEmpSalary() {
    const totalSalary = employes.reduce((total, emp) => total + emp.salary, 0);
    return (
        <div>
            <h1> totalSalary: {totalSalary}</h1>
        </div>
    )
}

export default totalEmpSalary;