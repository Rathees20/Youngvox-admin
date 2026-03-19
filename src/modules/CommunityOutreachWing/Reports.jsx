import React from 'react';
import { Search, ChevronDown, Filter, FileText, Eye, Edit3, Trash2, Calendar } from 'lucide-react';
import { cn } from '../../utils/cn';

const ReportCard = ({ title, wing, activity, date, submitter }) => (
  <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100/50 space-y-6 group hover:shadow-xl transition-all duration-300 relative">
    <div className="flex justify-between items-start">
      <div className="space-y-2">
        <h4 className="text-[16px] font-normal text-[#1a1a1a] tracking-tight leading-tight">{title}</h4>
        <span className="inline-block bg-[#fef3c7] text-[#92400e] text-[10px] font-normal px-2.5 py-1 rounded-lg uppercase tracking-wider">
          {wing}
        </span>
      </div>
      <span className="bg-[#fff1f2] text-[#e11d48] text-[10px] font-normal px-3 py-1 rounded-lg uppercase tracking-widest">
        Review
      </span>
    </div>

    <div className="space-y-3 pt-2">
      <div className="flex items-start gap-2 text-[13px]">
        <span className="text-[#555555] opacity-60 shrink-0">Activity:</span>
        <span className="text-[#1a1a1a] font-normal">{activity}</span>
      </div>
      <div className="flex items-start gap-2 text-[13px]">
        <span className="text-[#555555] opacity-60 shrink-0">Date:</span>
        <span className="text-[#1a1a1a] font-normal">{date}</span>
      </div>
      <div className="flex items-start gap-2 text-[13px]">
        <span className="text-[#555555] opacity-60 shrink-0">Submitted by:</span>
        <span className="text-[#1a1a1a] font-normal">{submitter} (Wing Leader)</span>
      </div>
    </div>

    <div className="flex items-center gap-2 pt-2">
      <button className="flex-1 h-10 flex items-center justify-center bg-gray-50 border border-gray-100 rounded-xl text-[#555555] hover:bg-white hover:shadow-md transition-all">
        <Eye size={16} />
      </button>
      <button className="flex-[2.5] h-10 flex items-center justify-center gap-2 bg-[#1caf5f] text-white rounded-xl text-[12px] font-normal hover:bg-[#16a34a] hover:shadow-lg transition-all shadow-md shadow-green-500/10">
        <Edit3 size={14} /> Edit
      </button>
      <button className="flex-1 h-10 flex items-center justify-center bg-[#ef4444] text-white rounded-xl hover:bg-[#dc2626] hover:shadow-lg transition-all shadow-md shadow-red-500/10">
        <Trash2 size={16} />
      </button>
    </div>
  </div>
);

