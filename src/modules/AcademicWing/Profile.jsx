import React from 'react';
import { 
  Mail, Phone, School, MapPin, UserCircle, Award, Trophy, 
  TrendingUp, CheckCircle2, Calendar 
} from 'lucide-react';
import { cn } from '../../utils/cn';

const AcademicWingProfile = () => {
  return (
    <div className="p-4 max-w-7xl mx-auto space-y-4 animate-in fade-in duration-700 font-['Arial'] pb-24 bg-white min-h-screen">
      {/* Profile Overview Header */}
      <div className="flex flex-col gap-1 px-4 mt-4">
        <h2 className="text-[20px] font-normal text-[#1a1a1a]">Profile Overview</h2>
        <p className="text-[13px] font-normal text-[#555555] opacity-60">Your complete profile and credentials</p>
      </div>

      {/* Hero Banner Section */}
      <div className="relative px-4 mt-6">
        <div className="bg-white rounded-[32px] shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-gray-100 overflow-hidden text-center lg:text-left">
          {/* Banner Image */}
          <div className="h-48 md:h-52 w-full relative overflow-hidden">
            <img
              src="/images/chiefp.png"
              alt="Students"
              className="w-full h-full object-cover object-top"
            />
            
          </div>

          {/* Profile Content Area */}
          <div className="relative px-8 pb-12">
            {/* Overlapping Avatar Area - Perfectly circular with thick border */}
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 lg:left-8 lg:translate-x-0">
              <div className="w-32 h-32 rounded-full border-[6px] border-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] overflow-hidden bg-white">
                <img
                  src="/images/cp01.png"
                  alt="Jane Doe"
                  className="w-full h-full object-cover scale-110"
                />
              </div>
            </div>

            {/* Main Information Layout */}
            <div className="pt-20 lg:pt-6 lg:pl-36 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8">
              {/* Left Column: Name, Title, Badges, and Contact Cards */}
              <div className="flex flex-col gap-8 flex-1 w-full items-center lg:items-start">
                {/* Identity & Status */}
                <div className="flex flex-col gap-1.5 items-center lg:items-start">
                  <h3 className="text-[22px] font-normal text-[#1a1a1a]">Jane Doe</h3>
                  <p className="text-[14px] font-normal text-[#555555] opacity-60">Academic & Career Guidance WingLeader</p>

                  <div className="flex items-center gap-2 mt-2">
                    <span className="bg-[#e7f6ed] text-[#1caf5f] text-[11px] font-normal px-3 py-1 rounded-[8px]">Active</span>
                    <span className="bg-[#f8f9fa] text-[#555555] text-[11px] font-normal px-3 py-1 rounded-[8px] border border-gray-100/50">YV-TM-2024-0847</span>
                  </div>
                </div>

                {/* Contact Information Cards */}
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start w-full">
                  {/* Email Card */}
                  <div className="flex items-center gap-4 bg-[#f8f9fa] px-6 py-4 rounded-[20px] min-w-[280px]">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#555555]/30 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-50">
                      <Mail size={18} />
                    </div>
                    <div className="flex flex-col items-start leading-tight">
                      <span className="text-[11px] font-normal text-[#555555] opacity-50 mb-0.5">Email</span>
                      <span className="text-[14px] font-normal text-[#1a1a1a]">jane.doe@greenwood.edu</span>
                    </div>
                  </div>
                  {/* Contact Card */}
                  <div className="flex items-center gap-4 bg-[#f8f9fa] px-6 py-4 rounded-[20px] min-w-[240px]">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#555555]/30 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-50">
                      <Phone size={18} />
                    </div>
                    <div className="flex flex-col items-start leading-tight">
                      <span className="text-[11px] font-normal text-[#555555] opacity-50 mb-0.5">Contact</span>
                      <span className="text-[14px] font-normal text-[#1a1a1a]">+1 (555) 123-4567</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Ranking Card */}
              <div className="bg-[#fff9ed] border border-[#ffecce] rounded-[24px] p-6 pr-10 flex items-center gap-5 shadow-[0_4px_25px_rgba(255,153,0,0.02)] min-w-[210px] mt-1 lg:mt-0">
                <div className="w-14 h-14 rounded-2xl bg-[#fff9ed] border border-[#ffecce]/50 flex items-center justify-center text-[#ff9900]">
                  <Trophy size={28} />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-[32px] font-normal text-[#1a1a1a] leading-none mb-1">#3</span>
                  <span className="text-[12px] font-normal text-[#555555] opacity-60">of 30 mentors</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-4">
        {/* Personal Information */}
        <div className="bg-white rounded-[32px] p-8 shadow-sm border border-[#eeeeee]">
          <div className="flex items-center gap-3 mb-8">
            <UserCircle size={20} className="text-[#1a1a1a]" />
            <h4 className="text-[17px] font-normal text-[#1a1a1a]">Personal Information</h4>
          </div>

          <div className="grid grid-cols-2 gap-y-8">
            <div>
              <p className="text-[11px] font-normal text-[#555555] opacity-50 mb-2">Full Name</p>
              <p className="text-[15px] font-normal text-[#1a1a1a]">Jane Doe</p>
            </div>
            <div>
              <p className="text-[11px] font-normal text-[#555555] opacity-50 mb-2">Gender</p>
              <p className="text-[15px] font-normal text-[#1a1a1a]">Female</p>
            </div>
            <div>
              <p className="text-[11px] font-normal text-[#555555] opacity-50 mb-2">Date of Birth</p>
              <p className="text-[15px] font-normal text-[#1a1a1a]">6/15/1985 (40 years)</p>
            </div>
            <div>
              <p className="text-[11px] font-normal text-[#555555] opacity-50 mb-2">Grade</p>
              <p className="text-[15px] font-normal text-[#1a1a1a]">VI</p>
            </div>
            <div className="col-span-2">
              <p className="text-[11px] font-normal text-[#555555] opacity-50 mb-4">Languages Known</p>
              <div className="flex flex-wrap gap-2">
                {['English', 'Spanish', 'French'].map(lang => (
                  <span key={lang} className="bg-white border border-gray-100/80 shadow-sm text-[#1a1a1a] text-[12px] font-normal px-4 py-2 rounded-full flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#A82228] opacity-60" />
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Chapter Information */}
        <div className="bg-white rounded-[32px] p-8 shadow-sm border border-[#eeeeee] relative overflow-hidden flex flex-col">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <School size={20} className="text-[#1a1a1a]" />
              <h4 className="text-[17px] font-normal text-[#1a1a1a]">Chapter Information</h4>
            </div>

            <div className="space-y-8 max-w-[65%]">
              <div>
                <p className="text-[11px] font-normal text-[#555555] opacity-50 mb-2">School Name</p>
                <p className="text-[15px] font-normal text-[#1a1a1a]">Greenwood High School</p>
              </div>
              <div>
                <p className="text-[11px] font-normal text-[#555555] opacity-50 mb-2">Branch / Location</p>
                <div className="flex items-center gap-2 text-[15px] font-normal text-[#1a1a1a]">
                  <MapPin size={16} className="text-[#555555] opacity-40" />
                  North Valley Campus
                </div>
              </div>
              <div>
                <p className="text-[11px] font-normal text-[#555555] opacity-50 mb-2">Chapter established on</p>
                <p className="text-[15px] font-normal text-[#1a1a1a]">2022</p>
              </div>
              <div>
                <p className="text-[11px] font-normal text-[#555555] opacity-50 mb-2">Current status</p>
                <p className="text-[15px] font-normal text-[#1a1a1a]">Active</p>
              </div>
            </div>
          </div>

          <div className="absolute right-0 bottom-0 w-[50%] h-full flex items-end justify-end pointer-events-none">
            <img
              src="/images/Vector.svg"
              alt=""
              className="absolute right-[-20px] bottom-[-20px] w-full h-full object-contain opacity-60 scale-125"
            />
            <img
              src="/images/cp02.png"
              alt="Chapter Illustration"
              className="relative z-10 w-full h-[90%] object-contain object-right-bottom"
            />
          </div>
        </div>
      </div>

      {/* Certificates & Recognition */}
      <div className="bg-white rounded-[32px] p-8 shadow-sm border border-[#eeeeee] mx-4">
        <div className="flex items-center gap-3 mb-8">
          <Award size={20} className="text-[#1a1a1a]" />
          <h4 className="text-[17px] font-normal text-[#1a1a1a]">Certificates & Recognition</h4>
        </div>

        <div className="space-y-4">
          {[
            { title: 'YoungVox Mentor Orientation', date: '1/15/2024' },
            { title: 'Child Protection Training', date: '2/10/2024' },
            { title: 'Advanced Leadership Workshop', date: '8/22/2024' },
          ].map((cert, idx) => (
            <div key={idx} className="bg-[#f8f9fa] border border-gray-50/50 rounded-[20px] p-5 flex items-center justify-between gap-4 transition-all duration-300">
              <div className="flex items-center gap-5">
                <div className="flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#1caf5f]/10 flex items-center justify-center shadow-sm">
                    <img src="/icon/tick.png" alt="Tick" className="w-6 h-6 object-contain" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="text-[15px] font-normal text-[#1a1a1a] mb-0.5">{cert.title}</p>
                  <p className="text-[12px] font-normal text-[#555555] opacity-50 flex items-center gap-2">
                    <Calendar size={14} />
                    Completed on {cert.date}
                  </p>
                </div>
              </div>
              <span className="bg-[#1caf5f] text-white text-[11px] font-normal px-5 py-2 rounded-full shadow-sm">Completed</span>
            </div>
          ))}
        </div>
      </div>

      {/* Chapter chief ranking Section */}
      <div className="bg-white rounded-[32px] p-8 shadow-sm border border-[#eeeeee] mx-4 mb-8 relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <Trophy size={20} className="text-[#1a1a1a]" />
            <h4 className="text-[17px] font-normal text-[#1a1a1a]">Wing Leader Ranking</h4>
          </div>

          <div className="bg-[#fff9ed] border border-[#ffecce]/50 rounded-[32px] p-8 flex flex-col xl:flex-row gap-10">
            <div className="flex-1 flex flex-col">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-[#ff9900] shadow-[0_8px_30px_rgba(255,153,0,0.3)] flex items-center justify-center text-white">
                    <Trophy size={42} strokeWidth={2.5} />
                  </div>
                </div>

                <div className="flex flex-col items-center md:items-start">
                  <span className="text-[12px] font-normal text-[#555555] opacity-50 mb-1">Current Ranking</span>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-[48px] font-normal text-[#1a1a1a] leading-none mb-2">#3</h3>
                  </div>
                  <span className="text-[13px] font-normal text-[#555555] opacity-60 mb-4">out of 50 mentors</span>
                </div>

                <div className="flex flex-col items-center md:items-start md:ml-auto md:pt-4">
                  <div className="flex items-center gap-2 text-[#1caf5f] text-[14px] font-normal mb-2">
                    <TrendingUp size={18} strokeWidth={3} />
                    Up from #5
                  </div>
                  <span className="bg-[#e7f6ed] text-[#1caf5f] text-[11px] font-normal px-3 py-1 rounded-md">Top 8%</span>
                </div>
              </div>

              <div className="h-px bg-[#1a1a1a]/5 w-full mb-8"></div>

              <div className="flex flex-col">
                <span className="text-[12px] font-normal text-[#555555] opacity-60 mb-4">Ranking based on:</span>
                <div className="flex flex-wrap gap-x-12 gap-y-3 justify-center md:justify-start">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#A82228]" />
                    <span className="text-[14px] font-normal text-[#1a1a1a]">Timely submission</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#A82228]" />
                    <span className="text-[14px] font-normal text-[#1a1a1a]">Chapter success</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#A82228]" />
                    <span className="text-[14px] font-normal text-[#1a1a1a]">Collaboration</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="xl:w-[350px] flex items-center justify-center">
              <div className="bg-white rounded-[24px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.02)] border border-gray-50 w-full flex flex-col items-center text-center gap-6">
                <div className="space-y-1">
                  <p className="text-[17px] font-normal text-[#1a1a1a]">Recognition</p>
                  <p className="text-[14px] font-normal text-[#1a1a1a]">Mentor-specific</p>
                </div>
                <button className="w-full border border-[#A82228] text-[#A82228] text-[13px] font-normal py-3 px-6 rounded-xl hover:bg-[#A82228] hover:text-white transition-all duration-300 active:scale-95">
                  Recognition Badges
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-[-50px] left-[-50px] w-96 h-96 bg-[#ff9900]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-[#A82228]/5 rounded-full blur-[150px] pointer-events-none" />
      </div>
    </div>
  );
};

export default AcademicWingProfile;
