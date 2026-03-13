import React from 'react';
import { Users, Activity, CheckCircle, Star, MessageSquare, Paperclip, Send } from 'lucide-react';

const StatCard = ({ icon, label, value, change, bgColor, percentage }) => (
  <div className={`p-4 rounded-2xl shadow-sm ${bgColor} relative overflow-hidden group hover:shadow-2xl transition-all duration-700 h-full min-w-[180px]`}>
    <div className="flex items-center justify-between mb-4">
      <div className="p-2.5 rounded-xl bg-white/20 text-white backdrop-blur-md border border-white/10">
        {React.cloneElement(icon, { size: 18, strokeWidth: 3 })}
      </div>
      <div className="text-[11px] font-normal bg-white/20 text-white px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10 uppercase tracking-tighter">
        {change}
      </div>
    </div>
    <div className="relative z-10">
      <p className="text-white/60 text-[11px] font-normal uppercase tracking-[0.1em] mb-1.5">{label}</p>
      <p className="text-white text-3xl font-normal tracking-tight">{value}</p>
    </div>
    <div className="mt-4 relative z-10">
      <div className="flex justify-between items-center mb-2">
        <p className="text-[10px] text-white/50 font-normal uppercase tracking-tighter">Performance Level</p>
        <span className="text-[10px] text-white font-normal">{percentage}%</span>
      </div>
      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm border border-white/5">
        <div 
          className="h-full bg-white rounded-full transition-all duration-[1500ms] ease-out shadow-[0_0_15px_rgba(255,255,255,0.8)]" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
    {/* Background Decorative Icon */}
    <div className="absolute -right-6 -bottom-6 text-white/5 rotate-[15deg] group-hover:rotate-0 group-hover:scale-125 transition-all duration-1000 ease-in-out pointer-events-none">
      {React.cloneElement(icon, { size: 120 })}
    </div>
  </div>
);

const Dashboard = () => {
  const stats = [
    { icon: <Users />, label: 'Student Benefited', value: '236', change: '+12%', percentage: 65, bgColor: 'bg-blue-600' },
    { icon: <Activity />, label: 'Activity Pending', value: '3', change: '-40%', percentage: 35, bgColor: 'bg-orange-500' },
    { icon: <CheckCircle />, label: 'Chapter Success', value: '94%', change: '+12%', percentage: 94, bgColor: 'bg-emerald-500' },
    { icon: <Star />, label: 'Mentor Ranking', value: '#3', change: '+0.3', percentage: 75, bgColor: 'bg-orange-600' },
  ];

  const events = [
    { title: 'Neuro Linguistic Programming - Basics ( DIRECT )', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format&fit=crop' },
    { title: 'Neuro Linguistic Programming - Basics ( DIRECT )', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop' },
    { title: 'Neuro Linguistic Programming - Basics ( DIRECT )', img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2000&auto=format&fit=crop' },
  ];

  return (
    <div className="p-6 space-y-6 bg-[#f7f7f8] min-h-screen max-w-[1600px] mx-auto">
      {/* Hero Banner */}
      <div className="bg-brand-gradient text-white p-6 rounded-2xl shadow-[0_20px_50px_rgba(168,34,40,0.2)] relative overflow-hidden group border border-white/5">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2.5 mb-6 bg-white/10 px-5 py-2 rounded-full backdrop-blur-md border border-white/20 flex-nowrap">
            <span className="text-[11px] font-normal uppercase tracking-[0.15em] text-white drop-shadow-sm">Outstanding Performance 🏆</span>
          </div>
          <h2 className="text-3xl font-normal mb-4 tracking-tighter group-hover:translate-x-2 transition-transform duration-700 ease-out">You're making an incredible impact!</h2>
          <p className="text-white/70 text-[16px] font-normal max-w-3xl leading-relaxed">
            Your chapters have completed 127 activities this month. Keep up the amazing work and continue empowering students across all platforms!
          </p>
        </div>
        {/* Visual Decor */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full -mr-40 -mt-40 blur-[100px] group-hover:bg-white/10 transition-colors duration-[2000ms]"></div>
        <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-black/5 rounded-full blur-[80px]"></div>
      </div>

      {/* Stats Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Main Illustration Section */}
        <div className="lg:col-span-3 rounded-2xl overflow-hidden shadow-2xl shadow-dark/5 aspect-[16/10] border border-white bg-white group">
          <img 
            src="https://images.unsplash.com/photo-1523050853064-886ec33f8288?q=80&w=2400&auto=format&fit=crop" 
            alt="Students cheering" 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3000ms] ease-out opacity-90 group-hover:opacity-100"
          />
        </div>

        {/* Side Content Section: Upcoming Events */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-2xl shadow-dark/5 border border-gray-100/50">
          <h3 className="text-[16px] font-normal text-[#1a1a1a] mb-6 flex items-center justify-between tracking-tight">
            Upcoming Events
            <div className="flex gap-1.5">
              <span className="w-2 h-2 bg-[#A82228] rounded-full animate-bounce"></span>
              <span className="w-2 h-2 bg-[#A82228]/40 rounded-full animate-bounce [animation-delay:0.2s]"></span>
            </div>
          </h3>
          <div className="space-y-8">
            {events.map((event, index) => (
              <div key={index} className="flex gap-4 group cursor-pointer items-start">
                <div className="w-[80px] h-[80px] rounded-xl overflow-hidden shadow-md flex-shrink-0 border-4 border-gray-50 group-hover:border-[#A82228]/10 transition-colors duration-500">
                  <img src={event.img} alt="Event" className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-1000" />
                </div>
                <div className="flex-1 min-w-0 pt-1">
                  <p className="text-[13px] font-normal text-[#1a1a1a] leading-snug mb-3 group-hover:text-[#A82228] transition-colors line-clamp-2 tracking-tight">{event.title}</p>
                  <div className="flex gap-3">
                    <button className="text-[10px] font-normal text-[#A82228] bg-[#A82228]/5 hover:bg-[#A82228] hover:text-white px-3 py-1.5 rounded-lg transition-all duration-300 transform active:scale-95 shadow-sm">Join Event</button>
                    <button className="text-[10px] font-normal text-[#555555] opacity-60 hover:opacity-100 px-3 py-1.5 rounded-lg transition-all border border-gray-100 hover:bg-gray-50">Report</button>
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
