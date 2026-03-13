import React from 'react';
import { Search, ChevronDown, Filter, Calendar, TrendingUp, TrendingDown } from 'lucide-react';

const Analytics = () => {
  const kpiData = [
    { label: 'Chapter success', value: '94%', color: '#1caf5f', bgColor: '#e7f6ed' },
    { label: 'Report submitted', value: '88%', color: '#1caf5f', bgColor: '#e7f6ed' },
    { label: 'Students benefited', value: '76%', color: '#f59e0b', bgColor: '#fff9e6' },
    { label: 'Engagement level', value: '1156', color: '#ef4444', bgColor: '#fee2e2', showEye: true },
  ];

  const comparativeData = [
    { label: 'Academic & career', school: 58, average: 82 },
    { label: 'Student Wellbeing', school: 62, average: 85 },
    { label: 'Child Rights & Safety', school: 55, average: 78 },
    { label: 'Community Outreach & Services', school: 60, average: 87 },
  ];

  const wingInsights = [
    { label: 'Academic & career', avg: '58%', school: '50%', improvement: '+24%', color: 'text-green-600' },
    { label: 'Student Wellbeing', avg: '62%', school: '75%', improvement: '+23%', color: 'text-green-600' },
    { label: 'Child Rights & Safety', avg: '55%', school: '78%', improvement: '+23%', color: 'text-green-600' },
    { label: 'Community Outreach & Services', avg: '60%', school: '87%', improvement: '+27%', color: 'text-green-600' },
  ];

  return (
    <div className="p-4 max-w-7xl mx-auto space-y-6 animate-in fade-in duration-700">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <h2 className="text-[24px] font-normal text-[#1a1a1a] tracking-tight">Analytics & Insights</h2>
        <p className="text-[14px] font-normal text-[#555555] opacity-60">Gain clarity with real-time analytics and track performance</p>
      </div>

      {/* KPI Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiData.map((kpi, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-5 border border-[#eeeeee] shadow-sm flex flex-col gap-4 group hover:shadow-md transition-all">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <p className="text-[11px] font-normal text-[#555555] opacity-50 uppercase tracking-tight">{kpi.label}</p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-[28px] font-normal text-[#1a1a1a]">{kpi.value}</h3>
                  {kpi.showEye && (
                    <div className="flex items-center gap-1 opacity-40">
                      <span className="text-[10px] font-normal">1156</span>
                      <TrendingUp size={12} />
                    </div>
                  )}
                </div>
              </div>
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: kpi.color }} />
            </div>
            <div className="w-full h-1.5 bg-gray-50 rounded-full overflow-hidden">
               <div className="h-full rounded-full" style={{ width: '70%', backgroundColor: kpi.color }} />
            </div>
          </div>
        ))}
      </div>

      {/* Main Chart Section */}
      <div className="bg-white rounded-3xl p-4 md:p-8 border border-[#eeeeee] shadow-sm space-y-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
             <div className="w-6 h-6 rounded-full border-2 border-[#A82228] flex items-center justify-center p-0.5 shrink-0">
                <div className="w-full h-full rounded-full bg-[#A82228]/10 flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-[#A82228]" />
                </div>
             </div>
             <h3 className="text-[15px] md:text-[16px] font-normal text-[#1a1a1a]">Assessment Analytics (Our School Vs 50 schools average)</h3>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
             <div className="relative min-w-[120px]">
                <select className="appearance-none bg-white border border-[#eeeeee] rounded-xl py-2 px-5 pr-10 text-[12px] font-normal text-[#555555] outline-none cursor-pointer w-full">
                    <option>Last 6 month</option>
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 opacity-40" />
             </div>
             <button className="flex items-center gap-3 bg-white border border-[#eeeeee] px-4 py-2 rounded-xl text-[12px] font-normal text-[#1a1a1a]">
                Month
                <Calendar size={14} className="text-[#A82228]" />
             </button>
          </div>
        </div>

        {/* Bar Chart Container */}
        <div className="overflow-x-auto pb-6 custom-scrollbar">
          <div className="relative h-[320px] min-w-[700px] w-full mt-8">
            {/* Y-Axis */}
            <div className="absolute left-0 top-0 h-[280px] flex flex-col justify-between text-[11px] font-normal text-[#555555] opacity-30 select-none pb-1">
               <span>100</span>
               <span>75</span>
               <span>50</span>
               <span>25</span>
               <span>0</span>
            </div>

            <div className="ml-10 h-[280px] border-l border-b border-gray-100 relative">
               {/* Grid Lines */}
               <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                  <div className="w-full h-px border-t border-gray-50 border-dashed" />
                  <div className="w-full h-px border-t border-gray-50 border-dashed" />
                  <div className="w-full h-px border-t border-gray-50 border-dashed" />
               </div>

               {/* Bars */}
               <div className="absolute inset-x-0 bottom-0 flex justify-around px-8 items-end gap-12 h-full">
                  {comparativeData.map((data, i) => (
                    <div key={i} className="flex flex-col items-center gap-3 group">
                       <div className="flex items-end gap-1.5 h-[240px]">
                          <div 
                            className="w-10 rounded-t-md bg-[#94a3b8] transition-all duration-700 hover:opacity-80" 
                            style={{ height: `${data.average}%` }}
                          />
                          <div 
                            className="w-10 rounded-t-md bg-[#A82228] transition-all duration-700 hover:opacity-80" 
                            style={{ height: `${data.school}%` }}
                          />
                       </div>
                       <span className="text-[11px] font-normal text-[#555555] opacity-40 text-center max-w-[100px] leading-tight">
                          {data.label}
                       </span>
                    </div>
                  ))}
               </div>
            </div>

            {/* Legend */}
            <div className="flex justify-center gap-8 mt-12 pt-4">
               <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm bg-[#A82228]" />
                  <span className="text-[12px] font-normal text-[#1a1a1a]">Our School</span>
               </div>
               <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm bg-[#94a3b8]" />
                  <span className="text-[12px] font-normal text-[#1a1a1a]">Benchmark average</span>
               </div>
            </div>
          </div>
        </div>

        {/* Detailed Wing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {wingInsights.map((insight, idx) => (
            <div key={idx} className="bg-gray-50/50 rounded-2xl p-5 border border-transparent hover:border-[#eeeeee] transition-all">
              <h4 className="text-[13px] font-normal text-[#1a1a1a] mb-4">{insight.label}</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-[12px]">
                   <span className="text-[#555555] opacity-50 text-[11px]">Benchmark:</span>
                   <span className="text-[#1a1a1a]">{insight.avg}</span>
                </div>
                <div className="flex justify-between items-center text-[12px]">
                   <span className="text-[#555555] opacity-50 text-[11px]">Our School:</span>
                   <span className="text-[#A82228]">{insight.school}</span>
                </div>
                <div className="pt-2 flex items-center gap-2 text-[11px] font-normal text-green-600">
                   <TrendingUp size={14} />
                   {insight.improvement} improvement
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Insights Drill-down */}
      <div className="bg-white rounded-3xl p-4 md:p-8 border border-[#eeeeee] shadow-sm space-y-6">
        <div className="flex justify-between items-center flex-wrap gap-4">
           <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full border-2 border-[#A82228] flex items-center justify-center p-0.5 shrink-0">
                 <div className="w-full h-full rounded-full bg-[#A82228]/10 flex items-center justify-center" />
              </div>
              <h3 className="text-[16px] font-normal text-[#1a1a1a]">Our School Insights</h3>
           </div>
        </div>

        {/* Filter Toolbar */}
        <div className="bg-gray-50/30 border border-[#eeeeee] rounded-2xl p-4 md:p-5 space-y-4">
          <div className="flex items-center gap-2 text-[#1a1a1a]">
             <span className="text-[13px] font-normal">Filters & Search</span>
          </div>
          <div className="space-y-3">
             <div className="relative">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#555555] opacity-30" />
                <input 
                  type="text" 
                  placeholder="Search by activity..." 
                  className="w-full bg-[#f4f4f5]/60 focus:bg-white border-none rounded-xl py-2.5 pl-12 pr-5 text-[13px] font-normal text-[#1a1a1a] outline-none transition-all"
                />
             </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {['All Wing', 'Activity', 'All Months'].map(f => (
                  <div key={f} className="relative">
                    <select className="w-full appearance-none bg-[#f4f4f5]/60 hover:bg-white border-none rounded-xl py-2 px-5 pr-10 text-[12px] font-normal text-[#1a1a1a] outline-none cursor-pointer">
                        <option>{f}</option>
                    </select>
                    <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 opacity-40 pointer-events-none" />
                  </div>
                ))}
             </div>
          </div>
        </div>

        {/* Categories Drill-down Chart */}
        <div className="flex flex-col lg:flex-row gap-8 items-end pt-8">
           <div className="flex-1 w-full overflow-x-auto custom-scrollbar pb-10">
              <div className="h-[240px] min-w-[300px] border-l border-b border-gray-100 flex items-end justify-center px-8 relative">
                 <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                    <div className="w-full h-px border-t border-gray-50 border-dashed" />
                    <div className="w-full h-px border-t border-gray-50 border-dashed" />
                    <div className="w-full h-px border-t border-gray-50 border-dashed" />
                 </div>
                 <div className="flex items-end gap-2 h-full z-10 pb-1">
                    <div className="w-16 rounded-t-md bg-[#94a3b8]" style={{ height: '52%' }} />
                    <div className="w-16 rounded-t-md bg-[#A82228]" style={{ height: '78%' }} />
                 </div>
                 <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
                    <span className="text-[11px] font-normal text-[#555555] opacity-40 uppercase tracking-widest">Academic</span>
                 </div>
              </div>
           </div>

           <div className="w-full lg:w-[320px] bg-gray-50/50 border border-[#eeeeee] rounded-2xl p-6 space-y-5">
              <h4 className="text-[14px] font-normal text-[#1a1a1a]">Academic & career</h4>
              <div className="space-y-4">
                 <div className="flex justify-between items-center">
                    <span className="text-[11px] font-normal text-[#555555] opacity-50 uppercase tracking-tighter">Pre-assessment:</span>
                    <span className="text-[14px] font-normal text-[#1a1a1a]">58</span>
                 </div>
                 <div className="flex justify-between items-center">
                    <span className="text-[11px] font-normal text-[#555555] opacity-50 uppercase tracking-tighter">Post-assessment:</span>
                    <span className="text-[14px] font-normal text-[#A82228]">82</span>
                 </div>
                 <div className="pt-2 border-t border-gray-100 flex items-center gap-2 text-red-600 text-[11px] font-normal">
                    <TrendingDown size={14} />
                    -24% Decreases
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
