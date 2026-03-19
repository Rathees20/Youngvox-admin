import React from 'react';
import { 
  ChevronDown, 
  Search, 
  Target, 
  TrendingUp, 
  Users, 
  Activity,
  Calendar,
  Filter,
  ArrowUpRight,
  TrendingDown,
  Eye
} from 'lucide-react';
import { cn } from '../../utils/cn';

const StatCard = ({ label, value, color, icon: Icon }) => (
  <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100/50 space-y-4 group hover:shadow-xl transition-all duration-300">
    <div className="flex items-start justify-between">
      <div className="space-y-4 w-full">
        <div className="flex items-center justify-between w-full">
           <div className={cn("w-2.5 h-2.5 rounded-full", color)} />
           {label === 'Engagement level' && <span className="text-[11px] font-normal text-[#555555] opacity-40 flex items-center gap-1">1156 <Eye size={12} /></span>}
        </div>
        <div className="space-y-1">
          <p className="text-[11px] font-normal text-[#555555] opacity-60 tracking-tight uppercase leading-none">{label}</p>
          <p className="text-[28px] font-normal text-[#1a1a1a] tracking-tighter">{value}</p>
        </div>
      </div>
    </div>
    <div className="h-1.5 w-full bg-gray-50 rounded-full overflow-hidden">
      <div className={cn("h-full rounded-full transition-all duration-1000", color.replace('bg-', 'bg-opacity-100 bg-'))} style={{ width: value.includes('%') ? value : '85%' }} />
    </div>
  </div>
);

const ComparisonCard = ({ title, avg, school, improvement }) => (
  <div className="bg-white rounded-[24px] p-6 border border-gray-100/50 space-y-5 hover:shadow-xl hover:shadow-dark/5 transition-all duration-500 group">
    <h4 className="text-[14px] font-normal text-[#1a1a1a] tracking-tight">{title}</h4>
    <div className="space-y-3">
      <div className="flex justify-between items-center text-[12px]">
        <span className="font-normal text-[#555555] opacity-60">50 schools average:</span>
        <span className="font-normal text-[#1a1a1a] tracking-tight">{avg}</span>
      </div>
      <div className="flex justify-between items-center text-[12px]">
        <span className="font-normal text-[#555555] opacity-60">Our School:</span>
        <span className="font-normal text-[#1a1a1a] tracking-tight text-[#c72030]">{school}</span>
      </div>
    </div>
    <div className="pt-2 flex items-center gap-2 text-[#10b981]">
      <TrendingUp size={14} strokeWidth={3} />
      <span className="text-[11px] font-normal tracking-tight">{improvement}</span>
    </div>
  </div>
);

