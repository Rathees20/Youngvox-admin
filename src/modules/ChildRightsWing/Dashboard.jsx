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

const ChildRightsWingDashboard = () => {
  const stats = [
    {
      icon: <Users />,
      label: 'Active Members',
      value: '236',
      change: '+12%',
      percentage: 65,
      bgColor: 'bg-gradient-to-br from-[#2B7FFF] to-[#155DFC]',
      bgIcon: <img src="/images/1c (1).png" alt="Icon" className="w-10 h-10 object-contain" />,
      barColor: '#2B7FFF'
    },
    {
      icon: <Target />,
      label: 'Reports Pending',
      value: '3',
      change: '-40%',
      percentage: 35,
      bgColor: 'bg-gradient-to-br from-[#FE9A00] to-[#E17100]',
      bgIcon: <img src="/images/1c (2).png" alt="Icon" className="w-10 h-10 object-contain" />,
      barColor: '#FE9A00'
    },
    {
      icon: <TrendingUp />,
      label: 'Chapter Success',
      value: '94%',
      change: '+5%',
      percentage: 94,
      bgColor: 'bg-gradient-to-br from-[#00C950] to-[#00A63E]',
      bgIcon: <img src="/images/1c (3).png" alt="Icon" className="w-10 h-10 object-contain" />,
      barColor: '#00C950'
    },
    {
      icon: <Award />,
      label: 'Chapter Chief Ranking',
      value: '#3',
      change: '+0.3',
      percentage: 75,
      bgColor: 'bg-gradient-to-br from-[#FF6900] to-[#F54900]',
      bgIcon: <img src="/images/1c (4).png" alt="Icon" className="w-10 h-10 object-contain" />,
      barColor: '#FF6900'
    },
  ];

  const events = [
    { title: 'Neuro Linguistic Programming - Basics ( DIRECT )', img: '/images/chief03.png' },
    { title: 'Neuro Linguistic Programming - Basics ( DIRECT )', img: '/images/chief03.png' },
    { title: 'Neuro Linguistic Programming - Basics ( DIRECT )', img: '/images/chief03.png' },
  ];

  return (
    <div className="p-6 space-y-6 bg-white min-h-screen max-w-[1600px] mx-auto font-['Arial']">

      {/* Hero Banner */}
      <div className="relative mt-12 mb-12">
        <div className="bg-[#A82228] text-white p-6 md:p-8 lg:p-10 rounded-[40px] shadow-[0_32px_80px_rgba(168,34,40,0.2)] relative overflow-hidden group min-h-[260px] flex items-center border border-white/10">
          <div className="relative z-20 space-y-8 max-w-[65%]">
            <div className="space-y-2">
              <h2 className="text-[24px] md:text-[28px] font-normal tracking-tight leading-tight uppercase">Child Rights & Social Justice Wing Leader</h2>
              <div className="space-y-1 opacity-90">
                <p className="text-[12px] font-normal uppercase tracking-[0.2em] text-white/60">Welcome back,</p>
                <h3 className="text-[20px] font-normal tracking-tight">Sarah Chen</h3>
              </div>
            </div>
            <div className="space-y-6 pt-2">
              <div className="space-y-2">
                <p className="text-[14px] md:text-[15px] font-normal tracking-tight text-white/90">Lincoln High School - Downtown Campus</p>
                <p className="text-white/60 text-[13px] font-normal max-w-xl leading-relaxed">
                  Lead your school chapter, coordinate wings, and keep every activity on track.
                </p>
              </div>
            </div>
          </div>

          {/* Banner Illustration - Breakout style */}
          <div className="absolute right-0 -bottom-6 -top-16 w-[45%] flex items-end justify-end pointer-events-none z-30">
            <img
              src="/images/chief01.png"
              alt="Chapter Chief Illustration"
              className="h-full w-auto object-contain transform group-hover:scale-105 transition-transform duration-700 ease-out drop-shadow-[0_40px_60px_rgba(0,0,0,0.4)]"
            />
          </div>

          <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-black/10 to-transparent pointer-events-none"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-white/10 transition-all duration-1000"></div>
          <div className="absolute -bottom-24 right-48 w-64 h-64 bg-black/20 rounded-full blur-[80px] pointer-events-none group-hover:scale-110 transition-all duration-1000"></div>
        </div>
      </div>

      {/* Stats Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-6">
        {/* Main Illustration Section - Full Card Image */}
        <div className="lg:col-span-6 rounded-[32px] overflow-hidden shadow-sm relative group bg-white border border-gray-100/50 min-h-[350px]">
          <img
            src="/images/images teachers/dashboard.png"
            alt="Chapter Members Illustration"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
          />
          {/* Bottom Gradient overlay */}
          <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-[#7a2024]/90 via-[#7a2024]/40 to-transparent pointer-events-none mix-blend-multiply"></div>
        </div>

        {/* Side Content Section: Upcoming Events */}
        <div className="lg:col-span-6 bg-white p-6 md:p-7 rounded-[32px] shadow-sm border border-gray-100/50 relative">
          <h3 className="text-[18px] font-normal text-[#1a1a1a] mb-3 tracking-tight">
            Upcoming Events
          </h3>

          <div className="space-y-4">
            {events.map((event, index) => (
              <div
                key={index}
                className="flex items-center justify-between gap-4 p-4 bg-[#f7f7f8] rounded-[20px] transition-all duration-300 hover:shadow-md border border-gray-100/50 relative z-10"
              >
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  <div className="w-20 h-14 rounded-xl overflow-hidden shadow-sm flex-shrink-0 border border-gray-100">
                    <img src={event.img} alt="Event" className="w-full h-full object-cover" />
                  </div>
                  <p className="text-[14px] font-normal text-[#1a1a1a] leading-tight tracking-tight line-clamp-2">
                    {event.title}
                  </p>
                </div>
                <button
                  className="whitespace-nowrap text-[11px] font-normal text-[#155DFC] bg-white hover:bg-[#155DFC] hover:text-white px-5 py-2.5 rounded-xl transition-all duration-300 border border-[#155DFC]/20 shadow-sm"
                >
                  Submit report
                </button>
              </div>
            ))}
          </div>

          <div className="absolute right-[-40px] bottom-[10px] w-[200px] md:w-[140px] pointer-events-none z-20 overflow-visible">
            <img
              src="/images/chief04.png"
              alt="Decorative Character"
              className="w-full h-auto object-contain drop-shadow-[-20px_20px_30px_rgba(0,0,0,0.15)] transform translate-y-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildRightsWingDashboard;
