import React, { useState } from 'react';
import { ChevronDown, Eye, CheckCircle2, MoreHorizontal, Calendar, Filter, X, Upload, MessageSquare } from 'lucide-react';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white rounded-[24px] shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-300 shadow-dark/20">
        <div className="flex items-center justify-between px-8 py-6 border-b border-gray-50">
          <h2 className="text-[20px] font-bold text-[#1a1a1a] tracking-tight">{title}</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400">
            <X size={20} strokeWidth={2.5} />
          </button>
        </div>
        <div className="p-8 max-h-[80vh] overflow-y-auto custom-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
};

const MonthlyReportModal = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose} title="Monthly event report">
    <div className="space-y-6">
      <div className="space-y-3">
        <p className="text-[14px] font-bold text-[#1a1a1a]">Has this been shared in the parents' WhatsApp group?</p>
        <div className="flex gap-6">
          <label className="flex items-center gap-2 cursor-pointer group">
            <input type="radio" name="whatsapp" className="w-5 h-5 accent-[#A82228]" />
            <span className="text-[14px] text-gray-500 group-hover:text-[#1a1a1a]">Yes</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer group">
            <input type="radio" name="whatsapp" className="w-5 h-5 accent-[#A82228]" />
            <span className="text-[14px] text-gray-500 group-hover:text-[#1a1a1a]">NO</span>
          </label>
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-[14px] font-bold text-[#1a1a1a]">How many parents are there in the whatsapp group?</p>
        <input 
          type="text" 
          className="w-full bg-[#f4f4f5] border-none rounded-xl py-3 px-5 text-[14px] outline-none focus:ring-2 focus:ring-[#A82228]/10" 
          placeholder="" 
        />
      </div>

      <div className="space-y-3">
        <p className="text-[14px] font-bold text-[#1a1a1a]">Shared on Instagram page?</p>
        <div className="flex gap-6">
          <label className="flex items-center gap-2 cursor-pointer group">
            <input type="radio" name="instagram" className="w-5 h-5 accent-[#A82228]" />
            <span className="text-[14px] text-gray-500 group-hover:text-[#1a1a1a]">Yes</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer group">
            <input type="radio" name="instagram" className="w-5 h-5 accent-[#A82228]" />
            <span className="text-[14px] text-gray-500 group-hover:text-[#1a1a1a]">NO</span>
          </label>
        </div>
        <input 
          type="text" 
          className="w-full bg-[#f4f4f5] border-none rounded-xl py-3 px-5 text-[14px] outline-none mt-2 placeholder:text-gray-400" 
          placeholder="If yes please share the link here" 
        />
      </div>

      <div className="space-y-3">
        <p className="text-[14px] font-bold text-[#1a1a1a]">Shared on Facebook page?</p>
        <div className="flex gap-6">
          <label className="flex items-center gap-2 cursor-pointer group">
            <input type="radio" name="facebook" className="w-5 h-5 accent-[#A82228]" />
            <span className="text-[14px] text-gray-500 group-hover:text-[#1a1a1a]">Yes</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer group">
            <input type="radio" name="facebook" className="w-5 h-5 accent-[#A82228]" />
            <span className="text-[14px] text-gray-500 group-hover:text-[#1a1a1a]">NO</span>
          </label>
        </div>
        <input 
          type="text" 
          className="w-full bg-[#f4f4f5] border-none rounded-xl py-3 px-5 text-[14px] outline-none mt-2 placeholder:text-gray-400" 
          placeholder="If yes please share the link here" 
        />
      </div>

      <div className="space-y-3">
        <p className="text-[14px] font-bold text-[#1a1a1a]">Submitted by</p>
        <input 
          type="text" 
          className="w-full bg-[#f4f4f5] border-none rounded-xl py-3 px-5 text-[14px] outline-none placeholder:text-gray-400" 
          placeholder="Enter name" 
        />
      </div>

      <div className="space-y-3">
        <p className="text-[14px] font-bold text-[#1a1a1a]">Date</p>
        <input 
          type="text" 
          className="w-full bg-[#f4f4f5] border-none rounded-xl py-3 px-5 text-[14px] outline-none placeholder:text-gray-400" 
          placeholder="Enter date" 
        />
      </div>

      <button className="w-32 bg-[#A82228] text-white py-3 rounded-xl font-bold text-[14px] hover:bg-[#8A1B20] transition-all shadow-lg shadow-[#A82228]/20 active:scale-95">
        Approve
      </button>
    </div>
  </Modal>
);