const CommunityOutreachWingReports = () => {
  const reports = [
    { title: 'Digital Detox', wing: 'Community Outreach & Service', activity: 'Monthly poster activity', date: '11/11/2024', submitter: 'Sarah Miller' },
    { title: 'Digital Detox', wing: 'Community Outreach & Service', activity: 'Monthly poster activity', date: '11/11/2024', submitter: 'Sarah Miller' },
    { title: 'Digital Detox', wing: 'Community Outreach & Service', activity: 'Monthly poster activity', date: '11/11/2024', submitter: 'Sarah Miller' },
    { title: 'Digital Detox', wing: 'Community Outreach & Service', activity: 'Monthly poster activity', date: '11/11/2024', submitter: 'Sarah Miller' },
    { title: 'Digital Detox', wing: 'Community Outreach & Service', activity: 'Monthly poster activity', date: '11/11/2024', submitter: 'Sarah Miller' },
    { title: 'Digital Detox', wing: 'Community Outreach & Service', activity: 'Monthly poster activity', date: '11/11/2024', submitter: 'Sarah Miller' },
  ];

  const chartData = [
    { label: 'Academic & career', value: 65, color: 'bg-[#bfdbfe]' },
    { label: 'Student Wellbeing', value: 45, color: 'bg-[#bbf7d0]' },
    { label: 'Child Rights & Safety', value: 72, color: 'bg-[#f3e8ff]' },
    { label: 'Community Outreach & Services', value: 85, color: 'bg-[#fef3c7]' },
  ];

  return (
    <div className="p-6 space-y-6 animate-in fade-in duration-700 pb-24 max-w-[1600px] mx-auto font-['Arial'] bg-white min-h-screen">
      <div className="space-y-1">
        <h2 className="text-[20px] font-normal text-[#1a1a1a] tracking-tight">Reports Management</h2>
        <p className="text-[13px] font-normal text-[#555555] opacity-60">Track & manage all reports seamlessly | 3 Reviewed. 3 Completed</p>
      </div>

      {/* Filter Bar */}
      <div className="bg-white rounded-[24px] p-4 shadow-sm border border-gray-100/50 flex flex-wrap gap-4">
        <div className="relative group w-48">
          <select className="appearance-none w-full bg-[#f8f9fa] border-none rounded-xl py-3 pl-4 pr-10 text-[13px] font-normal text-[#1a1a1a] outline-none">
            <option>Activity</option>
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

      {/* Reports Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reports.map((report, idx) => (
          <ReportCard key={idx} {...report} />
        ))}
      </div>

      {/* Monthly Completion Progress Section */}
      <div className="bg-white rounded-[40px] p-8 md:p-10 shadow-sm border border-gray-100/50 space-y-12 mt-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          <div className="space-y-1">
            <h3 className="text-[18px] font-normal text-[#1a1a1a] tracking-tight">Monthly completion progress bar</h3>
            <p className="text-[12px] font-normal text-[#555555] opacity-40">Based on planned activities vs completed reports</p>
          </div>
          <div className="flex flex-col gap-3">
             <button className="flex items-center gap-2 bg-white border border-gray-100 text-[#555555] px-5 py-2.5 rounded-xl text-[12px] font-normal hover:bg-gray-50 transition-all shadow-sm">
               Choose month <Calendar size={14} className="text-[#c72030]" />
             </button>
             <div className="relative w-full">
               <select className="appearance-none w-full bg-[#f8f9fa] border-none rounded-xl py-2.5 px-4 text-[12px] font-normal text-[#555555] outline-none cursor-pointer hover:bg-gray-100 transition-all">
                 <option>Last 6month</option>
               </select>
               <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#555555]/40 pointer-events-none" size={14} />
             </div>
          </div>
        </div>

        {/* Bar Chart Visualization */}
        <div className="relative pt-10 min-h-[400px]">
          {/* Y-Axis Guidelines */}
          <div className="absolute inset-0 flex flex-col justify-between py-10 pointer-events-none pl-12 border-l border-gray-100">
            {[100, 75, 50, 25, 0].map((label) => (
              <div key={label} className="flex items-center gap-6">
                <span className="w-8 text-[12px] font-normal text-[#555555]/40 text-right">{label}</span>
                <div className="flex-1 border-t border-dashed border-gray-100" />
              </div>
            ))}
          </div>

          {/* Bars */}
          <div className="relative flex justify-around items-end ml-20 h-full pt-10 pb-10 gap-4">
            {chartData.map((data, idx) => (
              <div key={idx} className="flex flex-col items-center gap-4 w-1/4 h-full justify-end group">
                <div className="relative w-full flex flex-col items-center group/bar">
                  {idx === 2 && (
                    <div className="absolute -top-10 flex flex-col items-center animate-bounce">
                      <span className="text-[12px] font-normal text-[#A82228]">78%</span>
                      <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#A82228]"></div>
                    </div>
                  )}
                  <div 
                    className={cn(
                      "w-24 md:w-32 rounded-t-lg transition-all duration-1000 group-hover/bar:scale-x-105 group-hover/bar:brightness-95 shadow-sm",
                      data.color
                    )} 
                    style={{ height: `${data.value * 3}px` }}
                  />
                </div>
                <p className="text-[12px] font-normal text-[#555555] text-center tracking-tight leading-tight max-w-[120px] h-8">
                  {data.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityOutreachWingReports;
