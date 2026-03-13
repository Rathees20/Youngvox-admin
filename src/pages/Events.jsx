import React from 'react';
import { ChevronDown, Calendar, Clock, Link as LinkIcon, ExternalLink } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      title: 'Career Counseling Session',
      category: 'Academic & Career Guidance',
      deadline: '1/15/2026',
      time: '5:00 AM',
      image: '/artifacts/career_counseling_card.png',
      status: 'Upcoming',
      type: 'Monthly Event'
    },
    {
      title: 'Career Counseling Session',
      category: 'Academic & Career Guidance',
      deadline: '1/15/2026',
      time: '5:00 AM',
      image: '/artifacts/career_counseling_card.png',
      status: 'Upcoming',
      type: 'Monthly Event'
    },
    {
      title: 'Career Counseling Session',
      category: 'Academic & Career Guidance',
      deadline: '1/15/2026',
      time: '5:00 AM',
      image: '/artifacts/career_counseling_card.png',
      status: 'Upcoming',
      type: 'Monthly Event'
    }
  ];

  return (
    <div className="p-4 max-w-7xl mx-auto space-y-6 animate-in fade-in duration-700">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <h2 className="text-[24px] font-normal text-[#1a1a1a] tracking-tight">Events Calendar</h2>
        <p className="text-[14px] font-normal text-[#555555] opacity-60">Track events, deadlines</p>
      </div>

      {/* Filter Bar */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#eeeeee] space-y-4">
        <div className="flex items-center gap-2 text-[#1a1a1a]">
          <h3 className="text-[14px] font-normal">Event Filters</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {['All Wings', 'All Activities', 'All Months'].map((filter) => (
            <div key={filter} className="relative">
              <select className="w-full appearance-none bg-[#f4f4f5]/60 hover:bg-white border border-transparent hover:border-[#eeeeee] rounded-xl py-2.5 px-5 text-[12px] font-normal text-[#1a1a1a] outline-none transition-all cursor-pointer">
                <option>{filter}</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#555555] opacity-40 pointer-events-none" size={16} />
            </div>
          ))}
        </div>
      </div>

      {/* Ongoing & Upcoming Section */}
      <div className="space-y-4">
        <h3 className="text-[16px] font-normal text-[#1a1a1a]">Ongoing & Upcoming Events</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event, idx) => (
            <div key={idx} className="bg-white rounded-[24px] overflow-hidden border border-[#eeeeee] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col group">
              <div className="relative h-[200px] overflow-hidden">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm text-[#3b82f6] text-[10px] font-normal px-3 py-1.5 rounded-lg uppercase tracking-wider shadow-sm border border-[#3b82f6]/10">
                    {event.status}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-black/40 backdrop-blur-md text-white/90 text-[10px] font-normal px-3 py-1 rounded-lg uppercase tracking-wider">
                    {event.type}
                  </span>
                </div>
              </div>
              
              <div className="p-5 flex flex-col gap-4">
                <div className="space-y-3">
                  <h4 className="text-[17px] font-normal text-[#1a1a1a] leading-tight group-hover:text-[#A82228] transition-colors">{event.title}</h4>
                  <span className="inline-block bg-[#e0f0ff] text-[#3b82f6] text-[10px] font-normal px-2.5 py-1 rounded-lg uppercase tracking-wider">
                    {event.category}
                  </span>
                </div>

                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-3 text-[13px] font-normal text-[#555555]">
                    <Calendar size={16} className="text-[#A82228] opacity-60" />
                    <span>Deadline: {event.deadline}</span>
                  </div>
                  <div className="flex items-center gap-3 text-[13px] font-normal text-[#555555]">
                    <Clock size={16} className="text-[#A82228] opacity-60" />
                    <span>Time: {event.time}</span>
                  </div>
                </div>

                <button className="w-full mt-2 border border-[#eeeeee] py-2.5 rounded-xl text-[12px] font-normal text-[#555555] hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                  Resource link
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Event Section */}
      <div className="bg-[#fff1f2] rounded-3xl p-6 border border-[#ffecce]/30 flex flex-col lg:flex-row gap-8 items-center border border-indigo-200/50">
        <div className="lg:w-[45%] h-[280px] rounded-2xl overflow-hidden shadow-2xl relative group">
          <img src="/artifacts/featured_training_banner.png" alt="Featured Event" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
        </div>
        
        <div className="flex-1 space-y-5">
          <div className="space-y-1">
            <h3 className="text-[18px] font-normal text-[#1a1a1a]">Upcoming YoungVox Event</h3>
            <span className="inline-block bg-[#A82228] text-white text-[10px] font-normal px-3 py-1 rounded-md uppercase tracking-widest">
              Upcoming Training
            </span>
          </div>
          
          <div className="space-y-2">
            <h4 className="text-[22px] font-normal text-[#1a1a1a] tracking-tight">Advanced Mentor Training Workshop</h4>
            <div className="flex flex-wrap gap-6 text-[13px] font-normal text-[#555555]">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-[#A82228] opacity-60" />
                February 10, 2026
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-[#A82228] opacity-60" />
                2:00 PM - 5:00 PM
              </div>
            </div>
          </div>

          <p className="text-[14px] font-normal text-[#555555] leading-relaxed max-w-2xl opacity-80">
            Join us for an intensive training session covering advanced chapter management techniques, student engagement strategies, and effective report writing. Limited slots available!
          </p>

          <div className="flex items-center gap-3 text-[13px] font-normal text-[#555555] opacity-70">
            <Users size={18} className="text-[#A82228]" />
            Facilitator: Dr. Maria Rodriguez, Education Specialist
          </div>

          <button className="bg-[#A82228] text-white px-8 py-3 rounded-xl text-[13px] font-normal shadow-lg shadow-[#A82228]/20 hover:brightness-110 transition-all">
            Join the event
          </button>
        </div>
      </div>
    </div>
  );
};

// Simple reusable Users icon since it wasn't imported
const Users = ({ size, className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

export default Events;