const CommunityOutreachWingAnalytics = () => {
  const stats = [
    { label: 'Chapter success', value: '94%', color: 'bg-[#10b981]' },
    { label: 'Report submitted', value: '88%', color: 'bg-[#10b981]' },
    { label: 'Students benefitted', value: '76%', color: 'bg-[#f59e0b]' },
    { label: 'Engagement level', value: '1156', color: 'bg-[#ef4444]' },
  ];

  const categories = [
    { title: 'Academic & career', avg: '58%', school: '50%', improvement: '+24% improvement' },
    { title: 'Student Wellbeing', avg: '62%', school: '75%', improvement: '+23% improvement' },
    { title: 'Child Rights & Safety', avg: '55%', school: '78%', improvement: '+23% improvement' },
    { title: 'Community Outreach & Services', avg: '60%', school: '87%', improvement: '+27% improvement' },
  ];

  return (
    <div className="p-6 space-y-6 animate-in fade-in duration-700 pb-24 max-w-[1600px] mx-auto font-['Arial'] bg-[#f7f7f8] min-h-screen">
      {/* Header */}
      <div className="space-y-1">
        <h2 className="text-[20px] font-normal text-[#1a1a1a] tracking-tight">Analytics & Insights</h2>
        <p className="text-[13px] font-normal text-[#555555] opacity-60">Gain clarity with real-time analytics and track performance</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <StatCard key={idx} {...stat} />
        ))}
      </div>

      {/* Main Chart Section */}
      <div className="bg-white rounded-[40px] p-8 md:p-10 shadow-sm border border-gray-100/50 space-y-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-2xl bg-[#A82228]/5 flex items-center justify-center text-[#A82228]">
               <Activity size={20} strokeWidth={2.5} />
            </div>
            <h3 className="text-[17px] font-normal text-[#1a1a1a] tracking-tight">
              Assessment Analytics (Our School Vs 50 schools average)
            </h3>
          </div>
          <div className="flex gap-3">
            <div className="relative w-32">
              <select className="appearance-none w-full bg-[#f8f9fa] border-none rounded-xl py-2.5 px-4 text-[11px] font-normal text-[#555555] outline-none cursor-pointer">
                <option>Last 6month</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#555555]/40 pointer-events-none" size={14} />
            </div>
            <button className="flex items-center gap-2 bg-white border border-gray-100 text-[#555555] px-4 py-2.5 rounded-xl text-[11px] font-normal hover:bg-gray-50 transition-all shadow-sm">
              Choose month <Calendar size={14} className="text-[#c72030]" />
            </button>
          </div>
        </div>

        {/* Chart Visualization */}
        <div className="relative pt-10 min-h-[450px]">
          {/* Y-Axis Guidelines */}
          <div className="absolute inset-x-0 inset-y-0 flex flex-col justify-between py-12 pointer-events-none pl-12">
            {[100, 75, 50, 25, 0].map((label) => (
              <div key={label} className="flex items-center gap-6">
                <span className="w-8 text-[12px] font-normal text-[#555555]/40 text-right">{label}</span>
                <div className="flex-1 border-t border-dashed border-gray-100" />
              </div>
            ))}
          </div>

          {/* Bar Groups */}
          <div className="relative flex justify-around items-end ml-20 h-full pt-12 pb-12 gap-8">
            {[
              { school: 60, avg: 85, label: 'Academic & career' },
              { school: 65, avg: 88, label: 'Student Wellbeing' },
              { school: 58, avg: 80, label: 'Child Rights & Safety' },
              { school: 62, avg: 90, label: 'Community Outreach & Services' },
            ].map((data, idx) => (
              <div key={idx} className="flex flex-col items-center gap-6 w-1/4 h-full justify-end group">
                <div className="flex items-end gap-3 h-[300px]">
                  {/* Average Bar */}
                  <div 
                    className="w-14 md:w-20 bg-[#94a3b8] rounded-t-sm transition-all duration-1000 shadow-sm" 
                    style={{ height: `${data.avg}%` }}
                  />
                  {/* Our School Bar */}
                  <div 
                    className="w-14 md:w-20 bg-[#A82228] rounded-t-sm transition-all duration-1000 shadow-sm" 
                    style={{ height: `${data.school}%` }}
                  />
                </div>
                <p className="text-[12px] font-normal text-[#555555] text-center tracking-tight leading-tight max-w-[120px] h-8">
                  {data.label}
                </p>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex justify-center gap-10 mt-8 pt-4 border-t border-gray-50">
            <div className="flex items-center gap-2.5">
              <div className="w-5 h-4 bg-[#A82228] rounded-sm" />
              <span className="text-[14px] font-normal text-[#1a1a1a]">Our School</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-5 h-4 bg-[#94a3b8] rounded-sm" />
              <span className="text-[14px] font-normal text-[#555555] opacity-60">50 schools average</span>
            </div>
          </div>
        </div>

        {/* Categorical Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
          {categories.map((cat, idx) => (
            <ComparisonCard key={idx} {...cat} />
          ))}
        </div>
      </div>

      {/* Our School Insights Section */}
      <div className="bg-white rounded-[40px] p-8 md:p-10 shadow-sm border border-gray-100/50 space-y-10">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-2xl bg-[#A82228]/5 flex items-center justify-center text-[#A82228]">
             <Activity size={20} strokeWidth={2.5} />
          </div>
          <h3 className="text-[17px] font-normal text-[#1a1a1a] tracking-tight">Our School Insights</h3>
        </div>

        {/* Search & Filters */}
        <div className="bg-[#fbfcff] rounded-[32px] p-8 border border-gray-100/50 space-y-6">
          <div className="flex items-center gap-3 text-[#1a1a1a]">
            <Filter size={16} strokeWidth={2.5} className="opacity-40" />
            <span className="text-[13px] font-normal opacity-60">Filters & Search</span>
          </div>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative group bg-white rounded-xl px-4 flex items-center border border-gray-100">
              <Search className="text-[#555555] opacity-30 shrink-0" size={16} />
              <input 
                type="text" 
                placeholder="Search by title, wing, activity, or submitter..." 
                className="w-full bg-transparent border-none py-3 pl-3 text-[12px] font-normal text-[#1a1a1a] outline-none"
              />
            </div>
            <div className="flex gap-4">
               <div className="relative min-w-[140px]">
                 <select className="appearance-none w-full bg-[#f4f4f5]/60 hover:bg-white border hover:border-gray-100 rounded-xl py-3 px-4 text-[12px] font-normal text-[#1a1a1a] outline-none transition-all cursor-pointer">
                   <option>All Wing</option>
                 </select>
                 <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#555555]/40 pointer-events-none" size={14} />
               </div>
               <div className="relative min-w-[180px]">
                 <select className="appearance-none w-full bg-[#f4f4f5]/60 hover:bg-white border hover:border-gray-100 rounded-xl py-3 px-4 text-[12px] font-normal text-[#1a1a1a] outline-none transition-all cursor-pointer">
                   <option>Activity</option>
                 </select>
                 <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#555555]/40 pointer-events-none" size={14} />
               </div>
               <div className="relative min-w-[140px]">
                 <select className="appearance-none w-full bg-[#f4f4f5]/60 hover:bg-white border hover:border-gray-100 rounded-xl py-3 px-4 text-[12px] font-normal text-[#1a1a1a] outline-none transition-all cursor-pointer">
                   <option>All Months</option>
                 </select>
                 <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#555555]/40 pointer-events-none" size={14} />
               </div>
            </div>
          </div>
        </div>

        {/* Insights Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 pt-8 items-end">
          <div className="relative h-[350px] flex items-end justify-center gap-12 border-l border-b border-gray-100 ml-12 pb-12">
             {/* Simple Y-Axis */}
             <div className="absolute left-[-40px] inset-y-0 flex flex-col justify-between py-12 pointer-events-none text-[12px] text-[#555555]/40">
               <span>100</span><span>75</span><span>50</span><span>25</span><span>0</span>
             </div>
             
             <div className="flex items-end gap-3 h-full">
               <div className="w-20 md:w-28 bg-[#94a3b8] rounded-t-sm shadow-sm" style={{ height: '52%' }} />
               <div className="w-20 md:w-28 bg-[#A82228] rounded-t-sm shadow-sm" style={{ height: '78%' }} />
             </div>
             <p className="absolute bottom-[-30px] text-[13px] font-normal text-[#555555] opacity-60">Academic</p>
          </div>

          <div className="space-y-6">
            <div className="bg-[#fbfcff] rounded-[32px] p-8 border border-gray-100/50 space-y-6">
              <h4 className="text-[15px] font-normal text-[#1a1a1a] tracking-tight">Academic & career</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-[13px]">
                  <span className="font-normal text-[#555555] opacity-60">Pre - assessment response:</span>
                  <span className="font-normal text-[#1a1a1a] text-[16px]">58</span>
                </div>
                <div className="flex justify-between items-center text-[13px]">
                  <span className="font-normal text-[#555555] opacity-60">Post - assessment response:</span>
                  <span className="font-normal text-[#c72030] text-[16px]">82</span>
                </div>
              </div>
              <div className="pt-6 border-t border-gray-200/50">
                <div className="flex items-center gap-2 text-[#c72030]">
                  <TrendingDown size={14} className="rotate-180" />
                  <span className="text-[13px] font-normal tracking-tight">-24% Decreases</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityOutreachWingAnalytics;
