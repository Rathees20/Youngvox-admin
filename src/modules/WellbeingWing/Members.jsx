import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, Filter, MoreVertical, Mail, Phone, Activity } from 'lucide-react';

const WellbeingWingMembers = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const members = [
    { id: 'AJ', name: 'Esther Howard', email: 'alice.j@school.edu', role: 'Wing Leader - Student Wellbeing', status: 'active', performance: 95, color: '#1caf5f' },
    { id: 'BM', name: 'Bob Martinez', email: 'bob.m@school.edu', role: 'Wing Leader - Student Wellbeing', status: 'active', performance: 88, color: '#f59e0b' },
    { id: 'CD', name: 'Carol Davis', email: 'carol.d@school.edu', role: 'Wing Leader - Student Wellbeing', status: 'warning', performance: 65, color: '#ef4444' },
    { id: 'DC', name: 'David Chen', email: 'david.c@school.edu', role: 'Wing Leader - Student Wellbeing', status: 'active', performance: 98, color: '#1caf5f' },
    { id: 'EW', name: 'Emma Wilson', email: 'emma.w@school.edu', role: 'Wing Leader - Student Wellbeing', status: 'active', performance: 92, color: '#1caf5f' },
    { id: 'FT', name: 'Frank Thompson', email: 'frank.t@school.edu', role: 'Wing Leader - Student Wellbeing', status: 'active', performance: 85, color: '#f59e0b' },
    { id: 'GL', name: 'Grace Lee', email: 'grace.l@school.edu', role: 'Wing Leader - Student Wellbeing', status: 'active', performance: 94, color: '#1caf5f' },
    { id: 'LA', name: 'Leslie Alexander', email: 'leslie.a@school.edu', role: 'Wing Leader - Student Wellbeing', status: 'active', performance: 94, color: '#1caf5f' },
  ];

  const getPerformanceColor = (value) => {
    if (value >= 90) return '#1caf5f';
    if (value >= 80) return '#f59e0b';
    return '#ef4444';
  };

  return (
    <div className="min-h-screen bg-white animate-in fade-in duration-700 font-['Arial']">
      <div className="p-6 space-y-6 max-w-[1600px] mx-auto w-full">
        <div className="space-y-1">
          <h1 className="text-[20px] font-normal text-[#1a1a1a] tracking-tight">Wing Members</h1>
          <p className="text-[13px] font-normal text-[#555555] opacity-60">Manage and monitor your wing members</p>
        </div>

        <div className="bg-white rounded-[24px] p-5 shadow-sm border border-gray-100/50 flex flex-col lg:flex-row gap-4 items-center">
          <div className="flex-1 relative w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#555555] opacity-40" size={18} />
            <input
              type="text"
              placeholder="Search by name, email, chapter, or role..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#f4f4f5]/60 border border-transparent focus:border-[#eeeeee] focus:bg-white rounded-xl py-3 pl-11 pr-5 text-[13px] font-normal text-[#1a1a1a] outline-none transition-all placeholder:text-[#555555]/30"
            />
          </div>
          <div className="flex gap-4 w-full lg:w-auto">
            <div className="relative group flex-1 lg:flex-none">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#555555] opacity-40">
                <Filter size={16} />
              </div>
              <select className="appearance-none bg-[#f4f4f5]/60 hover:bg-white border border-transparent hover:border-gray-100 rounded-xl py-3 pl-10 pr-10 text-[13px] font-normal text-[#1a1a1a] outline-none transition-all cursor-pointer min-w-[160px] w-full">
                <option>All Roles</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#555555] opacity-40 pointer-events-none" size={16} />
            </div>
            <div className="relative group flex-1 lg:flex-none">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#555555] opacity-40">
                <Filter size={16} />
              </div>
              <select className="appearance-none bg-[#f4f4f5]/60 hover:bg-white border border-transparent hover:border-gray-100 rounded-xl py-3 pl-10 pr-10 text-[13px] font-normal text-[#1a1a1a] outline-none transition-all cursor-pointer min-w-[160px] w-full">
                <option>All Status</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#555555] opacity-40 pointer-events-none" size={16} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-gray-100/50">
          <div className="overflow-x-auto overflow-y-hidden">
            <table className="w-full border-collapse min-w-[1000px]">
              <thead>
                <tr className="border-b border-gray-50 bg-[#fbfbfc]">
                  <th className="px-8 py-5 text-left text-[11px] font-normal text-[#555555] opacity-40 uppercase tracking-[1.5px] w-[25%]">Member</th>
                  <th className="px-8 py-5 text-left text-[11px] font-normal text-[#555555] opacity-40 uppercase tracking-[1.5px] w-[25%]">Role</th>
                  <th className="px-8 py-5 text-left text-[11px] font-normal text-[#555555] opacity-40 uppercase tracking-[1.5px] w-[15%]">Status</th>
                  <th className="px-8 py-5 text-left text-[11px] font-normal text-[#555555] opacity-40 uppercase tracking-[1.5px] w-[25%]">Performance</th>
                  <th className="px-8 py-5 text-right text-[11px] font-normal text-[#555555] opacity-40 uppercase tracking-[1.5px] w-[10%]">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {members.map((member) => {
                  const isExpanded = expandedId === member.id;
                  return (
                    <React.Fragment key={member.id}>
                      <tr 
                        className={`transition-all duration-300 cursor-pointer group ${
                          isExpanded ? 'bg-[#7a7a7a] text-white overflow-hidden' : 'hover:bg-[#fbfbfc] text-[#1a1a1a]'
                        }`}
                        onClick={() => toggleExpand(member.id)}
                      >
                        <td className="px-8 py-5">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-brand-gradient flex items-center justify-center text-white text-[14px] font-normal shadow-lg shadow-[#A82228]/10 group-hover:scale-105 transition-transform">
                              {member.id}
                            </div>
                            <div className="flex flex-col min-w-0">
                              <span className="text-[14px] font-normal leading-tight mb-0.5 truncate">{member.name}</span>
                              <span className={`text-[12px] font-normal truncate ${isExpanded ? 'text-white/60' : 'text-[#555555] opacity-50'}`}>{member.email}</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-8 py-5">
                          <span className={`text-[13px] font-normal leading-snug ${isExpanded ? 'text-white/80' : 'text-[#555555]'}`}>{member.role}</span>
                        </td>
                        <td className="px-8 py-5">
                          {isExpanded ? (
                            <span className="inline-flex items-center px-4 py-1.5 rounded-xl text-[10px] font-normal uppercase tracking-[1px] bg-white/20 text-white">active</span>
                          ) : (
                            <span className={`inline-flex items-center px-4 py-1.5 rounded-xl text-[10px] font-normal uppercase tracking-[1px] ${
                              member.status === 'active' 
                                ? 'bg-[#e7f6ed] text-[#1caf5f]' 
                                : 'bg-[#fff4e6] text-[#FF9800]'
                            }`}>
                              <span className={`w-1.5 h-1.5 rounded-full mr-2 ${
                                member.status === 'active' ? 'bg-[#1caf5f]' : 'bg-[#FF9800]'
                              }`}></span>
                              {member.status}
                            </span>
                          )}
                        </td>
                        <td className="px-8 py-5 text-right">
                          <div className="flex flex-col gap-2.5 max-w-[200px] ml-auto">
                            <div className="flex items-center justify-between">
                              <span className={`text-[12px] font-normal ${isExpanded ? 'text-white/80' : 'text-[#1a1a1a]/80'}`}>{member.performance}%</span>
                            </div>
                            <div className={`h-2 rounded-full overflow-hidden w-full border ${isExpanded ? 'bg-white/20 border-white/10' : 'bg-[#f4f4f5]/80 border-gray-50'}`}>
                              <div 
                                className="h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(0,0,0,0.05)]" 
                                style={{ 
                                  width: `${member.performance}%`, 
                                  backgroundColor: isExpanded ? '#4ade80' : getPerformanceColor(member.performance)
                                }}
                              ></div>
                            </div>
                          </div>
                        </td>
                        <td className="px-8 py-5 text-right">
                          <button className={`p-2.5 hover:bg-white/20 rounded-xl transition-all ${isExpanded ? 'text-white' : 'text-[#555555] opacity-30'} hover:opacity-100`}>
                            {isExpanded ? <ChevronUp size={20} strokeWidth={2.5} /> : <ChevronDown size={20} strokeWidth={2.5} />}
                          </button>
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
                                    <span>(555) 123-4567</span>
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
    </div>
  );
};

export default WellbeingWingMembers;
