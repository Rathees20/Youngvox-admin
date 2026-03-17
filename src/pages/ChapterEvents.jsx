import React from 'react';
import { ChevronDown, Calendar, Clock, User } from 'lucide-react';

const ChapterEvents = () => {
  const upcomingEvents = [
    {
      title: 'Career Counseling Session',
      category: 'Academic & Career Guidance',
      deadline: '1/15/2026',
      time: '5:00 AM',
      image: '/images/Image (Training Event).png',
      status: 'Upcoming',
      type: 'Monthly Event'
    },
    {
      title: 'Career Counseling Session',
      category: 'Academic & Career Guidance',
      deadline: '1/15/2026',
      time: '5:00 AM',
      image: '/images/Image (Training Event).png',
      status: 'Upcoming',
      type: 'Monthly Event'
    },
    {
      title: 'Career Counseling Session',
      category: 'Academic & Career Guidance',
      deadline: '1/15/2026',
      time: '5:00 AM',
      image: '/images/Image (Training Event).png',
      status: 'Upcoming',
      type: 'Monthly Event'
    }
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6 animate-in fade-in duration-700 font-['Arial'] min-h-screen">
      {/* Header */}
      <div className="flex flex-col gap-1 px-2">
        <h2 className="text-[22px] font-bold text-[#1a1a1a]">Events Calendar</h2>
        <p className="text-[14px] font-normal text-[#555555] opacity-60">Track events, deadlines</p>
      </div>

      {/* Filter Card */}
      <div className="bg-white rounded-[24px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.02)] border border-[#eeeeee] space-y-6">
        <h3 className="text-[14px] font-bold text-[#555555] px-1">Event Filters</h3>
        <div className="flex flex-wrap gap-4 items-center">
          <div className="relative min-w-[200px]">
            <select className="w-full appearance-none bg-[#f4f4f5] border border-transparent hover:border-[#eeeeee] rounded-xl py-3 px-5 text-[13px] font-normal text-[#1a1a1a] outline-none transition-all cursor-pointer">
              <option>All Wings</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#555555] opacity-40 pointer-events-none" size={16} />
          </div>
          <div className="relative min-w-[200px]">
            <select className="w-full appearance-none bg-[#f4f4f5] border border-transparent hover:border-[#eeeeee] rounded-xl py-3 px-5 text-[13px] font-normal text-[#1a1a1a] outline-none transition-all cursor-pointer">
              <option>All Activities</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#555555] opacity-40 pointer-events-none" size={16} />
          </div>
          <div className="relative min-w-[200px]">
            <select className="w-full appearance-none bg-[#f4f4f5] border border-transparent hover:border-[#eeeeee] rounded-xl py-3 px-5 text-[13px] font-normal text-[#1a1a1a] outline-none transition-all cursor-pointer">
              <option>All Months</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#555555] opacity-40 pointer-events-none" size={16} />
          </div>
        </div>
      </div>

      {/* Event Grid Section */}
      <div className="space-y-6 pt-2">
        <h3 className="text-[18px] font-bold text-[#1a1a1a] px-2">Ongoing & Upcoming Events</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event, idx) => (
            <div key={idx} className="bg-white rounded-[24px] overflow-hidden border border-[#eeeeee] shadow-[0_8px_30px_rgba(0,0,0,0.02)] flex flex-col group transition-all duration-300">
              <div className="relative h-[200px] overflow-hidden">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 right-4">
                  <span className="bg-[#dbeafe] text-[#3b82f6] text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-sm">
                    {event.status}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-black/20 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1.5 rounded-lg">
                    {event.type}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col gap-4">
                <div className="space-y-2">
                  <h4 className="text-[16px] font-bold text-[#1a1a1a] leading-tight leading-none">{event.title}</h4>
                  <div className="flex">
                    <span className="bg-[#dbeafe] text-[#3b82f6] text-[11px] font-medium px-3 py-1 rounded-md">
                      {event.category}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 pt-1">
                  <div className="flex items-center gap-2.5 text-[13px] font-normal text-[#555555]">
                    <Calendar size={16} className="text-[#555555] opacity-40 line-none" />
                    <span className="font-bold text-[#1a1a1a]">Deadline:</span>
                    <span className="opacity-80">{event.deadline}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-[13px] font-normal text-[#555555]">
                    <Clock size={16} className="text-[#555555] opacity-40" />
                    <span className="font-bold text-[#1a1a1a]">Time:</span>
                    <span className="opacity-80">{event.time}</span>
                  </div>
                </div>

                <button className="w-full mt-2 border border-gray-100 bg-white py-2.5 rounded-xl text-[13px] font-bold text-[#555555] hover:bg-gray-50 transition-all flex items-center justify-center gap-2 shadow-sm">
                  Resource link
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Highlight Section */}
      <div className="bg-[#fef2f2] rounded-[32px] p-8 border border-blue-500/20 shadow-[0_0_0_2px_rgba(59,130,246,0.1)] relative overflow-hidden group mt-4">
        <div className="flex flex-col lg:flex-row gap-10 items-center relative z-10">
          <div className="w-full lg:w-[45%] h-[280px] rounded-[24px] overflow-hidden shadow-lg border border-white/50">
            <img
              src="/images/Image (Training Event).png"
              alt="Highlight Event"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
          </div>

          <div className="w-full lg:w-[55%] flex flex-col gap-5">
            <div className="space-y-3">
              <span className="text-[14px] font-normal text-[#1a1a1a] opacity-80">Upcoming YoungVox Event</span>
              <div>
                <span className="inline-block bg-[#A82228] text-white text-[10px] font-bold px-4 py-1.5 rounded-lg uppercase tracking-wider">
                  Upcoming Training
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-[22px] font-bold text-[#1a1a1a] leading-tight">Advanced Mentor Training Workshop</h4>
              <div className="flex flex-wrap gap-6 text-[13px] font-normal text-[#555555]">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-[#555555] opacity-60" />
                  February 10, 2026
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-[#555555] opacity-60" />
                  2:00 PM - 5:00 PM
                </div>
              </div>
            </div>

            <p className="text-[14px] font-normal text-[#555555] leading-relaxed max-w-2xl opacity-70">
              Join us for an intensive training session covering advanced chapter management techniques, student engagement strategies, and effective report writing. Limited slots available!
            </p>

            <div className="flex items-center gap-2.5 py-1">
              <User size={16} className="text-[#555555] opacity-60" />
              <p className="text-[13px] font-normal text-[#1a1a1a]">Facilitator: <span className="text-[#1a1a1a] opacity-80">Dr. Maria Rodriguez, Education Specialist</span></p>
            </div>

            <button className="w-fit bg-[#A82228] text-white px-8 py-3 rounded-xl text-[13px] font-bold shadow-lg shadow-[#A82228]/20 hover:brightness-110 transition-all active:scale-95">
              Join the event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterEvents;
