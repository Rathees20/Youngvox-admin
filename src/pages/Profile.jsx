import React from 'react';
import { Mail, Phone, Briefcase, School, MapPin, Building2, UserCircle, Award, Trophy, TrendingUp, CheckCircle2 } from 'lucide-react';

const Profile = () => {
  return (
    <div className="p-4 max-w-7xl mx-auto space-y-4 animate-in fade-in duration-700">
      {/* Profile Overview Header */}
      <div className="flex flex-col gap-1">
        <h2 className="text-[24px] font-normal text-[#1a1a1a] tracking-tight">Profile Overview</h2>
        <p className="text-[14px] font-normal text-[#555555] opacity-60">Your complete profile and credentials</p>
      </div>

      {/* Hero Banner Section */}
      <div className="relative">
        <div className="h-24 bg-brand-gradient rounded-2xl w-full"></div>
        <div className="px-6 -mt-10 pb-1">
          <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-6 flex flex-col md:flex-row items-center md:items-start justify-between gap-5 border border-white">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full bg-brand-gradient flex items-center justify-center text-white text-2xl font-normal shadow-2xl shadow-[#A82228]/20 border-[4px] border-white">
                JD
              </div>
              <div className="flex flex-col text-center md:text-left pt-6">
                <div className="flex flex-col md:flex-row items-center gap-3 mb-2">
                  <h3 className="text-2xl font-normal text-[#1a1a1a] tracking-tight">Jane Doe</h3>
                  <div className="flex items-center gap-2">
                    <span className="bg-[#e7f6ed] text-[#1caf5f] text-[10px] font-normal px-3 py-1 rounded-full uppercase tracking-wider">Active</span>
                    <span className="bg-gray-50 text-[#555555] text-[10px] font-normal px-3 py-1 rounded-full uppercase tracking-wider border border-gray-100">YV-TM-2024-0847</span>
                  </div>
                </div>
                <p className="text-[14px] font-normal text-[#555555] opacity-70 mb-4">Senior Teacher Mentor</p>
                
                {/* Contact Quick Info */}
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-3 bg-gray-50/80 px-3.5 py-2.5 rounded-xl border border-gray-100">
                    <div className="w-9 h-9 rounded-lg bg-white border border-gray-100 flex items-center justify-center text-[#555555] shadow-sm">
                      <Mail size={16} strokeWidth={2.5} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] font-normal text-[#555555] opacity-50 uppercase tracking-tighter">Email</span>
                      <span className="text-[12px] font-normal text-[#1a1a1a]">jane.doe@greenwood.edu</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-gray-50/80 px-4 py-3 rounded-2xl border border-gray-100">
                    <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-[#555555] shadow-sm">
                      <Phone size={18} strokeWidth={2.5} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-normal text-[#555555] opacity-50 uppercase tracking-tighter">Contact</span>
                      <span className="text-[13px] font-normal text-[#1a1a1a]">+1 (555) 123-4567</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-50/80 px-3.5 py-2.5 rounded-xl border border-gray-100">
                    <div className="w-9 h-9 rounded-lg bg-white border border-gray-100 flex items-center justify-center text-[#555555] shadow-sm">
                      <Briefcase size={16} strokeWidth={2.5} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] font-normal text-[#555555] opacity-50 uppercase tracking-tighter">Experience</span>
                      <span className="text-[12px] font-normal text-[#1a1a1a]">12 years</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Overall Ranking Card */}
            <div className="bg-[#fff9f0] border border-[#ffecce] rounded-2xl p-4 flex items-center gap-4 self-start md:mt-4">
              <div className="w-12 h-12 rounded-xl bg-[#ff9900] flex items-center justify-center text-white shadow-lg shadow-[#ff9900]/20">
                <Trophy size={24} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <div className="flex items-end gap-1.5">
                  <span className="text-3xl font-normal text-[#1a1a1a]">#3</span>
                </div>
                <span className="text-[12px] font-normal text-[#555555] opacity-60">of 50 mentors</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Personal and Professional Info Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 px-6">
        {/* Personal Information */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#eeeeee] space-y-6">
          <div className="flex items-center gap-3">
            <UserCircle size={20} className="text-[#555555]" />
            <h4 className="text-[15px] font-normal text-[#1a1a1a]">Personal Information</h4>
          </div>
          
          <div className="grid grid-cols-2 gap-y-6">
            <div>
              <p className="text-[11px] font-normal text-[#555555] opacity-40 uppercase tracking-wider mb-1.5">Full Name</p>
              <p className="text-[14px] font-normal text-[#1a1a1a]">Jane Doe</p>
            </div>
            <div>
              <p className="text-[11px] font-normal text-[#555555] opacity-40 uppercase tracking-wider mb-1.5">Gender</p>
              <p className="text-[14px] font-normal text-[#1a1a1a]">Female</p>
            </div>
            <div>
              <p className="text-[11px] font-normal text-[#555555] opacity-40 uppercase tracking-wider mb-1.5">Date of Birth</p>
              <p className="text-[14px] font-normal text-[#1a1a1a]">6/15/1985 (40 years)</p>
            </div>
            <div>
              <p className="text-[11px] font-normal text-[#555555] opacity-40 uppercase tracking-wider mb-1.5">Employee ID</p>
              <p className="text-[14px] font-normal text-[#1a1a1a]">YV-TM-2024-0847</p>
            </div>
            <div className="col-span-2">
              <p className="text-[11px] font-normal text-[#555555] opacity-40 uppercase tracking-wider mb-3">Languages Known</p>
              <div className="flex flex-wrap gap-2">
                {['English', 'Spanish', 'French'].map(lang => (
                  <span key={lang} className="bg-gray-50 border border-gray-100 text-[#555555] text-[12px] font-normal px-4 py-2 rounded-xl flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#A82228]" />
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Professional Information */}
        <div className="bg-white rounded-[32px] p-8 shadow-sm border border-[#eeeeee] space-y-8">
          <div className="flex items-center gap-3">
            <Briefcase size={22} className="text-[#555555]" />
            <h4 className="text-[16px] font-normal text-[#1a1a1a]">Professional Information</h4>
          </div>
          
          <div className="space-y-8">
            <div>
              <p className="text-[11px] font-normal text-[#555555] opacity-40 uppercase tracking-wider mb-1.5">School Name</p>
              <p className="text-[14px] font-normal text-[#1a1a1a]">Greenwood High School</p>
            </div>
            <div className="grid grid-cols-2 gap-y-8">
              <div>
                <p className="text-[11px] font-normal text-[#555555] opacity-40 uppercase tracking-wider mb-1.5">Branch / Location</p>
                <div className="flex items-center gap-1.5 text-[14px] font-normal text-[#1a1a1a]">
                  <MapPin size={14} className="text-[#555555] opacity-40" />
                  North Valley Campus
                </div>
              </div>
              <div>
                <p className="text-[11px] font-normal text-[#555555] opacity-40 uppercase tracking-wider mb-1.5">Department / Subject</p>
                <p className="text-[14px] font-normal text-[#1a1a1a]">English Department</p>
              </div>
              <div>
                <p className="text-[11px] font-normal text-[#555555] opacity-40 uppercase tracking-wider mb-1.5">Designation / Role</p>
                <p className="text-[14px] font-normal text-[#1a1a1a]">Senior Teacher Mentor</p>
              </div>
              <div>
                <p className="text-[11px] font-normal text-[#555555] opacity-40 uppercase tracking-wider mb-1.5">Years of Experience</p>
                <p className="text-[14px] font-normal text-[#1a1a1a]">12 years</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wings Supervised Section */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#eeeeee] mx-6 space-y-6">
        <div className="flex items-center gap-3">
          <Award size={20} className="text-[#555555]" />
          <h4 className="text-[15px] font-normal text-[#1a1a1a]">Wings Supervised</h4>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#f0f7ff] border border-[#d9e9ff] rounded-2xl p-5 flex items-center gap-5 group hover:scale-[1.02] transition-transform duration-500">
            <div className="w-12 h-12 rounded-2xl bg-brand-gradient flex items-center justify-center text-white text-[20px] font-normal shadow-lg shadow-[#A82228]/20">1</div>
            <p className="text-[14px] font-normal text-[#1a1a1a] leading-snug">Academic and Career<br />Guidance Wing</p>
          </div>
          <div className="bg-[#f0fff4] border border-[#d3f9e1] rounded-[24px] p-6 flex items-center gap-6 group hover:scale-[1.02] transition-transform duration-500">
            <div className="w-12 h-12 rounded-2xl bg-brand-gradient flex items-center justify-center text-white text-[20px] font-normal shadow-lg shadow-[#A82228]/20">2</div>
            <p className="text-[14px] font-normal text-[#1a1a1a] leading-snug">Student Wellbeing<br />Wing</p>
          </div>
        </div>
      </div>

      {/* Certificates & Recognition */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#eeeeee] mx-6 space-y-6">
        <div className="flex items-center gap-3">
          <Award size={20} className="text-[#555555]" />
          <h4 className="text-[15px] font-normal text-[#1a1a1a]">Certificates & Recognition</h4>
        </div>
        
        <div className="space-y-4">
          {[
            { title: 'YoungVox Mentor Orientation', date: '1/15/2024' },
            { title: 'Child Protection Training', date: '2/10/2024' },
            { title: 'Advanced Leadership Workshop', date: '8/22/2024' },
          ].map((cert, idx) => (
            <div key={idx} className="bg-gray-50/80 border border-gray-100 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 hover:bg-white hover:shadow-xl hover:shadow-dark/5 transition-all duration-500">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-[#1caf5f]/10 flex items-center justify-center text-[#1caf5f]">
                  <CheckCircle2 size={24} strokeWidth={2.5} />
                </div>
                <div className="flex flex-col">
                  <p className="text-[15px] font-normal text-[#1a1a1a] mb-1">{cert.title}</p>
                  <p className="text-[12px] font-normal text-[#555555] opacity-50 uppercase tracking-wider flex items-center gap-2">
                    <Calendar size={12} />
                    Completed on {cert.date}
                  </p>
                </div>
              </div>
              <span className="bg-[#1caf5f] text-white text-[10px] font-normal px-4 py-2 rounded-full uppercase tracking-widest">Completed</span>
            </div>
          ))}
        </div>
      </div>

      {/* Mentor Ranking Section */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#eeeeee] mx-6 space-y-6 mb-6">
        <div className="flex items-center gap-3">
          <TrendingUp size={20} className="text-[#555555]" />
          <h4 className="text-[15px] font-normal text-[#1a1a1a]">Mentor Ranking (System-Generated)</h4>
        </div>

        <div className="bg-[#fff9f0] border border-[#ffecce] rounded-[32px] p-8 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="flex flex-col md:flex-row items-center gap-12 flex-1">
            {/* Circle Progress Concept */}
            <div className="relative w-32 h-32">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="64" cy="64" r="56" stroke="#ffecce" strokeWidth="10" fill="transparent" />
                <circle cx="64" cy="64" r="56" stroke="#ff9900" strokeWidth="10" fill="transparent" strokeDasharray="352" strokeDashoffset="35" strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center text-[#ff9900]">
                  <Trophy size={32} strokeWidth={2.5} />
                </div>
              </div>
            </div>

            <div className="flex flex-col text-center md:text-left">
              <span className="text-[13px] font-normal text-[#555555] opacity-60 uppercase tracking-widest mb-1.5">Current Ranking</span>
              <div className="flex items-end justify-center md:justify-start gap-4 mb-3">
                <h3 className="text-6xl font-normal text-[#1a1a1a] tracking-tighter">#3</h3>
                <div className="flex flex-col mb-1.5">
                  <div className="flex items-center gap-1.5 text-[#1caf5f] text-[14px] font-normal">
                    <TrendingUp size={16} />
                    Up from #5
                  </div>
                  <span className="bg-[#1caf5f] text-white text-[10px] font-normal px-2 py-0.5 rounded-md uppercase tracking-widest text-center mt-1">Top 6%</span>
                </div>
              </div>
              <span className="text-[14px] font-normal text-[#555555] opacity-50">out of 50 mentors</span>
              
              <div className="mt-8 pt-8 border-t border-orange-200/50 flex flex-wrap gap-8 justify-center md:justify-start">
                <div className="space-y-3">
                    <span className="text-[11px] font-normal text-[#555555] opacity-40 uppercase tracking-wider block">Ranking based on:</span>
                    <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
                        <li className="flex items-center gap-2 text-[13px] font-normal text-[#1a1a1a]">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#A82228]" />
                            Timely reviews & feedback
                        </li>
                        <li className="flex items-center gap-2 text-[13px] font-normal text-[#1a1a1a]">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#A82228]" />
                            Chapter success
                        </li>
                        <li className="flex items-center gap-2 text-[13px] font-normal text-[#1a1a1a]">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#A82228]" />
                            Collaboration & Communication
                        </li>
                    </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-2xl shadow-[#ff9900]/10 flex flex-col items-center text-center gap-5 min-w-[260px]">
            <p className="text-[14px] font-normal text-[#1a1a1a] leading-tight">Certificates & Recognition<br />Mentor-specific</p>
            <button className="w-full border border-[#eeeeee] text-[12px] font-normal py-3 px-6 rounded-xl hover:bg-gray-50 transition-colors">
              Recognition Badges
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper components for Icons used in the list
const Calendar = ({ size = 16, className = "" }) => (
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
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

export default Profile;
