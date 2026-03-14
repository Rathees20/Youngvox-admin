import React from 'react';
import { Users, Activity, CheckCircle, Star, MessageSquare, Paperclip, Send, X } from 'lucide-react';

const StatCard = ({ icon, label, value, change, bgColor, percentage, labelColor = "text-white/60" }) => (
  <div className={`p-5 rounded-2xl shadow-sm ${bgColor} relative overflow-hidden group hover:shadow-2xl transition-all duration-700 h-full min-w-[200px]`}>
    <div className="flex items-center justify-between mb-4">
      <div className="p-2.5 rounded-xl bg-white/20 text-white backdrop-blur-md border border-white/10">
        {React.cloneElement(icon, { size: 20, strokeWidth: 3 })}
      </div>
      <div className="text-[11px] font-bold bg-white/20 text-white px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10 tracking-tight">
        {change}
      </div>
    </div>
    <div className="relative z-10">
      <p className={`${labelColor} text-[12px] font-bold mb-1 tracking-tight`}>{label}</p>
      <p className="text-white text-3xl font-black tracking-tighter">{value}</p>
    </div>
    <div className="mt-5 relative z-10">
      <div className="flex justify-between items-center mb-2">
        <p className="text-[10px] text-white/50 font-bold uppercase tracking-wider">vs. last month</p>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm border border-white/5">
        <div 
          className="h-full bg-white rounded-full transition-all duration-[1500ms] ease-out shadow-[0_0_15px_rgba(255,255,255,0.8)]" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
    {/* Background Decorative Icon */}
    <div className="absolute -right-6 -bottom-6 text-white/5 rotate-[15deg] group-hover:rotate-0 group-hover:scale-125 transition-all duration-1000 ease-in-out pointer-events-none text-2xl">
      🎉
    </div>
  </div>
);

const ChapterChiefDashboard = () => {
  const stats = [
    { icon: <Users />, label: 'Active Members', value: '236', change: '+12%', percentage: 65, bgColor: 'bg-blue-600' },
    { icon: <Activity />, label: 'Reports Pending', value: '3', change: '-40%', percentage: 35, bgColor: 'bg-orange-500' },
    { icon: <CheckCircle />, label: 'Chapter Success', value: '94%', change: '+5%', percentage: 94, bgColor: 'bg-emerald-500' },
    { icon: <Star />, label: 'Chapter Chief Ranking', value: '#3', change: '+0.3', percentage: 75, bgColor: 'bg-orange-600' },
  ];

  const events = [
    { title: 'Neuro Linguistic Programming - Basics ( DIRECT )', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format&fit=crop' },
    { title: 'Neuro Linguistic Programming - Basics ( DIRECT )', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop' },
    { title: 'Neuro Linguistic Programming - Basics ( DIRECT )', img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2000&auto=format&fit=crop' },
  ];

  return (
    <div className="p-6 space-y-6 bg-[#f7f7f8] min-h-screen max-w-[1600px] mx-auto">
      {/* Welcome Header */}
      <div className="flex items-center justify-between mb-2">
         <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-white rounded-xl transition-all">
                <X size={20} className="text-gray-400" />
            </button>
            <div className="flex flex-col">
                <h2 className="text-[16px] font-black text-[#1a1a1a]">Welcome back, Sarah Chen! 👋</h2>
                <p className="text-[12px] font-bold text-gray-400">Here's what's happening with your chapters today</p>
            </div>
         </div>
         <div className="relative">
            {/* Notification bell removed as it's in the global header */}
         </div>
      </div>

      {/* Hero Banner */}
      <div className="bg-[#A82228] text-white p-8 md:p-10 rounded-2xl shadow-[0_20px_50px_rgba(168,34,40,0.15)] relative overflow-hidden group min-h-[240px] flex items-center">
        <div className="relative z-10 space-y-4">
          <div className="space-y-1">
            <h2 className="text-3xl font-black tracking-tight">Chapter Chief Dashboard</h2>
            <div className="flex flex-col opacity-90">
                <span className="text-[12px] font-bold uppercase tracking-wider">Welcome back,</span>
                <span className="text-xl font-black">Sarah Chen</span>
            </div>
          </div>
          <div className="space-y-4 pt-4">
             <div className="space-y-1">
                <p className="text-[14px] font-bold tracking-tight">Lincoln High School - Downtown Campus</p>
                <p className="text-white/60 text-[12px] font-bold max-w-xl leading-relaxed">
                    Lead your school chapter, coordinate wings, and keep every activity on track.
                </p>
             </div>
          </div>
        </div>
        {/* Visual Decor - Girl at desk illustration surrogate */}
        <div className="absolute right-0 bottom-0 h-full w-[45%] hidden lg:block overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-l from-[#A82228] via-transparent to-transparent z-10 w-20"></div>
             <img 
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2400&auto=format&fit=crop" 
                alt="Working" 
                className="w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-[5000ms] grayscale contrast-125"
             />
        </div>
        {/* Abstract shapes to match some of the visual vibe */}
        <div className="absolute top-10 right-20 w-32 h-32 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-10 right-40 w-40 h-40 bg-black/10 rounded-full blur-2xl"></div>
      </div>

      {/* Stats Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Illustration Section (Surrogate for the group of kids illustration) */}
        <div className="lg:col-span-7 bg-[#f2f4f6] rounded-2xl overflow-hidden shadow-sm flex items-center justify-center p-8 min-h-[400px]">
           <img 
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2400&auto=format&fit=crop" 
            alt="Chapter Members" 
            className="rounded-2xl shadow-2xl max-h-full object-contain"
          />
        </div>

        {/* Side Content Section: Upcoming Events */}
        <div className="lg:col-span-5 bg-white p-8 rounded-3xl shadow-sm border border-gray-100/50">
          <h3 className="text-[18px] font-black text-[#1a1a1a] mb-8 tracking-tight">
            Upcoming Events
          </h3>
          <div className="space-y-6">
            {events.map((event, index) => (
              <div key={index} className="flex gap-5 group cursor-pointer items-center p-3 hover:bg-gray-50 rounded-2xl transition-all duration-300">
                <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-sm flex-shrink-0">
                  <img src={event.img} alt="Event" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[14px] font-black text-[#1a1a1a] leading-tight mb-3 group-hover:text-[#A82228] transition-colors line-clamp-2 tracking-tight">{event.title}</p>
                  <button className="text-[11px] font-black text-[#c72030] bg-[#c72030]/5 hover:bg-[#c72030] hover:text-white px-4 py-2 rounded-xl transition-all duration-300 border border-[#c72030]/10">
                    Submit report
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterChiefDashboard;
