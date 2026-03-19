import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Assessments from './pages/Assessments';
import Resources from './pages/Resources';
import Events from './pages/Events';
import Analytics from './pages/Analytics';
import ChapterChiefDashboard from './pages/ChapterChiefDashboard';
import ChapterChiefProfile from './pages/ChapterChiefProfile';
import ChapterDirectory from './pages/ChapterDirectory';
import ChapterReports from './pages/ChapterReports';
import ChapterEvents from './pages/ChapterEvents';
import ChapterAnalytics from './pages/ChapterAnalytics';
import ChapterResources from './pages/ChapterResources';
import ChapterSettings from './pages/ChapterSettings';
import AcademicWingDashboard from './modules/AcademicWing/Dashboard';
import AcademicWingProfile from './modules/AcademicWing/Profile';
import AcademicWingMembers from './modules/AcademicWing/Members';
import AcademicWingReports from './modules/AcademicWing/Reports';
import AcademicWingEvents from './modules/AcademicWing/Events';
import AcademicWingAnalytics from './modules/AcademicWing/Analytics';
import AcademicWingResources from './modules/AcademicWing/Resources';
import WellbeingWingDashboard from './modules/WellbeingWing/Dashboard';
import WellbeingWingProfile from './modules/WellbeingWing/Profile';
import WellbeingWingMembers from './modules/WellbeingWing/Members';
import WellbeingWingReports from './modules/WellbeingWing/Reports';
import WellbeingWingEvents from './modules/WellbeingWing/Events';
import WellbeingWingAnalytics from './modules/WellbeingWing/Analytics';
import WellbeingWingResources from './modules/WellbeingWing/Resources';
import WellbeingWingLayout from './modules/WellbeingWing/Layout';
import ChildRightsWingDashboard from './modules/ChildRightsWing/Dashboard';
import ChildRightsWingProfile from './modules/ChildRightsWing/Profile';
import ChildRightsWingMembers from './modules/ChildRightsWing/Members';
import ChildRightsWingReports from './modules/ChildRightsWing/Reports';
import ChildRightsWingEvents from './modules/ChildRightsWing/Events';
import ChildRightsWingAnalytics from './modules/ChildRightsWing/Analytics';
import ChildRightsWingResources from './modules/ChildRightsWing/Resources';
import ChildRightsWingLayout from './modules/ChildRightsWing/Layout';
import CommunityOutreachWingDashboard from './modules/CommunityOutreachWing/Dashboard';
import CommunityOutreachWingProfile from './modules/CommunityOutreachWing/Profile';
import CommunityOutreachWingMembers from './modules/CommunityOutreachWing/Members';
import CommunityOutreachWingReports from './modules/CommunityOutreachWing/Reports';
import CommunityOutreachWingEvents from './modules/CommunityOutreachWing/Events';
import CommunityOutreachWingAnalytics from './modules/CommunityOutreachWing/Analytics';
import CommunityOutreachWingResources from './modules/CommunityOutreachWing/Resources';
import CommunityOutreachWingLayout from './modules/CommunityOutreachWing/Layout';






