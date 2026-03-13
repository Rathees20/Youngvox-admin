import React from 'react';
import { LayoutDashboard, User, Users, FileText, CheckSquare, BarChart2, Heart, Box, Calendar, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../utils/cn';

const Sidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: User, label: 'Profile', path: '/profile' },
    { icon: Users, label: 'Members', path: '/members' },
    { icon: FileText, label: 'Reports', path: '/reports', badge: 3 },
    { icon: CheckSquare, label: 'Assessments', path: '/assessments', badge: 2 },
    { icon: BarChart2, label: 'Analytics', path: '/analytics' },
    { icon: Heart, label: 'Chapter Health', path: '/chapter-health' },
    { icon: Box, label: 'Resources', path: '/resources' },
    { icon: Calendar, label: 'Events', path: '/events' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <div className="flex flex-col h-full bg-white select-none">
      {/* Logo Section */}
      <div className="p-8">
        <div className="flex items-center gap-4">
          <div className="w-[50px] h-[50px] bg-[#c72030] rounded-xl flex items-center justify-center text-white font-black text-2xl shadow-[0_8px_16px_rgba(199,32,48,0.2)]">
            YV
          </div>
          <div className="flex flex-col">
            <h1 className="text-[17px] font-[900] text-[#1a1a1a] tracking-tight leading-none mb-1.5">YoungVox</h1>
            <p className="text-[10px] font-bold text-[#555555] uppercase tracking-widest leading-none opacity-60">Mentor Portal</p>
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 px-5 py-6 space-y-1.5 overflow-y-auto custom-scrollbar">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center justify-between gap-3 px-5 py-4 rounded-2xl text-[14px] font-extrabold transition-all duration-300",
                isActive
                  ? "bg-[#c72030] text-white shadow-2xl shadow-[#c72030]/30 scale-[1.02]"
                  : "text-[#555555] hover:bg-gray-50 hover:text-[#1a1a1a]"
              )}
            >
              <div className="flex items-center gap-4">
                <item.icon size={20} className={isActive ? "text-white" : "text-[#555555] opacity-70"} strokeWidth={isActive ? 3 : 2.5} />
                <span className="tracking-tight">{item.label}</span>
              </div>
              {item.badge && (
                <span className={cn(
                  "text-[10px] font-black rounded-full h-5 w-5 flex items-center justify-center transition-all",
                  isActive ? "bg-white text-[#c72030]" : "bg-[#c72030] text-white"
                )}>
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* User Card */}
      <div className="p-6 mt-auto border-t border-gray-50">
        <div className="flex items-center gap-4 p-4 rounded-[20px] bg-gray-50/80 border border-gray-100/50 group hover:bg-white hover:shadow-xl hover:shadow-dark/5 transition-all duration-500 cursor-pointer">
          <div className="w-12 h-12 rounded-full bg-[#c72030] flex items-center justify-center text-white font-black text-sm shadow-lg shadow-[#c72030]/20">
            JD
          </div>
          <div className="flex flex-col min-w-0">
            <p className="text-[14px] font-black text-[#1a1a1a] truncate leading-tight mb-1">Jane Doe</p>
            <p className="text-[10px] font-black text-[#555555] truncate uppercase tracking-tighter opacity-50">Senior Mentor</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
