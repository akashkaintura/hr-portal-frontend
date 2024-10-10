import React, { useEffect, useState } from 'react';
import api from '../services/api';

const Payroll = () => {
    const [payrolls, setPayrolls] = useState([]);

    useEffect(() => {
        api.get('/payrolls').then((response) => {
            setPayrolls(response.data);
        });
    }, []);

    const payEmployee = async (id) => {
        try {
            await api.patch(`/payrolls/${id}/pay`);
            setPayrolls(payrolls.map((record) =>
                record.id === id ? { ...record, status: 'Paid' } : record
            ));
            alert('Payroll processed successfully');
        } catch (error) {
            console.error('Failed to process payroll:', error);
        }
    };

    return (
        <div>
            <h2>Payroll</h2>
            <ul>
                {payrolls.map((record) => (
                    <li key={record.id}>
                        {record.month} - ${record.salary} - {record.status}
                        {record.status === 'Pending' && (
                            <button onClick={() => payEmployee(record.id)}>Pay</button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Payroll;
