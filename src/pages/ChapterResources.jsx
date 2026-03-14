import React from 'react';
import { ChevronDown, Download, FileText, HelpCircle, Bell } from 'lucide-react';

const ChapterResources = () => {
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
    <div className="p-4 md:p-6 lg:p-8 max-w-[1600px] mx-auto space-y-8 animate-in fade-in duration-700">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-[24px] font-black text-[#1a1a1a] tracking-tight">Resource Library</h2>
          <p className="text-[14px] font-bold text-[#555555] opacity-60">Access all your activity templates and guidelines</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-3 bg-white border border-[#eeeeee] px-6 py-3 rounded-2xl text-[13px] font-black text-[#1a1a1a] shadow-sm hover:shadow-md transition-all">
            <Bell size={20} className="text-[#A82228]" />
            Updates
            <span className="bg-[#A82228] text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-black">2</span>
          </button>
          <button className="flex items-center gap-3 bg-[#A82228] text-white px-6 py-3 rounded-2xl text-[13px] font-black shadow-2xl shadow-[#A82228]/30 hover:brightness-110 transition-all active:scale-95">
            <HelpCircle size={20} />
            Help Desk
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white rounded-[32px] p-4 shadow-sm border border-[#eeeeee] flex flex-wrap gap-4 items-center">
        {['All Wing', 'Activity', 'Month'].map((filter) => (
          <div key={filter} className="relative flex-1 min-w-[140px]">
            <select className="w-full appearance-none bg-[#f4f4f5]/60 hover:bg-white border border-transparent hover:border-[#eeeeee] rounded-[20px] py-3.5 px-6 text-[12px] font-black text-[#1a1a1a] outline-none transition-all cursor-pointer">
              <option>{filter}</option>
            </select>
            <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
          </div>
        ))}
      </div>

      {/* Resource Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resourceLibrary.map((card, idx) => (
          <div key={idx} className="bg-white rounded-[40px] p-8 border border-[#eeeeee] shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col gap-6 group">
            <div className="flex flex-col gap-3">
              <h3 className="text-[18px] font-black text-[#1a1a1a] tracking-tight group-hover:text-[#A82228] transition-colors">{card.title}</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#e0f0ff] text-[#3b82f6] text-[10px] font-black px-3 py-1.5 rounded-xl uppercase tracking-widest">{card.category}</span>
              </div>
              <p className="text-[11px] font-black text-[#ef4444] uppercase tracking-tighter">SDG 3 - Good Health & Well-being</p>
            </div>

            <div className="space-y-3 pt-2 text-[13px] font-bold border-t border-gray-50">
              <div className="flex items-center gap-3">
                <span className="text-gray-400 uppercase tracking-widest w-24">Activity:</span>
                <span className="text-[#1a1a1a]">{card.activity}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-400 uppercase tracking-widest w-24">Deadline:</span>
                <span className="text-[#1a1a1a]">{card.deadline}</span>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              {card.items.map((item, i) => (
                <div key={i} className="space-y-3">
                  <p className="text-[14px] font-black text-[#1a1a1a] tracking-tight">{item.label}</p>
                  <button className="w-full flex items-center justify-center gap-3 border-2 border-transparent bg-[#f8fafb] hover:bg-white hover:border-[#eeeeee] py-4 rounded-[24px] text-[13px] font-black text-[#555555] transition-all group/btn">
                    <Download size={18} className="group-hover/btn:text-[#A82228] transition-colors" />
                    {item.type}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Manuals Section */}
      <div className="bg-[#fff1f2] rounded-[48px] p-10 md:p-14 space-y-10 border border-red-50 relative overflow-hidden group">
        <div className="flex items-center gap-4 relative z-10">
          <div className="bg-[#A82228] text-white p-3 rounded-2xl shadow-xl shadow-[#A82228]/20 group-hover:scale-110 transition-transform duration-500">
            <FileText size={24} strokeWidth={3} />
          </div>
          <h3 className="text-[24px] font-black text-[#1a1a1a] tracking-tight">Manuals</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {manuals.map((manual, idx) => (
            <div key={idx} className="bg-white rounded-[32px] p-6 border border-white shadow-sm flex flex-col gap-6 group/card hover:shadow-2xl transition-all duration-500">
              <div className="flex items-start justify-between">
                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 group-hover/card:bg-red-50 group-hover/card:text-[#A82228] transition-all duration-500">
                    <FileText size={24} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <p className="text-[15px] font-black text-[#1a1a1a] leading-tight tracking-tight">{manual.title}</p>
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] font-black text-gray-400 border-2 border-gray-100 px-2.5 py-1 rounded-lg uppercase tracking-widest">{manual.type}</span>
                      <span className="text-[11px] font-bold text-gray-300 uppercase tracking-tighter">{manual.size}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                {manual.downloads ? (
                  <span className="text-[11px] font-bold text-gray-300 italic tracking-tight">{manual.downloads}</span>
                ) : <div />}
                <button className="flex items-center gap-3 bg-[#f8fafb] hover:bg-[#A82228] hover:text-white hover:shadow-xl hover:shadow-[#A82228]/20 border border-transparent px-6 py-3 rounded-2xl text-[12px] font-black text-[#555555] transition-all active:scale-95">
                  <Download size={16} strokeWidth={3} />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Decorative Background Element */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/40 rounded-full blur-[100px] -mr-40 -mt-40 transition-all duration-1000 group-hover:bg-white/60"></div>
      </div>
    </div>
  );
};

export default ChapterResources;