import Layout from './layouts/Layout';
import ChapterChiefLayout from './layouts/ChapterChiefLayout';
import AcademicWingLayout from './modules/AcademicWing/Layout';
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
        <Route path="/chapter-chief-login" element={<Navigate to="/login" replace />} />
        {/* Protected Area */}
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <Routes>
                {/* Chapter Chief Routes - Independent Layout */}
                <Route
                  path="/chapter-chief-dashboard"
                  element={
                    <ChapterChiefLayout>
                      <ChapterChiefDashboard />
                    </ChapterChiefLayout>
                  }
                />
                <Route
                  path="/academic-wing-dashboard"
                  element={
                    <AcademicWingLayout>
                      <AcademicWingDashboard />
                    </AcademicWingLayout>
                  }
                />
                 <Route
                  path="/academic-wing-profile"
                  element={
                    <AcademicWingLayout>
                      <AcademicWingProfile />
                    </AcademicWingLayout>
                  }
                />
                <Route
                  path="/academic-wing-members"
                  element={
                    <AcademicWingLayout>
                      <AcademicWingMembers />
                    </AcademicWingLayout>
                  }
                />
                <Route
                  path="/academic-wing-reports"
                  element={
                    <AcademicWingLayout>
                      <AcademicWingReports />
                    </AcademicWingLayout>
                  }
                />
                <Route
                  path="/academic-wing-events"
                  element={
                    <AcademicWingLayout>
                      <AcademicWingEvents />
                    </AcademicWingLayout>
                  }
                />
                <Route
                  path="/academic-wing-analytics"
                  element={
                    <AcademicWingLayout>
                      <AcademicWingAnalytics />
                    </AcademicWingLayout>
                  }
                />
                <Route
                  path="/academic-wing-resources"
                  element={
                    <AcademicWingLayout>
                      <AcademicWingResources />
                    </AcademicWingLayout>
                  }
                />


                {/* Wellbeing Wing Routes */}
                <Route path="/wellbeing-wing-dashboard" element={<WellbeingWingLayout><WellbeingWingDashboard /></WellbeingWingLayout>} />
                <Route path="/wellbeing-wing-profile" element={<WellbeingWingLayout><WellbeingWingProfile /></WellbeingWingLayout>} />
                <Route path="/wellbeing-wing-members" element={<WellbeingWingLayout><WellbeingWingMembers /></WellbeingWingLayout>} />
                <Route path="/wellbeing-wing-reports" element={<WellbeingWingLayout><WellbeingWingReports /></WellbeingWingLayout>} />
                <Route path="/wellbeing-wing-events" element={<WellbeingWingLayout><WellbeingWingEvents /></WellbeingWingLayout>} />
                <Route path="/wellbeing-wing-analytics" element={<WellbeingWingLayout><WellbeingWingAnalytics /></WellbeingWingLayout>} />
                <Route path="/wellbeing-wing-resources" element={<WellbeingWingLayout><WellbeingWingResources /></WellbeingWingLayout>} />

                {/* Child Rights Wing Routes */}
                <Route path="/child-rights-wing-dashboard" element={<ChildRightsWingLayout><ChildRightsWingDashboard /></ChildRightsWingLayout>} />
                <Route path="/child-rights-wing-profile" element={<ChildRightsWingLayout><ChildRightsWingProfile /></ChildRightsWingLayout>} />
                <Route path="/child-rights-wing-members" element={<ChildRightsWingLayout><ChildRightsWingMembers /></ChildRightsWingLayout>} />
                <Route path="/child-rights-wing-reports" element={<ChildRightsWingLayout><ChildRightsWingReports /></ChildRightsWingLayout>} />
                <Route path="/child-rights-wing-events" element={<ChildRightsWingLayout><ChildRightsWingEvents /></ChildRightsWingLayout>} />
                <Route path="/child-rights-wing-analytics" element={<ChildRightsWingLayout><ChildRightsWingAnalytics /></ChildRightsWingLayout>} />
                <Route path="/child-rights-wing-resources" element={<ChildRightsWingLayout><ChildRightsWingResources /></ChildRightsWingLayout>} />

                {/* Community Outreach Wing Routes */}
                <Route path="/community-outreach-wing-dashboard" element={<CommunityOutreachWingLayout><CommunityOutreachWingDashboard /></CommunityOutreachWingLayout>} />
                <Route path="/community-outreach-wing-profile" element={<CommunityOutreachWingLayout><CommunityOutreachWingProfile /></CommunityOutreachWingLayout>} />
                <Route path="/community-outreach-wing-members" element={<CommunityOutreachWingLayout><CommunityOutreachWingMembers /></CommunityOutreachWingLayout>} />
                <Route path="/community-outreach-wing-reports" element={<CommunityOutreachWingLayout><CommunityOutreachWingReports /></CommunityOutreachWingLayout>} />
                <Route path="/community-outreach-wing-events" element={<CommunityOutreachWingLayout><CommunityOutreachWingEvents /></CommunityOutreachWingLayout>} />
                <Route path="/community-outreach-wing-analytics" element={<CommunityOutreachWingLayout><CommunityOutreachWingAnalytics /></CommunityOutreachWingLayout>} />
                <Route path="/community-outreach-wing-resources" element={<CommunityOutreachWingLayout><CommunityOutreachWingResources /></CommunityOutreachWingLayout>} />



                <Route
                  path="/chapter-chief/profile"
                  element={
                    <ChapterChiefLayout>
                      <ChapterChiefProfile />
                    </ChapterChiefLayout>
                  }
                />
                <Route
                  path="/chapter-chief/directory"
                  element={
                    <ChapterChiefLayout>
                      <ChapterDirectory />
                    </ChapterChiefLayout>
                  }
                />
                <Route
                  path="/chapter-chief/reports"
                  element={
                    <ChapterChiefLayout>
                      <ChapterReports />
                    </ChapterChiefLayout>
                  }
                />
                <Route
                  path="/chapter-chief/events"
                  element={
                    <ChapterChiefLayout>
                      <ChapterEvents />
                    </ChapterChiefLayout>
                  }
                />
                <Route
                  path="/chapter-chief/analytics"
                  element={
                    <ChapterChiefLayout>
                      <ChapterAnalytics />
                    </ChapterChiefLayout>
                  }
                />
                <Route
                  path="/chapter-chief/resources"
                  element={
                    <ChapterChiefLayout>
                      <ChapterResources />
                    </ChapterChiefLayout>
                  }
                />
                <Route
                  path="/chapter-chief/settings"
                  element={
                    <ChapterChiefLayout>
                      <ChapterSettings />
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
