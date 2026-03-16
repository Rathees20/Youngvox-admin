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
      <div className="px-6">
        <div className="bg-[#A82228] h-[140px] rounded-t-[24px] w-full"></div>
        <div className="bg-white rounded-b-[24px] shadow-sm border border-[#eeeeee] border-t-0 p-6 pt-10 relative">
          {/* Overlapping Avatar */}
          <div className="absolute -top-16 left-10">
            <div className="w-32 h-32 rounded-full bg-[#A82228] border-[6px] border-white shadow-xl flex items-center justify-center text-white text-[32px] font-bold">
              JD
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mt-4">
            <div className="flex flex-col gap-1 ml-0 lg:ml-36">
              <div className="flex flex-col md:flex-row items-center lg:items-end gap-3">
                <h3 className="text-[24px] font-bold text-[#1a1a1a]">Jane Doe</h3>
              </div>
              <p className="text-[15px] font-normal text-[#555555] opacity-70">Senior Teacher Mentor</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="bg-[#e7f6ed] text-[#1caf5f] text-[10px] font-bold px-3 py-1 rounded-md uppercase tracking-wider">Active</span>
                <span className="bg-gray-50 text-[#555555] text-[10px] font-medium px-3 py-1 rounded-md border border-gray-100 uppercase">YV-TM-2024-0847</span>
              </div>
            </div>

            {/* Rank Badge */}
            <div className="bg-[#fff9f0] border border-[#ffecce] rounded-xl p-4 flex items-center gap-4 min-w-[180px]">
              <div className="text-[#ff9900]">
                <Trophy size={24} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="text-[20px] font-bold text-[#1a1a1a]">#3</span>
                </div>
                <span className="text-[12px] font-normal text-[#555555] opacity-60">of 30 mentors</span>
              </div>
            </div>
          </div>

          {/* Quick Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-8">
            <div className="flex items-center gap-4 bg-[#fafafe] px-4 py-3.5 rounded-2xl border border-[#eeeeee]">
              <div className="text-[#555555]/40">
                <Mail size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-medium text-[#555555] opacity-50 uppercase tracking-wider">Email</span>
                <span className="text-[14px] font-medium text-[#1a1a1a]">jane.doe@greenwood.edu</span>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-[#fafafe] px-5 py-4 rounded-2xl border border-[#eeeeee]">
              <div className="text-[#555555]/40">
                <Phone size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-medium text-[#555555] opacity-50 uppercase tracking-wider">Contact</span>
                <span className="text-[14px] font-medium text-[#1a1a1a]">+1 (555) 123-4567</span>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-[#fafafe] px-5 py-4 rounded-2xl border border-[#eeeeee]">
              <div className="text-[#555555]/40">
                <Briefcase size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-medium text-[#555555] opacity-50 uppercase tracking-wider">Experience</span>
                <span className="text-[14px] font-medium text-[#1a1a1a]">12 years</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Personal and Professional Info Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 px-6">
        {/* Personal Information */}
        <div className="bg-white rounded-[24px] p-6 shadow-sm border border-[#eeeeee] space-y-5">
          <div className="flex items-center gap-3">
            <UserCircle size={18} className="text-[#555555]" />
            <h4 className="text-[15px] font-bold text-[#1a1a1a]">Personal Information</h4>
          </div>

          <div className="grid grid-cols-2 gap-y-6">
            <div>
              <p className="text-[11px] font-medium text-[#555555] opacity-40 uppercase tracking-wider mb-1.5">Full Name</p>
              <p className="text-[14px] font-medium text-[#1a1a1a]">Jane Doe</p>
            </div>
            <div>
              <p className="text-[11px] font-medium text-[#555555] opacity-40 uppercase tracking-wider mb-1.5">Gender</p>
              <p className="text-[14px] font-medium text-[#1a1a1a]">Female</p>
            </div>
            <div>
              <p className="text-[11px] font-medium text-[#555555] opacity-40 uppercase tracking-wider mb-1.5">Date of Birth</p>
              <p className="text-[14px] font-medium text-[#1a1a1a]">6/15/1985 (40 years)</p>
            </div>
            <div>
              <p className="text-[11px] font-medium text-[#555555] opacity-40 uppercase tracking-wider mb-1.5">Employee ID</p>
              <p className="text-[14px] font-medium text-[#1a1a1a]">YV-TM-2024-0847</p>
            </div>
            <div className="col-span-2 pt-1">
              <p className="text-[11px] font-medium text-[#555555] opacity-40 uppercase tracking-wider mb-3 border-t border-[#f0f0f0] pt-5">Languages Known</p>
              <div className="flex flex-wrap gap-2">
                {['English', 'Spanish', 'French'].map(lang => (
                  <span key={lang} className="bg-white border border-[#eeeeee] text-[#1a1a1a] text-[13px] font-medium px-4 py-2 rounded-xl flex items-center gap-2 shadow-sm">
                    <img src="/icon/Known.png" alt="Language" className="w-[14px] h-[14px] opacity-60" />
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Professional Information */}
        <div className="bg-white rounded-[24px] p-6 shadow-sm border border-[#eeeeee] space-y-5">
          <div className="flex items-center gap-3">
            <Briefcase size={18} className="text-[#555555]" />
            <h4 className="text-[15px] font-bold text-[#1a1a1a]">Professional Information</h4>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-[11px] font-medium text-[#555555] opacity-40 uppercase tracking-wider mb-1.5">School Name</p>
              <p className="text-[14px] font-medium text-[#1a1a1a]">Greenwood High School</p>
            </div>
            <div className="grid grid-cols-2 gap-y-6">
              <div>
                <p className="text-[11px] font-medium text-[#555555] opacity-40 uppercase tracking-wider mb-1.5">Branch / Location</p>
                <div className="flex items-center gap-2 text-[14px] font-medium text-[#1a1a1a]">
                  <MapPin size={15} className="text-[#555555] opacity-40" />
                  North Valley Campus
                </div>
              </div>
              <div>
                <p className="text-[11px] font-medium text-[#555555] opacity-40 uppercase tracking-wider mb-1.5">Department / Subject</p>
                <p className="text-[14px] font-medium text-[#1a1a1a]">English Department</p>
              </div>
              <div>
                <p className="text-[11px] font-medium text-[#555555] opacity-40 uppercase tracking-wider mb-1.5">Designation / Role</p>
                <p className="text-[14px] font-medium text-[#1a1a1a]">Senior Teacher Mentor</p>
              </div>
              <div>
                <p className="text-[11px] font-medium text-[#555555] opacity-40 uppercase tracking-wider mb-1.5">Years of Experience</p>
                <p className="text-[14px] font-medium text-[#1a1a1a]">12 years</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wings Supervised Section */}
      <div className="bg-white rounded-[24px] p-6 shadow-sm border border-[#eeeeee] mx-6 space-y-6">
        <div className="flex items-center gap-3">
          <Award size={18} className="text-[#555555]" />
          <h4 className="text-[15px] font-bold text-[#1a1a1a]">Wings Supervised</h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-[#f7fafc] border border-[#edf2f7] rounded-xl p-5 flex items-center gap-5 group hover:shadow-md transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-[#A82228] flex items-center justify-center text-white text-[18px] font-bold shadow-lg shadow-[#A82228]/20">1</div>
            <p className="text-[14px] font-bold text-[#1a1a1a] leading-tight">Academic and Career<br />Guidance Wing</p>
          </div>
          <div className="bg-[#f0fff4] border border-[#d3f9e1] rounded-xl p-5 flex items-center gap-5 group hover:shadow-md transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-[#A82228] flex items-center justify-center text-white text-[18px] font-bold shadow-lg shadow-[#A82228]/20">2</div>
            <p className="text-[14px] font-bold text-[#1a1a1a] leading-tight">Student Wellbeing<br />Wing</p>
          </div>
        </div>
      </div>

      {/* Certificates & Recognition */}
      <div className="bg-white rounded-[24px] p-6 shadow-sm border border-[#eeeeee] mx-6 space-y-5">
        <div className="flex items-center gap-3">
          <Award size={18} className="text-[#555555]" />
          <h4 className="text-[15px] font-bold text-[#1a1a1a]">Certificates & Recognition</h4>
        </div>

        <div className="space-y-3">
          {[
            { title: 'YoungVox Mentor Orientation', date: '1/15/2024' },
            { title: 'Child Protection Training', date: '2/10/2024' },
            { title: 'Advanced Leadership Workshop', date: '8/22/2024' },
          ].map((cert, idx) => (
            <div key={idx} className="bg-[#fafafe] border border-[#f0f0f0] rounded-2xl p-6 flex items-center justify-between group hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-6">
                <div className="w-10 h-10 flex flex-shrink-0 items-center justify-center">
                  <img src="/icon/tick.png" alt="Completed" className="w-8 h-8" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[16px] font-bold text-[#1a1a1a]">{cert.title}</p>
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-[#555555] opacity-40" />
                    <p className="text-[13px] font-medium text-[#555555] opacity-60">
                      Completed on {cert.date}
                    </p>
                  </div>
                </div>
              </div>
              <span className="bg-[#1caf5f] text-white text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                Completed
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Mentor Ranking Section */}
      <div className="bg-white rounded-[24px] p-6 shadow-sm border border-[#eeeeee] mx-6 space-y-5 mb-6">
        <div className="flex items-center gap-3">
          <Trophy size={18} className="text-[#555555]" />
          <h4 className="text-[15px] font-bold text-[#1a1a1a]">Mentor Ranking (System-Generated)</h4>
        </div>

        <div className="bg-[#fff9f0] border border-[#ffecce] rounded-[32px] p-6 flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center gap-12 flex-1">
            {/* Circle Progress Concept */}
            <div className="relative w-32 h-32 flex-shrink-0">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="64" cy="64" r="56" stroke="#ffecce" strokeWidth="10" fill="transparent" />
                <circle cx="64" cy="64" r="56" stroke="#ff9900" strokeWidth="10" fill="transparent" strokeDasharray="352" strokeDashoffset="35" strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-[#ff9900] flex items-center justify-center text-white shadow-2xl shadow-[#ff9900]/40">
                  <Trophy size={32} strokeWidth={2.5} />
                </div>
              </div>
            </div>

            <div className="flex flex-col text-center lg:text-left">
              <span className="text-[12px] font-bold text-[#555555] opacity-60 uppercase tracking-widest mb-1.5">Current Ranking</span>
              <div className="flex items-end justify-center lg:justify-start gap-4 mb-2">
                <h3 className="text-[54px] font-bold text-[#1a1a1a] tracking-tighter leading-none">#3</h3>
                <div className="flex flex-col mb-1.5">
                  <div className="flex items-center gap-1.5 text-[#1caf5f] text-[13px] font-bold">
                    <TrendingUp size={16} />
                    Up from #5
                  </div>
                  <span className="bg-[#e7f6ed] text-[#1caf5f] text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider text-center mt-1.5 border border-[#d3f9e1]">Top 6%</span>
                </div>
              </div>
              <span className="text-[13px] font-medium text-[#555555] opacity-50">out of 50 mentors</span>

              <div className="mt-6 pt-6 border-t border-[#ffecce] flex flex-col gap-3">
                <span className="text-[11px] font-bold text-[#555555] opacity-40 uppercase tracking-wider block">Ranking based on:</span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2.5">
                  <div className="flex items-center gap-3 text-[13px] font-bold text-[#1a1a1a]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#A82228]" />
                    Timely reviews & feedback
                  </div>
                  <div className="flex items-center gap-3 text-[13px] font-bold text-[#1a1a1a]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#A82228]" />
                    Chapter success
                  </div>
                  <div className="flex items-center gap-3 text-[13px] font-bold text-[#1a1a1a]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#A82228]" />
                    Collaboration & Communication
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[24px] p-6 shadow-xl shadow-[#ff9900]/5 flex flex-col items-center text-center gap-5 min-w-[240px] border border-[#ffecce]/40">
             <div className="space-y-1">
                <p className="text-[14px] font-bold text-[#1a1a1a]">Certificates & Recognition</p>
                <p className="text-[12px] font-medium text-[#555555] opacity-60">Mentor-specific</p>
             </div>
            <button className="w-full border border-[#A82228] text-[#A82228] text-[12px] font-bold py-3 px-6 rounded-xl hover:bg-[#A82228] hover:text-white transition-all duration-300">
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
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

export default Profile;
