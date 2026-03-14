import React from 'react';
import { Bell, Menu } from 'lucide-react';

const Header = ({ onMenuClick }) => {
  const userRole = localStorage.getItem('userRole');
  const userName = userRole === 'chapter-chief' ? 'Sarah Chen' : 'Jane Doe';
  const userRoleLabel = userRole === 'chapter-chief' ? 'Chapter Chief Control' : 'Chapter update dashboard';

  return (
    <header className="h-[70px] bg-white flex items-center justify-between px-4 md:px-8 sticky top-0 z-40 border-b border-[#f3f4f6]">
      <div className="flex items-center gap-4 md:gap-6">
        <button 
          onClick={onMenuClick}
          className="md:hidden text-[#1a1a1a] p-2 hover:bg-gray-50 rounded-xl transition-all"
        >
          <Menu size={24} strokeWidth={2.5} />
        </button>
        <div className="flex flex-col">
          <h2 className="text-[14px] md:text-[16px] font-normal text-[#1a1a1a] tracking-tight leading-none mb-1 md:mb-2 capitalize">Welcome back, {userName}! 👋</h2>
          <p className="text-[10px] md:text-[12px] font-normal text-[#555555] leading-none opacity-40">{userRoleLabel}</p>
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-8">
        <button className="relative p-2.5 md:p-3 hover:bg-gray-50 rounded-2xl transition-all duration-500 group border border-transparent hover:border-gray-100 box-border">
          <Bell size={22} md:size={24} className="text-[#1a1a1a] group-hover:scale-110 transition-transform" strokeWidth={2.5} md:strokeWidth={3} />
          <span className="absolute top-1 right-1 md:top-1.5 md:right-1.5 w-[16px] h-[16px] md:w-[20px] md:h-[20px] bg-[#A82228] text-white text-[9px] md:text-[10px] font-normal rounded-full flex items-center justify-center border-2 border-white shadow-lg">
            3
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
