import React from 'react';
import { Mail, Phone, School, MapPin, UserCircle, Award, Trophy, TrendingUp, CheckCircle2, Calendar, BookOpen, GraduationCap } from 'lucide-react';

const ChapterChiefProfile = () => {
  return (
    <div className="p-4 max-w-7xl mx-auto space-y-4 animate-in fade-in duration-700">
      {/* Profile Overview Header */}
      <div className="flex flex-col gap-1">
        <h2 className="text-[24px] font-black text-[#1a1a1a] tracking-tight">Profile Overview</h2>
        <p className="text-[14px] font-bold text-[#555555] opacity-50">Your complete profile and credentials</p>
      </div>

      {/* Hero Banner Section */}
      <div className="relative">
        {/* Banner with Chapter Chief related background */}
        <div className="h-32 md:h-40 bg-brand-gradient rounded-3xl w-full overflow-hidden relative">
          <img 
            src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2400&auto=format&fit=crop" 
            alt="Students" 
            className="w-full h-full object-cover opacity-20 invert"
          />
        </div>
        <div className="px-3 md:px-8 -mt-16 pb-1">
          <div className="bg-white rounded-[32px] shadow-[0_32px_64px_rgba(0,0,0,0.06)] p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start justify-between gap-6 border border-white">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
              {/* Avatar */}
              <div className="w-24 h-24 rounded-full bg-[#f2f4f6] flex items-center justify-center text-white text-3xl font-normal shadow-xl border-[6px] border-white shrink-0 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" 
                  alt="Sarah Chen" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col text-center md:text-left pt-2 md:pt-4">
                <div className="flex flex-col md:flex-row items-center gap-4 mb-2">
                  <h3 className="text-2xl md:text-3xl font-black text-[#1a1a1a] tracking-tight">Sarah Chen</h3>
                  <div className="flex items-center gap-2">
                    <span className="bg-[#e7f6ed] text-[#1caf5f] text-[10px] font-black px-3.5 py-1.5 rounded-full uppercase tracking-widest">Active</span>
                    <span className="bg-gray-50 text-[#555555] text-[10px] font-black px-3.5 py-1.5 rounded-full uppercase tracking-widest border border-gray-100">YV-TM-2024-0547</span>
                  </div>
                </div>
                <p className="text-[14px] md:text-[15px] font-black text-[#555555] opacity-50 mb-6 uppercase tracking-widest">Chapter Chief</p>
                
                {/* Contact Quick Info */}
                <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6">
                  <div className="flex items-center gap-4 bg-[#f8f9fa] px-5 py-3 rounded-2xl border border-gray-100/50">
                    <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-[#c72030] shadow-sm">
                      <Mail size={16} strokeWidth={3} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] font-black text-[#555555] opacity-40 uppercase tracking-widest">Email</span>
                      <span className="text-[12px] font-black text-[#1a1a1a]">sarah.chen@greenwood.edu</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-[#f8f9fa] px-5 py-3 rounded-2xl border border-gray-100/50">
                    <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-[#c72030] shadow-sm">
                      <Phone size={16} strokeWidth={3} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] font-black text-[#555555] opacity-40 uppercase tracking-widest">Contact</span>
                      <span className="text-[12px] font-black text-[#1a1a1a]">+1 (555) 123-4567</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Overall Ranking Card */}
            <div className="bg-[#fff9f0] border border-[#ffecce] rounded-[24px] p-5 flex items-center gap-5 self-center md:self-start md:mt-2 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#ff9900] flex items-center justify-center text-white shadow-lg shadow-[#ff9900]/20">
                <Trophy size={24} strokeWidth={3} />
              </div>
              <div className="flex flex-col">
                <div className="flex items-end gap-1.5 leading-none mb-1">
                  <span className="text-3xl font-black text-[#1a1a1a]">#3</span>
                </div>
                <span className="text-[11px] font-black text-[#555555] opacity-40 uppercase tracking-widest">of 30 chieves</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-3 md:px-8">
        {/* Personal Information */}
        <div className="bg-white rounded-[32px] p-8 shadow-sm border border-[#eeeeee] space-y-8">
          <div className="flex items-center gap-4">
            <div className="p-2.5 rounded-xl bg-[#c72030]/5 text-[#c72030]">
              <UserCircle size={22} strokeWidth={3} />
            </div>
            <h4 className="text-[17px] font-black text-[#1a1a1a] tracking-tight">Personal Information</h4>
          </div>
          
          <div className="grid grid-cols-2 gap-y-8">
            <div>
              <p className="text-[11px] font-black text-[#555555] opacity-40 uppercase tracking-widest mb-2">Full Name</p>
              <p className="text-[15px] font-black text-[#1a1a1a]">Sarah Chen</p>
            </div>
            <div>
              <p className="text-[11px] font-black text-[#555555] opacity-40 uppercase tracking-widest mb-2">Gender</p>
              <p className="text-[15px] font-black text-[#1a1a1a]">Female</p>
            </div>
            <div>
              <p className="text-[11px] font-black text-[#555555] opacity-40 uppercase tracking-widest mb-2">Date of Birth</p>
              <p className="text-[15px] font-black text-[#1a1a1a]">6/15/1985 (40 years)</p>
            </div>
            <div>
              <p className="text-[11px] font-black text-[#555555] opacity-40 uppercase tracking-widest mb-2">Grade</p>
              <p className="text-[15px] font-black text-[#1a1a1a]">VI</p>
            </div>
            <div className="col-span-2">
              <p className="text-[11px] font-black text-[#555555] opacity-40 uppercase tracking-widest mb-4">Languages Known</p>
              <div className="flex flex-wrap gap-3">
                {['English', 'Spanish', 'French'].map(lang => (
                  <span key={lang} className="bg-[#f8f9fa] border border-gray-100 text-[#1a1a1a] text-[13px] font-black px-5 py-2.5 rounded-2xl flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#c72030]" />
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Chapter Information */}
        <div className="bg-white rounded-[32px] p-8 shadow-sm border border-[#eeeeee] relative overflow-hidden flex flex-col">
          <div className="relative z-10 space-y-8">
            <div className="flex items-center gap-4">
              <div className="p-2.5 rounded-xl bg-[#c72030]/5 text-[#c72030]">
                <School size={22} strokeWidth={3} />
              </div>
              <h4 className="text-[17px] font-black text-[#1a1a1a] tracking-tight">Chapter Information</h4>
            </div>
            
            <div className="space-y-8 max-w-[60%]">
              <div>
                <p className="text-[11px] font-black text-[#555555] opacity-40 uppercase tracking-widest mb-2">School Name</p>
                <p className="text-[15px] font-black text-[#1a1a1a]">Greenwood High School</p>
              </div>
              <div>
                <p className="text-[11px] font-black text-[#555555] opacity-40 uppercase tracking-widest mb-2">Branch / Location</p>
                <div className="flex items-center gap-2 text-[15px] font-black text-[#1a1a1a]">
                  <MapPin size={16} className="text-[#c72030]" strokeWidth={3} />
                  North Valley Campus
                </div>
              </div>
              <div>
                <p className="text-[11px] font-black text-[#555555] opacity-40 uppercase tracking-widest mb-2">Chapter established on</p>
                <p className="text-[15px] font-black text-[#1a1a1a]">2022</p>
              </div>
              <div>
                <p className="text-[11px] font-black text-[#555555] opacity-40 uppercase tracking-widest mb-2">Current status</p>
                <p className="text-[15px] font-black text-[#1caf5f]">Active</p>
              </div>
            </div>
          </div>
          
          {/* Decorative Illustration Surrogate */}
          <div className="absolute right-[-20px] bottom-[-20px] w-[260px] h-[320px] opacity-10 md:opacity-100 pointer-events-none">
             <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=400&auto=format&fit=crop" 
                alt="Student" 
                className="w-full h-full object-cover rounded-tl-[64px]"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
             <div className="absolute inset-0 bg-gradient-to-l from-white via-transparent to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Certificates & Recognition */}
      <div className="bg-white rounded-[32px] p-8 shadow-sm border border-[#eeeeee] mx-3 md:px-8 space-y-8">
        <div className="flex items-center gap-4">
          <div className="p-2.5 rounded-xl bg-[#c72030]/5 text-[#c72030]">
            <Award size={22} strokeWidth={3} />
          </div>
          <h4 className="text-[17px] font-black text-[#1a1a1a] tracking-tight">Certificates & Recognition</h4>
        </div>
        
        <div className="space-y-4">
          {[
            { title: 'YoungVox Mentor Orientation', date: '1/15/2024' },
            { title: 'Child Protection Training', date: '2/10/2024' },
            { title: 'Advanced Leadership Workshop', date: '8/22/2024' },
          ].map((cert, idx) => (
            <div key={idx} className="bg-[#f8f9fa] border border-gray-100 rounded-[24px] p-6 flex flex-col md:flex-row items-center justify-between gap-6 hover:bg-white hover:shadow-2xl hover:shadow-dark/5 transition-all duration-500 group">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-[#1caf5f]/10 flex items-center justify-center text-[#1caf5f] group-hover:scale-110 transition-transform duration-500">
                  <CheckCircle2 size={28} strokeWidth={3} />
                </div>
                <div className="flex flex-col">
                  <p className="text-[16px] font-black text-[#1a1a1a] mb-1">{cert.title}</p>
                  <p className="text-[12px] font-bold text-[#555555] opacity-40 uppercase tracking-widest flex items-center gap-2">
                    <Calendar size={14} strokeWidth={3} />
                    Completed on {cert.date}
                  </p>
                </div>
              </div>
              <span className="bg-[#1caf5f] text-white text-[11px] font-black px-6 py-2.5 rounded-full uppercase tracking-widest shadow-lg shadow-[#1caf5f]/20">Completed</span>
            </div>
          ))}
        </div>
      </div>

      {/* Chapter chief ranking Section */}
      <div className="bg-white rounded-[32px] p-8 shadow-sm border border-[#eeeeee] mx-3 md:px-8 space-y-8 mb-8">
        <div className="flex items-center gap-4">
          <div className="p-2.5 rounded-xl bg-[#c72030]/5 text-[#c72030]">
            <Trophy size={22} strokeWidth={3} />
          </div>
          <h4 className="text-[17px] font-black text-[#1a1a1a] tracking-tight">Chapter chief ranking</h4>
        </div>

        <div className="bg-[#fff9f0] border border-[#ffecce] rounded-[40px] p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden group">
          <div className="flex flex-col md:flex-row items-center gap-12 flex-1 relative z-10">
            {/* Trophy Icon Progress */}
            <div className="relative w-40 h-40 group-hover:scale-105 transition-transform duration-700">
              <div className="absolute inset-0 bg-[#ff9900]/10 rounded-full animate-pulse"></div>
              <div className="w-full h-full rounded-full border-[10px] border-white shadow-2xl flex items-center justify-center bg-[#ff9900] text-white overflow-hidden relative">
                <Trophy size={64} strokeWidth={2.5} className="relative z-10 drop-shadow-2xl" />
                <div className="absolute top-[-20%] right-[-20%] w-full h-full bg-white/10 rounded-full blur-2xl"></div>
              </div>
            </div>

            <div className="flex flex-col text-center md:text-left">
              <span className="text-[13px] font-black text-[#555555] opacity-40 uppercase tracking-widest mb-2">Current Ranking</span>
              <div className="flex items-end justify-center md:justify-start gap-4 mb-4">
                <h3 className="text-7xl font-black text-[#1a1a1a] tracking-tighter">#3</h3>
                <div className="flex flex-col mb-2">
                  <div className="flex items-center gap-2 text-[#1caf5f] text-[16px] font-black tracking-tight">
                    <TrendingUp size={20} strokeWidth={3} />
                    Up from #5
                  </div>
                  <span className="bg-[#1caf5f] text-white text-[10px] font-black px-3 py-1 rounded-md uppercase tracking-widest text-center mt-2 shadow-sm">Top 8%</span>
                </div>
              </div>
              <span className="text-[14px] font-bold text-[#555555] opacity-50">out of 50 mentors</span>
              
              <div className="mt-10 pt-10 border-t border-orange-200/50 flex flex-col gap-6">
                <p className="text-[12px] font-black text-[#555555] opacity-40 uppercase tracking-widest">Ranking based on:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#c72030]" />
                        <span className="text-[14px] font-black text-[#1a1a1a] tracking-tight">Timely submission</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#c72030]" />
                        <span className="text-[14px] font-black text-[#1a1a1a] tracking-tight">Chapter success</span>
                    </div>
                    <div className="flex items-center gap-3 md:col-span-2">
                        <div className="w-2 h-2 rounded-full bg-[#c72030]" />
                        <span className="text-[14px] font-black text-[#1a1a1a] tracking-tight">Collaboration & Communication</span>
                    </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[28px] p-8 shadow-2xl shadow-[#ff9900]/10 flex flex-col items-center text-center gap-6 min-w-[300px] relative z-10 border border-[#ffecce]/30">
            <div className="space-y-2">
              <p className="text-[16px] font-black text-[#1a1a1a] leading-tight">Certificates & Recognition</p>
              <p className="text-[12px] font-bold text-[#555555] opacity-40 uppercase tracking-widest">Mentor-specific</p>
            </div>
            <button className="w-full border border-[#eeeeee] text-[13px] font-black py-4 px-8 rounded-2xl hover:bg-[#c72030] hover:text-white hover:border-transparent transition-all duration-300 shadow-sm active:scale-95 group">
              Recognition Badges
              <Award size={16} className="inline ml-2 group-hover:animate-bounce" strokeWidth={3} />
            </button>
          </div>
          
          {/* Background Decorative Blobs */}
          <div className="absolute top-[-50px] left-[-50px] w-64 h-64 bg-[#ff9900]/5 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[-50px] right-[-50px] w-80 h-80 bg-[#c72030]/5 rounded-full blur-[100px]"></div>
        </div>
      </div>
    </div>
  );
};

export default ChapterChiefProfile;
