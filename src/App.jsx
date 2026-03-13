import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layouts/Layout';
import CreateProject from './pages/CreateProject';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Members from './pages/Members';
import Reports from './pages/Reports';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/projects/create" element={<CreateProject />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/members" element={<Members />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/projects" element={<div className="text-2xl font-bold">Projects List (Coming Soon)</div>} />
          <Route path="/users" element={<div className="text-2xl font-bold">Users Management (Coming Soon)</div>} />
          <Route path="/settings" element={<div className="text-2xl font-bold">Settings (Coming Soon)</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