const AnnualReportModal = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose} title="Annual event report">
    <div className="space-y-6">
      <div className="space-y-3">
        <p className="text-[14px] font-bold text-[#1a1a1a]">Pre Assessment Data</p>
        <input 
          type="text" 
          className="w-full bg-[#f4f4f5] border-none rounded-xl py-3 px-5 text-[14px] outline-none placeholder:text-gray-400" 
          placeholder="250/500 - correct answers" 
        />
      </div>

      <div className="space-y-3">
        <p className="text-[14px] font-bold text-[#1a1a1a]">Post Assessment Data</p>
        <input 
          type="text" 
          className="w-full bg-[#f4f4f5] border-none rounded-xl py-3 px-5 text-[14px] outline-none placeholder:text-gray-400" 
          placeholder="350/500 - correct answers" 
        />
      </div>

      <div className="space-y-3">
        <p className="text-[14px] font-bold text-[#1a1a1a]">Upload photo</p>
        <div className="w-full h-32 bg-[#f4f4f5] rounded-xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-gray-100 transition-all group">
          <Upload size={24} className="text-gray-400 group-hover:text-[#A82228] transition-colors" />
          <p className="text-[13px] text-gray-400 font-medium">Upload required photo</p>
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-[14px] font-bold text-[#1a1a1a]">Submitted by</p>
        <input 
          type="text" 
          className="w-full bg-[#f4f4f5] border-none rounded-xl py-3 px-5 text-[14px] outline-none" 
          placeholder="" 
        />
      </div>

      <div className="space-y-3">
        <p className="text-[14px] font-bold text-[#1a1a1a]">Date</p>
        <input 
          type="text" 
          className="w-full bg-[#f4f4f5] border-none rounded-xl py-3 px-5 text-[14px] outline-none placeholder:text-gray-400" 
          placeholder="Enter date" 
        />
      </div>

      <button className="w-32 bg-[#A82228] text-white py-3 rounded-xl font-bold text-[14px] hover:bg-[#8A1B20] transition-all shadow-lg shadow-[#A82228]/20 active:scale-95">
        Approve
      </button>
    </div>
  </Modal>
);

const ReviewReportModal = ({ isOpen, onClose, report }) => {
  if (!report) return null;
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Review Report">
      <div className="space-y-6">
        <p className="text-[13px] text-gray-400 -mt-4">Provide feedback for: {report.title}</p>
        
        <div className="bg-[#f8f9fa] rounded-2xl p-6 space-y-4">
          <div className="space-y-2">
            <p className="text-[14px] font-normal text-gray-500">
              <span className="font-bold text-[#1a1a1a]">School:</span> Springfield Academy
            </p>
            <p className="text-[14px] font-normal text-gray-500">
              <span className="font-bold text-[#1a1a1a]">Wing:</span> {report.category}
            </p>
            <p className="text-[14px] font-normal text-gray-500">
              <span className="font-bold text-[#1a1a1a]">Submitted by:</span> {report.submittedBy.split(' (')[0]}
            </p>
          </div>
          <p className="text-[14px] text-gray-500 leading-relaxed">
            College application guidance and preparation seminar for grade {report.title.includes('Digital') ? '10' : '12'} students.
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-[14px] font-normal text-gray-500">Feedback (optional)</p>
          <textarea 
            className="w-full bg-[#f4f4f5] border-none rounded-xl py-4 px-5 text-[14px] outline-none min-h-[100px] resize-none placeholder:text-gray-400" 
            placeholder="Add your comments or feedback..."
          ></textarea>
        </div>

        <div className="flex items-center justify-end gap-3 pt-2">
          <button 
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl border border-gray-200 text-[14px] font-medium text-gray-600 hover:bg-gray-50 transition-all"
          >
            Cancel
          </button>
          <button className="flex items-center gap-2 bg-[#A82228] text-white px-6 py-2.5 rounded-xl font-bold text-[14px] hover:bg-[#8A1B20] transition-all shadow-lg shadow-[#A82228]/20 active:scale-95">
            <MessageSquare size={18} />
            Submit Review
          </button>
        </div>
      </div>
    </Modal>
  );
};

