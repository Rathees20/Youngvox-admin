import React from 'react';
import { Users, Target, TrendingUp, Award } from 'lucide-react';

const StatCard = ({ icon, label, value, change, bgColor, percentage, bgIcon, barColor, labelColor = "text-white/70" }) => (
  <div className="flex flex-col h-full min-w-[240px] bg-white rounded-[24px] shadow-sm overflow-hidden border border-gray-100/50 group hover:shadow-xl transition-all duration-700">
    <div className={`p-5 ${bgColor} relative overflow-hidden h-[140px] flex flex-col justify-between`}>
      <div className="flex items-start justify-between relative z-10 text-white">
        <div className="shrink-0 opacity-100 mt-1">
          {React.cloneElement(icon, { size: 22, strokeWidth: 2.2 })}
        </div>
        <div className="text-2xl opacity-100 group-hover:scale-110 transition-all duration-500 pointer-events-none">
          {bgIcon}
        </div>
      </div>

      <div className="flex items-end justify-between relative z-10">
        <div>
          <p className={`${labelColor} text-[12px] font-normal mb-1 tracking-tight`}>{label}</p>
          <p className="text-white text-2xl font-normal tracking-tighter">{value}</p>
        </div>
        <div className="text-[11px] font-normal bg-white/20 text-white px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10 tracking-tight mb-1">
          {change}
        </div>
      </div>
    </div>

    <div className="px-5 h-[60px] bg-white flex items-center justify-between gap-4">
      <p className="text-[10px] text-gray-400 font-normal uppercase tracking-wider flex-shrink-0">vs. last month</p>
      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden flex-grow">
        <div
          className="h-full transition-all duration-[1500ms] ease-out rounded-full"
          style={{ width: `${percentage}%`, backgroundColor: barColor }}
        ></div>
      </div>
    </div>
  </div>
);

const AcademicWingDashboard = () => {
  const stats = [
    { icon: <Users />, label: 'Active Members', value: '236', change: '+12%', percentage: 65, bgColor: 'bg-gradient-to-br from-[#2B7FFF] to-[#155DFC]', bgIcon: '🎉', barColor: '#2B7FFF' },
    { icon: <Target />, label: 'Reports Pending', value: '3', change: '-40%', percentage: 35, bgColor: 'bg-gradient-to-br from-[#FE9A00] to-[#E17100]', bgIcon: '⚡', barColor: '#FE9A00' },
    { icon: <TrendingUp />, label: 'Chapter Success', value: '94%', change: '+5%', percentage: 94, bgColor: 'bg-gradient-to-br from-[#00C950] to-[#00A63E]', bgIcon: '🚀', barColor: '#00C950' },
    { icon: <Award />, label: 'Chapter Chief Ranking', value: '#3', change: '+0.3', percentage: 75, bgColor: 'bg-gradient-to-br from-[#FF6900] to-[#F54900]', bgIcon: '⭐', barColor: '#FF6900' },
  ];

  const events = [
    { title: 'Neuro Linguistic Programming - Basics ( DIRECT )', img: '/images/chief03.png' },
    { title: 'Neuro Linguistic Programming - Basics ( DIRECT )', img: '/images/chief03.png' },
    { title: 'Neuro Linguistic Programming - Basics ( DIRECT )', img: '/images/chief03.png' },
  ];

  return (
    <div className="p-6 space-y-8 bg-[#f7f7f8] min-h-screen max-w-[1600px] mx-auto pb-24">

      {/* Hero Banner */}
      <div className="relative mt-8 mb-12">
        <div className="bg-[#A82228] text-white p-8 md:p-10 lg:p-12 rounded-[40px] shadow-[0_32px_80px_rgba(168,34,40,0.2)] relative overflow-hidden group min-h-[300px] flex items-center border border-white/10">
          <div className="relative z-20 space-y-8 max-w-[65%]">
            <div className="space-y-4">
              <h2 className="text-[28px] md:text-[34px] font-normal tracking-tight leading-tight">Academic & Career Guidance Wing Leader</h2>
              <div className="space-y-1">
                <p className="text-[14px] font-normal text-white/50 uppercase tracking-widest">Welcome back,</p>
                <h3 className="text-[24px] font-normal tracking-wide">Sarah Chen</h3>
              </div>
            </div>
            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="space-y-1">
                <p className="text-[16px] font-normal tracking-tight text-white/90">Lincoln High School - Downtown Campus</p>
                <p className="text-white/60 text-[14px] font-normal max-w-xl leading-relaxed">
                  Lead your school chapter, coordinate wings, and keep every activity on track.
                </p>
              </div>
            </div>
          </div>

          {/* Banner Illustration - Desk and Suitcase */}
          <div className="absolute right-[-5%] bottom-[-10%] top-[-10%] w-[45%] flex items-end justify-end pointer-events-none z-10 overflow-hidden">
            <img
              src="/images/chief01.png"
              alt="Academic Wing Illustration"
              className="h-[120%] w-auto object-contain transform translate-y-4"
            />
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-black/20 to-transparent pointer-events-none"></div>
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>
        </div>
      </div>

      {/* Stats Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-12">
        {/* Main Illustration Section - Group of Kids */}
        <div className="lg:col-span-6 bg-white rounded-[40px] overflow-hidden shadow-sm border border-gray-100 flex items-center justify-center min-h-[500px]">
          <img
            src="/images/chief02.png"
            alt="Chapter Members Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Side Content Section: Upcoming Events */}
        <div className="lg:col-span-6 bg-white p-8 md:p-10 rounded-[40px] shadow-sm border border-gray-100 relative overflow-visible flex flex-col">
          <h3 className="text-[22px] font-normal text-[#1a1a1a] mb-8 tracking-tight border-b border-gray-50 pb-4">
            Upcoming Events
          </h3>

          <div className="space-y-6 flex-1">
            {events.map((event, index) => (
              <div key={index} className="flex items-center justify-between gap-6 p-5 bg-[#f7f7f8]/50 rounded-[24px] transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-dark/5 border border-transparent hover:border-gray-100 group">
                <div className="flex items-center gap-5 flex-1 min-w-0">
                  <div className="w-24 h-16 rounded-[18px] overflow-hidden shadow-sm flex-shrink-0 border border-gray-100">
                    <img src={event.img} alt="Event" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <p className="text-[15px] font-normal text-[#1a1a1a] leading-snug tracking-tight line-clamp-2">
                    {event.title}
                  </p>
                </div>
                <button className="whitespace-nowrap text-[12px] font-normal text-[#155DFC] bg-white hover:bg-[#155DFC] hover:text-white px-6 py-3 rounded-xl transition-all duration-300 border border-[#155DFC]/20 shadow-sm font-medium">
                  Submit report
                </button>
              </div>
            ))}
          </div>

          {/* Floating Character illustration (matches the overall girl in image) */}
          <div className="absolute right-[-60px] bottom-[-40px] w-[260px] h-auto pointer-events-none z-30">
            <img
              src="/images/chief01.png"
              alt="Decorative Character"
              className="w-full h-auto object-contain drop-shadow-[-20px_30px_40px_rgba(0,0,0,0.15)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicWingDashboard;
