import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen w-full bg-[#f7f7f8] selection:bg-primary/10">
      {/* Sidebar - Fixed width */}
      <aside className="w-[260px] min-w-[260px] h-screen sticky top-0 flex-shrink-0 z-50 border-r border-[#eeeeee] bg-white">
        <Sidebar />
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        <main className="flex-1 overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
