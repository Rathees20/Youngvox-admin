import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, Filter, Mail, Phone, Activity } from 'lucide-react';

const ChapterDirectory = () => {
  const members = [
    { id: 'AJ', name: 'Alice Johnson', email: 'alice.j@school.edu', phone: '(555) 123-4567', role: 'Chapter Chief', status: 'active', performance: 95, color: '#A82228', chapter: 'North Valley Chapter' },
    { id: 'BM', name: 'Bob Martinez', email: 'bob.m@school.edu', phone: '(555) 234-5678', role: 'Teacher Mentor', status: 'active', performance: 88, color: '#f59e0b', chapter: 'Lincoln High' },
    { id: 'CD', name: 'Carol Davis', email: 'carol.d@school.edu', phone: '(555) 345-6789', role: 'Secretary', status: 'warning', performance: 65, color: '#ef4444', chapter: 'North Valley Chapter' },
    { id: 'DC', name: 'David Chen', email: 'david.c@school.edu', phone: '(555) 456-7890', role: 'Treasurer', status: 'active', performance: 98, color: '#1caf5f', chapter: 'North Valley Chapter' },
    { id: 'EW', name: 'Emma Wilson', email: 'emma.w@school.edu', phone: '(555) 567-8901', role: 'Wing Leader - Academic', status: 'active', performance: 92, color: '#1caf5f', chapter: 'Lincoln High' },
  ];

  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6 animate-in fade-in duration-700 font-['Arial'] min-h-screen">
      {/* Header */}
      <div className="flex flex-col gap-1 px-2">
        <h2 className="text-[22px] font-bold text-[#1a1a1a]">Chapter Directory</h2>
        <p className="text-[14px] font-normal text-[#555555] opacity-60">Manage and monitor your chapter members</p>
      </div>

      {/* Unified Directory Card */}
      <div className="bg-white rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.02)] border border-[#eeeeee] overflow-hidden">
        {/* Search and Filters Strip */}
        <div className="p-6 flex flex-col md:flex-row gap-4 border-b border-gray-100/50">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#555555] opacity-40" size={16} />
            <input 
              type="text" 
              placeholder="Search by name, email, chapter, or role..." 
              className="w-full bg-[#f4f4f5] border border-transparent focus:bg-white focus:border-[#eeeeee] rounded-xl py-2.5 pl-11 pr-5 text-[13px] font-normal text-[#1a1a1a] outline-none transition-all placeholder:text-[#555555] placeholder:opacity-40"
            />
          </div>
          <div className="flex gap-4">
            <div className="relative">
              <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-[#555555] opacity-40" size={14} />
              <select className="appearance-none bg-[#f4f4f5] border border-transparent hover:border-[#eeeeee] rounded-xl py-2.5 pl-10 pr-10 text-[13px] font-normal text-[#1a1a1a] outline-none transition-all cursor-pointer min-w-[140px]">
                <option>All Roles</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#555555] opacity-40 pointer-events-none" size={14} />
            </div>
            <div className="relative">
              <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-[#555555] opacity-40" size={14} />
              <select className="appearance-none bg-[#f4f4f5] border border-transparent hover:border-[#eeeeee] rounded-xl py-2.5 pl-10 pr-10 text-[13px] font-normal text-[#1a1a1a] outline-none transition-all cursor-pointer min-w-[140px]">
                <option>All Status</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#555555] opacity-40 pointer-events-none" size={14} />
            </div>
          </div>
        </div>

        {/* Members Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/10">
                <th className="px-6 py-5 text-left text-[11px] font-normal text-[#555555] opacity-60 uppercase tracking-widest">Member</th>
                <th className="px-6 py-5 text-left text-[11px] font-normal text-[#555555] opacity-60 uppercase tracking-widest">Role</th>
                <th className="px-6 py-5 text-left text-[11px] font-normal text-[#555555] opacity-60 uppercase tracking-widest">Status</th>
                <th className="px-6 py-5 text-left text-[11px] font-normal text-[#555555] opacity-60 uppercase tracking-widest">Performance</th>
                <th className="px-6 py-5 text-right text-[11px] font-normal text-[#555555] opacity-60 uppercase tracking-widest">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50/50">
              {members.map((member) => {
                const isExpanded = expandedId === member.id;
                return (
                  <React.Fragment key={member.id}>
                    <tr 
                      className={`transition-colors cursor-pointer ${
                        isExpanded ? 'bg-[#7a7a7a] text-white overflow-hidden' : 'hover:bg-gray-50/40 text-[#1a1a1a]'
                      }`}
                      onClick={() => toggleExpand(member.id)}
                    >
                      <td className="px-6 py-6">
                        <div className="flex items-center gap-4">
                          <div 
                            className="w-10 h-10 rounded-full flex items-center justify-center text-white text-[13px] font-bold shadow-sm"
                            style={{ backgroundColor: member.color || '#801a1a' }}
                          >
                            {member.id}
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[14px] font-bold mb-0.5">{member.name}</span>
                            <span className={`text-[13px] font-normal ${isExpanded ? 'text-white/60' : 'text-[#555555] opacity-40'}`}>
                                {member.email}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-6">
                        <span className={`text-[14px] font-normal ${isExpanded ? 'text-white/80' : 'text-[#555555] opacity-80'}`}>
                            {isExpanded ? member.chapter : member.role}
                        </span>
                      </td>
                      <td className="px-6 py-6">
                        {isExpanded ? (
                             <span className="text-[14px] font-normal text-white/80">{member.role}</span>
                        ) : (
                            <span className={`inline-flex items-center px-3 py-1 rounded-md text-[11px] font-normal ${
                                member.status === 'active' 
                                    ? 'bg-[#e7f6ed] text-[#1caf5f]' 
                                    : 'bg-[#fff9e6] text-[#f59e0b]'
                            }`}>
                                {member.status}
                            </span>
                        )}
                      </td>
                      <td className="px-6 py-6 text-center">
                        {isExpanded ? (
                             <span className="inline-flex items-center px-3 py-1 bg-[#e7f6ed] text-[#1caf5f] rounded-lg text-[11px] font-normal">active</span>
                        ) : (
                            <div className="flex flex-col gap-2">
                            <span className="text-[12px] font-normal text-[#555555] opacity-60">{member.performance}%</span>
                            <div className="w-40 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                <div 
                                className="h-full rounded-full transition-all duration-1000 ease-out" 
                                style={{ 
                                    width: `${member.performance}%`, 
                                    backgroundColor: member.performance > 90 ? '#1caf5f' : member.performance > 80 ? '#f59e0b' : '#ef4444' 
                                }}
                                ></div>
                            </div>
                            </div>
                        )}
                      </td>
                      <td className="px-6 py-6 text-right">
                        <div className="flex items-center justify-end gap-3">
                            {isExpanded && (
                                <div className="flex flex-col items-end gap-1">
                                    <span className="text-[11px] font-normal text-white/40">{member.performance}</span>
                                    <div className="w-40 h-1.5 bg-white/20 rounded-full overflow-hidden">
                                        <div className="h-full bg-green-400 rounded-full" style={{ width: `${member.performance}%` }} />
                                    </div>
                                </div>
                            )}
                            <button className={`${isExpanded ? 'text-white' : 'text-[#555555] opacity-40'} hover:opacity-100 transition-opacity ml-4`}>
                                {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                            </button>
                        </div>
                      </td>
                    </tr>
                    
                    {/* Expanded Detail Panel */}
                    {isExpanded && (
                        <tr>
                            <td colSpan={5} className="bg-white p-10">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 animate-in slide-in-from-top-4 duration-300">
                                    {/* Column 1: Contact Info */}
                                    <div className="space-y-6">
                                        <h4 className="text-[14px] font-bold text-[#1a1a1a]">Contact Information</h4>
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3 text-[13px] text-[#555555]">
                                                <Mail size={16} className="opacity-40" />
                                                <span>{member.email}</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-[13px] text-[#555555]">
                                                <Phone size={16} className="opacity-40" />
                                                <span>{member.phone}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Column 2: Activity Summary */}
                                    <div className="space-y-6">
                                        <h4 className="text-[14px] font-bold text-[#1a1a1a]">Activity Summary</h4>
                                        <div className="space-y-4">
                                            <div className="text-[13px] text-[#555555]">
                                                <span>Activities Completed</span>
                                            </div>
                                            <div className="text-[13px] text-[#555555]">
                                                <span>Reports Submitted</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Column 3: Quick Actions */}
                                    <div className="space-y-6">
                                        <h4 className="text-[14px] font-bold text-[#1a1a1a]">Quick Actions</h4>
                                        <button className="flex items-center gap-3 bg-white border border-gray-100 w-full p-4 rounded-xl text-[13px] font-bold text-[#1a1a1a] shadow-sm hover:shadow-md transition-all group/action">
                                            <div className="p-1.5 bg-gray-50 rounded-lg group-hover/action:bg-gray-100 transition-colors">
                                                <Activity size={16} className="text-[#1a1a1a]" />
                                            </div>
                                            View Activity Log
                                        </button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    )}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ChapterDirectory;
