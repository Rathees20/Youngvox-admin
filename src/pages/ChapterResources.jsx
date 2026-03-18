import React from 'react';
import { ChevronDown, Download, MessageSquare, Bell, FileText, Book } from 'lucide-react';

const ChapterResources = () => {
  const resourceLibrary = Array(6).fill({
    title: 'Career Bingo',
    category: 'Academic & Career Guidance',
    sdg: 'SDG 3 - Good Health & Well-being',
    activity: 'Annual flagship program',
    deadline: '11/11/2024',
    items: [
      { label: 'How to conduct activity', type: 'Download PDF' },
      { label: 'How to submit report', type: 'Download PDF' },
    ],
  });

  const manuals = [
    { title: 'Chapter Formation Guideline', size: '2.3 MB', type: 'PDF' },
    { title: 'Student Activity Guidelines', size: '1.1 MB', type: 'PDF' },
    { title: 'Teacher Activity Guidelines', size: '850 KB', type: 'PDF', downloads: '167 downloads' },
    { title: 'Code of conduct', size: '1.5 MB', type: 'PDF' },
    { title: 'Child safety and protection policies', size: '980 KB', type: 'PDF' },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-700 font-['Arial']">
      {/* Header */}
      <div className="flex items-center justify-between pb-4">
        <div className="space-y-1">
          <h2 className="text-[22px] font-bold text-[#1a1a1a]">Resource Library</h2>
          <p className="text-[14px] font-normal text-[#555555] opacity-60">Access all your activity templates and guidelines</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-white border border-gray-100 px-4 py-2 rounded-xl text-[13px] font-normal text-[#1a1a1a] shadow-sm relative">
            <Bell size={18} className="text-[#1a1a1a] opacity-60" />
            <span>Updates</span>
            <span className="bg-[#A82228] text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold absolute -top-1 -right-1">2</span>
          </button>
          <button className="flex items-center gap-2 bg-[#A82228] text-white px-5 py-2 rounded-xl text-[13px] font-normal shadow-lg shadow-[#A82228]/20">
            <MessageSquare size={18} />
            Help Desk
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white rounded-[20px] p-6 shadow-sm border border-[#eeeeee] flex items-center gap-4">
        {['All Wing', 'Activity', 'Month'].map((filter) => (
          <div key={filter} className="relative w-full max-w-[200px]">
            <select className="w-full appearance-none bg-[#f8fafc] border-none rounded-xl py-3 px-5 text-[13px] font-normal text-[#1a1a1a]/60 outline-none cursor-pointer">
              <option>{filter}</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#1a1a1a]/20 pointer-events-none" size={14} />
          </div>
        ))}
      </div>

      {/* Resource Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
        {resourceLibrary.map((card, idx) => (
          <div key={idx} className="bg-white rounded-[24px] p-8 border border-[#eeeeee] shadow-sm flex flex-col gap-6">
            <div className="space-y-4">
              <h3 className="text-[16px] font-bold text-[#1a1a1a]">{card.title}</h3>
              <div className="flex">
                <span className="bg-[#e8f2ff] text-[#3b82f6] text-[11px] font-bold px-3 py-1.5 rounded-lg uppercase tracking-tight">{card.category}</span>
              </div>
              <p className="text-[12px] font-bold text-[#A82228] uppercase">{card.sdg}</p>
              
              <div className="space-y-2 text-[14px]">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#1a1a1a]">Activity:</span>
                  <span className="text-[#555555] opacity-60">{card.activity}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#1a1a1a]">Deadline:</span>
                  <span className="text-[#555555] opacity-60">{card.deadline}</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {card.items.map((item, i) => (
                <div key={i} className="space-y-3">
                  <p className="text-[14px] font-bold text-[#1a1a1a] opacity-80">{item.label}</p>
                  <button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-100 py-3 rounded-xl text-[13px] font-bold text-[#1a1a1a]/60 hover:bg-[#A82228] hover:text-white transition-all shadow-sm">
                    <Download size={16} />
                    {item.type}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Manuals Section */}
      <div className="bg-[#fef2f2] rounded-[24px] p-8 space-y-8">
        <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg border-2 border-[#A82228] flex items-center justify-center">
                <Book size={18} className="text-[#A82228]" />
            </div>
            <h2 className="text-[18px] font-bold text-[#1a1a1a]">Manuals</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {manuals.map((manual, idx) => (
                <div key={idx} className="bg-white rounded-[20px] p-6 border border-white shadow-sm flex flex-col gap-4">
                    <div className="flex items-start gap-3">
                        <FileText size={20} className="text-[#1a1a1a] opacity-40 mt-1" />
                        <div className="space-y-1">
                            <h4 className="text-[14px] font-bold text-[#1a1a1a]">{manual.title}</h4>
                            <div className="flex items-center gap-2 text-[12px] font-normal text-[#1a1a1a] opacity-40">
                                <span>{manual.type}</span>
                                <span>{manual.size}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="h-[1px] w-full bg-gray-50" />
                    
                    <div className={`flex items-center ${manual.downloads ? 'justify-between' : 'justify-start'}`}>
                        {manual.downloads && (
                            <span className="text-[12px] font-normal text-[#1a1a1a] opacity-40">{manual.downloads}</span>
                        )}
                        <button className="flex items-center gap-2 bg-[#f4f4f5] border-none px-4 py-2 rounded-xl text-[13px] font-bold text-[#A82228] hover:bg-[#A82228] hover:text-white transition-all">
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

export default ChapterResources;
