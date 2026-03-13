import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layouts/Layout';
import CreateProject from './pages/CreateProject';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Members from './pages/Members';
import Reports from './pages/Reports';

import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <Layout>
                <Routes>
                  <Route path="/" element={<Navigate to="/dashboard" replace />} />
                  <Route path="/projects/create" element={<CreateProject />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/members" element={<Members />} />
                  <Route path="/reports" element={<Reports />} />
                  <Route path="/projects" element={<div className="text-2xl font-bold p-8">Projects List (Coming Soon)</div>} />
                  <Route path="/users" element={<div className="text-2xl font-bold p-8">Users Management (Coming Soon)</div>} />
                  <Route path="/settings" element={<div className="text-2xl font-bold p-8">Settings (Coming Soon)</div>} />
                </Routes>
              </Layout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
