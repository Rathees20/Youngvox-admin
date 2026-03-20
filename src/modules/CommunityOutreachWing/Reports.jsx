import React, { useState, useRef, useEffect } from 'react';
import { 
  Search, 
  ChevronDown, 
  ChevronUp, 
  Filter, 
  FileText, 
  Eye, 
  Edit3, 
  Trash2, 
  Calendar,
  X,
  Upload
} from 'lucide-react';
import { cn } from '../../utils/cn';

const ReportCard = ({ title, wing, activity, date, submitter }) => (
  <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100/50 space-y-6 group hover:shadow-xl transition-all duration-300 relative">
    <div className="flex justify-between items-start">
      <div className="space-y-2">
        <h4 className="text-[16px] font-normal text-[#1a1a1a] tracking-tight leading-tight">{title}</h4>
        <span className="inline-block bg-[#fef3c7] text-[#92400e] text-[10px] font-normal px-2.5 py-1 rounded-lg uppercase tracking-wider">
          {wing}
        </span>
      </div>
      <span className="bg-[#fff1f2] text-[#e11d48] text-[10px] font-normal px-3 py-1 rounded-lg uppercase tracking-widest">
        Review
      </span>
    </div>

    <div className="space-y-3 pt-2">
      <div className="flex items-start gap-2 text-[13px]">
        <span className="text-[#555555] opacity-60 shrink-0">Activity:</span>
        <span className="text-[#1a1a1a] font-normal">{activity}</span>
      </div>
      <div className="flex items-start gap-2 text-[13px]">
        <span className="text-[#555555] opacity-60 shrink-0">Date:</span>
        <span className="text-[#1a1a1a] font-normal">{date}</span>
      </div>
      <div className="flex items-start gap-2 text-[13px]">
        <span className="text-[#555555] opacity-60 shrink-0">Submitted by:</span>
        <span className="text-[#1a1a1a] font-normal">{submitter} (Wing Leader)</span>
      </div>
    </div>

    <div className="flex items-center gap-2 pt-2">
      <button className="flex-1 h-10 flex items-center justify-center bg-gray-50 border border-gray-100 rounded-xl text-[#555555] hover:bg-white hover:shadow-md transition-all">
        <Eye size={16} />
      </button>
      <button className="flex-[2.5] h-10 flex items-center justify-center gap-2 bg-[#1caf5f] text-white rounded-xl text-[12px] font-normal hover:bg-[#16a34a] hover:shadow-lg transition-all shadow-md shadow-green-500/10">
        <Edit3 size={14} /> Edit
      </button>
      <button className="flex-1 h-10 flex items-center justify-center bg-[#ef4444] text-white rounded-xl hover:bg-[#dc2626] hover:shadow-lg transition-all shadow-md shadow-red-500/10">
        <Trash2 size={16} />
      </button>
    </div>
  </div>
);

