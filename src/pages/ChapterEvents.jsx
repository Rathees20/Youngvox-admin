import React from 'react';
import { ChevronDown, Calendar, Clock, User } from 'lucide-react';

const ChapterEvents = () => {
  const upcomingEvents = [
    {
      title: 'Career Counseling Session',
      category: 'Academic & Career Guidance',
      deadline: '1/15/2026',
      time: '5:00 AM',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2000&auto=format&fit=crop',
      status: 'Upcoming',
      type: 'Monthly Event'
    },
    {
      title: 'Career Counseling Session',
      category: 'Academic & Career Guidance',
      deadline: '1/15/2026',
      time: '5:00 AM',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000&auto=format&fit=crop',
      status: 'Upcoming',
      type: 'Monthly Event'
    },
    {
      title: 'Career Counseling Session',
      category: 'Academic & Career Guidance',
      deadline: '1/15/2026',
      time: '5:00 AM',
      image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2000&auto=format&fit=crop',
      status: 'Upcoming',
      type: 'Monthly Event'
    }
  ];

  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-[1600px] mx-auto space-y-8 animate-in fade-in duration-700">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <h2 className="text-[24px] font-black text-[#1a1a1a] tracking-tight">Events Calendar</h2>
        <p className="text-[14px] font-bold text-[#555555] opacity-60">Track events, deadlines</p>
      </div>

      {/* Filter Bar */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#eeeeee] space-y-6">
        <h3 className="text-[14px] font-black text-[#1a1a1a] tracking-tight">Event Filters</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['All Wings', 'All Activities', 'All Months'].map((filter) => (
            <div key={filter} className="relative">
              <select className="w-full appearance-none bg-[#f4f4f5]/60 hover:bg-white border border-transparent hover:border-[#eeeeee] rounded-xl py-3 px-6 text-[12px] font-bold text-[#1a1a1a] outline-none transition-all cursor-pointer">
                <option>{filter}</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#555555] opacity-40 pointer-events-none" size={16} />
            </div>
          ))}
        </div>
      </div>

      {/* Ongoing & Upcoming Section */}
      <div className="space-y-6">
        <h3 className="text-[18px] font-black text-[#1a1a1a] tracking-tight">Ongoing & Upcoming Events</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, idx) => (
            <div key={idx} className="bg-white rounded-[32px] overflow-hidden border border-[#eeeeee] shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col group">
              <div className="relative h-[220px] overflow-hidden">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute top-5 right-5">
                  <span className="bg-white/95 backdrop-blur-md text-[#3b82f6] text-[10px] font-black px-4 py-2 rounded-xl uppercase tracking-widest shadow-lg shadow-black/5">
                    {event.status}
                  </span>
                </div>
                <div className="absolute bottom-5 left-5">
                  <span className="bg-black/30 backdrop-blur-md text-white text-[10px] font-bold px-4 py-2 rounded-xl uppercase tracking-widest">
                    {event.type}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col gap-5">
                <div className="space-y-3">
                  <h4 className="text-[18px] font-black text-[#1a1a1a] leading-tight group-hover:text-[#A82228] transition-colors tracking-tight">{event.title}</h4>
                  <span className="inline-block bg-[#e0f0ff] text-[#3b82f6] text-[10px] font-black px-3 py-1.5 rounded-lg uppercase tracking-wider">
                    {event.category}
                  </span>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-[13px] font-bold text-[#555555]">
                    <Calendar size={18} className="text-[#A82228] opacity-80" />
                    <span>Deadline: {event.deadline}</span>
                  </div>
                  <div className="flex items-center gap-3 text-[13px] font-bold text-[#555555]">
                    <Clock size={18} className="text-[#A82228] opacity-80" />
                    <span>Time: {event.time}</span>
                  </div>
                </div>

                <button className="w-full mt-2 border border-[#eeeeee] py-3 rounded-2xl text-[12px] font-black text-[#555555] hover:bg-gray-50 transition-all flex items-center justify-center gap-2 shadow-sm border-transparent bg-gray-50/50">
                  Resource link
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Event Section */}
      <div className="bg-[#fff1f2] rounded-[40px] p-8 md:p-12 flex flex-col lg:row gap-10 items-center border border-red-50 shadow-sm relative overflow-hidden group">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 w-full items-center relative z-10">
          <div className="lg:col-span-5 h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl relative">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2400&auto=format&fit=crop" alt="Featured Event" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-2000" />
          </div>
          
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <h3 className="text-[16px] md:text-[18px] font-black text-[#1a1a1a] tracking-tight uppercase opacity-60">Upcoming YoungVox Event</h3>
              <span className="inline-block bg-[#A82228] text-white text-[10px] font-black px-5 py-2.5 rounded-xl uppercase tracking-widest shadow-xl shadow-[#A82228]/20">
                Upcoming Training
              </span>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-[28px] md:text-[40px] font-black text-[#1a1a1a] tracking-tighter leading-none">Advanced Mentor Training Workshop</h4>
              <div className="flex flex-wrap gap-8 text-[14px] font-bold text-[#555555]">
                <div className="flex items-center gap-3">
                  <Calendar size={20} className="text-[#A82228]" />
                  February 10, 2026
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={20} className="text-[#A82228]" />
                  2:00 PM - 5:00 PM
                </div>
              </div>
            </div>

            <p className="text-[15px] font-bold text-[#555555] leading-relaxed max-w-3xl opacity-80">
              Join us for an intensive training session covering advanced chapter management techniques, student engagement strategies, and effective report writing. Limited slots available!
            </p>

            <div className="flex items-center gap-3 py-2">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-[#A82228]">
                <User size={20} />
              </div>
              <p className="text-[14px] font-bold text-[#1a1a1a]">Facilitator: <span className="text-[#A82228]">Dr. Maria Rodriguez, Education Specialist</span></p>
            </div>

            <button className="w-full md:w-fit bg-[#A82228] text-white px-10 py-4 rounded-2xl text-[14px] font-black shadow-2xl shadow-[#A82228]/30 hover:brightness-110 transition-all active:scale-95 tracking-tight uppercase">
              Join the event
            </button>
          </div>
        </div>
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-200/20 rounded-full blur-3xl -mr-48 -mt-48 transition-all duration-1000 group-hover:bg-red-200/40"></div>
      </div>
    </div>
  );
};

export default ChapterEvents;
