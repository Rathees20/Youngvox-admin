import React from 'react';
import { ChevronDown, Calendar, Clock, User, ExternalLink } from 'lucide-react';
import { cn } from '../../utils/cn';

const EventCard = ({ title, wing, deadline, time, image, status, type }) => (
  <div className="bg-white rounded-[24px] overflow-hidden shadow-sm border border-gray-100 group hover:shadow-xl transition-all duration-500 relative">
    <div className="relative h-48 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
      <div className="absolute top-4 right-4 flex flex-col gap-2">
        <span className="bg-[#155DFC]/80 backdrop-blur-md text-white text-[10px] font-normal px-3 py-1.5 rounded-lg uppercase tracking-wider shadow-sm">
          {status}
        </span>
      </div>
      <div className="absolute bottom-4 left-4">
        <span className="bg-black/30 backdrop-blur-md text-white text-[10px] font-normal px-3 py-1.5 rounded-lg uppercase tracking-wider border border-white/20">
          {type}
        </span>
      </div>
    </div>
    <div className="p-6 space-y-5">
      <div className="space-y-2">
        <h4 className="text-[16px] font-normal text-[#1a1a1a] tracking-tight leading-snug">{title}</h4>
        <span className="inline-block bg-[#fef3c7] text-[#92400e] text-[10px] font-normal px-2.5 py-1 rounded-lg uppercase tracking-wider">
          {wing}
        </span>
      </div>

      <div className="space-y-2.5 pt-1">
        <div className="flex items-center gap-3 text-[#1a1a1a]">
          <Calendar size={16} className="opacity-40" strokeWidth={2.5} />
          <span className="text-[13px] font-normal opacity-50">Deadline: </span>
          <span className="text-[13px] font-normal">{deadline}</span>
        </div>
        <div className="flex items-center gap-3 text-[#1a1a1a]">
          <Clock size={16} className="opacity-40" strokeWidth={2.5} />
          <span className="text-[13px] font-normal opacity-50">Time: </span>
          <span className="text-[13px] font-normal">{time}</span>
        </div>
      </div>

      <button className="w-full py-3 px-6 rounded-xl border border-gray-100 text-[12px] font-normal text-[#555555] hover:bg-gray-50 hover:text-[#1a1a1a] hover:border-gray-200 transition-all flex items-center justify-center gap-2 group/btn tracking-tight">
        Resource link
      </button>
    </div>
  </div>
);

const CommunityOutreachWingEvents = () => {
  const events = [
    { title: 'Career Counseling Session', wing: 'Community Outreach & Service', deadline: '1/15/2026', time: '5:00 AM', image: '/images/Image (Training Event).png', status: 'Upcoming', type: 'Monthly Event' },
    { title: 'Career Counseling Session', wing: 'Community Outreach & Service', deadline: '1/15/2026', time: '5:00 AM', image: '/images/Image (Training Event).png', status: 'Upcoming', type: 'Monthly Event' },
    { title: 'Career Counseling Session', wing: 'Community Outreach & Service', deadline: '1/15/2026', time: '5:00 AM', image: '/images/Image (Training Event).png', status: 'Upcoming', type: 'Monthly Event' },
  ];

  return (
    <div className="p-6 space-y-6 animate-in fade-in duration-700 pb-24 max-w-[1600px] mx-auto font-['Arial'] bg-white min-h-screen">
      <div className="space-y-1">
        <h2 className="text-[20px] font-normal text-[#1a1a1a] tracking-tight">Events Calendar</h2>
        <p className="text-[13px] font-normal text-[#555555] opacity-60">Track events, deadlines</p>
      </div>

      <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100/50 space-y-6">
        <h3 className="text-[14px] font-normal text-[#1a1a1a] tracking-tight">Event Filters</h3>
        <div className="flex flex-wrap gap-4">
          <div className="relative group min-w-[240px]">
            <select className="appearance-none w-full bg-[#f4f4f5]/60 border border-transparent hover:border-gray-100 hover:bg-white rounded-xl py-3 px-5 text-[13px] font-normal text-[#1a1a1a] outline-none transition-all cursor-pointer">
              <option>All Activities</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#555555]/40 pointer-events-none" size={18} />
          </div>
          <div className="relative group min-w-[240px]">
            <select className="appearance-none w-full bg-[#f4f4f5]/60 border border-transparent hover:border-gray-100 hover:bg-white rounded-xl py-3 px-5 text-[13px] font-normal text-[#1a1a1a] outline-none transition-all cursor-pointer">
              <option>All Months</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#555555]/40 pointer-events-none" size={18} />
          </div>
        </div>
      </div>

      <div className="space-y-8 pt-4">
        <h3 className="text-[16px] font-normal text-[#1a1a1a] tracking-tight opacity-80">Ongoing & Upcoming Events</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, idx) => (
            <EventCard key={idx} {...event} />
          ))}
        </div>
      </div>

      {/* Featured Banner */}
      <div className="bg-[#ffe4e6]/60 rounded-[40px] p-6 md:p-8 border border-[#fecdd3]/50 relative overflow-hidden group hover:shadow-2xl hover:shadow-red-500/5 transition-all duration-700 mt-12">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 relative z-10">
          <div className="w-full lg:w-[400px] h-[260px] rounded-[32px] overflow-hidden shadow-2xl shadow-red-500/10 border-4 border-white flex-shrink-0">
            <img src="/images/Image (Training Event).png" alt="Training" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
          </div>

          <div className="flex-1 space-y-6 text-center lg:text-left">
            <div className="space-y-3">
               <p className="text-[13px] font-normal text-[#1a1a1a] tracking-tight opacity-70">Upcoming YoungVox Event</p>
               <span className="bg-[#A82228] text-white text-[10px] font-normal px-4 py-1.5 rounded-lg uppercase tracking-widest w-fit mx-auto lg:mx-0 shadow-lg shadow-red-500/20">
                 Upcoming Training
               </span>
               <h2 className="text-[22px] md:text-[26px] font-normal text-[#1a1a1a] tracking-tight leading-tight pt-1">
                 Advanced Mentor Training Workshop
               </h2>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 border-y border-red-100/50 py-4">
              <div className="flex items-center gap-2.5 text-[#1a1a1a]">
                <Calendar size={16} className="text-[#A82228]" />
                <span className="text-[13px] font-normal tracking-tight">February 10, 2026</span>
              </div>
              <div className="flex items-center gap-2.5 text-[#1a1a1a]">
                <Clock size={16} className="text-[#A82228]" />
                <span className="text-[13px] font-normal tracking-tight">2:00 PM - 5:00 PM</span>
              </div>
            </div>

            <p className="text-[13px] font-normal text-[#555555] opacity-80 leading-relaxed max-w-2xl">
              Join us for an intensive training session covering advanced chapter management techniques, student engagement strategies, and effective report writing. Limited slots available!
            </p>

            <div className="flex flex-col lg:flex-row lg:items-center gap-6 justify-center lg:justify-start pt-2">
              <div className="flex items-center gap-2.5 justify-center lg:justify-start text-[#1a1a1a]">
                <User size={16} className="text-[#A82228] opacity-60" />
                <span className="text-[12px] font-normal tracking-tight opacity-70">Facilitator: Dr. Maria Rodriguez, Education Specialist</span>
              </div>
              <button className="bg-[#A82228] text-white px-8 py-3 rounded-xl text-[13px] font-normal hover:bg-[#8e1d22] transition-all shadow-xl shadow-red-500/10 tracking-tight">
                Join the event
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityOutreachWingEvents;
