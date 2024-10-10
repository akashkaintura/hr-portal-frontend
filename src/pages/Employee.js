import React, { useEffect, useState } from 'react';
import api from '../services/api';

const Employee = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        api.get('/employees').then((response) => {
            setEmployees(response.data);
        }).catch((error) => {
            console.error('Failed to fetch employees:', error);
        });
    }, []);

    return (
        <div>
            <h2>Employee List</h2>
            <ul>
                {employees.map((employee) => (
                    <li key={employee.id}>
                        {employee.name} - {employee.position}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Employee;
