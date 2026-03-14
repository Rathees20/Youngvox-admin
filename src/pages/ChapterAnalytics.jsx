import React from 'react';
import { Search, ChevronDown, Filter, Calendar, TrendingUp, TrendingDown, Eye } from 'lucide-react';

const ChapterAnalytics = () => {
  const kpiData = [
    { label: 'Chapter success', value: '94%', color: '#1caf5f', bgColor: '#e7f6ed' },
    { label: 'Report submitted', value: '88%', color: '#10b981', bgColor: '#ecfdf5' },
    { label: 'Students benefited', value: '76%', color: '#f59e0b', bgColor: '#fffbeb' },
    { label: 'Engagement level', value: '1156', color: '#ef4444', bgColor: '#fef2f2', showEye: true },
  ];

  const comparativeData = [
    { label: 'Academic & career', school: 58, average: 82 },
    { label: 'Student Wellbeing', school: 62, average: 85 },
    { label: 'Child Rights & Safety', school: 55, average: 78 },
    { label: 'Community Outreach & Services', school: 60, average: 87 },
  ];

  const wingInsights = [
    { label: 'Academic & career', avg: '58%', school: '50%', improvement: '+24%', color: 'text-[#1caf5f]' },
    { label: 'Student Wellbeing', avg: '62%', school: '75%', improvement: '+23%', color: 'text-[#1caf5f]' },
    { label: 'Child Rights & Safety', avg: '55%', school: '78%', improvement: '+23%', color: 'text-[#1caf5f]' },
    { label: 'Community Outreach & Services', avg: '60%', school: '87%', improvement: '+27%', color: 'text-[#1caf5f]' },
  ];

  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-[1600px] mx-auto space-y-8 animate-in fade-in duration-700">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <h2 className="text-[24px] font-black text-[#1a1a1a] tracking-tight">Analytics & Insights</h2>
        <p className="text-[14px] font-bold text-[#555555] opacity-60">Gain clarity with real-time analytics and track performance</p>
      </div>

      {/* KPI Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi, idx) => (
          <div key={idx} className="bg-white rounded-[32px] p-6 border border-[#eeeeee] shadow-sm flex flex-col gap-5 group hover:shadow-2xl transition-all duration-500 overflow-hidden relative">
            <div className="flex items-center justify-between relative z-10">
              <div className="flex flex-col">
                <p className="text-[12px] font-black text-gray-400 uppercase tracking-widest mb-1">{kpi.label}</p>
                <div className="flex items-baseline gap-3">
                  <h3 className="text-[32px] font-black text-[#1a1a1a] tracking-tighter">{kpi.value}</h3>
                  {kpi.showEye && (
                    <div className="flex items-center gap-2 text-gray-400">
                      <span className="text-[11px] font-black tracking-tight">1156</span>
                      <Eye size={16} />
                    </div>
                  )}
                </div>
              </div>
              <div className="w-4 h-4 rounded-full shadow-lg shadow-black/5" style={{ backgroundColor: kpi.color }} />
            </div>
            <div className="w-full h-2 bg-gray-50 rounded-full overflow-hidden relative z-10">
               <div className="h-full rounded-full transition-all duration-1000 ease-out" style={{ width: '70%', backgroundColor: kpi.color }} />
            </div>
          </div>
        ))}
      </div>

      {/* Main Chart Section */}
      <div className="bg-white rounded-[40px] p-8 md:p-12 border border-[#eeeeee] shadow-sm space-y-12">
        <div className="flex items-center justify-between flex-wrap gap-8">
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 rounded-full border-[3px] border-[#A82228] flex items-center justify-center p-1 shrink-0">
                <div className="w-full h-full rounded-full bg-[#A82228]/10 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#A82228]" />
                </div>
             </div>
             <h3 className="text-[18px] md:text-[20px] font-black text-[#1a1a1a] tracking-tight">Assessment Analytics (Our School Vs 50 schools average)</h3>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
             <div className="relative min-w-[140px]">
                <select className="appearance-none bg-[#f4f4f5]/60 hover:bg-white border border-transparent hover:border-[#eeeeee] rounded-2xl py-3 px-6 pr-12 text-[12px] font-black text-[#1a1a1a] outline-none transition-all cursor-pointer w-full shadow-sm">
                    <option>Last 6 month</option>
                </select>
                <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
             </div>
             <button className="flex items-center gap-4 bg-white border border-[#eeeeee] px-6 py-3 rounded-2xl text-[12px] font-black text-[#1a1a1a] shadow-sm hover:shadow-md transition-all uppercase tracking-widest">
                Choose month
                <Calendar size={16} className="text-[#A82228]" />
             </button>
          </div>
        </div>

        {/* Bar Chart Container */}
        <div className="overflow-x-auto pb-10 custom-scrollbar">
          <div className="relative h-[400px] min-w-[900px] w-full pt-16">
            {/* Y-Axis */}
            <div className="absolute left-0 top-0 h-[320px] flex flex-col justify-between text-[14px] font-black text-gray-300 select-none pb-2">
               <span>100</span>
               <span>75</span>
               <span>50</span>
               <span>25</span>
               <span className="translate-y-2">0</span>
            </div>

            <div className="ml-14 h-[320px] border-l-2 border-b-2 border-gray-100 relative">
               {/* Grid Lines */}
               <div className="absolute inset-x-0 bottom-0 h-full flex flex-col justify-between pointer-events-none">
                  <div className="w-full border-t border-gray-100 border-dashed" />
                  <div className="w-full border-t border-gray-100 border-dashed" />
                  <div className="w-full border-t border-gray-100 border-dashed" />
                  <div className="w-full h-px" />
               </div>

               {/* Bars */}
               <div className="absolute inset-x-0 bottom-0 flex justify-around px-12 items-end gap-16 h-full">
                  {comparativeData.map((data, i) => (
                    <div key={i} className="flex flex-col items-center gap-6 group">
                       <div className="flex items-end gap-3 h-[280px]">
                          <div 
                            className="w-14 rounded-t-xl bg-[#94a3b8] transition-all duration-1000 shadow-sm group-hover:bg-[#8697ae]" 
                            style={{ height: `${data.average}%` }}
                          />
                          <div 
                            className="w-14 rounded-t-xl bg-[#A82228] transition-all duration-1000 shadow-lg shadow-[#A82228]/20 group-hover:brightness-110" 
                            style={{ height: `${data.school}%` }}
                          />
                       </div>
                       <span className="text-[12px] font-black text-gray-400 uppercase tracking-widest text-center max-w-[140px] leading-tight opacity-60">
                          {data.label}
                       </span>
                    </div>
                  ))}
               </div>
            </div>

            {/* Legend */}
            <div className="flex justify-center gap-10 mt-20">
               <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-md bg-[#A82228] shadow-lg shadow-[#A82228]/20" />
                  <span className="text-[13px] font-black text-[#1a1a1a] uppercase tracking-widest">Our School</span>
               </div>
               <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-md bg-[#94a3b8] shadow-md" />
                  <span className="text-[13px] font-black text-[#1a1a1a] uppercase tracking-widest">Benchmark average</span>
               </div>
            </div>
          </div>
        </div>

        {/* Detailed Wing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-gray-50">
          {wingInsights.map((insight, idx) => (
            <div key={idx} className="bg-[#f8fafb] rounded-[32px] p-7 border border-transparent hover:border-[#eeeeee] hover:bg-white hover:shadow-2xl transition-all duration-500 group">
              <h4 className="text-[14px] font-black text-[#1a1a1a] mb-6 tracking-tight group-hover:text-[#A82228] transition-colors">{insight.label}</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                   <span className="text-gray-400 font-bold text-[11px] uppercase tracking-widest">Benchmark:</span>
                   <span className="text-[#1a1a1a] font-black text-[14px]">{insight.avg}</span>
                </div>
                <div className="flex justify-between items-center">
                   <span className="text-gray-400 font-bold text-[11px] uppercase tracking-widest">Our School:</span>
                   <span className="text-[#A82228] font-black text-[14px]">{insight.school}</span>
                </div>
                <div className="pt-4 flex items-center gap-2 text-[12px] font-black text-[#1caf5f] uppercase tracking-widest">
                   <TrendingUp size={16} strokeWidth={3} />
                   {insight.improvement} improvement
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Insights Drill-down */}
      <div className="bg-white rounded-[40px] p-8 md:p-12 border border-[#eeeeee] shadow-sm space-y-12">
        <div className="flex justify-between items-center flex-wrap gap-8">
           <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full border-[3px] border-[#A82228] flex items-center justify-center p-1 shrink-0">
                 <div className="w-full h-full rounded-full bg-[#A82228]/10 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#A82228]" />
                 </div>
              </div>
              <h3 className="text-[18px] md:text-[20px] font-black text-[#1a1a1a] tracking-tight">Our School Insights</h3>
           </div>
        </div>

        {/* Filter Toolbar */}
        <div className="bg-[#f8fafb] border border-[#eeeeee] rounded-[32px] p-8 md:p-10 space-y-8 shadow-inner">
          <div className="flex items-center gap-3 text-[#1a1a1a] opacity-60">
             <Filter size={18} />
             <span className="text-[13px] font-black uppercase tracking-widest">Filters & Search</span>
          </div>
          <div className="space-y-6">
             <div className="relative group">
                <Search size={22} className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 transition-colors group-focus-within:text-[#A82228]" />
                <input 
                  type="text" 
                  placeholder="Search by title, wing, activity, or submitter..." 
                  className="w-full bg-white border border-[#eeeeee] rounded-3xl py-4 pl-16 pr-8 text-[14px] font-bold text-[#1a1a1a] outline-none shadow-sm focus:ring-4 focus:ring-[#A82228]/5 focus:border-[#A82228]/20 transition-all"
                />
             </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {['All Wing', 'Activity', 'All Months'].map(f => (
                  <div key={f} className="relative">
                    <select className="w-full appearance-none bg-white border border-[#eeeeee] hover:border-[#A82228]/20 rounded-[20px] py-3.5 px-6 pr-12 text-[13px] font-black text-[#1a1a1a] outline-none cursor-pointer shadow-sm transition-all focus:ring-4 focus:ring-[#A82228]/5">
                        <option>{f}</option>
                    </select>
                    <ChevronDown size={14} className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                ))}
             </div>
          </div>
        </div>

        {/* Categories Drill-down Chart */}
        <div className="flex flex-col lg:flex-row gap-12 items-end pt-8">
           <div className="flex-1 w-full overflow-x-auto custom-scrollbar pb-12">
              <div className="h-[280px] min-w-[500px] border-l-2 border-b-2 border-gray-100 flex items-end justify-center px-12 relative">
                 <div className="absolute inset-x-0 bottom-0 h-full flex flex-col justify-between pointer-events-none">
                    <div className="w-full border-t border-gray-100 border-dashed" />
                    <div className="w-full border-t border-gray-100 border-dashed" />
                    <div className="w-full border-t border-gray-100 border-dashed" />
                    <div className="w-full h-px" />
                 </div>
                 <div className="flex items-end gap-5 h-full z-10 pb-0.5">
                    <div className="w-20 rounded-t-xl bg-[#94a3b8] transition-all duration-1000 shadow-md" style={{ height: '52%' }} />
                    <div className="w-20 rounded-t-xl bg-[#A82228] transition-all duration-1000 shadow-lg shadow-[#A82228]/20" style={{ height: '78%' }} />
                 </div>
                 <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
                    <span className="text-[12px] font-black text-gray-400 uppercase tracking-widest py-2 px-6 bg-gray-50 rounded-full">Academic</span>
                 </div>
              </div>
           </div>

           <div className="w-full lg:w-[400px] bg-[#f8fafb] border border-[#eeeeee] rounded-[32px] p-10 space-y-8 shadow-sm relative overflow-hidden group">
              <div className="relative z-10 flex flex-col gap-1">
                <h4 className="text-[18px] font-black text-[#1a1a1a] tracking-tight group-hover:text-[#A82228] transition-colors">Academic & career</h4>
              </div>
              <div className="space-y-6 relative z-10">
                 <div className="flex justify-between items-center text-[12px] font-bold">
                    <span className="text-gray-400 uppercase tracking-widest">Pre - assessment response:</span>
                    <span className="text-[20px] font-black text-[#1a1a1a]">58</span>
                 </div>
                 <div className="flex justify-between items-center text-[12px] font-bold">
                    <span className="text-gray-400 uppercase tracking-widest">Post - assessment response:</span>
                    <span className="text-[20px] font-black text-[#A82228]">82</span>
                 </div>
                 <div className="pt-6 border-t border-gray-200 flex items-center gap-3 text-red-500 text-[13px] font-black uppercase tracking-widest">
                    <TrendingDown size={20} className="animate-bounce" />
                    -24% Decreases
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterAnalytics;
