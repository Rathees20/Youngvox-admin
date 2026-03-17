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
              {members.map((member) => (
                <tr key={member.id} className="hover:bg-gray-50/40 transition-colors group">
                  <td className="px-6 py-6">
                    <div className="flex items-center gap-4">
                      <div 
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white text-[13px] font-bold shadow-sm"
                        style={{ backgroundColor: '#801a1a' }}
                      >
                        {member.id}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[14px] font-bold text-[#1a1a1a] mb-0.5">{member.name}</span>
                        <span className="text-[13px] font-normal text-[#555555] opacity-40">{member.email}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <span className="text-[14px] font-normal text-[#555555] opacity-80">{member.role}</span>
                  </td>
                  <td className="px-6 py-6">
                    <span className={`inline-flex items-center px-3 py-1 rounded-md text-[11px] font-normal ${
                      member.status === 'active' 
                        ? 'bg-[#e7f6ed] text-[#1caf5f]' 
                        : 'bg-[#fff9e6] text-[#f59e0b]'
                    }`}>
                      {member.status}
                    </span>
                  </td>
                  <td className="px-6 py-6">
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
                  </td>
                  <td className="px-6 py-6 text-right">
                    <button className="text-[#555555] opacity-40 hover:opacity-100 transition-opacity">
                      <ChevronDown size={18} />
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
