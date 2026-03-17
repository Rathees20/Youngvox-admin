import React from 'react';
import { ChevronDown, Eye, Edit3, Trash2, Calendar, Filter, CheckCircle2 } from 'lucide-react';

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
    { label: 'Academic & career', value: 65, color: '#bbd7ff' },
    { label: 'Student Wellbeing', value: 48, color: '#bdfcd5' },
    { label: 'Child Rights & Safety', value: 78, color: '#ebdbff', highlight: true, highlightVal: '78%' },
    { label: 'Community Outreach & Services', value: 92, color: '#fff2d6' },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6 animate-in fade-in duration-700 font-['Arial']">
      {/* Header */}
      <div className="flex flex-col gap-1 px-2">
        <h2 className="text-[22px] font-bold text-[#1a1a1a]">Reports Management</h2>
        <p className="text-[14px] font-normal text-[#555555] opacity-60">Track & manage all reports seamlessly | 3 Reviewed, 3 Completed</p>
      </div>

      {/* Filter Bar */}
      <div className="bg-white rounded-[24px] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.02)] border border-[#eeeeee] flex flex-wrap gap-4 items-center">
        <div className="relative min-w-[170px]">
          <select className="w-full appearance-none bg-[#f4f4f5] border border-transparent hover:border-[#eeeeee] rounded-xl py-2.5 px-5 text-[13px] font-normal text-[#1a1a1a] outline-none transition-all cursor-pointer">
            <option>All Wing</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#555555] opacity-40 pointer-events-none" size={16} />
        </div>
        <div className="relative min-w-[170px]">
          <select className="w-full appearance-none bg-[#f4f4f5] border border-transparent hover:border-[#eeeeee] rounded-xl py-2.5 px-5 text-[13px] font-normal text-[#1a1a1a] outline-none transition-all cursor-pointer">
            <option>Activity</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#555555] opacity-40 pointer-events-none" size={16} />
        </div>
        <div className="relative min-w-[170px]">
          <select className="w-full appearance-none bg-[#f4f4f5] border border-transparent hover:border-[#eeeeee] rounded-xl py-2.5 px-5 text-[13px] font-normal text-[#1a1a1a] outline-none transition-all cursor-pointer">
            <option>Month</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#555555] opacity-40 pointer-events-none" size={16} />
        </div>
      </div>

      {/* Reports Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reportCards.map((card, idx) => (
          <div key={idx} className="bg-white rounded-[24px] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.02)] border border-[#eeeeee] flex flex-col gap-5 transition-all duration-300 relative overflow-hidden">
            {/* Status Badge */}
            <div className="absolute top-6 right-6">
              <span
                className="text-[12px] font-medium px-4 py-1 rounded-full"
                style={{ backgroundColor: '#fff7ed', color: '#ea580c' }}
              >
                {card.status}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-[16px] font-bold text-[#1a1a1a] pr-16 leading-tight">{card.title}</h3>
              <div className="flex">
                <span
                  className="text-[11px] font-medium px-3 py-0.5 rounded-md"
                  style={{ backgroundColor: `${card.categoryColor}15`, color: card.categoryColor }}
                >
                  {card.category}
                </span>
              </div>
              <span className="text-[10px] font-bold text-[#ef4444] uppercase">SDG 3 - Good Health & Well-being</span>
            </div>

            <div className="space-y-1.5 pt-1">
              <div className="flex items-center gap-1.5">
                <span className="text-[13px] font-bold text-[#1a1a1a]">Activity:</span>
                <span className="text-[13px] font-normal text-[#555555] opacity-80">{card.activity}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[13px] font-bold text-[#1a1a1a]">Date:</span>
                <span className="text-[13px] font-normal text-[#555555] opacity-80">{card.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[13px] font-bold text-[#1a1a1a]">Submitted by:</span>
                <span className="text-[13px] font-normal text-[#555555] opacity-80">{card.submittedBy}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 mt-1 border-t border-gray-100 flex items-center gap-3">
              <button className="flex-1 flex items-center justify-center gap-2 bg-white hover:bg-gray-50 border border-gray-200 py-2.5 rounded-lg text-[13px] font-bold text-[#1a1a1a] transition-all shadow-sm">
                <Eye size={16} strokeWidth={2.5} />
                View
              </button>
              <button className="flex-[1.5] flex items-center justify-center gap-2 bg-[#1caf5f] hover:bg-[#169450] py-2.5 rounded-lg text-[13px] font-bold text-white transition-all shadow-sm">
                <CheckCircle2 size={16} strokeWidth={2.5} />
                Edit
              </button>
              <button className="w-10 h-10 flex items-center justify-center bg-[#c72030] hover:bg-[#a81b28] rounded-lg text-white transition-all shadow-sm">
                <Trash2 size={18} strokeWidth={2.5} className="bg-[#c72030] rounded-full" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Chart Section */}
      <div className="bg-white rounded-[24px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.02)] border border-[#eeeeee] space-y-10">
        <div className="flex items-center justify-between flex-wrap gap-6">
          <div className="flex flex-col gap-1">
            <h4 className="text-[18px] font-bold text-[#1a1a1a]">Monthly completion progress bar</h4>
            <p className="text-[12px] font-normal text-[#555555] opacity-50">Based on planned activities vs completed reports</p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <button className="flex items-center gap-4 border border-gray-100 px-4 py-2 rounded-xl text-[13px] font-normal text-[#A82228] bg-white shadow-sm hover:bg-gray-50 transition-all">
              Choose month
              <Calendar size={16} className="text-[#A82228]" />
            </button>
            <div className="relative">
              <select className="appearance-none bg-transparent text-[12px] font-normal text-[#555555] opacity-40 pr-6 outline-none cursor-pointer">
                <option>Last 6month</option>
              </select>
              <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 text-[#555555] opacity-40" />
            </div>
          </div>
        </div>

        {/* Custom Bar Chart */}
        <div className="overflow-x-auto pb-6">
          <div className="relative h-[350px] min-w-[800px] w-full pt-12">
            {/* Y-Axis Labels & Ticks */}
            <div className="absolute left-0 top-10 h-[250px] flex flex-col justify-between text-[13px] font-normal text-[#bbbbbb] select-none pb-2">
              <div className="flex items-center justify-end gap-2 w-10"><span>100</span><div className="w-1.5 h-[1px] bg-gray-300" /></div>
              <div className="flex items-center justify-end gap-2 w-10"><span>75</span><div className="w-1.5 h-[1px] bg-gray-300" /></div>
              <div className="flex items-center justify-end gap-2 w-10"><span>50</span><div className="w-1.5 h-[1px] bg-gray-300" /></div>
              <div className="flex items-center justify-end gap-2 w-10"><span>25</span><div className="w-1.5 h-[1px] bg-gray-300" /></div>
              <div className="flex items-center justify-end gap-2 w-10"><span className="translate-y-2">0</span><div className="w-1.5 h-[1px] bg-gray-300 translate-y-2" /></div>
            </div>

            {/* Chart Area */}
            <div className="ml-[48px] h-[250px] border-l border-b border-gray-300 flex flex-col justify-between relative">
              {/* Dashed Grid Lines */}
              <div className="w-full border-t border-gray-100 border-dashed" />
              <div className="w-full border-t border-gray-100 border-dashed" />
              <div className="w-full border-t border-gray-100 border-dashed" />

              <div className="absolute inset-x-0 bottom-0 top-0 flex items-end justify-around px-8">
                {chartData.map((item, idx) => (
                  <div key={idx} className="relative group w-32 flex flex-col items-center">
                    {/* X-axis Tick */}
                    <div className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-[1px] h-2 bg-gray-300" />

                    {item.highlight && (
                      <div className="absolute -top-12 flex flex-col items-center">
                        <span className="text-[14px] font-bold text-[#A82228] mb-0.5">{item.highlightVal}</span>
                        <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#A82228]" />
                      </div>
                    )}

                    <div
                      className="w-28 transition-all duration-1000 group-hover:opacity-90"
                      style={{ height: `${item.value * 2.5}px`, backgroundColor: item.color }}
                    />

                    <div className="absolute -bottom-16 w-32 text-center pt-2">
                      <span className="text-[11px] md:text-[13px] font-normal text-[#555555] opacity-80 leading-tight inline-block">{item.label}</span>
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
