import React from 'react';
import { Bell, X } from 'lucide-react';

const Header = () => {
  return (
    <header className="h-[90px] bg-white flex items-center justify-between px-10 sticky top-0 z-40 border-b border-[#f3f4f6]">
      <div className="flex items-center gap-6">
        <button className="text-gray hover:text-dark transition-all duration-300 p-2 hover:bg-gray-50 rounded-xl">
          <X size={22} strokeWidth={3} />
        </button>
        <div className="flex flex-col">
          <h2 className="text-[16px] font-[900] text-[#1a1a1a] tracking-tight leading-none mb-2">Welcome back, Jane! 👋</h2>
          <p className="text-[12px] font-black text-[#555555] leading-none opacity-40">Here's what's happening with your chapters today</p>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <button className="relative p-3 hover:bg-gray-50 rounded-2xl transition-all duration-500 group border border-transparent hover:border-gray-100 box-border">
          <Bell size={24} className="text-[#1a1a1a] group-hover:scale-110 transition-transform" strokeWidth={3} />
          <span className="absolute top-1.5 right-1.5 w-[20px] h-[20px] bg-[#c72030] text-white text-[10px] font-black rounded-full flex items-center justify-center border-2 border-white shadow-lg">
            3
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
