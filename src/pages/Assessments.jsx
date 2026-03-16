import React from 'react';
import { Search, ChevronDown, Download, FileText, Filter, Eye, ExternalLink, Clipboard } from 'lucide-react';

const Assessments = () => {
  const insights = [
    { title: 'Our School Performance', value: '83%', sub: 'Overall Student Score', color: 'text-purple-600', bgColor: 'bg-purple-50' },
    { title: 'Across 50 Schools (Benchmark)', value: '75%', sub: 'Average score', color: 'text-blue-600', bgColor: 'bg-blue-50' },
    { title: 'Status', value: 'Above Average', sub: '+5% from last month', color: 'text-green-600', bgColor: 'bg-green-50', trend: true },
  ];

  const assessments = [
    {
      title: 'Mental Wellness Workshop - Post Assessment',
      school: 'Greenwood High School',
      category: 'Mental Health & Wellbeing',
      type: 'Post-Assessment',
      status: 'reviewed',
      activityType: 'Monthly',
      activityTitle: 'Career Bingo',
      responses: 40,
      submitted: '11/9/2024',
      by: 'Emma Wilson'
    },
    {
      title: 'Career Guidance Session - Post Assessment',
      school: 'Greenwood High School',
      category: 'Academic & Career Guidance',
      type: 'Post-Assessment',
      status: 'pending',
      activityType: 'Talk Session',
      activityTitle: 'Talk Session',
      responses: 33,
      submitted: '11/12/2024',
      by: 'David Chen'
    },
    {
      title: 'Mental Wellness Workshop - Pre Assessment',
      school: 'Greenwood High School',
      category: 'Mental Health & Wellbeing',
      type: 'Pre-Assessment',
      status: 'reviewed',
      activityType: 'Workshop',
      activityTitle: 'Mental Wellness',
      responses: 42,
      submitted: '11/8/2024',
      by: 'Emma Wilson'
    }
  ];

  return (
    <div className="p-4 max-w-[1600px] mx-auto space-y-6 animate-in fade-in duration-700">
      {/* Overall Insights */}
      <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm space-y-4">
        <div className="flex items-center gap-3">
           <img src="/icon/over all.png" alt="Overall" className="w-[18px] h-[18px]" />
           <h3 className="text-[14px] font-normal text-[#1a1a1a] uppercase tracking-wider">Overall Insights</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {insights.map((stat, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-xl p-5 flex flex-col gap-1 hover:shadow-md transition-all">
              <p className="text-[11px] font-normal text-[#555555] opacity-60 uppercase tracking-tight">{stat.title}</p>
              <div className="flex items-baseline gap-2">
                <h4 className={`text-2xl font-normal ${stat.color}`}>{stat.value}</h4>
                {stat.trend && <span className="text-[10px] font-normal text-green-600">▲ +5%</span>}
              </div>
              <p className="text-[11px] font-normal text-[#555555] opacity-40">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-1">
        <div className="flex flex-col gap-1">
          <h2 className="text-[20px] font-normal text-[#1a1a1a] tracking-tight">Assessment Forms</h2>
          <p className="text-[13px] font-normal text-[#555555] opacity-60">Pre and post assessment forms from all wings • 2 pending review</p>
        </div>
        <button className="bg-brand-gradient text-white px-5 py-2.5 rounded-xl text-[12px] font-normal shadow-lg shadow-[#A82228]/20 flex items-center gap-2 hover:opacity-90 transition-all">
          <Download size={16} />
          Download All Data
        </button>
      </div>

      {/* Filters & Search */}
      <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm space-y-5">
        <div className="flex items-center gap-2 text-[#1a1a1a]">
          <Filter size={16} className="opacity-40" />
          <h4 className="text-[14px] font-normal">Filters & Search</h4>
        </div>
        <div className="space-y-3">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#555555] opacity-30" size={18} />
            <input 
              type="text" 
              placeholder="Search by title, wing, activity, or submitter..." 
              className="w-full bg-gray-50 border-none rounded-xl py-2.5 pl-11 pr-5 text-[13px] font-normal text-[#1a1a1a] outline-none transition-all placeholder:text-[#555555]/30 focus:bg-white focus:ring-2 focus:ring-[#A82228]/10"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {['All Wing', 'Activity', 'All Months', 'All Status'].map((f) => (
              <div key={f} className="relative">
                <select className="w-full appearance-none bg-gray-50 border-none rounded-xl py-2.5 px-5 text-[12px] font-normal text-[#1a1a1a] outline-none cursor-pointer focus:bg-white focus:ring-2 focus:ring-[#A82228]/10">
                  <option>{f}</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 opacity-30 pointer-events-none" size={14} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Assessments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {assessments.map((item, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm relative group hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col h-full">
            <div className="absolute top-5 right-5 flex items-center justify-center w-9 h-9">
               <img src="/icon/pad.png" alt="Pad" className="w-5 h-5 flex-shrink-0" />
            </div>
            
            <div className="space-y-3 mb-5">
               <h3 className="text-[15px] font-normal text-[#1a1a1a] pr-16 leading-tight min-h-[40px]">{item.title}</h3>
               <p className="text-[12px] font-normal text-[#555555] opacity-50">{item.school}</p>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-green-50 text-green-600 text-[10px] font-normal px-2.5 py-1 rounded-lg uppercase tracking-wider">{item.category}</span>
              <div className="flex gap-1.5">
                <span className="bg-purple-50 text-purple-600 text-[9px] font-normal px-2 py-0.5 rounded-md uppercase tracking-widest">{item.type}</span>
                <span className={`text-[9px] font-normal px-2 py-0.5 rounded-md uppercase tracking-widest ${
                  item.status === 'reviewed' ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'
                }`}>
                  {item.status}
                </span>
              </div>
            </div>

            <div className="space-y-2 mb-6 pt-4 border-t border-gray-50">
              <div className="flex justify-between items-center text-[12px]">
                <span className="font-normal text-[#555555] opacity-50 uppercase tracking-tighter">Activity Type:</span>
                <span className="font-normal text-[#1a1a1a]">{item.activityType}</span>
              </div>
              <div className="flex justify-between items-center text-[12px]">
                <span className="font-normal text-[#555555] opacity-50 uppercase tracking-tighter">Title:</span>
                <span className="font-normal text-[#1a1a1a]">{item.activityTitle}</span>
              </div>
              <div className="flex justify-between items-center text-[12px]">
                <span className="font-normal text-[#555555] opacity-50 uppercase tracking-tighter">Responses:</span>
                <span className="font-normal text-[#1a1a1a]">{item.responses}</span>
              </div>
              <div className="flex justify-between items-center text-[12px]">
                <span className="font-normal text-[#555555] opacity-50 uppercase tracking-tighter">Submitted:</span>
                <span className="font-normal text-[#1a1a1a]">{item.submitted}</span>
              </div>
              <div className="flex justify-between items-center text-[12px]">
                <span className="font-normal text-[#555555] opacity-50 uppercase tracking-tighter">By:</span>
                <span className="font-normal text-[#1a1a1a]">{item.by}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-auto">
              <button className="flex-1 flex items-center justify-center gap-2 bg-gray-50 hover:bg-white border border-transparent hover:border-[#eeeeee] py-2.5 rounded-xl text-[11px] font-normal text-[#555555] transition-all group-hover:shadow-sm">
                <Eye size={14} strokeWidth={2.5} />
                View Responses
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 bg-brand-gradient text-white py-2.5 rounded-xl text-[11px] font-normal shadow-lg shadow-[#A82228]/20 hover:brightness-110 transition-all">
                <Download size={14} strokeWidth={2.5} />
                Export
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center pt-4">
         <button className="px-8 py-2.5 rounded-xl border border-[#eeeeee] text-[12px] font-normal text-[#1a1a1a] hover:bg-gray-50 transition-all">
            Load more
         </button>
      </div>
    </div>
  );
};

export default Assessments;
