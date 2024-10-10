import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Employee from './pages/Employee';
import LeaveManagement from './pages/LeaveManagement';
import Payroll from './pages/Payroll';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employees" element={<Employee />} />
        <Route path="/leave-management" element={<LeaveManagement />} />
        <Route path="/payroll" element={<Payroll />} />
      </Routes>
    </Router>
  );
}

export default App;
