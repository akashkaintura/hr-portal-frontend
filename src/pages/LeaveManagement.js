import React, { useState, useEffect } from 'react';
import api from '../services/api';

const LeaveManagement = () => {
    const [leaves, setLeaves] = useState([]);
    const [reason, setReason] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    useEffect(() => {
        api.get('/leaves').then((response) => {
            setLeaves(response.data);
        });
    }, []);

    const applyLeave = async () => {
        try {
            await api.post('/leaves', { reason, startDate, endDate });
            alert('Leave applied successfully');
            setLeaves([...leaves, { reason, startDate, endDate, status: 'Pending' }]);
        } catch (error) {
            console.error('Failed to apply leave:', error);
        }
    };

    return (
        <div>
            <h2>Leave Management</h2>
            <ul>
                {leaves.map((leave, index) => (
                    <li key={index}>
                        {leave.reason} from {leave.startDate} to {leave.endDate} - {leave.status}
                    </li>
                ))}
            </ul>
            <div>
                <h3>Apply for Leave</h3>
                <input
                    placeholder="Reason"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                />
                <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                />
                <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                />
                <button onClick={applyLeave}>Apply</button>
            </div>
        </div>
    );
};

export default LeaveManagement;
