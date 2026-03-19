import React from 'react';
import { Search, ChevronDown, Filter, MoreVertical, ChevronRight } from 'lucide-react';
import { cn } from '../../utils/cn';

const MemberRow = ({ name, email, role, status, performance, color }) => (
  <tr className="group hover:bg-gray-50/50 transition-all duration-300">
    <td className="px-6 py-5">
      <div className="flex items-center gap-4">
        <div className={cn("w-10 h-10 rounded-full flex items-center justify-center text-white font-normal text-xs uppercase shadow-sm", color)}>
          {name.split(' ').map(n => n[0]).join('')}
        </div>
        <div className="flex flex-col">
          <span className="text-[14px] font-normal text-[#1a1a1a] tracking-tight">{name}</span>
          <span className="text-[11px] font-normal text-[#555555] opacity-60">{email}</span>
        </div>
      </div>
    </td>
    <td className="px-6 py-5">
      <div className="flex flex-col">
        <span className="text-[13px] font-normal text-[#1a1a1a] tracking-tight">{role}</span>
        <span className="text-[11px] font-normal text-[#555555] opacity-60">Outreach</span>
      </div>
    </td>
    <td className="px-6 py-5">
      <span className={cn(
        "text-[10px] font-normal px-2.5 py-1 rounded-md uppercase tracking-wider",
        status === 'active' ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
      )}>
        {status}
      </span>
    </td>
    <td className="px-6 py-5">
      <div className="space-y-2 w-32">
        <div className="flex justify-between items-center text-[11px] font-normal text-[#1a1a1a]">
          <span>{performance}%</span>
        </div>
        <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
          <div 
            className={cn(
              "h-full rounded-full transition-all duration-1000",
              performance >= 90 ? "bg-green-500" : performance >= 75 ? "bg-orange-400" : "bg-red-500"
            )} 
            style={{ width: `${performance}%` }} 
          />
        </div>
      </div>
    </td>
    <td className="px-6 py-5 text-right">
      <button className="p-2 hover:bg-gray-100 rounded-lg text-[#555555] opacity-40 hover:opacity-100 transition-all">
        <ChevronDown size={18} />
      </button>
    </td>
  </tr>
);

const CommunityOutreachWingMembers = () => {
  const members = [
    { name: 'Esther Howard', email: 'alice.j@school.edu', role: 'Wing Leader - Student Outreach', status: 'active', performance: 95, color: 'bg-red-900' },
    { name: 'Bob Martinez', email: 'bob.m@school.edu', role: 'Wing Leader - Student Outreach', status: 'active', performance: 88, color: 'bg-red-700' },
    { name: 'Carol Davis', email: 'carol.d@school.edu', role: 'Wing Leader - Student Outreach', status: 'warning', performance: 65, color: 'bg-red-800' },
    { name: 'David Chen', email: 'david.c@school.edu', role: 'Wing Leader - Student Outreach', status: 'active', performance: 98, color: 'bg-red-900' },
    { name: 'Emma Wilson', email: 'emma.w@school.edu', role: 'Wing Leader - Student Outreach', status: 'active', performance: 92, color: 'bg-red-700' },
    { name: 'Frank Thompson', email: 'frank.t@school.edu', role: 'Wing Leader - Student Outreach', status: 'active', performance: 85, color: 'bg-red-800' },
    { name: 'Grace Lee', email: 'grace.l@school.edu', role: 'Wing Leader - Student Outreach', status: 'active', performance: 94, color: 'bg-red-900' },
    { name: 'Leslie Alexander', email: 'leslie@school.edu', role: 'Wing Leader - Student Outreach', status: 'active', performance: 94, color: 'bg-red-700' },
  ];

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
              {members.map((member, idx) => (
                <MemberRow key={idx} {...member} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CommunityOutreachWingMembers;