const Reports = () => {
  const [reportType, setReportType] = useState('Monthly');
  const [isMonthlyModalOpen, setIsMonthlyModalOpen] = useState(false);
  const [isAnnualModalOpen, setIsAnnualModalOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);

  const handleApproveClick = () => {
    if (reportType === 'Monthly') {
      setIsMonthlyModalOpen(true);
    } else {
      setIsAnnualModalOpen(true);
    }
  };

  const handleViewClick = (report) => {
    setSelectedReport(report);
    setIsReviewModalOpen(true);
  };

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
    { label: 'Child Rights & Safety', value: 75, color: '#e9d5ff', highlight: true, highlightVal: '75%' },
    { label: 'Community Outreach & Services', value: 90, color: '#ffedd5' },
  ];

  return (
    <div className="p-4 max-w-7xl mx-auto space-y-4 animate-in fade-in duration-700">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <h2 className="text-[24px] font-normal text-[#1a1a1a] tracking-tight">Reports Management</h2>
        <p className="text-[14px] font-normal text-[#555555] opacity-60">Track & manage all reports seamlessly | 3 Reviewed, 3 Completed</p>
      </div>

      {/* Filter Bar */}
      <div className="bg-white rounded-2xl p-3 shadow-sm border border-[#eeeeee] flex flex-wrap gap-3">
        <div className="relative min-w-[160px]">
          <select className="w-full appearance-none bg-[#f4f4f5]/60 hover:bg-white border border-transparent hover:border-[#eeeeee] rounded-xl py-2 px-5 text-[12px] font-normal text-[#1a1a1a] outline-none transition-all cursor-pointer">
            <option>All Wing</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#555555] opacity-40 pointer-events-none" size={16} />
        </div>
        <div className="relative min-w-[160px]">
          <select className="w-full appearance-none bg-[#f4f4f5]/60 hover:bg-white border border-transparent hover:border-[#eeeeee] rounded-xl py-2 px-5 text-[12px] font-normal text-[#1a1a1a] outline-none transition-all cursor-pointer">
            <option>Activity</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#555555] opacity-40 pointer-events-none" size={16} />
        </div>
        <div className="relative min-w-[160px]">
          <select 
            value={reportType}
            onChange={(e) => setReportType(e.target.value)}
            className="w-full appearance-none bg-[#f4f4f5]/60 hover:bg-white border border-transparent hover:border-[#eeeeee] rounded-xl py-2 px-5 text-[12px] font-normal text-[#1a1a1a] outline-none transition-all cursor-pointer"
          >
            <option value="Monthly">Monthly</option>
            <option value="Annual">Annual</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#555555] opacity-40 pointer-events-none" size={16} />
        </div>
      </div>

      {/* Reports Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reportCards.map((card, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-4 shadow-sm border border-[#eeeeee] flex flex-col gap-4 group hover:shadow-2xl hover:shadow-dark/5 transition-all duration-500 relative overflow-hidden">
             {/* Status Badge */}
             <div className="absolute top-6 right-6">
                <span 
                    className="text-[9px] font-normal px-3 py-1.5 rounded-lg uppercase tracking-widest"
                    style={{ backgroundColor: card.statusColor, color: card.statusTextColor }}
                >
                    {card.status}
                </span>
             </div>

             <div className="flex flex-col gap-3">
                <h3 className="text-[17px] font-normal text-[#1a1a1a] pr-16 leading-tight">{card.title}</h3>
                <span className="text-[11px] font-normal uppercase tracking-wider" style={{ color: card.categoryColor }}>{card.category}</span>
                <span className="text-[10px] font-normal text-[#ef4444] opacity-80">SDG 3 - Good Health & Well-being</span>
             </div>

             <div className="space-y-2.5 pt-2 border-t border-gray-50">
                <div className="flex items-center gap-3">
                    <span className="text-[11px] font-normal text-[#555555] opacity-50 uppercase min-w-[80px]">Activity:</span>
                    <span className="text-[12px] font-normal text-[#1a1a1a]">{card.activity}</span>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-[11px] font-normal text-[#555555] opacity-50 uppercase min-w-[80px]">Date:</span>
                    <span className="text-[12px] font-normal text-[#1a1a1a]">{card.date}</span>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-[11px] font-normal text-[#555555] opacity-50 uppercase min-w-[80px]">Submitted by:</span>
                    <span className="text-[12px] font-normal text-[#1a1a1a]">{card.submittedBy}</span>
                </div>
             </div>

             {/* Action Buttons */}
             <div className="flex items-center gap-3 mt-auto">
                <button 
                  onClick={() => handleViewClick(card)}
                  className="flex-1 flex items-center justify-center gap-2 bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 py-3.5 rounded-2xl text-[12px] font-normal text-[#555555] transition-all active:scale-95"
                >
                    <Eye size={16} strokeWidth={2.5} />
                    View
                </button>
                <button 
                  onClick={handleApproveClick}
                  className="flex-[1.5] flex items-center justify-center gap-2 bg-[#1caf5f] hover:bg-[#169450] py-3.5 rounded-2xl text-[12px] font-normal text-white shadow-lg shadow-[#1caf5f]/20 transition-all active:scale-95"
                >
                    <img src="/icon/tick.png" alt="Approve" className="w-[18px] h-[18px] drop-shadow-sm brightness-0 invert" />
                    Approve
                </button>
                <button className="w-12 h-12 flex items-center justify-center bg-brand-gradient hover:opacity-90 rounded-2xl text-white shadow-lg shadow-[#A82228]/20 transition-all">
                    <img src="/icon/remove.png" alt="Remove" className="w-[18px] h-[18px] brightness-0 invert" />
                </button>
             </div>
          </div>
        ))}
      </div>

      {/* Progress Chart Section */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#eeeeee] space-y-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex flex-col gap-1">
                <h4 className="text-[16px] font-normal text-[#1a1a1a]">Monthly completion progress bar</h4>
                <p className="text-[12px] font-normal text-[#555555] opacity-40 uppercase tracking-widest">Ratio of planned activities vs submitted reports</p>
            </div>
            <div className="flex flex-col items-end gap-2">
                <button className="flex items-center gap-3 bg-white border border-[#eeeeee] px-4 py-2.5 rounded-xl text-[11px] font-normal text-[#1a1a1a]">
                    Choose month
                    <Calendar size={14} className="text-[#A82228]" />
                </button>
                <div className="relative">
                    <select className="appearance-none bg-transparent text-[11px] font-normal text-[#555555] opacity-40 uppercase tracking-widest pr-6 outline-none cursor-pointer">
                        <option>Last 6 month</option>
                    </select>
                    <ChevronDown size={12} className="absolute right-0 top-1/2 -translate-y-1/2 opacity-40" />
                </div>
            </div>
        </div>

        {/* Custom Bar Chart */}
        <div className="overflow-x-auto pb-4 custom-scrollbar">
          <div className="relative h-[300px] min-w-[600px] w-full pt-8">
            {/* Y-Axis Labels */}
            <div className="absolute left-0 top-10 h-[250px] flex flex-col justify-between text-[11px] font-normal text-[#555555] opacity-30 select-none pb-2">
                <span>100</span>
                <span>75</span>
                <span>50</span>
                <span>25</span>
                <span className="translate-y-2">0</span>
            </div>

            {/* Grid Lines */}
            <div className="ml-10 h-[250px] border-l border-b border-gray-100 flex flex-col justify-between relative">
                <div className="w-full border-t border-gray-50 border-dashed" />
                <div className="w-full border-t border-gray-50 border-dashed" />
                <div className="w-full border-t border-gray-50 border-dashed" />
                <div className="absolute inset-0 flex items-end justify-around px-8">
                    {chartData.map((item, idx) => (
                        <div key={idx} className="relative group w-20 flex flex-col items-center">
                            {item.highlight && (
                                <div className="absolute -top-12 flex flex-col items-center animate-bounce">
                                    <span className="text-[12px] font-normal text-[#ef4444] mb-1">{item.highlightVal}</span>
                                    <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#ef4444]" />
                                </div>
                            )}
                            <div 
                                className="w-20 rounded-t-lg transition-all duration-1000 group-hover:opacity-80" 
                                style={{ height: `${item.value * 2.5}px`, backgroundColor: item.color }}
                            />
                            <div className="absolute -bottom-16 w-32 text-center">
                                <span className="text-[11px] font-normal text-[#555555] opacity-50 uppercase leading-tight inline-block">{item.label}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <MonthlyReportModal 
        isOpen={isMonthlyModalOpen} 
        onClose={() => setIsMonthlyModalOpen(false)} 
      />
      <AnnualReportModal 
        isOpen={isAnnualModalOpen} 
        onClose={() => setIsAnnualModalOpen(false)} 
      />
      <ReviewReportModal 
        isOpen={isReviewModalOpen} 
        onClose={() => setIsReviewModalOpen(false)} 
        report={selectedReport}
      />
    </div>
  );
};

export default Reports;
