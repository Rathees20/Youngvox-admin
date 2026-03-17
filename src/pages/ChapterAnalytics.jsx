import React from 'react';
import { ChevronDown, Calendar, TrendingUp, TrendingDown, Eye, Search, Filter, Target } from 'lucide-react';

const ChapterAnalytics = () => {
  const kpiData = [
    { label: 'Chapter success', value: '94%', color: '#00c853', bgColor: '#f0fdf4', barWidth: '94%' },
    { label: 'Report submitted', value: '88%', color: '#00c853', bgColor: '#f0fdf4', barWidth: '88%' },
    { label: 'Students benefitted', value: '76%', color: '#ff9800', bgColor: '#fffbeb', barWidth: '76%' },
    { label: 'Engagement level', value: '1156', color: '#ff5252', bgColor: '#fef2f2', barWidth: '100%', showEye: true },
  ];

  const chartData = [
    { label: 'Academic & career', school: 50, average: 58 },
    { label: 'Student Wellbeing', school: 75, average: 62 },
    { label: 'Child Rights & Safety', school: 78, average: 55 },
    { label: 'Community Outreach & Services', school: 87, average: 60 },
  ];

  const wingInsights = [
    { label: 'Academic & career', avg: '58%', school: '50%', improvement: '+24%' },
    { label: 'Student Wellbeing', avg: '62%', school: '75%', improvement: '+23%' },
    { label: 'Child Rights & Safety', avg: '55%', school: '78%', improvement: '+23%' },
    { label: 'Community Outreach & Services', avg: '60%', school: '87%', improvement: '+27%' },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6 animate-in fade-in duration-700 font-['Arial']">
      {/* Header */}
      <div className="flex flex-col gap-1 px-2">
        <h2 className="text-[22px] font-bold text-[#1a1a1a]">Analytics & Insights</h2>
        <p className="text-[14px] font-normal text-[#555555] opacity-60">Gain clarity with real-time analytics and track performance</p>
      </div>

      {/* KPI Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiData.map((kpi, idx) => (
          <div key={idx} className="rounded-[16px] p-5 flex flex-col gap-6" style={{ backgroundColor: kpi.bgColor }}>
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-4">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: kpi.color }} />
                <span className="text-[12px] font-normal text-[#1a1a1a] opacity-80">{kpi.label}</span>
              </div>
              <div className="flex flex-col items-end">
                {kpi.showEye ? (
                  <div className="flex items-center gap-2 text-[11px] font-normal text-[#1a1a1a] opacity-40">
                    <span>1156</span>
                    <Eye size={14} className="opacity-80" />
                  </div>
                ) : (
                  <span className="text-[24px] font-normal text-[#1a1a1a]">{kpi.value}</span>
                )}
              </div>
            </div>
            <div className="mt-auto">
              <div className="h-1.5 w-full bg-white/60 rounded-full overflow-hidden">
                <div className="h-full rounded-full transition-all duration-1000" style={{ width: kpi.barWidth, backgroundColor: kpi.color }} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Chart Section */}
      <div className="bg-white rounded-[24px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.02)] border border-[#eeeeee] space-y-8">
        <div className="flex items-center justify-between flex-wrap gap-6">
          <div className="flex items-center gap-4">
             <div className="w-8 h-8 flex items-center justify-center bg-[#c72030]/10 rounded-full">
                <img src="/icon/assessment.png" alt="Icon" className="w-5 h-5 object-contain brightness-0 filter" style={{ filter: 'invert(15%) sepia(95%) saturate(3932%) hue-rotate(346deg) brightness(88%) contrast(92%)' }} />
             </div>
             <h3 className="text-[18px] font-bold text-[#1a1a1a]">Assessment Analytics (Our School Vs 50 schools average)</h3>
          </div>
          <div className="flex items-center gap-4">
              <div className="relative">
                <select className="appearance-none bg-transparent border border-gray-100 rounded-xl py-2 px-6 pr-10 text-[13px] font-normal text-[#555555] opacity-40 outline-none cursor-pointer">
                    <option>Last 6month</option>
                </select>
                <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#555555] opacity-40" />
              </div>
              <button className="flex items-center gap-3 border border-gray-100 px-4 py-2 rounded-xl text-[13px] font-normal text-[#555555] opacity-40 hover:opacity-100 transition-all">
                  Choose month
                  <Calendar size={16} className="text-[#A82228]" />
              </button>
          </div>
        </div>

        {/* Custom Composed Bar Chart */}
        <div className="overflow-x-auto pb-6">
          <div className="relative h-[350px] min-w-[800px] w-full pt-12">
            {/* Y-Axis labels */}
            <div className="absolute left-0 top-12 h-[250px] flex flex-col justify-between text-[13px] font-normal text-[#bbbbbb] select-none pb-2">
                <span>100</span>
                <span>75</span>
                <span>50</span>
                <span>25</span>
                <span className="translate-y-2">0</span>
            </div>

            {/* Chart Area */}
            <div className="ml-[48px] h-[250px] border-l border-b border-gray-100 relative">
                {/* Horizontal Dashed Lines */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                    <div className="w-full border-t border-gray-100 border-dashed" />
                    <div className="w-full border-t border-gray-100 border-dashed" />
                    <div className="w-full border-t border-gray-100 border-dashed" />
                    <div className="w-full" />
                </div>

                <div className="absolute inset-x-0 bottom-0 top-0 flex items-end justify-around px-12">
                    {chartData.map((data, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-4 group">
                            <div className="flex items-end gap-3 h-[250px]">
                                {/* 50 schools average bar (Grey-blue) */}
                                <div 
                                    className="w-14 bg-[#94a3b8] rounded-t-sm transition-all duration-1000 shadow-sm"
                                    style={{ height: `${data.average * 2.5}px` }}
                                />
                                {/* Our School bar (Red) */}
                                <div 
                                    className="w-14 bg-[#A82228] rounded-t-sm transition-all duration-1000 shadow-sm"
                                    style={{ height: `${data.school * 2.5}px` }}
                                />
                            </div>
                            <span className="text-[13px] font-normal text-[#555555] opacity-80 text-center max-w-[140px] leading-tight">
                                {data.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Legend */}
            <div className="flex items-center justify-center gap-12 pt-20">
                <div className="flex items-center gap-3">
                    <div className="w-4 h-3 bg-[#A82228] rounded-sm" />
                    <span className="text-[15px] font-bold text-[#A82228]">Our School</span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-4 h-3 bg-[#94a3b8] rounded-sm" />
                    <span className="text-[15px] font-bold text-[#94a3b8]">benchmark average</span>
                </div>
            </div>
          </div>
        </div>

        {/* Detailed Insights Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-12">
            {wingInsights.map((insight, idx) => (
                <div key={idx} className="bg-white rounded-[20px] p-6 border border-gray-50 flex flex-col shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
                    <h4 className="text-[14px] font-bold text-[#1a1a1a] mb-4">{insight.label}</h4>
                    <div className="space-y-2">
                        <div className="flex justify-between items-center text-[12px]">
                            <span className="text-[#555555] opacity-40">50 schools average:</span>
                            <span className="font-normal text-[#1a1a1a]">{insight.avg}</span>
                        </div>
                        <div className="flex justify-between items-center text-[14px]">
                            <span className="text-[#555555] opacity-40">Our School:</span>
                            <span className="font-normal text-[#A82228]">{insight.school}</span>
                        </div>
                        <div className="pt-2 flex items-center gap-2 text-[12px] font-normal text-[#00c853]">
                            <TrendingUp size={14} />
                            {insight.improvement} improvement
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>

      {/* Our School Insights Section */}
      <div className="bg-white rounded-[24px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.02)] border border-[#eeeeee] space-y-8">
        <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border-2 border-[#A82228] flex items-center justify-center">
                <div className="w-4 h-4 rounded-full border-2 border-[#A82228] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#A82228]" />
                </div>
            </div>
            <h2 className="text-[20px] font-bold text-[#1a1a1a]">Our School Insights</h2>
        </div>

        {/* Filters & Search Header */}
        <div className="bg-white border border-[#eeeeee]/50 rounded-[20px] p-6 space-y-6">
            <div className="flex items-center gap-2 text-[14px] font-normal text-[#1a1a1a] opacity-80">
                <Filter size={16} />
                <span>Filters & Search</span>
            </div>
            
            <div className="space-y-4">
                <div className="relative">
                    <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1a1a1a] opacity-20" />
                    <input 
                        type="text" 
                        placeholder="Search by title, wing, activity, or submitter..." 
                        className="w-full bg-[#f4f4f5] border-none rounded-xl py-3 pl-12 pr-4 text-[13px] text-[#1a1a1a] placeholder:text-[#1a1a1a]/20 outline-none"
                    />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="relative">
                        <select className="w-full appearance-none bg-[#f4f4f5] rounded-xl py-3 px-4 pr-10 text-[13px] font-normal text-[#1a1a1a] outline-none cursor-pointer">
                            <option>All Wing</option>
                        </select>
                        <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#555555] opacity-40" />
                    </div>
                    <div className="bg-[#f4f4f5] rounded-xl py-3 px-4 text-[13px] font-normal text-[#1a1a1a] flex items-center justify-between">
                        <span>Activity</span>
                    </div>
                    <div className="bg-[#f4f4f5] rounded-xl py-3 px-4 text-[13px] font-normal text-[#1a1a1a] flex items-center justify-between">
                        <span>All Months</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Chart Area */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-20 py-10">
            {/* Simple Bar Chart */}
            <div className="relative h-[300px] w-full max-w-[400px]">
                {/* Y-Axis labels */}
                <div className="absolute left-0 top-0 h-[250px] flex flex-col justify-between text-[13px] text-[#bbbbbb] select-none pb-2">
                    <span>100</span>
                    <span>75</span>
                    <span>50</span>
                    <span>25</span>
                    <span className="translate-y-2">0</span>
                </div>

                {/* Chart Grid Lines */}
                <div className="ml-12 h-[250px] border-l border-b border-gray-100 relative">
                    <div className="absolute inset-x-0 top-0 bottom-0 flex flex-col justify-between pointer-events-none">
                        <div className="w-full border-t border-gray-100 border-dashed" />
                        <div className="w-full border-t border-gray-100 border-dashed" />
                        <div className="w-full border-t border-gray-100 border-dashed" />
                        <div className="w-full" />
                    </div>
                    {/* Bars */}
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-center gap-4">
                        <div className="w-20 bg-[#94a3b8] rounded-t-sm" style={{ height: '130px' }} />
                        <div className="w-20 bg-[#A82228] rounded-t-sm" style={{ height: '190px' }} />
                    </div>
                </div>
                {/* X-Axis Label */}
                <div className="ml-12 pt-4 flex justify-center text-[13px] text-[#555555] opacity-80">
                    Academic
                </div>
            </div>

            {/* Assessment Detail Card */}
            <div className="bg-[#f8fafc] rounded-[24px] p-8 w-full max-w-[440px] shadow-sm border border-gray-50">
                <h3 className="text-[15px] font-bold text-[#1a1a1a] mb-6">Academic & career</h3>
                <div className="space-y-4">
                    <div className="flex justify-between items-center text-[13px] font-normal">
                        <span className="text-[#555555] opacity-60">Pre - assessment response:</span>
                        <span className="text-[#1a1a1a] font-bold">58</span>
                    </div>
                    <div className="flex justify-between items-center text-[13px] font-normal">
                        <span className="text-[#555555] opacity-60">Post - assessment response:</span>
                        <span className="text-[#A82228] font-bold">82</span>
                    </div>
                    
                    <div className="h-[1px] w-full bg-gray-200 mt-6" />
                    
                    <div className="flex items-center gap-2 pt-2">
                        <TrendingDown size={18} className="text-[#ef4444]" />
                        <span className="text-[14px] font-bold text-[#ef4444]">-24% Decreases</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterAnalytics;
