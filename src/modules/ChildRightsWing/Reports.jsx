import React from 'react';
import { ChevronDown, Eye, Edit3, Trash2, Calendar, Filter } from 'lucide-react';
import { cn } from '../../utils/cn';

const ReportCard = ({ title, wing, subtext, activity, date, submittedBy, status }) => (
  <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 group hover:shadow-xl transition-all duration-300 relative overflow-hidden">
    <div className={cn(
      "absolute top-4 right-4 px-4 py-1.5 rounded-full text-[10px] font-normal uppercase tracking-wider",
      status === 'Completed' ? 'bg-[#fff4e6] text-[#FF9800]' : 'bg-[#fff1f2] text-[#e11d48]'
    )}>
      {status}
    </div>

    <div className="space-y-4">
      <div className="space-y-1">
        <h4 className="text-[16px] font-normal text-[#1a1a1a] tracking-tight">{title}</h4>
        <span className="inline-block bg-[#e0f0ff] text-[#3b82f6] text-[10px] font-normal px-3 py-1 rounded-lg uppercase tracking-wider">
          {wing}
        </span>
      </div>

      {subtext && (
        <p className="text-[11px] font-normal text-[#e11d48] tracking-tight">{subtext}</p>
      )}

      <div className="space-y-2 py-2">
        <div className="flex items-center gap-2">
          <span className="text-[12px] font-normal text-[#1a1a1a]/50">Activity:</span>
          <span className="text-[12px] font-normal text-[#1a1a1a]">{activity}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[12px] font-normal text-[#1a1a1a]/50">Date:</span>
          <span className="text-[12px] font-normal text-[#1a1a1a]">{date}</span>
        </div>
        <div className="flex items-center gap-2 text-wrap">
          <span className="text-[12px] font-normal text-[#1a1a1a]/50 shrink-0">Submitted by:</span>
          <span className="text-[12px] font-normal text-[#1a1a1a] truncate">{submittedBy}</span>
        </div>
      </div>

      <div className="flex items-center gap-2 pt-2 border-t border-gray-50">
        <button className="flex-1 flex items-center justify-center gap-2 bg-[#f8f9fa] hover:bg-gray-100 text-[#555555] py-2.5 rounded-xl transition-all border border-gray-100 group/btn">
          <Eye size={14} className="group-hover/btn:scale-110 transition-transform" />
          <span className="text-[12px] font-normal">View</span>
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 bg-[#10b981] hover:bg-[#059669] text-white py-2.5 rounded-xl transition-all shadow-md shadow-[#10b981]/20 group/btn">
          <Edit3 size={14} className="group-hover/btn:scale-110 transition-transform" />
          <span className="text-[12px] font-normal">Edit</span>
        </button>
        <button className="w-10 h-10 flex items-center justify-center bg-[#e11d48] hover:bg-[#be123c] text-white rounded-xl transition-all shadow-md shadow-[#e11d48]/20 flex-shrink-0 group/btn">
          <Trash2 size={16} className="group-hover/btn:scale-110 transition-transform" />
        </button>
      </div>
    </div>
  </div>
);

const ChildRightsWingReports = () => {
  const reports = [
    { title: 'Child Rights Awareness', wing: 'Child Rights & Social Justice', subtext: 'SDG 16 - Peace, Justice & Strong Institutions', activity: 'Annual flagship program', date: '11/11/2024', submittedBy: 'Sarah Miller', status: 'Completed' },
    { title: 'Social Justice Campaign', wing: 'Child Rights & Social Justice', activity: 'Monthly poster activity', date: '11/11/2024', submittedBy: 'Sarah Miller', status: 'Review' },
    { title: 'Child Rights Awareness', wing: 'Child Rights & Social Justice', subtext: 'SDG 16 - Peace, Justice & Strong Institutions', activity: 'Annual flagship program', date: '11/11/2024', submittedBy: 'Sarah Miller', status: 'Completed' },
    { title: 'Social Justice Campaign', wing: 'Child Rights & Social Justice', activity: 'Monthly poster activity', date: '11/11/2024', submittedBy: 'Sarah Miller', status: 'Review' },
    { title: 'Social Justice Campaign', wing: 'Child Rights & Social Justice', activity: 'Monthly poster activity', date: '11/11/2024', submittedBy: 'Sarah Miller', status: 'Review' },
    { title: 'Social Justice Campaign', wing: 'Child Rights & Social Justice', activity: 'Monthly poster activity', date: '11/11/2024', submittedBy: 'Sarah Miller', status: 'Review' },
  ];

  const chartData = [
    { label: 'Student Wellbeing', value: 65, color: 'bg-[#b8d8ff]' },
    { label: 'Academic & career', value: 45, color: 'bg-[#b2ffd1]' },
    { label: 'Child Rights & Justice', value: 78, color: 'bg-[#e9d5ff]', highlight: true },
    { label: 'Community Outreach', value: 88, color: 'bg-[#ffedb8]' },
  ];

  return (
    <div className="p-6 space-y-6 animate-in fade-in duration-700 pb-24 max-w-[1600px] mx-auto font-['Arial'] bg-white min-h-screen">
      <div className="space-y-1">
        <h2 className="text-[20px] font-normal text-[#1a1a1a] tracking-tight">Reports Management</h2>
        <p className="text-[13px] font-normal text-[#555555] opacity-60">
          Track & manage all reports seamlessly | <span className="text-[#3b82f6] font-normal">3 Reviewed</span>. <span className="text-[#10b981] font-normal">3 Completed</span>
        </p>
      </div>

      <div className="bg-white rounded-[24px] p-4 shadow-sm border border-gray-100 flex gap-4">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reports.map((report, idx) => (
          <ReportCard key={idx} {...report} />
        ))}
      </div>

      <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-sm border border-gray-100 space-y-10 relative">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-[20px] font-normal text-[#1a1a1a] tracking-tight">Monthly completion progress bar</h3>
            <p className="text-[13px] font-normal text-[#555555] opacity-60">Based on planned activities vs completed reports</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 bg-[#fff1f2] text-[#e11d48] px-4 py-2.5 rounded-xl text-[12px] font-normal border border-[#e11d48]/10 hover:bg-[#ffe4e6] transition-all">
              Choose month <Calendar size={14} />
            </button>
            <div className="relative w-40">
              <select className="appearance-none w-full bg-[#f8f9fa] border-none rounded-xl py-2.5 pl-4 pr-10 text-[12px] font-normal text-[#1a1a1a] outline-none">
                <option>Last 6month</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#555555]/40 pointer-events-none" size={14} />
            </div>
          </div>
        </div>

        <div className="relative pt-12 pb-6 min-h-[400px]">
          <div className="absolute inset-0 flex flex-col justify-between py-12 pointer-events-none">
            {[100, 75, 50, 25, 0].map((label) => (
              <div key={label} className="flex items-center gap-4">
                <span className="w-10 text-[12px] font-normal text-[#555555]/40 text-right">{label}</span>
                <div className="flex-1 border-t border-dashed border-gray-200" />
              </div>
            ))}
          </div>
          <div className="absolute left-[56px] top-6 bottom-4 w-px bg-gray-200" />
          <div className="relative flex justify-around items-end ml-[56px] h-full pt-6">
            {chartData.map((bar, idx) => (
              <div key={idx} className="flex flex-col items-center gap-6 w-1/4 max-w-[200px] h-full justify-end group">
                {bar.highlight && (
                  <div className="absolute top-[-10px] flex flex-col items-center animate-bounce">
                    <span className="text-[14px] font-normal text-[#e11d48]">{bar.value}%</span>
                    <div className="w-3 h-3 bg-[#e11d48] rotate-45 transform -translate-y-1.5" />
                  </div>
                )}
                <div className="relative w-full px-4 flex justify-center items-end h-[300px]">
                  <div
                    className={cn("w-3/4 rounded-t-lg transition-all duration-1000 ease-out shadow-sm", bar.color)}
                    style={{ height: `${bar.value}%` }}
                  />
                </div>
                <p className="text-[12px] font-normal text-[#555555]/60 text-center leading-tight h-10 flex items-center">
                  {bar.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildRightsWingReports;