const CommunityOutreachWingReports = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null); // 'monthly' | 'annual' | null
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const reports = [
    { title: 'Digital Detox', wing: 'Community Outreach & Service', activity: 'Monthly poster activity', date: '11/11/2024', submitter: 'Sarah Miller' },
    { title: 'Digital Detox', wing: 'Community Outreach & Service', activity: 'Monthly poster activity', date: '11/11/2024', submitter: 'Sarah Miller' },
    { title: 'Digital Detox', wing: 'Community Outreach & Service', activity: 'Monthly poster activity', date: '11/11/2024', submitter: 'Sarah Miller' },
    { title: 'Digital Detox', wing: 'Community Outreach & Service', activity: 'Monthly poster activity', date: '11/11/2024', submitter: 'Sarah Miller' },
    { title: 'Digital Detox', wing: 'Community Outreach & Service', activity: 'Monthly poster activity', date: '11/11/2024', submitter: 'Sarah Miller' },
    { title: 'Digital Detox', wing: 'Community Outreach & Service', activity: 'Monthly poster activity', date: '11/11/2024', submitter: 'Sarah Miller' },
  ];

  const chartData = [
    { label: 'Academic & career', value: 65, color: 'bg-[#bfdbfe]' },
    { label: 'Student Wellbeing', value: 45, color: 'bg-[#bbf7d0]' },
    { label: 'Child Rights & Safety', value: 72, color: 'bg-[#f3e8ff]' },
    { label: 'Community Outreach & Services', value: 85, color: 'bg-[#fef3c7]' },
  ];

  return (
    <div className="p-6 space-y-6 animate-in fade-in duration-700 pb-24 max-w-[1600px] mx-auto font-['Arial'] bg-white min-h-screen">
      <div className="space-y-1">
        <h2 className="text-[20px] font-normal text-[#1a1a1a] tracking-tight">Reports Management</h2>
        <p className="text-[13px] font-normal text-[#555555] opacity-60">Track & manage all reports seamlessly | 3 Reviewed. 3 Completed</p>
      </div>

      {/* Filter Bar */}
      <div className="bg-white rounded-[24px] p-4 shadow-sm border border-gray-100/50 flex flex-wrap gap-4">
        <div className="relative group w-48">
          <select className="appearance-none w-full bg-[#f8f9fa] border-none rounded-xl py-3 pl-4 pr-10 text-[13px] font-normal text-[#1a1a1a] outline-none">
            <option>Activity</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#555555]/40 pointer-events-none" size={16} />
        </div>
        <div className="relative group w-48" ref={dropdownRef}>
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full flex items-center justify-between bg-[#f8f9fa] border border-transparent rounded-xl py-3 px-5 text-[13px] font-normal text-[#1a1a1a] outline-none transition-all cursor-pointer"
          >
            <span>Month</span>
            {isDropdownOpen ? <ChevronUp size={16} className="text-[#555555]/40" /> : <ChevronDown size={16} className="text-[#555555]/40" />}
          </button>
          
          {isDropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-[60] animate-in fade-in zoom-in-95 duration-200">
              <button 
                onClick={() => { setActiveModal('monthly'); setIsDropdownOpen(false); }}
                className="w-full text-left px-5 py-3 text-[13px] font-normal text-[#1a1a1a] hover:bg-gray-50 transition-colors"
              >
                Monthly event report
              </button>
              <button 
                onClick={() => { setActiveModal('annual'); setIsDropdownOpen(false); }}
                className="w-full text-left px-5 py-3 text-[13px] font-normal text-[#1a1a1a] hover:bg-gray-50 transition-colors border-t border-gray-50"
              >
                Annual event report
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Reports Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reports.map((report, idx) => (
          <ReportCard key={idx} {...report} />
        ))}
      </div>

      {/* Reports Modals (same as Academic) */}
      {(activeModal === 'monthly' || activeModal === 'annual') && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setActiveModal(null)} />
          <div className="bg-white w-full max-w-[420px] rounded-[24px] shadow-2xl relative z-10 animate-in zoom-in-95 duration-200 overflow-hidden font-['Arial']">
            {/* Modal Header */}
            <div className="p-8 pb-3 flex items-center justify-between">
              <h3 className="text-[17px] font-bold text-[#1a1a1a]">
                {activeModal === 'monthly' ? 'Monthly event report' : 'Annual event report'}
              </h3>
              <button onClick={() => setActiveModal(null)} className="text-gray-400 hover:text-gray-600 transition-colors">
                <X size={18} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-8 pt-4 space-y-5 max-h-[80vh] overflow-y-auto custom-scrollbar">
              {activeModal === 'monthly' ? (
                <>
                  <div className="space-y-3">
                    <label className="text-[13px] font-bold text-[#1a1a1a] opacity-80 leading-snug">Has this been shared in the parents' WhatsApp group?</label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <div className="w-4 h-4 rounded-full border-2 border-gray-300 flex items-center justify-center group-hover:border-[#A82228] transition-colors">
                          <div className="w-2 h-2 rounded-full bg-transparent" />
                        </div>
                        <span className="text-[14px] text-gray-400">Yes</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <div className="w-4 h-4 rounded-full border-2 border-[#A82228] flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-[#A82228]" />
                        </div>
                        <span className="text-[14px] text-gray-400 font-bold">NO</span>
                      </label>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[13px] font-bold text-[#1a1a1a] opacity-80">How many parents are there in the whatsapp group?</label>
                    <input type="text" className="w-full bg-[#f4f4f5] border-none rounded-xl py-3 px-4 text-[13px] outline-none" />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[13px] font-bold text-[#1a1a1a] opacity-80">Shared on Instagram page?</label>
                    <div className="flex gap-6 mb-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <div className="w-4 h-4 rounded-full border-2 border-[#A82228] flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-[#A82228]" />
                        </div>
                        <span className="text-[14px] text-gray-400 font-bold">Yes</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <div className="w-4 h-4 rounded-full border-2 border-gray-300 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-transparent" />
                        </div>
                        <span className="text-[14px] text-gray-400">NO</span>
                      </label>
                    </div>
                    <input type="text" placeholder="If yes please share the link here" className="w-full bg-[#f4f4f5] border-none rounded-xl py-3 px-4 text-[13px] text-[#1a1a1a] placeholder:text-gray-300 outline-none" />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[13px] font-bold text-[#1a1a1a] opacity-80">Shared on Facebook page?</label>
                    <div className="flex gap-6 mb-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <div className="w-4 h-4 rounded-full border-2 border-[#A82228] flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-[#A82228]" />
                        </div>
                        <span className="text-[14px] text-gray-400 font-bold">Yes</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <div className="w-4 h-4 rounded-full border-2 border-gray-300 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-transparent" />
                        </div>
                        <span className="text-[14px] text-gray-400">NO</span>
                      </label>
                    </div>
                    <input type="text" placeholder="If yes please share the link here" className="w-full bg-[#f4f4f5] border-none rounded-xl py-3 px-4 text-[13px] text-[#1a1a1a] placeholder:text-gray-300 outline-none" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[13px] font-bold text-[#1a1a1a] opacity-80">Submitted by</label>
                    <input type="text" placeholder="Enter name" className="w-full bg-[#f4f4f5] border-none rounded-xl py-3 px-4 text-[13px] text-[#1a1a1a] placeholder:text-gray-300 outline-none" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[13px] font-bold text-[#1a1a1a] opacity-80">Date</label>
                    <input type="text" placeholder="Enter date" className="w-full bg-[#f4f4f5] border-none rounded-xl py-3 px-4 text-[13px] text-[#1a1a1a] placeholder:text-gray-300 outline-none" />
                  </div>
                </>
              ) : (
                <>
                  <div className="space-y-2">
                    <label className="text-[13px] font-bold text-[#1a1a1a] opacity-80">Pre Assessment Data</label>
                    <input type="text" placeholder="250/500 - correct answers" className="w-full bg-[#f4f4f5] border-none rounded-xl py-3 px-4 text-[13px] text-[#1a1a1a] placeholder:text-gray-300 outline-none" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[13px] font-bold text-[#1a1a1a] opacity-80">Post Assessment Data</label>
                    <input type="text" placeholder="350/500 - correct answers" className="w-full bg-[#f4f4f5] border-none rounded-xl py-3 px-4 text-[13px] text-[#1a1a1a] placeholder:text-gray-300 outline-none" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[13px] font-bold text-[#1a1a1a] opacity-80">Upload photo</label>
                    <div className="w-full bg-[#f4f4f5] rounded-xl border-none p-8 flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-gray-100 transition-colors">
                      <div className="w-6 h-6 flex items-center justify-center">
                        <Upload size={20} className="text-[#1a1a1a]" />
                      </div>
                      <span className="text-[12px] font-normal text-gray-400">Upload required photo</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[13px] font-bold text-[#1a1a1a] opacity-80">Submitted by</label>
                    <input type="text" className="w-full bg-[#f4f4f5] border-none rounded-xl py-3 px-4 text-[13px] outline-none" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[13px] font-bold text-[#1a1a1a] opacity-80">Date</label>
                    <input type="text" placeholder="Enter date" className="w-full bg-[#f4f4f5] border-none rounded-xl py-3 px-4 text-[13px] text-[#1a1a1a] placeholder:text-gray-300 outline-none" />
                  </div>
                </>
              )}

              <div className="pt-4">
                <button 
                  onClick={() => setActiveModal(null)}
                  className="bg-[#A82228] text-white px-8 py-2 rounded-lg text-[13px] font-bold transition-all hover:brightness-110 active:scale-95 shadow-lg shadow-[#A82228]/20"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}


      {/* Monthly Completion Progress Section */}
      <div className="bg-white rounded-[40px] p-8 md:p-10 shadow-sm border border-gray-100/50 space-y-12 mt-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          <div className="space-y-1">
            <h3 className="text-[18px] font-normal text-[#1a1a1a] tracking-tight">Monthly completion progress bar</h3>
            <p className="text-[12px] font-normal text-[#555555] opacity-40">Based on planned activities vs completed reports</p>
          </div>
          <div className="flex flex-col gap-3">
             <button className="flex items-center gap-2 bg-white border border-gray-100 text-[#555555] px-5 py-2.5 rounded-xl text-[12px] font-normal hover:bg-gray-50 transition-all shadow-sm">
               Choose month <Calendar size={14} className="text-[#c72030]" />
             </button>
             <div className="relative w-full">
               <select className="appearance-none w-full bg-[#f8f9fa] border-none rounded-xl py-2.5 px-4 text-[12px] font-normal text-[#555555] outline-none cursor-pointer hover:bg-gray-100 transition-all">
                 <option>Last 6month</option>
               </select>
               <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#555555]/40 pointer-events-none" size={14} />
             </div>
          </div>
        </div>

        {/* Bar Chart Visualization */}
        <div className="relative pt-10 min-h-[400px]">
          {/* Y-Axis Guidelines */}
          <div className="absolute inset-0 flex flex-col justify-between py-10 pointer-events-none pl-12 border-l border-gray-100">
            {[100, 75, 50, 25, 0].map((label) => (
              <div key={label} className="flex items-center gap-6">
                <span className="w-8 text-[12px] font-normal text-[#555555]/40 text-right">{label}</span>
                <div className="flex-1 border-t border-dashed border-gray-100" />
              </div>
            ))}
          </div>

          {/* Bars */}
          <div className="relative flex justify-around items-end ml-20 h-full pt-10 pb-10 gap-4">
            {chartData.map((data, idx) => (
              <div key={idx} className="flex flex-col items-center gap-4 w-1/4 h-full justify-end group">
                <div className="relative w-full flex flex-col items-center group/bar">
                  {idx === 2 && (
                    <div className="absolute -top-10 flex flex-col items-center animate-bounce">
                      <span className="text-[12px] font-normal text-[#A82228]">78%</span>
                      <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#A82228]"></div>
                    </div>
                  )}
                  <div 
                    className={cn(
                      "w-24 md:w-32 rounded-t-lg transition-all duration-1000 group-hover/bar:scale-x-105 group-hover/bar:brightness-95 shadow-sm",
                      data.color
                    )} 
                    style={{ height: `${data.value * 3}px` }}
                  />
                </div>
                <p className="text-[12px] font-normal text-[#555555] text-center tracking-tight leading-tight max-w-[120px] h-8">
                  {data.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityOutreachWingReports;
