import React from 'react';
import { ChevronDown, Download, FileText, Search, Filter, HelpCircle, Bell } from 'lucide-react';

const Resources = () => {
  const resourceLibrary = [
    {
      title: 'Career Bingo',
      category: 'Academic & Career Guidance',
      categoryColor: '#3b82f6',
      activity: 'Annual flagship program',
      deadline: '11/11/2024',
      items: [
        { label: 'Activity Guideline', type: 'Download PDF' },
        { label: 'Report Submission Guideline', type: 'Download PDF' },
      ],
    },
    {
      title: 'Career Bingo',
      category: 'Academic & Career Guidance',
      categoryColor: '#3b82f6',
      activity: 'Annual flagship program',
      deadline: '11/11/2024',
      items: [
        { label: 'How to conduct activity', type: 'Download PDF' },
        { label: 'How to submit report', type: 'Download PDF' },
      ],
    },
    {
      title: 'Career Bingo',
      category: 'Academic & Career Guidance',
      categoryColor: '#3b82f6',
      activity: 'Annual flagship program',
      deadline: '11/11/2024',
      items: [
        { label: 'How to conduct activity', type: 'Download PDF' },
        { label: 'How to submit report', type: 'Download PDF' },
      ],
    },
    {
      title: 'Career Bingo',
      category: 'Academic & Career Guidance',
      categoryColor: '#3b82f6',
      activity: 'Annual flagship program',
      deadline: '11/11/2024',
      items: [
        { label: 'How to conduct activity', type: 'Download PDF' },
        { label: 'How to submit report', type: 'Download PDF' },
      ],
    },
    {
      title: 'Career Bingo',
      category: 'Academic & Career Guidance',
      categoryColor: '#3b82f6',
      activity: 'Annual flagship program',
      deadline: '11/11/2024',
      items: [
        { label: 'How to conduct activity', type: 'Download PDF' },
        { label: 'How to submit report', type: 'Download PDF' },
      ],
    },
    {
      title: 'Career Bingo',
      category: 'Academic & Career Guidance',
      categoryColor: '#3b82f6',
      activity: 'Annual flagship program',
      deadline: '11/11/2024',
      items: [
        { label: 'How to conduct activity', type: 'Download PDF' },
        { label: 'How to submit report', type: 'Download PDF' },
      ],
    },
  ];

  const manuals = [
    { title: 'Chapter Formation Guideline', size: '2.3 MB', type: 'PDF' },
    { title: 'Student Activity Guidelines', size: '1.1 MB', type: 'PDF' },
    { title: 'Teacher Activity Guidelines', size: '850 KB', type: 'PDF', downloads: '167 downloads' },
    { title: 'Code of conduct', size: '1.5 MB', type: 'PDF' },
    { title: 'Child safety and protection policies', size: '980 KB', type: 'PDF' },
  ];

  return (
    <div className="p-4 max-w-7xl mx-auto space-y-6 animate-in fade-in duration-700">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-[24px] font-normal text-[#1a1a1a] tracking-tight">Resource Library</h2>
          <p className="text-[14px] font-normal text-[#555555] opacity-60">Access all your activity templates and guidelines</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-white border border-[#eeeeee] px-4 py-2 rounded-xl text-[13px] font-normal text-[#1a1a1a] shadow-sm">
            <Bell size={18} className="text-[#A82228]" />
            Updates
            <span className="bg-[#A82228] text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">2</span>
          </button>
          <button className="flex items-center gap-2 bg-[#A82228] text-white px-4 py-2 rounded-xl text-[13px] font-normal shadow-lg shadow-[#A82228]/20">
            <HelpCircle size={18} />
            Help Desk
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white rounded-2xl p-3 shadow-sm border border-[#eeeeee] flex flex-wrap gap-3">
        {['All Wing', 'Activity', 'Month'].map((filter) => (
          <div key={filter} className="relative flex-1 min-w-[120px] md:min-w-[160px]">
            <select className="w-full appearance-none bg-[#f4f4f5]/60 hover:bg-white border border-transparent hover:border-[#eeeeee] rounded-xl py-2 px-5 text-[12px] font-normal text-[#1a1a1a] outline-none transition-all cursor-pointer">
              <option>{filter}</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#555555] opacity-40 pointer-events-none" size={16} />
          </div>
        ))}
      </div>

      {/* Resource Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resourceLibrary.map((card, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-5 border border-[#eeeeee] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h3 className="text-[17px] font-normal text-[#1a1a1a]">{card.title}</h3>
              <span className="bg-[#e0f0ff] text-[#3b82f6] text-[10px] font-normal px-2.5 py-1 rounded-lg w-fit uppercase tracking-wider">{card.category}</span>
              <p className="text-[11px] font-normal text-[#ef4444]">SDG 3 - Good Health & Well-being</p>
            </div>

            <div className="space-y-2 text-[12px]">
              <div className="flex items-center gap-2">
                <span className="font-normal text-[#555555] opacity-60 uppercase w-20">Activity:</span>
                <span className="font-normal text-[#1a1a1a]">{card.activity}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-normal text-[#555555] opacity-60 uppercase w-20">Deadline:</span>
                <span className="font-normal text-[#1a1a1a]">{card.deadline}</span>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              {card.items.map((item, i) => (
                <div key={i} className="space-y-2">
                  <p className="text-[13px] font-normal text-[#1a1a1a]">{item.label}</p>
                  <button className="w-full flex items-center justify-center gap-2 border border-[#eeeeee] py-2.5 rounded-xl text-[12px] font-normal text-[#555555] hover:bg-gray-50 transition-all">
                    <Download size={14} />
                    {item.type}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Manuals Section */}
      <div className="bg-[#fff1f2] rounded-3xl p-8 space-y-6">
        <div className="flex items-center gap-3">
          <div className="bg-[#A82228] text-white p-2 rounded-lg">
            <FileText size={18} />
          </div>
          <h3 className="text-[18px] font-normal text-[#1a1a1a]">Manuals</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {manuals.map((manual, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-5 border border-white shadow-sm flex flex-col gap-4 group hover:shadow-lg transition-all">
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-[#555555] opacity-40">
                    <FileText size={20} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[13px] font-normal text-[#1a1a1a] leading-tight">{manual.title}</p>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-normal text-[#555555] opacity-40 border border-[#eeeeee] px-1.5 py-0.5 rounded uppercase tracking-wider">{manual.type}</span>
                      <span className="text-[10px] font-normal text-[#555555] opacity-40">{manual.size}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                {manual.downloads ? (
                  <span className="text-[10px] font-normal text-[#555555] opacity-40 italic">{manual.downloads}</span>
                ) : <div />}
                <button className="flex items-center gap-2 bg-gray-50 hover:bg-[#A82228] hover:text-white border border-[#eeeeee] px-4 py-2 rounded-xl text-[11px] font-normal text-[#555555] transition-all">
                  <Download size={14} />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;
