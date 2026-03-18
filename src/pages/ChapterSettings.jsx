import React from 'react';
import { User, Bell, Shield, ChevronRight, LogOut, Globe, Mail, Phone, Camera } from 'lucide-react';

const ChapterSettings = () => {
  const sections = [
    {
      id: 'profile',
      title: 'Profile Settings',
      icon: User,
      color: '#A82228',
      items: [
        { label: 'Personal Information', description: 'Update your name and photo', icon: Camera },
        { label: 'Contact Details', description: 'Email, phone numbers', icon: Phone },
        { label: 'Language & Region', description: 'Change display language', icon: Globe },
      ]
    },
    {
      id: 'notifications',
      title: 'Notification Preferences',
      icon: Bell,
      color: '#1caf5f',
      items: [
        { label: 'Email Notifications', description: 'Configure email alerts', toggle: true },
        { label: 'Push Notifications', description: 'In-app alert settings', toggle: true },
      ]
    },
    {
      id: 'security',
      title: 'Security & Privacy',
      icon: Shield,
      color: '#3b82f6',
      items: [
        { label: 'Change Password', description: 'Update your login password', icon: ChevronRight },
        { label: 'Login History', description: 'Monitor active sessions', icon: ChevronRight },
      ]
    }
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-700 font-['Arial'] min-h-screen">
      {/* Header */}
      <div className="flex flex-col gap-1 px-2">
        <h2 className="text-[22px] font-bold text-[#1a1a1a]">Settings</h2>
        <p className="text-[14px] font-normal text-[#555555] opacity-60">Manage your account preferences and security settings</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Sections List */}
        <div className="lg:col-span-2 space-y-6">
          {sections.map((section) => (
            <div key={section.id} className="bg-white rounded-[24px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.02)] border border-[#eeeeee] space-y-6 transition-all duration-300 hover:shadow-xl hover:shadow-dark/5">
              <div className="flex items-center gap-4">
                <div 
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg"
                  style={{ backgroundColor: section.color }}
                >
                  <section.icon size={22} />
                </div>
                <h3 className="text-[18px] font-bold text-[#1a1a1a]">{section.title}</h3>
              </div>

              <div className="divide-y divide-gray-50/50">
                {section.items.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between py-6 group cursor-pointer first:pt-0 last:pb-0">
                    <div className="flex items-center gap-4">
                      {item.icon && !(item.icon === ChevronRight) && (
                        <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-[#555555] opacity-40 group-hover:bg-white group-hover:shadow-md transition-all">
                          <item.icon size={18} />
                        </div>
                      )}
                      <div className="flex flex-col">
                        <span className="text-[15px] font-bold text-[#1a1a1a] group-hover:text-[#A82228] transition-colors">{item.label}</span>
                        <span className="text-[13px] font-normal text-[#555555] opacity-60">{item.description}</span>
                      </div>
                    </div>

                    {item.toggle ? (
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#1caf5f]"></div>
                      </label>
                    ) : (
                      <ChevronRight size={18} className="text-[#555555] opacity-40 group-hover:translate-x-1 group-hover:text-[#A82228] transition-all" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Mini Profile Card & Quick Info */}
        <div className="space-y-6">
          <div className="bg-white rounded-[24px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.02)] border border-[#eeeeee] flex flex-col items-center text-center gap-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-brand-gradient flex items-center justify-center text-white text-3xl font-bold shadow-2xl shadow-[#A82228]/20">
                SC
              </div>
              <button className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-lg border border-gray-100 text-[#A82228] hover:scale-110 transition-transform">
                <Camera size={16} />
              </button>
            </div>
            
            <div className="space-y-1">
              <h4 className="text-[18px] font-bold text-[#1a1a1a]">Sarah Chen</h4>
              <p className="text-[13px] font-normal text-[#555555] opacity-60">Chapter Chief | North Valley</p>
            </div>

            <div className="w-full pt-6 border-t border-gray-50 flex flex-col gap-3">
              <div className="flex items-center justify-between px-2">
                <span className="text-[12px] font-normal text-[#555555]">Member Since</span>
                <span className="text-[12px] font-bold text-[#1a1a1a]">Oct 2023</span>
              </div>
              <div className="flex items-center justify-between px-2">
                <span className="text-[12px] font-normal text-[#555555]">Chapters Managed</span>
                <span className="text-[12px] font-bold text-[#1a1a1a]">12 Chapters</span>
              </div>
            </div>

            <button className="w-full flex items-center justify-center gap-3 bg-red-50 hover:bg-red-100 py-3.5 rounded-2xl text-[14px] font-bold text-[#A82228] transition-all group">
              <LogOut size={18} className="group-hover:-translate-x-1 transition-transform" />
              Sign Out
            </button>
          </div>

          <div className="bg-[#fef2f2] rounded-[24px] p-8 border border-red-100/50 space-y-4">
            <h4 className="text-[14px] font-bold text-[#A82228]">Need help?</h4>
            <p className="text-[13px] font-normal text-[#A82228] opacity-70 leading-relaxed">
              If you're having trouble with your account settings, our support team is here to assist you 24/7.
            </p>
            <button className="text-[13px] font-bold text-[#A82228] underline underline-offset-4">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterSettings;
