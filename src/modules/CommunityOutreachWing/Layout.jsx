import React from 'react';
import CommunityOutreachWingSidebar from './Sidebar';
import Header from '../../components/Header';
import { cn } from '../../utils/cn';

const CommunityOutreachWingLayout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <div className="flex min-h-screen w-full bg-[#f7f7f8] selection:bg-primary/10 font-['Arial']">
      {/* Sidebar - Desktop: fixed, Mobile: slide-over */}
      <aside className={cn(
        "fixed inset-y-0 left-0 w-[260px] h-screen z-50 border-r border-[#eeeeee] bg-white transition-transform duration-300 ease-in-out md:sticky md:top-0 md:translate-x-0 md:flex-shrink-0",
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <CommunityOutreachWingSidebar onClose={() => setIsMobileMenuOpen(false)} />
      </aside>

      {/* Backdrop for mobile */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <Header onMenuClick={() => setIsMobileMenuOpen(true)} />
        <main className="flex-1 overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
};

export default CommunityOutreachWingLayout;
