import React from 'react';
import { LayoutDashboard, User, Users, FileText, CheckSquare, BarChart2, Heart, Box, Calendar, Settings, LogOut, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { cn } from '../../utils/cn';

const AcademicWingSidebar = ({ onClose }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userRole');
    localStorage.removeItem('wingType');
    navigate('/login');
  };

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/academic-wing-dashboard' },
    { icon: User, label: 'Profile', path: '/academic-wing-profile' },
    { icon: Users, label: 'Members', path: '/academic-wing-members' },
    { icon: FileText, label: 'Reports', path: '/academic-wing-reports', badge: '3' },
    { icon: CheckSquare, label: 'Assessments', path: '/assessments', badge: '2' },
    { icon: BarChart2, label: 'Analytics', path: '/academic-wing-analytics' },
    { icon: Heart, label: 'Chapter Health', path: '/chapter-health' },
    { icon: Box, label: 'Resources', path: '/academic-wing-resources' },
    { icon: Calendar, label: 'Events', path: '/academic-wing-events' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <div className="flex flex-col h-full bg-white select-none font-['Arial']">
      {/* Logo Section */}
      <div className="p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-[40px] h-[40px] bg-[#c72030] rounded-lg flex items-center justify-center text-white font-black text-xl shadow-[0_4px_12px_rgba(168,34,40,0.1)]">
            YV
          </div>
          <div className="flex flex-col">
            <h1 className="text-[17px] font-normal text-[#1a1a1a] tracking-wide leading-none mb-1">YoungVox</h1>
            <p className="text-[9px] font-normal text-[#555555] tracking-widest uppercase opacity-40 leading-none">Chapter chief</p>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="md:hidden p-2 hover:bg-gray-50 rounded-xl text-[#555555] transition-all"
        >
          <X size={20} strokeWidth={3} />
        </button>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto custom-scrollbar">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={cn(
                "flex items-center justify-between gap-3 px-4 py-3 rounded-xl text-[13px] font-normal transition-all duration-300",
                isActive
                   ? "bg-brand-gradient text-white shadow-2xl shadow-[#A82228]/30 scale-[1.02]"
                  : "text-[#555555] hover:bg-gray-50 hover:text-[#1a1a1a]"
              )}
            >
              <div className="flex items-center gap-4">
                <item.icon size={20} className={isActive ? "text-white" : "text-[#555555] opacity-70"} strokeWidth={isActive ? 3 : 2.5} />
                <span className="tracking-wide">{item.label}</span>
              </div>
              {item.badge && (
                <span className={cn(
                  "text-[10px] font-normal rounded-full h-5 w-5 flex items-center justify-center transition-all",
                  isActive ? "bg-white text-[#A82228]" : "bg-brand-gradient text-white"
                )}>
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* User Card */}
      <div className="p-5 mt-auto border-t border-gray-50 flex flex-col gap-3">
        <div className="flex items-center justify-between gap-3 p-3 rounded-[16px] bg-gray-50/80 border border-gray-100/50 group hover:bg-white hover:shadow-xl hover:shadow-dark/5 transition-all duration-500">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-full bg-brand-gradient flex items-center justify-center text-white font-normal text-xs shadow-lg shadow-[#A82228]/20 flex-shrink-0">
              JD
            </div>
            <div className="flex flex-col min-w-0">
              <p className="text-[13px] font-normal text-[#1a1a1a] truncate leading-tight mb-0.5">Jane Doe</p>
              <p className="text-[9px] font-normal text-[#555555] truncate uppercase tracking-tighter opacity-50">Wing Leader</p>
            </div>
          </div>
          <button 
            onClick={handleLogout}
            className="p-2.5 bg-white text-[#A82228] hover:bg-red-50 rounded-lg transition-all duration-300 border border-transparent hover:border-red-100 shadow-sm"
            title="Logout"
          >
            <LogOut size={16} strokeWidth={3} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AcademicWingSidebar;
