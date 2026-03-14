import React from 'react';
import { ChevronDown, Eye, Edit3, Trash2, Calendar, Filter } from 'lucide-react';

const ChapterReports = () => {
  const reportCards = [
    {
      title: 'Career Bingo',
      category: 'Academic & Career Guidance',
      categoryColor: '#3b82f6',
      status: 'Completed',
      statusColor: '#fef3c7',
      statusTextColor: '#d97706',
      activity: 'Annual flagship program',
      date: '11/11/2024',
      submittedBy: 'Sarah Miller (Wing Leader)',
    },
    {
      title: 'Digital Detox',
      category: 'Student Wellbeing',
      categoryColor: '#10b981',
      status: 'Review',
      statusColor: '#fee2e2',
      statusTextColor: '#ef4444',
      activity: 'Monthly poster activity',
      date: '11/11/2024',
      submittedBy: 'Sarah Miller (Wing Leader)',
    },
    {
      title: 'Physical Health',
      category: 'Student Wellbeing',
      categoryColor: '#10b981',
      status: 'Review',
      statusColor: '#fee2e2',
      statusTextColor: '#ef4444',
      activity: 'Monthly poster activity',
      date: '11/11/2024',
      submittedBy: 'Sarah Miller (Wing Leader)',
    },
    {
      title: 'Blue Earth, Clean Earth',
      category: 'Community Outreach & Service',
      categoryColor: '#f59e0b',
      status: 'Completed',
      statusColor: '#fef3c7',
      statusTextColor: '#d97706',
      activity: 'Annual flagship program',
      date: '11/11/2024',
      submittedBy: 'Sarah Miller (Wing Leader)',
    },
    {
      title: 'Student to Professional',
      category: 'Academic & Career Guidance',
      categoryColor: '#3b82f6',
      status: 'Review',
      statusColor: '#fee2e2',
      statusTextColor: '#ef4444',
      activity: 'Monthly poster activity',
      date: '11/11/2024',
      submittedBy: 'Sarah Miller (Wing Leader)',
    },
    {
      title: 'Speak Up',
      category: 'Child Rights & Social Justice',
      categoryColor: '#a855f7',
      status: 'Completed',
      statusColor: '#fef3c7',
      statusTextColor: '#d97706',
      activity: 'Monthly poster activity',
      date: '11/11/2024',
      submittedBy: 'Sarah Miller (Wing Leader)',
    },
  ];

  const chartData = [
    { label: 'Academic & career', value: 65, color: '#bfdbfe' },
    { label: 'Student Wellbeing', value: 45, color: '#bbf7d0' },
    { label: 'Child Rights & Safety', value: 75, color: '#e9d5ff', highlight: true, highlightVal: '78%' },
    { label: 'Community Outreach & Services', value: 90, color: '#ffedd5' },
  ];

  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-[1600px] mx-auto space-y-6 animate-in fade-in duration-700">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <h2 className="text-[24px] font-black text-[#1a1a1a] tracking-tight">Reports Management</h2>
        <p className="text-[12px] font-bold text-[#555555] opacity-60">Track & manage all reports seamlessly | 3 Reviewed, 3 Completed</p>
      </div>

      {/* Filter Bar */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#eeeeee] flex flex-wrap gap-4 items-center">
        <div className="relative min-w-[140px]">
          <select className="w-full appearance-none bg-[#f4f4f5]/60 hover:bg-white border border-transparent hover:border-[#eeeeee] rounded-xl py-2.5 px-5 text-[12px] font-bold text-[#1a1a1a] outline-none transition-all cursor-pointer">
            <option>All Wing</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#555555] opacity-40 pointer-events-none" size={16} />
        </div>
        <div className="relative min-w-[140px]">
          <select className="w-full appearance-none bg-[#f4f4f5]/60 hover:bg-white border border-transparent hover:border-[#eeeeee] rounded-xl py-2.5 px-5 text-[12px] font-bold text-[#1a1a1a] outline-none transition-all cursor-pointer">
            <option>Activity</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#555555] opacity-40 pointer-events-none" size={16} />
        </div>
        <div className="relative min-w-[140px]">
          <select className="w-full appearance-none bg-[#f4f4f5]/60 hover:bg-white border border-transparent hover:border-[#eeeeee] rounded-xl py-2.5 px-5 text-[12px] font-bold text-[#1a1a1a] outline-none transition-all cursor-pointer">
            <option>Month</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#555555] opacity-40 pointer-events-none" size={16} />
        </div>
      </div>

      {/* Reports Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reportCards.map((card, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-5 shadow-sm border border-[#eeeeee] flex flex-col gap-4 group hover:shadow-2xl hover:shadow-dark/5 transition-all duration-500 relative overflow-hidden">
             {/* Status Badge */}
             <div className="absolute top-6 right-6">
                <span 
                    className="text-[10px] font-bold px-3 py-1.5 rounded-lg uppercase tracking-widest"
                    style={{ backgroundColor: card.statusColor, color: card.statusTextColor }}
                >
                    {card.status}
                </span>
             </div>

             <div className="flex flex-col gap-3">
                <h3 className="text-[18px] font-black text-[#1a1a1a] pr-16 leading-tight tracking-tight">{card.title}</h3>
                <div className="flex flex-wrap gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-gray-50 rounded text-[#3b82f6]" style={{ color: card.categoryColor }}>{card.category}</span>
                </div>
                <span className="text-[10px] font-bold text-[#ef4444] tracking-tight uppercase">SDG 3 - Good Health & Well-being</span>
             </div>

             <div className="space-y-3 pt-3 border-t border-gray-50">
                <div className="flex items-center gap-3">
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-tight min-w-[90px]">Activity:</span>
                    <span className="text-[13px] font-bold text-[#1a1a1a]">{card.activity}</span>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-tight min-w-[90px]">Date:</span>
                    <span className="text-[13px] font-bold text-[#1a1a1a]">{card.date}</span>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-tight min-w-[90px]">Submitted by:</span>
                    <span className="text-[13px] font-bold text-[#1a1a1a]">{card.submittedBy}</span>
                </div>
             </div>

             {/* Action Buttons */}
             <div className="flex items-center gap-3 mt-4">
                <button className="flex-1 flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 py-3 rounded-2xl text-[12px] font-bold text-gray-500 transition-all border border-transparent">
                    <Eye size={18} strokeWidth={3} />
                    View
                </button>
                <button className="flex-[1.5] flex items-center justify-center gap-2 bg-[#1caf5f] hover:bg-[#169450] py-3 rounded-2xl text-[12px] font-bold text-white shadow-lg shadow-[#1caf5f]/20 transition-all">
                    <Edit3 size={18} strokeWidth={3} />
                    Edit
                </button>
                <button className="w-12 h-12 flex items-center justify-center bg-[#ef4444] hover:bg-[#dc2626] rounded-2xl text-white shadow-lg shadow-red-500/20 transition-all">
                    <Trash2 size={20} strokeWidth={3} />
                </button>
             </div>
          </div>
        ))}
      </div>

      {/* Progress Chart Section */}
      <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-sm border border-[#eeeeee] space-y-10">
        <div className="flex items-center justify-between flex-wrap gap-6">
            <div className="flex flex-col gap-1">
                <h4 className="text-[18px] font-black text-[#1a1a1a] tracking-tight">Monthly completion progress bar</h4>
                <p className="text-[12px] font-bold text-gray-400 tracking-tight">Based on planned activities vs completed reports</p>
            </div>
            <div className="flex flex-col items-end gap-3">
                <button className="flex items-center gap-4 bg-white border border-[#eeeeee] px-5 py-3 rounded-2xl text-[12px] font-black text-[#1a1a1a] shadow-sm hover:shadow-md transition-all">
                    Choose month
                    <Calendar size={16} className="text-[#A82228]" />
                </button>
                <div className="relative">
                    <select className="appearance-none bg-transparent text-[11px] font-bold text-gray-400 uppercase tracking-widest pr-6 outline-none cursor-pointer">
                        <option>Last 6 month</option>
                    </select>
                    <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
            </div>
        </div>

        {/* Custom Bar Chart */}
        <div className="overflow-x-auto pb-6 custom-scrollbar">
          <div className="relative h-[350px] min-w-[800px] w-full pt-12">
            {/* Y-Axis Labels */}
            <div className="absolute left-0 top-10 h-[250px] flex flex-col justify-between text-[13px] font-black text-gray-300 select-none pb-2">
                <span>100</span>
                <span>75</span>
                <span>50</span>
                <span>25</span>
                <span className="translate-y-2">0</span>
            </div>

            {/* Grid Lines */}
            <div className="ml-12 h-[250px] border-l border-b border-gray-100 flex flex-col justify-between relative">
                <div className="w-full border-t border-gray-100 border-dashed" />
                <div className="w-full border-t border-gray-100 border-dashed" />
                <div className="w-full border-t border-gray-100 border-dashed" />
                <div className="absolute inset-0 flex items-end justify-around px-12">
                    {chartData.map((item, idx) => (
                        <div key={idx} className="relative group w-24 flex flex-col items-center">
                            {item.highlight && (
                                <div className="absolute -top-16 flex flex-col items-center">
                                    <span className="text-[14px] font-black text-[#ef4444] mb-1">{item.highlightVal}</span>
                                    <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-[#ef4444]" />
                                </div>
                            )}
                            <div 
                                className="w-24 rounded-t-xl transition-all duration-1000 group-hover:opacity-80 shadow-sm" 
                                style={{ height: `${item.value * 2.5}px`, backgroundColor: item.color }}
                            />
                            <div className="absolute -bottom-20 w-40 text-center">
                                <span className="text-[11px] font-black text-gray-400 uppercase leading-tight inline-block tracking-tight">{item.label}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterReports;
