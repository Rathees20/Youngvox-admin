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
  TrendingDown
} from 'lucide-react';
import { cn } from '../../utils/cn';

const StatCard = ({ label, value, color }) => (
  <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100/50 space-y-4 group hover:shadow-xl transition-all duration-300">
    <div className="flex items-start justify-between">
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <div className={cn("w-2.5 h-2.5 rounded-full", color)} />
          <p className="text-[13px] font-normal text-[#555555] opacity-60 tracking-tight">{label}</p>
        </div>
        <p className="text-[28px] font-normal text-[#1a1a1a] tracking-tighter">{value}</p>
      </div>
      {label === 'Engagement level' && (
        <div className="flex items-center gap-1.5 text-[11px] font-normal text-[#555555] opacity-40 bg-gray-50 px-2 py-1 rounded-lg">
          <Activity size={12} strokeWidth={3} />
          <span>LIVE</span>
        </div>
      )}
    </div>
    <div className="h-1.5 w-full bg-gray-50 rounded-full overflow-hidden">
      <div className={cn("h-full rounded-full transition-all duration-1000", color.replace('bg-', 'bg-opacity-100 bg-'))} style={{ width: '70%' }} />
    </div>
  </div>
);

const ComparisonCard = ({ title, avg, school, improvement }) => (
  <div className="bg-[#fbfcff]/50 rounded-[28px] p-6 border border-gray-100/50 space-y-5 hover:bg-white hover:shadow-xl hover:shadow-dark/5 transition-all duration-500 group">
    <h4 className="text-[15px] font-normal text-[#1a1a1a] tracking-tight">{title}</h4>
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <span className="text-[13px] font-normal text-[#555555] opacity-60">50 schools average:</span>
        <span className="text-[13px] font-normal text-[#1a1a1a] tracking-tight">{avg}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-[13px] font-normal text-[#555555] opacity-60">Our School:</span>
        <span className="text-[13px] font-normal text-[#1a1a1a] tracking-tight">{school}</span>
      </div>
    </div>
    <div className="pt-4 border-t border-gray-100 flex items-center gap-2 text-[#1caf5f]">
      <ArrowUpRight size={16} strokeWidth={3} />
      <span className="text-[12px] font-normal tracking-tight">{improvement}</span>
    </div>
  </div>
);

const AcademicWingAnalytics = () => {
  const stats = [
    { label: 'Chapter success', value: '94%', color: 'bg-[#1caf5f]' },
    { label: 'Report submitted', value: '88%', color: 'bg-[#1caf5f]' },
    { label: 'Students benefitted', value: '76%', color: 'bg-[#f59e0b]' },
    { label: 'Engagement level', value: '1156', color: 'bg-[#ef4444]' },
  ];

  const categories = [
    { title: 'Academic & career', avg: '58%', school: '50%', improvement: '+24% improvement' },
    { title: 'Student Wellbeing', avg: '62%', school: '75%', improvement: '+23% improvement' },
    { title: 'Child Rights & Safety', avg: '55%', school: '78%', improvement: '+23% improvement' },
    { title: 'Community Outreach', avg: '60%', school: '87%', improvement: '+27% improvement' },
  ];

  return (
    <div className="p-6 space-y-6 animate-in fade-in duration-700 pb-24 max-w-[1600px] mx-auto font-['Arial'] bg-white min-h-screen">
      {/* Header */}
      <div className="space-y-1">
        <h2 className="text-[20px] font-normal text-[#1a1a1a] tracking-tight">Analytics & Insights</h2>
        <p className="text-[14px] font-normal text-[#555555] opacity-60">Gain clarity with real-time analytics and track performance</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <StatCard key={idx} {...stat} />
        ))}
      </div>

      {/* Main Chart Section */}
      <div className="bg-white rounded-[40px] p-8 md:p-10 shadow-sm border border-gray-100/50 space-y-12">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-2xl bg-[#A82228]/5 flex items-center justify-center text-[#A82228]">
              <Target size={24} strokeWidth={2.5} />
            </div>
            <h3 className="text-[18px] font-normal text-[#1a1a1a] tracking-tight">
              Assessment Analytics (Our School Vs 50 schools average)
            </h3>
          </div>
          <div className="flex gap-3">
            <div className="relative w-36">
              <select className="appearance-none w-full bg-[#f8f9fa] border-none rounded-xl py-2.5 px-4 text-[12px] font-normal text-[#555555] outline-none cursor-pointer hover:bg-gray-100 transition-all">
                <option>Last 6month</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#555555]/40 pointer-events-none" size={14} />
            </div>
            <button className="flex items-center gap-2 bg-[#f8f9fa] border border-gray-100 text-[#555555] px-4 py-2.5 rounded-xl text-[12px] font-normal hover:bg-white hover:shadow-lg transition-all">
              Choose month <Calendar size={14} />
            </button>
          </div>
        </div>

        {/* Chart Visualization */}
        <div className="relative pt-10 min-h-[450px]">
          {/* Y-Axis Guidelines */}
          <div className="absolute inset-0 flex flex-col justify-between py-12 pointer-events-none pl-12">
            {[100, 75, 50, 25, 0].map((label) => (
              <div key={label} className="flex items-center gap-6">
                <span className="w-8 text-[12px] font-normal text-[#555555]/40 text-right">{label}</span>
                <div className="flex-1 border-t border-dashed border-gray-100" />
              </div>
            ))}
          </div>

          {/* Bar Groups */}
          <div className="relative flex justify-around items-end ml-20 h-full pt-12 pb-12">
            {[
              { school: 60, avg: 85 },
              { school: 65, avg: 88 },
              { school: 58, avg: 80 },
              { school: 62, avg: 90 },
            ].map((data, idx) => (
              <div key={idx} className="flex flex-col items-center gap-6 w-1/4 h-full justify-end group">
                <div className="flex items-end gap-3 h-[300px]">
                  {/* Our School Bar */}
                  <div 
                    className="w-12 bg-[#A11B22] rounded-t-xl transition-all duration-1000 shadow-xl shadow-[#A11B22]/10 group-hover:scale-105" 
                    style={{ height: `${data.school}%` }}
                  />
                  {/* Average Bar */}
                  <div 
                    className="w-12 bg-[#94A3B8] rounded-t-xl transition-all duration-1000 shadow-xl shadow-[#94A3B8]/10 group-hover:scale-105 opacity-80" 
                    style={{ height: `${data.avg}%` }}
                  />
                </div>
                <p className="text-[12px] font-normal text-[#555555]/60 text-center tracking-tight h-8">
                  {categories[idx].title}
                </p>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex justify-center gap-10 mt-8">
            <div className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-md bg-[#A11B22] shadow-sm" />
              <span className="text-[14px] font-normal text-[#1a1a1a]">Our School</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-md bg-[#94A3B8] shadow-sm" />
              <span className="text-[14px] font-normal text-[#555555] opacity-60">50 schools average</span>
            </div>
          </div>
        </div>

        {/* Categorical Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-gray-50">
          {categories.map((cat, idx) => (
            <ComparisonCard key={idx} {...cat} />
          ))}
        </div>
      </div>

      {/* Our School Insights Section */}
      <div className="bg-white rounded-[40px] p-8 md:p-10 shadow-sm border border-gray-100/50 space-y-10">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-2xl bg-[#A82228]/5 flex items-center justify-center">
            <img src="/icon/assessment.png" alt="Assessment" className="w-6 h-6 object-contain" />
          </div>
          <h3 className="text-[18px] font-normal text-[#1a1a1a] tracking-tight">Our School Insights</h3>
        </div>

        {/* Search & Filters */}
        <div className="bg-[#fbfcff] rounded-[32px] p-8 border border-gray-100/50 space-y-6">
          <div className="flex items-center gap-3 text-[#1a1a1a]">
            <Filter size={18} strokeWidth={2.5} className="opacity-40" />
            <span className="text-[14px] font-normal">Filters & Search</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <div className="lg:col-span-2 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#555555] opacity-40" size={18} />
              <input 
                type="text" 
                placeholder="Search by title, wing, activity, or submitter..." 
                className="w-full bg-white border border-gray-100 rounded-2xl py-3.5 pl-12 pr-5 text-[13px] font-normal text-[#1a1a1a] outline-none focus:border-[#A82228]/20 transition-all"
              />
            </div>
            <div className="relative group">
              <select className="appearance-none w-full bg-white border border-gray-100 rounded-2xl py-3.5 px-5 text-[13px] font-normal text-[#1a1a1a] outline-none cursor-pointer">
                <option>All Wing</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#555555]/40 pointer-events-none" size={16} />
            </div>
            <div className="relative group">
              <select className="appearance-none w-full bg-white border border-gray-100 rounded-2xl py-3.5 px-5 text-[13px] font-normal text-[#1a1a1a] outline-none cursor-pointer">
                <option>Activity</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#555555]/40 pointer-events-none" size={16} />
            </div>
          </div>
        </div>

        {/* Insights Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-8">
          <div className="lg:col-span-2 relative min-h-[350px]">
             {/* Simple Guide Lines */}
             <div className="absolute inset-x-0 bottom-0 top-0 flex flex-col justify-between py-10 pointer-events-none pl-12">
               {[100, 75, 50, 25, 0].map(v => (
                 <div key={v} className="flex items-center gap-4">
                   <span className="w-8 text-[11px] font-normal text-[#555555]/20 text-right">{v}</span>
                   <div className="flex-1 border-t border-dashed border-gray-100" />
                 </div>
               ))}
             </div>
             
             {/* Single Bar Comparison */}
             <div className="relative h-full flex items-end justify-center ml-20 gap-8 pb-10">
                <div className="flex flex-col items-center gap-4">
                  <div className="flex items-end gap-3 h-[250px]">
                    <div className="w-16 bg-[#94A3B8] rounded-t-xl transition-all duration-1000 shadow-lg shadow-black/5" style={{ height: '58%' }} />
                    <div className="w-16 bg-[#A11B22] rounded-t-xl transition-all duration-1000 shadow-xl shadow-[#A11B22]/10" style={{ height: '82%' }} />
                  </div>
                  <p className="text-[13px] font-normal text-[#555555]/40 uppercase tracking-[2px] mt-4">Academic</p>
                </div>
             </div>
          </div>

          <div className="flex flex-col justify-center">
             <div className="bg-[#f8f9fa] rounded-[32px] p-8 border border-gray-100/50 space-y-6 group hover:bg-white hover:shadow-xl transition-all duration-500">
                <h4 className="text-[16px] font-normal text-[#1a1a1a] tracking-tight">Academic & career</h4>
                <div className="space-y-4">
                   <div className="flex justify-between items-center">
                      <span className="text-[14px] font-normal text-[#555555] opacity-60">Pre - assessment response:</span>
                      <span className="text-[18px] font-normal text-[#1a1a1a] tracking-tight">58</span>
                   </div>
                   <div className="flex justify-between items-center">
                      <span className="text-[14px] font-normal text-[#555555] opacity-60">Post - assessment response:</span>
                      <span className="text-[18px] font-normal text-[#1a1a1a] tracking-tight">82</span>
                   </div>
                </div>
                <div className="pt-6 border-t border-gray-200/50 flex flex-col gap-2">
                   <div className="flex items-center gap-2 text-[#ef4444]">
                      <TrendingDown size={18} strokeWidth={3} className="rotate-180" />
                      <span className="text-[15px] font-normal">-24% Decreases</span>
                   </div>
                   <p className="text-[11px] font-normal text-[#555555]/40 leading-relaxed italic">
                     *Calculated based on pre and post assessment response rates
                   </p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicWingAnalytics;
