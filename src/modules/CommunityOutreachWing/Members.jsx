import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, Filter, MoreVertical, Mail, Phone, Activity } from 'lucide-react';
import { cn } from '../../utils/cn';

const CommunityOutreachWingMembers = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const members = [
    { id: 'EH', name: 'Esther Howard', email: 'alice.j@school.edu', role: 'Wing Leader - Student Outreach', status: 'active', performance: 95, color: 'bg-red-900' },
    { id: 'BM', name: 'Bob Martinez', email: 'bob.m@school.edu', role: 'Wing Leader - Student Outreach', status: 'active', performance: 88, color: 'bg-red-700' },
    { id: 'CD', name: 'Carol Davis', email: 'carol.d@school.edu', role: 'Wing Leader - Student Outreach', status: 'warning', performance: 65, color: 'bg-red-800' },
    { id: 'DC', name: 'David Chen', email: 'david.c@school.edu', role: 'Wing Leader - Student Outreach', status: 'active', performance: 98, color: 'bg-red-900' },
    { id: 'EW', name: 'Emma Wilson', email: 'emma.w@school.edu', role: 'Wing Leader - Student Outreach', status: 'active', performance: 92, color: 'bg-red-700' },
    { id: 'FT', name: 'Frank Thompson', email: 'frank.t@school.edu', role: 'Wing Leader - Student Outreach', status: 'active', performance: 85, color: 'bg-red-800' },
    { id: 'GL', name: 'Grace Lee', email: 'grace.l@school.edu', role: 'Wing Leader - Student Outreach', status: 'active', performance: 94, color: 'bg-red-900' },
    { id: 'LA', name: 'Leslie Alexander', email: 'leslie@school.edu', role: 'Wing Leader - Student Outreach', status: 'active', performance: 94, color: 'bg-red-700' },
  ];

  const getPerformanceColor = (value) => {
    if (value >= 90) return 'bg-green-500';
    if (value >= 75) return 'bg-orange-400';
    return 'bg-red-500';
  };

  return (
    <div className="p-6 space-y-6 animate-in fade-in duration-700 pb-24 max-w-[1600px] mx-auto font-['Arial'] bg-white min-h-screen">
      <div className="space-y-1">
        <h2 className="text-[20px] font-normal text-[#1a1a1a] tracking-tight">Wing Members</h2>
        <p className="text-[13px] font-normal text-[#555555] opacity-60">Manage and monitor your wing members</p>
      </div>

      <div className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100/50 space-y-8">
        {/* Filters and Search Header */}
        <div className="flex flex-col lg:flex-row justify-between gap-6 pb-2 border-b border-gray-50">
          <div className="relative group flex-1 max-w-2xl bg-[#f4f4f5]/50 rounded-xl px-4 flex items-center border border-transparent focus-within:border-[#A82228]/10 focus-within:bg-white transition-all">
            <Search className="text-[#555555] opacity-40 shrink-0" size={18} />
            <input 
              type="text" 
              placeholder="Search by name, email, chapter, or role..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-none py-3.5 pl-4 pr-4 text-[13px] font-normal text-[#1a1a1a] outline-none placeholder:text-[#555555]/30"
            />
          </div>
          
          <div className="flex items-center gap-3">
             <div className="relative group min-w-[160px]">
               <div className="flex items-center justify-between px-5 py-3.5 bg-[#f4f4f5]/50 rounded-xl border border-transparent hover:border-gray-100 cursor-pointer transition-all">
                 <div className="flex items-center gap-2">
                   <Filter size={16} className="text-[#555555] opacity-40" />
                   <span className="text-[13px] font-normal text-[#1a1a1a]">All Roles</span>
                 </div>
                 <ChevronDown size={14} className="text-[#555555] opacity-40 group-hover:opacity-100 transition-all" />
               </div>
             </div>
             
             <div className="relative group min-w-[160px]">
               <div className="flex items-center justify-between px-5 py-3.5 bg-[#f4f4f5]/50 rounded-xl border border-transparent hover:border-gray-100 cursor-pointer transition-all">
                 <div className="flex items-center gap-2">
                   <Filter size={16} className="text-[#555555] opacity-40" />
                   <span className="text-[13px] font-normal text-[#1a1a1a]">All Status</span>
                 </div>
                 <ChevronDown size={14} className="text-[#555555] opacity-40 group-hover:opacity-100 transition-all" />
               </div>
             </div>
          </div>
        </div>

        {/* Table Content */}
        <div className="overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-[10px] font-normal text-[#555555] uppercase tracking-[1.5px] border-b border-gray-100">
                <th className="px-6 py-4 font-normal">Member</th>
                <th className="px-6 py-4 font-normal">Role</th>
                <th className="px-6 py-4 font-normal">Status</th>
                <th className="px-6 py-4 font-normal">Performance</th>
                <th className="px-6 py-4 font-normal text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50/50">
              {members.map((member) => {
                const isExpanded = expandedId === member.id;
                return (
                  <React.Fragment key={member.id}>
                    <tr 
                      className={cn(
                        "group transition-all duration-300 cursor-pointer",
                        isExpanded ? "bg-[#7a7a7a] text-white" : "hover:bg-gray-50/50 text-[#1a1a1a]"
                      )}
                      onClick={() => toggleExpand(member.id)}
                    >
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-4">
                          <div className={cn("w-10 h-10 rounded-full flex items-center justify-center text-white font-normal text-xs uppercase shadow-sm", member.color)}>
                            {member.id}
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[14px] font-normal tracking-tight">{member.name}</span>
                            <span className={cn("text-[11px] font-normal truncate max-w-[150px]", isExpanded ? "text-white/60" : "text-[#555555] opacity-60")}>{member.email}</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex flex-col">
                          <span className={cn("text-[13px] font-normal tracking-tight", isExpanded ? "text-white/80" : "text-[#1a1a1a]")}>{member.role}</span>
                          <span className={cn("text-[11px] font-normal", isExpanded ? "text-white/40" : "text-[#555555] opacity-60")}>Outreach</span>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <span className={cn(
                          "text-[10px] font-normal px-2.5 py-1 rounded-md uppercase tracking-wider",
                          isExpanded 
                            ? "bg-white/20 text-white" 
                            : (member.status === 'active' ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700")
                        )}>
                          {member.status}
                        </span>
                      </td>
                      <td className="px-6 py-5">
                        <div className="space-y-2 w-32">
                          <div className={cn("flex justify-between items-center text-[11px] font-normal", isExpanded ? "text-white/80" : "text-[#1a1a1a]")}>
                            <span>{member.performance}%</span>
                          </div>
                          <div className={cn("h-1.5 w-full rounded-full overflow-hidden", isExpanded ? "bg-white/20" : "bg-gray-100")}>
                            <div 
                              className={cn(
                                "h-full rounded-full transition-all duration-1000",
                                isExpanded ? "bg-green-400" : getPerformanceColor(member.performance)
                              )} 
                              style={{ width: `${member.performance}%` }} 
                            />
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <button className={cn("p-2 rounded-lg transition-all", isExpanded ? "text-white hover:bg-white/20" : "text-[#555555] opacity-40 hover:opacity-100 hover:bg-gray-100")}>
                          {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
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
  );
};

export default CommunityOutreachWingMembers;
