import React from 'react';
import { ChevronDown, Download, FileText, Bell, MessageSquare, Book } from 'lucide-react';

const ResourceCard = ({ title, wing, sdg, activity, deadline }) => (
  <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 group hover:shadow-xl transition-all duration-300 space-y-5">
    <div className="space-y-2">
      <h4 className="text-[16px] font-normal text-[#1a1a1a] tracking-tight">{title}</h4>
      <span className="inline-block bg-[#e0f0ff] text-[#3b82f6] text-[10px] font-normal px-3 py-1 rounded-lg uppercase tracking-wider">{wing}</span>
      {sdg && <p className="text-[11px] font-normal text-[#e11d48] tracking-tight">{sdg}</p>}
    </div>
    <div className="space-y-2 py-2 border-y border-gray-50">
      <div className="flex items-center gap-2">
        <span className="text-[12px] font-normal text-[#1a1a1a]/50">Activity:</span>
        <span className="text-[12px] font-normal text-[#1a1a1a]">{activity}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[12px] font-normal text-[#1a1a1a]/50">Deadline:</span>
        <span className="text-[12px] font-normal text-[#1a1a1a]">{deadline}</span>
      </div>
    </div>
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-[12px] font-normal text-[#1a1a1a] tracking-tight">Manual & Toolkit</p>
        <button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-100 py-2.5 rounded-xl text-[12px] font-normal text-[#555555] hover:bg-gray-50 transition-all group/btn">
          <Download size={14} className="group-hover/btn:scale-110 transition-transform" /> Download PDF
        </button>
      </div>
      <div className="space-y-2">
        <p className="text-[12px] font-normal text-[#1a1a1a] tracking-tight">Service Reporting Guideline</p>
        <button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-100 py-2.5 rounded-xl text-[12px] font-normal text-[#555555] hover:bg-gray-50 transition-all group/btn">
          <Download size={14} className="group-hover/btn:scale-110 transition-transform" /> Download PDF
        </button>
      </div>
    </div>
  </div>
);

const ManualCard = ({ title, size, type = "PDF" }) => (
  <div className="bg-white rounded-[24px] p-5 border border-gray-100 flex items-center justify-between group hover:shadow-xl transition-all duration-300">
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-[#555555] group-hover:bg-[#A82228]/5 group-hover:text-[#A82228] transition-all">
        <FileText size={20} strokeWidth={2.5} />
      </div>
      <div className="space-y-1">
        <h5 className="text-[14px] font-normal text-[#1a1a1a] tracking-tight">{title}</h5>
        <div className="flex items-center gap-2">
          <span className="bg-gray-100 text-[9px] font-normal px-1.5 py-0.5 rounded text-[#555555]">{type}</span>
          <span className="text-[11px] font-normal text-[#555555] opacity-40">{size}</span>
        </div>
      </div>
    </div>
    <button className="flex items-center gap-2 text-[#A82228] hover:bg-[#A82228] hover:text-white px-5 py-2.5 rounded-xl text-[12px] font-normal border border-[#A82228]/10 bg-[#A82228]/5 transition-all">
      <Download size={14} /> Download
    </button>
  </div>
);

const CommunityOutreachWingResources = () => {
  const resources = [
    { title: 'Community Service Toolkit', wing: 'Community Outreach', sdg: 'SDG 11 - Sustainable Cities & Communities', activity: 'Annual flagship program', deadline: '11/11/2024' },
    { title: 'Community Service Toolkit', wing: 'Community Outreach', sdg: 'SDG 11 - Sustainable Cities & Communities', activity: 'Annual flagship program', deadline: '11/11/2024' },
    { title: 'Community Service Toolkit', wing: 'Community Outreach', sdg: 'SDG 11 - Sustainable Cities & Communities', activity: 'Annual flagship program', deadline: '11/11/2024' },
    { title: 'Community Service Toolkit', wing: 'Community Outreach', sdg: 'SDG 11 - Sustainable Cities & Communities', activity: 'Annual flagship program', deadline: '11/11/2024' },
    { title: 'Community Service Toolkit', wing: 'Community Outreach', sdg: 'SDG 11 - Sustainable Cities & Communities', activity: 'Annual flagship program', deadline: '11/11/2024' },
    { title: 'Community Service Toolkit', wing: 'Community Outreach', sdg: 'SDG 11 - Sustainable Cities & Communities', activity: 'Annual flagship program', deadline: '11/11/2024' },
  ];

  const manuals = [
    { title: 'Outreach Team Formation Guideline', size: '2.5 MB' },
    { title: 'Community Engagement Guidelines', size: '1.4 MB' },
    { title: 'Impact Assessment Handbook', size: '920 KB' },
    { title: 'Service Project Code of conduct', size: '1.2 MB' },
    { title: 'Volunteer safety and protection policies', size: '1.1 MB' },
  ];

  return (
    <div className="p-6 space-y-6 animate-in fade-in duration-700 pb-24 max-w-[1600px] mx-auto font-['Arial'] bg-white min-h-screen">
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <div className="space-y-1">
          <h2 className="text-[20px] font-normal text-[#1a1a1a] tracking-tight">Outreach Resource Library</h2>
          <p className="text-[13px] font-normal text-[#555555] opacity-60">Templates and guidelines for your service projects</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-white border border-gray-100 px-5 py-3 rounded-2xl text-[13px] font-normal text-[#555555] shadow-sm hover:bg-gray-50 transition-all relative">
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#A82228] text-white text-[10px] flex items-center justify-center rounded-full border-2 border-white">3</div>
            <Bell size={18} /> Updates
          </button>
          <button className="flex items-center gap-2 bg-[#A82228] text-white px-6 py-3 rounded-2xl text-[13px] font-normal shadow-lg shadow-red-500/20 hover:bg-[#8e1d22] transition-all">
            <MessageSquare size={18} /> Help Desk
          </button>
        </div>
      </div>

      <div className="bg-white rounded-[24px] p-4 shadow-sm border border-gray-100 flex flex-wrap gap-4">
        <div className="relative group w-48">
          <select className="appearance-none w-full bg-[#f8f9fa] border-none rounded-xl py-3 pl-4 pr-10 text-[13px] font-normal text-[#1a1a1a] outline-none">
            <option>All Activities</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#555555]/40 pointer-events-none" size={16} />
        </div>
        <div className="relative group w-48">
          <select className="appearance-none w-full bg-[#f8f9fa] border-none rounded-xl py-3 pl-4 pr-10 text-[13px] font-normal text-[#1a1a1a] outline-none">
            <option>Project Type</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#555555]/40 pointer-events-none" size={16} />
        </div>
        <div className="relative group w-48">
          <select className="appearance-none w-full bg-[#f8f9fa] border-none rounded-xl py-3 pl-4 pr-10 text-[13px] font-normal text-[#1a1a1a] outline-none">
            <option>Month</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#555555]/40 pointer-events-none" size={16} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((res, idx) => (
          <ResourceCard key={idx} {...res} />
        ))}
      </div>

      <div className="bg-[#fff1f2]/60 rounded-[40px] p-8 md:p-10 border border-[#fecdd3]/50 space-y-8">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-2xl bg-[#A82228]/5 flex items-center justify-center">
            <img src="/icon/manuals.png" alt="Manuals" className="w-6 h-6 object-contain" />
          </div>
          <h3 className="text-[18px] font-normal text-[#1a1a1a] tracking-tight">Toolkits & Manuals</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {manuals.map((manual, idx) => (
            <ManualCard key={idx} {...manual} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityOutreachWingResources;
