import React from 'react';
import { Search, ChevronDown, Filter } from 'lucide-react';

const ChapterDirectory = () => {
  const members = [
    { id: 'AJ', name: 'Esther Howard', email: 'alice.j@school.edu', role: 'Teacher Mentor', status: 'active', performance: 95, color: '#1caf5f' },
    { id: 'BM', name: 'Bob Martinez', email: 'bob.m@school.edu', role: 'Teacher Mentor', status: 'active', performance: 88, color: '#f59e0b' },
    { id: 'CD', name: 'Carol Davis', email: 'carol.d@school.edu', role: 'Secretary', status: 'warning', performance: 65, color: '#ef4444' },
    { id: 'DC', name: 'David Chen', email: 'david.c@school.edu', role: 'Treasurer', status: 'active', performance: 98, color: '#1caf5f' },
    { id: 'EW', name: 'Emma Wilson', email: 'emma.w@school.edu', role: 'Wing Leader - Academic & Career Guidance', status: 'active', performance: 92, color: '#1caf5f' },
    { id: 'FT', name: 'Frank Thompson', email: 'frank.t@school.edu', role: 'Wing Leader - Students Well-being', status: 'active', performance: 85, color: '#f59e0b' },
    { id: 'GL', name: 'Grace Lee', email: 'grace.l@school.edu', role: 'Wing Leader - Child Rights & Social Justice', status: 'active', performance: 94, color: '#1caf5f' },
    { id: 'LA', name: 'Leslie Alexander', email: 'leslie@school.edu', role: 'Wing Leader - Community Outreach & Services', status: 'active', performance: 94, color: '#1caf5f' },
  ];

  return (
    <div className="p-4 max-w-7xl mx-auto space-y-4 animate-in fade-in duration-700">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <h2 className="text-[24px] font-black text-[#1a1a1a] tracking-tight">Chapter Directory</h2>
        <p className="text-[14px] font-bold text-[#555555] opacity-50">Manage and monitor your chapter members</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#eeeeee] flex flex-col md:flex-row gap-3">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#555555] opacity-40" size={18} />
          <input 
            type="text" 
            placeholder="Search by name, email, chapter, or role..." 
            className="w-full bg-[#f4f4f5]/60 border border-transparent focus:border-[#eeeeee] focus:bg-white rounded-xl py-2.5 pl-11 pr-5 text-[13px] font-bold text-[#1a1a1a] outline-none transition-all placeholder:text-[#555555]/40"
          />
        </div>
        <div className="flex gap-3">
          <div className="relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#555555] opacity-40">
              <Filter size={14} />
            </div>
            <select className="appearance-none bg-[#f4f4f5]/60 hover:bg-white border border-transparent hover:border-[#eeeeee] rounded-xl py-2.5 pl-10 pr-10 text-[13px] font-bold text-[#1a1a1a] outline-none transition-all cursor-pointer min-w-[140px]">
              <option>All Roles</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#555555] opacity-40 pointer-events-none" size={14} />
          </div>
          <div className="relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#555555] opacity-40">
              <Filter size={14} />
            </div>
            <select className="appearance-none bg-[#f4f4f5]/60 hover:bg-white border border-transparent hover:border-[#eeeeee] rounded-xl py-2.5 pl-10 pr-10 text-[13px] font-bold text-[#1a1a1a] outline-none transition-all cursor-pointer min-w-[140px]">
              <option>All Status</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#555555] opacity-40 pointer-events-none" size={14} />
          </div>
        </div>
      </div>

      {/* Members Table */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#eeeeee]">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-[800px] md:min-w-full">
            <thead>
              <tr className="border-b border-gray-50 bg-gray-50/30">
                <th className="px-5 py-5 text-left text-[11px] font-black text-[#555555] opacity-40 uppercase tracking-widest">Member</th>
                <th className="px-5 py-5 text-left text-[11px] font-black text-[#555555] opacity-40 uppercase tracking-widest">Role</th>
                <th className="px-5 py-5 text-left text-[11px] font-black text-[#555555] opacity-40 uppercase tracking-widest">Status</th>
                <th className="px-5 py-5 text-left text-[11px] font-black text-[#555555] opacity-40 uppercase tracking-widest">Performance</th>
                <th className="px-5 py-5 text-right text-[11px] font-black text-[#555555] opacity-40 uppercase tracking-widest">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {members.map((member) => (
                <tr key={member.id} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-brand-gradient flex items-center justify-center text-white text-[14px] font-black shadow-lg shadow-[#A82228]/10 group-hover:scale-105 transition-transform">
                        {member.id}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[14px] font-black text-[#1a1a1a] leading-tight mb-0.5">{member.name}</span>
                        <span className="text-[12px] font-bold text-[#555555] opacity-50">{member.email}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <span className="text-[14px] font-bold text-[#555555] opacity-70">{member.role}</span>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`inline-flex items-center px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest ${
                      member.status === 'active' 
                        ? 'bg-[#e7f6ed] text-[#1caf5f]' 
                        : 'bg-[#fff9e6] text-[#f59e0b]'
                    }`}>
                      {member.status}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex flex-col gap-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[13px] font-black text-[#1a1a1a]">{member.performance}%</span>
                      </div>
                      <div className="w-36 h-2 bg-gray-100 rounded-full overflow-hidden relative">
                        <div 
                          className="h-full rounded-full transition-all duration-1000 ease-out" 
                          style={{ width: `${member.performance}%`, backgroundColor: member.color }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-4 text-right">
                    <button className="p-2.5 hover:bg-white hover:shadow-xl hover:shadow-dark/5 rounded-2xl transition-all text-[#555555] hover:text-[#1a1a1a] group-hover:scale-110">
                      <ChevronDown size={22} strokeWidth={3} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ChapterDirectory;
