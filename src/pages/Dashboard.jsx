import React from 'react';
import { Users, Activity, CheckCircle, Star, MessageSquare, Paperclip, Send } from 'lucide-react';

const StatCard = ({ icon, emojiIcon, label, value, change, bgColor, barColor, percentage }) => (
  <div className="bg-white rounded-[20px] shadow-sm p-1.5 flex flex-col h-full min-w-[200px]">
    <div className={`p-4 rounded-[16px] ${bgColor} relative overflow-hidden flex-1 group hover:shadow-md transition-shadow duration-300`}>
      <div className="flex items-center justify-between mb-6">
        <div className="text-white">
          {React.cloneElement(icon, { size: 24, strokeWidth: 2 })}
        </div>
        <div className="text-[20px] leading-none select-none drop-shadow-sm">
          {emojiIcon}
        </div>
      </div>
      
      <div className="mt-auto relative z-10 flex flex-col gap-1">
        <p className="text-white/90 text-[12px] font-medium tracking-wide">{label}</p>
        <div className="flex items-end justify-between">
          <p className="text-white text-3xl font-bold tracking-tight leading-none">{value}</p>
          <div className="text-[11px] font-semibold bg-white/20 text-white px-2.5 py-1 rounded-full backdrop-blur-sm">
            {change}
          </div>
        </div>
      </div>
      
      {/* Background Decorative Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none rounded-[16px]"></div>
    </div>
    
    <div className="px-3 py-3 flex items-center justify-between bg-white rounded-b-[20px]">
      <span className="text-[10px] text-gray-400 font-medium">vs. last month</span>
      <div className="h-1.5 bg-gray-100 rounded-full w-24 overflow-hidden">
        <div 
          className={`h-full ${barColor} rounded-full transition-all duration-1000`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  </div>
);

const Dashboard = () => {
  const stats = [
    { icon: <Users />, emojiIcon: '🎉', label: 'Student Benefited', value: '236', change: '+12%', percentage: 65, bgColor: 'bg-[#2B70FF]', barColor: 'bg-[#2B70FF]' },
    { icon: <Activity />, emojiIcon: '⚡', label: 'Activity Pending', value: '3', change: '-40%', percentage: 35, bgColor: 'bg-[#F7941E]', barColor: 'bg-[#F7941E]' },
    { icon: <CheckCircle />, emojiIcon: '🚀', label: 'Chapter Success', value: '94%', change: '+5%', percentage: 94, bgColor: 'bg-[#00C853]', barColor: 'bg-[#00C853]' },
    { icon: <Star />, emojiIcon: '⭐', label: 'Mentor Ranking', value: '#3', change: '+0.3', percentage: 75, bgColor: 'bg-[#FF5722]', barColor: 'bg-[#FF5722]' },
  ];

  const events = [
    { title: 'Neuro Linguistic Programming - Basics ( DIRECT )', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format&fit=crop' },
    { title: 'Neuro Linguistic Programming - Basics ( DIRECT )', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop' },
    { title: 'Neuro Linguistic Programming - Basics ( DIRECT )', img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2000&auto=format&fit=crop' },
  ];

  return (
    <div className="p-6 space-y-6 bg-[#f7f7f8] min-h-screen max-w-[1600px] mx-auto">
      {/* Hero Banner */}
      <div className="bg-[#9B2B2B] text-white p-6 md:p-8 rounded-[16px] shadow-sm relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 mb-2 bg-white/10 px-3 py-1.5 rounded-full border border-white/20">
            <span className="text-[11px] font-medium text-white/90">Outstanding Performance 🏆</span>
          </div>
          <h2 className="text-xl md:text-[22px] font-normal tracking-wide text-white">You're making an incredible impact!</h2>
          <p className="text-white/80 text-[13px] md:text-[14px] font-light max-w-3xl">
            Your chapters have completed 127 activities this month. Keep up the amazing work!
          </p>
        </div>
      </div>

      {/* Stats Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Main Illustration Section */}
        <div className="rounded-[16px] overflow-hidden shadow-sm relative group bg-white border border-gray-100 min-h-[350px]">
          <img 
            src="/images/images teachers/dashboard.png"
            alt="Students cheering" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
          />
          {/* Bottom Gradient overlay */}
          <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-[#7a2024]/90 via-[#7a2024]/40 to-transparent pointer-events-none mix-blend-multiply"></div>
        </div>

        {/* Side Content Section: Upcoming Events */}
        <div className="bg-white p-5 rounded-[16px] shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-[16px] font-bold text-[#1a1a1a]">Upcoming Events</h3>
          </div>
          <div className="space-y-3">
            {events.map((event, index) => (
              <div key={index} className="flex gap-4 p-3 bg-[#FAFAFB] rounded-[16px] items-center hover:bg-gray-50 transition-colors">
                <div className="w-[100px] h-[75px] rounded-[10px] overflow-hidden flex-shrink-0 bg-white shadow-sm border border-gray-100">
                  <img src={event.img} alt="Event" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0 flex flex-col justify-center">
                  <p className="text-[13px] font-bold text-[#1a1a1a] leading-snug mb-3 line-clamp-2">{event.title}</p>
                  <div className="flex gap-2">
                    <button className="text-[10px] font-medium text-[#2B70FF] bg-[#EAF1FF] hover:bg-[#D6E4FF] px-4 py-1.5 rounded-full transition-colors whitespace-nowrap">Join the event!</button>
                    <button className="text-[10px] font-medium text-[#2B70FF] bg-white border border-[#D6E4FF] hover:bg-gray-50 px-4 py-1.5 rounded-full transition-colors whitespace-nowrap">Submit report</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modern Chat UI Section */}
      <div className="bg-white rounded-2xl shadow-2xl shadow-dark/5 border border-gray-100 flex flex-col overflow-hidden max-w-[1200px] mx-auto w-full">
        {/* Chat Header */}
        <div className="px-6 py-4 border-b border-gray-50 flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 rounded-2xl bg-brand-gradient shadow-[0_8px_20px_rgba(168,34,40,0.25)] text-white flex items-center justify-center">
              <MessageSquare size={24} strokeWidth={3} />
            </div>
            <div className="flex flex-col">
              <h3 className="text-[17px] font-[900] text-[#1a1a1a] tracking-tight">Support Community</h3>
              <p className="text-[11px] font-bold text-[#555555] opacity-40">Active now • YoungVox Team</p>
            </div>
          </div>
          <div className="flex -space-x-4">
             {[1,2,3,4].map(i => (
               <div key={i} className="w-10 h-10 rounded-full border-4 border-white bg-gray-200 overflow-hidden shadow-lg transition-transform hover:translate-y-[-4px] hover:z-10 cursor-pointer">
                 <img src={`https://i.pravatar.cc/150?u=yv${i}`} alt="Team Member" className="w-full h-full object-cover" />
               </div>
             ))}
          </div>
        </div>
        
        {/* Messages Container */}
        <div className="p-6 space-y-4 max-h-[500px] overflow-y-auto bg-gray-50/10 chat-container">
          {/* User Message */}
          <div className="flex justify-start">
            <div className="group relative">
              <div className="bg-white p-6 rounded-[28px] rounded-tl-none shadow-[0_4px_15px_rgba(0,0,0,0.03)] border border-gray-100 max-w-lg transition-all hover:shadow-lg">
                <p className="text-[14px] font-normal text-[#1a1a1a] leading-relaxed">How can I download the resources for the Digital Detox activity?</p>
              </div>
              <span className="absolute -bottom-6 left-2 text-[10px] font-normal text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest leading-none pt-2">11:42</span>
            </div>
          </div>

          {/* Team Message */}
          <div className="flex justify-end">
            <div className="group relative">
              <div className="bg-[#e7f9ef] p-6 rounded-[28px] rounded-tr-none shadow-[0_4px_15px_rgba(52,211,153,0.1)] border border-[#d1fae5] max-w-lg text-[#065f46] animate-in slide-in-from-right duration-700">
                <p className="text-[14px] font-normal leading-relaxed">Hi! To download the Digital Detox Activity resources, please use the link provided and click on the Resources page. You'll find the downloadable materials there.</p>
              </div>
              <span className="absolute -bottom-6 right-2 text-[10px] font-normal text-[#10b981] opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest leading-none pt-2">11:45</span>
            </div>
          </div>

          <div className="flex justify-end -mt-4">
            <div className="bg-[#e7f9ef] px-6 py-4 rounded-[20px] rounded-tr-none shadow-sm border border-[#d1fae5] animate-in slide-in-from-right duration-700 delay-150">
              <p className="text-[14px] font-normal text-[#065f46]">Thank You very much!</p>
            </div>
          </div>

          <div className="flex justify-start">
            <div className="group relative">
              <div className="bg-white p-6 rounded-[28px] rounded-tl-none shadow-[0_4px_15px_rgba(0,0,0,0.03)] border border-gray-100 max-w-lg">
                <p className="text-[14px] font-normal text-[#1a1a1a] leading-relaxed">You're very welcome 😊 If you need any further assistance, feel free to reach out anytime!</p>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="bg-[#e7f9ef] px-6 py-4 rounded-[20px] rounded-tr-none shadow-sm border border-[#d1fae5] pulse-effect">
              <p className="text-[14px] font-normal text-[#065f46]">Sure!</p>
            </div>
          </div>
        </div>

        {/* Chat Input */}
        <div className="px-6 py-5 bg-white border-t border-gray-50">
          <div className="flex items-center gap-4 bg-gray-50 px-5 py-2 rounded-2xl focus-within:bg-white focus-within:ring-4 focus-within:ring-[#A82228]/10 border border-transparent focus-within:border-gray-200 transition-all duration-500 group shadow-inner">
            <input 
              type="text" 
              placeholder="Type your message" 
              className="flex-1 bg-transparent text-[14px] font-normal text-[#1a1a1a] placeholder:text-[#555555]/30 outline-none py-2" 
            />
            <div className="flex items-center gap-2.5 border-l border-gray-200 pl-5">
              <button className="p-2.5 text-[#555555]/40 hover:text-[#1a1a1a] hover:bg-white hover:shadow-md rounded-xl transition-all duration-300">
                <Paperclip size={18} strokeWidth={3} />
              </button>
              <button className="p-3 bg-brand-gradient text-white rounded-xl hover:brightness-110 shadow-xl shadow-[#A82228]/20 transition-all duration-300 hover:scale-105 active:scale-95">
                <Send size={16} strokeWidth={3} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
