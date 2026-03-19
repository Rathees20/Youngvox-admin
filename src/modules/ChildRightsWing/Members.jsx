import React, { useState } from 'react';
import { Search, ChevronDown, Filter, MoreVertical } from 'lucide-react';

const ChildRightsWingMembers = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const members = [
    { id: 'AJ', name: 'Esther Howard', email: 'alice.j@school.edu', role: 'Wing Leader - Child Rights & Social Justice', status: 'active', performance: 95, color: '#1caf5f' },
    { id: 'BM', name: 'Bob Martinez', email: 'bob.m@school.edu', role: 'Wing Leader - Child Rights & Social Justice', status: 'active', performance: 88, color: '#f59e0b' },
    { id: 'CD', name: 'Carol Davis', email: 'carol.d@school.edu', role: 'Wing Leader - Child Rights & Social Justice', status: 'warning', performance: 65, color: '#ef4444' },
    { id: 'DC', name: 'David Chen', email: 'david.c@school.edu', role: 'Wing Leader - Child Rights & Social Justice', status: 'active', performance: 98, color: '#1caf5f' },
    { id: 'EW', name: 'Emma Wilson', email: 'emma.w@school.edu', role: 'Wing Leader - Child Rights & Social Justice', status: 'active', performance: 92, color: '#1caf5f' },
    { id: 'FT', name: 'Frank Thompson', email: 'frank.t@school.edu', role: 'Wing Leader - Child Rights & Social Justice', status: 'active', performance: 85, color: '#f59e0b' },
    { id: 'GL', name: 'Grace Lee', email: 'grace.l@school.edu', role: 'Wing Leader - Child Rights & Social Justice', status: 'active', performance: 94, color: '#1caf5f' },
    { id: 'LA', name: 'Leslie Alexander', email: 'leslie.a@school.edu', role: 'Wing Leader - Child Rights & Social Justice', status: 'active', performance: 94, color: '#1caf5f' },
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
                {members.map((member) => (
                  <tr key={member.id} className="transition-all duration-300 hover:bg-[#fbfbfc] group">
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-brand-gradient flex items-center justify-center text-white text-[14px] font-normal shadow-lg shadow-[#A82228]/10 group-hover:scale-105 transition-transform">
                          {member.id}
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-[14px] font-normal text-[#1a1a1a] leading-tight mb-0.5 truncate">{member.name}</span>
                          <span className="text-[12px] font-normal text-[#555555] opacity-50 truncate">{member.email}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <span className="text-[13px] font-normal text-[#555555] leading-snug">{member.role}</span>
                    </td>
                    <td className="px-8 py-5">
                      <span className={`inline-flex items-center px-4 py-1.5 rounded-xl text-[10px] font-normal uppercase tracking-[1px] ${
                        member.status === 'active' ? 'bg-[#e7f6ed] text-[#1caf5f]' : 'bg-[#fff4e6] text-[#FF9800]'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full mr-2 ${member.status === 'active' ? 'bg-[#1caf5f]' : 'bg-[#FF9800]'}`}></span>
                        {member.status}
                      </span>
                    </td>
                    <td className="px-8 py-5">
                      <div className="flex flex-col gap-2.5 max-w-[200px]">
                        <div className="flex items-center justify-between">
                          <span className="text-[12px] font-normal text-[#1a1a1a]/80">{member.performance}%</span>
                        </div>
                        <div className="h-2 bg-[#f4f4f5]/80 rounded-full overflow-hidden w-full border border-gray-50">
                          <div
                            className="h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(0,0,0,0.05)]"
                            style={{ width: `${member.performance}%`, backgroundColor: getPerformanceColor(member.performance) }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <button className="p-2.5 hover:bg-white hover:shadow-xl rounded-xl transition-all text-[#555555] opacity-30 hover:opacity-100 hover:text-[#1a1a1a] border border-transparent hover:border-gray-100">
                        <ChevronDown size={20} strokeWidth={2.5} className="opacity-40" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildRightsWingMembers;
