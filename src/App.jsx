import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Assessments from './pages/Assessments';
import Resources from './pages/Resources';
import Events from './pages/Events';
import Analytics from './pages/Analytics';
import ChapterChiefDashboard from './pages/ChapterChiefDashboard';

import Layout from './layouts/Layout';
import ChapterChiefLayout from './layouts/ChapterChiefLayout';
import CreateProject from './pages/CreateProject';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Members from './pages/Members';
import Reports from './pages/Reports';

import Login from './pages/Login';
import ChapterChiefLogin from './pages/ChapterChiefLogin';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/chapter-chief-login" element={<ChapterChiefLogin />} />
        {/* Protected Area */}
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <Routes>
                {/* Chapter Chief Dashboard - Independent Layout */}
                <Route
                  path="/chapter-chief-dashboard"
                  element={
                    <ChapterChiefLayout>
                      <ChapterChiefDashboard />
                    </ChapterChiefLayout>
                  }
                />

                {/* Mentor / Default Routes - Mentor Layout */}
                <Route
                  path="*"
                  element={
                    <Layout>
                      <Routes>
                        <Route path="/" element={<Navigate to="/dashboard" replace />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/projects/create" element={<CreateProject />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/members" element={<Members />} />
                        <Route path="/reports" element={<Reports />} />
                        <Route path="/assessments" element={<Assessments />} />
                        <Route path="/resources" element={<Resources />} />
                        <Route path="/events" element={<Events />} />
                        <Route path="/analytics" element={<Analytics />} />
                        <Route path="/projects" element={<div className="text-2xl font-normal p-8">Projects List (Coming Soon)</div>} />
                        <Route path="/users" element={<div className="text-2xl font-normal p-8">Users Management (Coming Soon)</div>} />
                        <Route path="/settings" element={<div className="text-2xl font-normal p-8">Settings (Coming Soon)</div>} />
                        <Route path="*" element={<Navigate to="/dashboard" replace />} />
                      </Routes>
                    </Layout>
                  }
                />
              </Routes>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
