import React, { useState, useRef, useEffect } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Eye, 
  Edit3, 
  Trash2, 
  Calendar, 
  Filter,
  X,
  Upload
} from 'lucide-react';
import { cn } from '../../utils/cn';

const ReportCard = ({ title, wing, subtext, activity, date, submittedBy, status }) => (
  <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 group hover:shadow-xl transition-all duration-300 relative overflow-hidden">
    <div className={cn(
      "absolute top-4 right-4 px-4 py-1.5 rounded-full text-[10px] font-normal uppercase tracking-wider",
      status === 'Completed' ? 'bg-[#fff4e6] text-[#FF9800]' : 'bg-[#fff1f2] text-[#e11d48]'
    )}>
      {status}
    </div>

    <div className="space-y-4">
      <div className="space-y-1">
        <h4 className="text-[16px] font-normal text-[#1a1a1a] tracking-tight">{title}</h4>
        <span className="inline-block bg-[#e0f0ff] text-[#3b82f6] text-[10px] font-normal px-3 py-1 rounded-lg uppercase tracking-wider">
          {wing}
        </span>
      </div>

      {subtext && (
        <p className="text-[11px] font-normal text-[#e11d48] tracking-tight">{subtext}</p>
      )}

      <div className="space-y-2 py-2">
        <div className="flex items-center gap-2">
          <span className="text-[12px] font-normal text-[#1a1a1a]/50">Activity:</span>
          <span className="text-[12px] font-normal text-[#1a1a1a]">{activity}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[12px] font-normal text-[#1a1a1a]/50">Date:</span>
          <span className="text-[12px] font-normal text-[#1a1a1a]">{date}</span>
        </div>
        <div className="flex items-center gap-2 text-wrap">
          <span className="text-[12px] font-normal text-[#1a1a1a]/50 shrink-0">Submitted by:</span>
          <span className="text-[12px] font-normal text-[#1a1a1a] truncate">{submittedBy}</span>
        </div>
      </div>

      <div className="flex items-center gap-2 pt-2 border-t border-gray-50">
        <button className="flex-1 flex items-center justify-center gap-2 bg-[#f8f9fa] hover:bg-gray-100 text-[#555555] py-2.5 rounded-xl transition-all border border-gray-100 group/btn">
          <Eye size={14} className="group-hover/btn:scale-110 transition-transform" />
          <span className="text-[12px] font-normal">View</span>
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 bg-[#10b981] hover:bg-[#059669] text-white py-2.5 rounded-xl transition-all shadow-md shadow-[#10b981]/20 group/btn">
          <Edit3 size={14} className="group-hover/btn:scale-110 transition-transform" />
          <span className="text-[12px] font-normal">Edit</span>
        </button>
        <button className="w-10 h-10 flex items-center justify-center bg-[#e11d48] hover:bg-[#be123c] text-white rounded-xl transition-all shadow-md shadow-[#e11d48]/20 flex-shrink-0 group/btn">
          <Trash2 size={16} className="group-hover/btn:scale-110 transition-transform" />
        </button>
      </div>
    </div>
  </div>
);

const ChildRightsWingReports = () => {
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
    { title: 'Child Rights Awareness', wing: 'Child Rights & Social Justice', subtext: 'SDG 16 - Peace, Justice & Strong Institutions', activity: 'Annual flagship program', date: '11/11/2024', submittedBy: 'Sarah Miller', status: 'Completed' },
    { title: 'Social Justice Campaign', wing: 'Child Rights & Social Justice', activity: 'Monthly poster activity', date: '11/11/2024', submittedBy: 'Sarah Miller', status: 'Review' },
    { title: 'Child Rights Awareness', wing: 'Child Rights & Social Justice', subtext: 'SDG 16 - Peace, Justice & Strong Institutions', activity: 'Annual flagship program', date: '11/11/2024', submittedBy: 'Sarah Miller', status: 'Completed' },
    { title: 'Social Justice Campaign', wing: 'Child Rights & Social Justice', activity: 'Monthly poster activity', date: '11/11/2024', submittedBy: 'Sarah Miller', status: 'Review' },
    { title: 'Social Justice Campaign', wing: 'Child Rights & Social Justice', activity: 'Monthly poster activity', date: '11/11/2024', submittedBy: 'Sarah Miller', status: 'Review' },
    { title: 'Social Justice Campaign', wing: 'Child Rights & Social Justice', activity: 'Monthly poster activity', date: '11/11/2024', submittedBy: 'Sarah Miller', status: 'Review' },
  ];

  const chartData = [
    { label: 'Student Wellbeing', value: 65, color: 'bg-[#b8d8ff]' },
    { label: 'Academic & career', value: 45, color: 'bg-[#b2ffd1]' },
    { label: 'Child Rights & Justice', value: 78, color: 'bg-[#e9d5ff]', highlight: true },
    { label: 'Community Outreach', value: 88, color: 'bg-[#ffedb8]' },
  ];

  return (
    <div className="p-6 space-y-6 animate-in fade-in duration-700 pb-24 max-w-[1600px] mx-auto font-['Arial'] bg-white min-h-screen">
      <div className="space-y-1">
        <h2 className="text-[20px] font-normal text-[#1a1a1a] tracking-tight">Reports Management</h2>
        <p className="text-[13px] font-normal text-[#555555] opacity-60">
          Track & manage all reports seamlessly | <span className="text-[#3b82f6] font-normal">3 Reviewed</span>. <span className="text-[#10b981] font-normal">3 Completed</span>
        </p>
      </div>

      <div className="bg-white rounded-[24px] p-4 shadow-sm border border-gray-100 flex gap-4">
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

      {/* Progress Chart Section */}
      <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-sm border border-gray-100 space-y-10 relative">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-[20px] font-normal text-[#1a1a1a] tracking-tight">Monthly completion progress bar</h3>
            <p className="text-[13px] font-normal text-[#555555] opacity-60">Based on planned activities vs completed reports</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 bg-[#fff1f2] text-[#e11d48] px-4 py-2.5 rounded-xl text-[12px] font-normal border border-[#e11d48]/10 hover:bg-[#ffe4e6] transition-all">
              Choose month <Calendar size={14} />
            </button>
            <div className="relative w-40">
              <select className="appearance-none w-full bg-[#f8f9fa] border-none rounded-xl py-2.5 pl-4 pr-10 text-[12px] font-normal text-[#1a1a1a] outline-none">
                <option>Last 6month</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#555555]/40 pointer-events-none" size={14} />
            </div>
          </div>
        </div>

        <div className="relative pt-12 pb-6 min-h-[400px]">
          <div className="absolute inset-0 flex flex-col justify-between py-12 pointer-events-none">
            {[100, 75, 50, 25, 0].map((label) => (
              <div key={label} className="flex items-center gap-4">
                <span className="w-10 text-[12px] font-normal text-[#555555]/40 text-right">{label}</span>
                <div className="flex-1 border-t border-dashed border-gray-200" />
              </div>
            ))}
          </div>
          <div className="absolute left-[56px] top-6 bottom-4 w-px bg-gray-200" />
          <div className="relative flex justify-around items-end ml-[56px] h-full pt-6">
            {chartData.map((bar, idx) => (
              <div key={idx} className="flex flex-col items-center gap-6 w-1/4 max-w-[200px] h-full justify-end group">
                {bar.highlight && (
                  <div className="absolute top-[-10px] flex flex-col items-center animate-bounce">
                    <span className="text-[14px] font-normal text-[#e11d48]">{bar.value}%</span>
                    <div className="w-3 h-3 bg-[#e11d48] rotate-45 transform -translate-y-1.5" />
                  </div>
                )}
                <div className="relative w-full px-4 flex justify-center items-end h-[300px]">
                  <div
                    className={cn("w-3/4 rounded-t-lg transition-all duration-1000 ease-out shadow-sm", bar.color)}
                    style={{ height: `${bar.value}%` }}
                  />
                </div>
                <p className="text-[12px] font-normal text-[#555555]/60 text-center leading-tight h-10 flex items-center">
                  {bar.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildRightsWingReports;
