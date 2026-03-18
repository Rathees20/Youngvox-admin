import React from 'react';
import { 
  Mail, Phone, School, MapPin, UserCircle, Award, Trophy, 
  TrendingUp, CheckCircle2, Calendar 
} from 'lucide-react';
import { cn } from '../utils/cn';

const AcademicWingProfile = () => {
  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-700 pb-24">
      {/* Profile Overview Header */}
      <div className="flex flex-col gap-2">
        <h2 className="text-[28px] font-black text-[#1a1a1a] tracking-tight">Profile Overview</h2>
        <p className="text-[15px] font-bold text-[#555555] opacity-50">Your complete profile and credentials</p>
      </div>

      {/* Profile Hero Card */}
      <div className="relative">
        <div className="bg-white rounded-[40px] shadow-[0_32px_80px_rgba(0,0,0,0.06)] border border-[#eeeeee] overflow-hidden">
          {/* Banner */}
          <div className="h-40 md:h-56 relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1523050853063-880c69343c5b?q=80&w=2000&auto=format&fit=crop" 
              alt="School Students" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          <div className="p-8 md:p-10 -mt-20 md:-mt-24 relative z-10">
            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-10 text-center lg:text-left">
                {/* Avatar */}
                <div className="w-40 h-40 rounded-full border-[10px] border-white shadow-2xl bg-[#fff2f3] flex items-center justify-center p-2">
                  <div className="w-full h-full rounded-full bg-brand-gradient flex items-center justify-center text-white text-4xl font-black shadow-inner overflow-hidden">
                    <img 
                       src="/images/chief01.png" 
                       alt="Jane Doe" 
                       className="w-full h-full object-cover object-top scale-125"
                    />
                  </div>
                </div>

                <div className="flex flex-col pt-4 lg:pt-8 min-w-0">
                  <div className="flex flex-col md:flex-row items-center gap-4 mb-3 justify-center lg:justify-start">
                    <h3 className="text-3xl font-black text-[#1a1a1a] tracking-tight">Jane Doe</h3>
                    <div className="flex items-center gap-2">
                      <span className="bg-[#e7f6ed] text-[#1caf5f] text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest border border-[#d3f9e1]">Active</span>
                    </div>
                  </div>
                  <p className="text-[17px] font-bold text-[#555555] opacity-60 mb-3">Academic & Career Guidance WingLeader</p>
                  <span className="bg-gray-50 text-[#555555] text-[11px] font-black px-4 py-2 rounded-xl uppercase tracking-widest border border-gray-100/50 w-fit mx-auto lg:mx-0">
                    YV-TM-2024-0847
                  </span>
                  
                  {/* Quick Contact Info */}
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 mt-10">
                    <div className="flex items-center gap-4 bg-[#f8f9fa] px-6 py-4 rounded-3xl border border-gray-100/50 group hover:bg-white hover:shadow-xl hover:shadow-dark/5 transition-all duration-500">
                      <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#c72030] shadow-sm group-hover:scale-110 transition-transform duration-500">
                        <Mail size={20} strokeWidth={3} />
                      </div>
                      <div className="flex flex-col items-start">
                        <span className="text-[10px] font-black text-[#555555] opacity-40 uppercase tracking-widest">Email</span>
                        <span className="text-[14px] font-black text-[#1a1a1a]">jane.doe@greenwood.edu</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 bg-[#f8f9fa] px-6 py-4 rounded-3xl border border-gray-100/50 group hover:bg-white hover:shadow-xl hover:shadow-dark/5 transition-all duration-500">
                      <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#c72030] shadow-sm group-hover:scale-110 transition-transform duration-500">
                        <Phone size={20} strokeWidth={3} />
                      </div>
                      <div className="flex flex-col items-start">
                        <span className="text-[10px] font-black text-[#555555] opacity-40 uppercase tracking-widest">Contact</span>
                        <span className="text-[14px] font-black text-[#1a1a1a]">+1 (555) 123-4567</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ranking Badge */}
              <div className="bg-[#fff9f0] border-2 border-white shadow-2xl shadow-[#ff9900]/10 rounded-[32px] p-8 flex items-center gap-6 min-w-[220px] self-center lg:self-start mt-8 lg:mt-6 group hover:translate-y-[-4px] transition-all duration-500">
                <div className="w-16 h-16 rounded-[24px] bg-[#ff9900] flex items-center justify-center text-white shadow-xl shadow-[#ff9900]/20 group-hover:rotate-12 transition-transform duration-500">
                  <Trophy size={32} strokeWidth={3} />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-end gap-2 leading-none mb-1">
                    <span className="text-4xl font-black text-[#1a1a1a]">#3</span>
                  </div>
                  <span className="text-[12px] font-black text-[#555555] opacity-40 uppercase tracking-widest whitespace-nowrap">of 30 mentors</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Personal Information */}
        <div className="bg-white rounded-[40px] p-10 shadow-sm border border-[#eeeeee] space-y-10 group hover:shadow-2xl hover:shadow-dark/5 transition-all duration-500">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-[#c72030]/5 text-[#c72030]">
              <UserCircle size={24} strokeWidth={3} />
            </div>
            <h4 className="text-xl font-black text-[#1a1a1a] tracking-tight">Personal Information</h4>
          </div>
          
          <div className="grid grid-cols-2 gap-y-10">
            <div>
              <p className="text-[11px] font-black text-[#555555] opacity-40 uppercase tracking-widest mb-2">Full Name</p>
              <p className="text-[16px] font-black text-[#1a1a1a]">Jane Doe</p>
            </div>
            <div>
              <p className="text-[11px] font-black text-[#555555] opacity-40 uppercase tracking-widest mb-2">Gender</p>
              <p className="text-[16px] font-black text-[#1a1a1a]">Female</p>
            </div>
            <div>
              <p className="text-[11px] font-black text-[#555555] opacity-40 uppercase tracking-widest mb-2">Date of Birth</p>
              <p className="text-[16px] font-black text-[#1a1a1a]">6/15/1985 (40 years)</p>
            </div>
            <div>
              <p className="text-[11px] font-black text-[#555555] opacity-40 uppercase tracking-widest mb-2">Grade</p>
              <p className="text-[16px] font-black text-[#1a1a1a]">VI</p>
            </div>
            <div className="col-span-2 pt-6 border-t border-gray-50">
              <p className="text-[11px] font-black text-[#555555] opacity-40 uppercase tracking-widest mb-5">Languages Known</p>
              <div className="flex flex-wrap gap-4">
                {['English', 'Spanish', 'French'].map(lang => (
                  <span key={lang} className="bg-[#f8f9fa] border border-gray-100 text-[#1a1a1a] text-[14px] font-black px-6 py-3 rounded-2xl flex items-center gap-3 hover:bg-white hover:shadow-lg transition-all duration-300">
                    <div className="w-2 h-2 rounded-full bg-[#c72030]" />
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Chapter Information */}
        <div className="bg-white rounded-[40px] p-10 shadow-sm border border-[#eeeeee] relative overflow-hidden flex flex-col group hover:shadow-2xl hover:shadow-dark/5 transition-all duration-500">
          <div className="relative z-10 space-y-10">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-[#c72030]/5 text-[#c72030]">
                <School size={24} strokeWidth={3} />
              </div>
              <h4 className="text-xl font-black text-[#1a1a1a] tracking-tight">Chapter Information</h4>
            </div>
            
            <div className="space-y-10 max-w-[55%]">
              <div>
                <p className="text-[11px] font-black text-[#555555] opacity-40 uppercase tracking-widest mb-2">School Name</p>
                <p className="text-[16px] font-black text-[#1a1a1a]">Greenwood High School</p>
              </div>
              <div>
                <p className="text-[11px] font-black text-[#555555] opacity-40 uppercase tracking-widest mb-2">Branch / Location</p>
                <div className="flex items-center gap-3 text-[16px] font-black text-[#1a1a1a]">
                  <MapPin size={18} className="text-[#c72030]" strokeWidth={3} />
                  North Valley Campus
                </div>
              </div>
              <div>
                <p className="text-[11px] font-black text-[#555555] opacity-40 uppercase tracking-widest mb-2">Chapter established on</p>
                <p className="text-[16px] font-black text-[#1a1a1a]">2022</p>
              </div>
              <div>
                <p className="text-[11px] font-black text-[#555555] opacity-40 uppercase tracking-widest mb-2">Current status</p>
                <p className="text-[16px] font-black text-[#1caf5f]">Active</p>
              </div>
            </div>
          </div>
          
          {/* Decorative Illustration matches the image */}
          <div className="absolute right-[-20px] bottom-[-20px] w-72 h-80 opacity-20 md:opacity-100 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
             <img 
                src="/images/chief01.png" 
                alt="Student Illustration" 
                className="w-full h-full object-contain object-bottom filter drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]"
             />
             <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#c72030]/5 rounded-full blur-[80px]" />
          </div>
        </div>
      </div>

      {/* Certificates & Recognition */}
      <div className="bg-white rounded-[40px] p-10 shadow-sm border border-[#eeeeee] space-y-10 group hover:shadow-2xl hover:shadow-dark/5 transition-all duration-500">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-2xl bg-[#c72030]/5 text-[#c72030]">
            <Award size={24} strokeWidth={3} />
          </div>
          <h4 className="text-xl font-black text-[#1a1a1a] tracking-tight">Certificates & Recognition</h4>
        </div>
        
        <div className="space-y-4">
          {[
            { title: 'YoungVox Mentor Orientation', date: '1/15/2024' },
            { title: 'Child Protection Training', date: '2/10/2024' },
            { title: 'Advanced Leadership Workshop', date: '8/22/2024' },
          ].map((cert, idx) => (
            <div key={idx} className="bg-[#f8f9fa] border border-gray-100 rounded-[28px] p-8 flex flex-col md:flex-row items-center justify-between gap-8 hover:bg-white hover:shadow-2xl hover:shadow-dark/5 transition-all duration-500 group/item">
              <div className="flex items-center gap-8">
                <div className="w-16 h-16 rounded-full bg-[#1caf5f]/10 flex items-center justify-center text-[#1caf5f] group-hover/item:scale-110 transition-transform duration-500">
                  <CheckCircle2 size={32} strokeWidth={3} />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-black text-[#1a1a1a]">{cert.title}</p>
                  <p className="text-[12px] font-bold text-[#555555] opacity-40 uppercase tracking-widest flex items-center gap-2">
                    <Calendar size={14} strokeWidth={3} />
                    Completed on {cert.date}
                  </p>
                </div>
              </div>
              <span className="bg-[#1caf5f] text-white text-[11px] font-black px-8 py-3 rounded-full uppercase tracking-widest shadow-lg shadow-[#1caf5f]/20 group-hover/item:scale-105 transition-all">Completed</span>
            </div>
          ))}
        </div>
      </div>

      {/* Chapter chief ranking Section */}
      <div className="bg-white rounded-[40px] p-10 shadow-sm border border-[#eeeeee] space-y-10 group hover:shadow-2xl hover:shadow-dark/5 transition-all duration-500">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-2xl bg-[#c72030]/5 text-[#c72030]">
            <Trophy size={24} strokeWidth={3} />
          </div>
          <h4 className="text-xl font-black text-[#1a1a1a] tracking-tight">Chapter chief ranking</h4>
        </div>

        <div className="bg-[#fff9f0] border border-[#ffecce] rounded-[48px] p-10 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden group/rank">
          <div className="flex flex-col md:flex-row items-center gap-14 flex-1 relative z-10">
            {/* Trophy Icon with floating animations */}
            <div className="relative w-48 h-48 group-hover/rank:scale-110 transition-transform duration-1000">
              <div className="absolute inset-x-0 bottom-[-10px] h-4 bg-black/10 rounded-full blur-xl scale-75 group-hover/rank:scale-90 transition-all"></div>
              <div className="w-full h-full rounded-full border-[12px] border-white shadow-3xl bg-[#ff9900] text-white flex items-center justify-center relative overflow-hidden">
                <Trophy size={80} strokeWidth={2.5} className="relative z-10 drop-shadow-2xl animate-float-slow" />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent"></div>
              </div>
            </div>

            <div className="flex flex-col text-center md:text-left">
              <span className="text-[14px] font-black text-[#555555] opacity-40 uppercase tracking-widest mb-3">Current Ranking</span>
              <div className="flex items-end justify-center md:justify-start gap-4 mb-6">
                <h3 className="text-8xl font-black text-[#1a1a1a] tracking-tighter leading-none">#3</h3>
                <div className="flex flex-col mb-3">
                  <div className="flex items-center gap-2 text-[#1caf5f] text-[18px] font-black">
                    <TrendingUp size={22} strokeWidth={3} />
                    Up from #5
                  </div>
                  <span className="bg-[#1caf5f] text-white text-[11px] font-black px-4 py-1.5 rounded-lg uppercase tracking-widest text-center mt-3 shadow-lg shadow-[#1caf5f]/20">Top 6%</span>
                </div>
              </div>
              <span className="text-[16px] font-bold text-[#555555] opacity-50 mb-10">out of 50 mentors</span>
              
              <div className="pt-10 border-t border-orange-200/50 flex flex-col gap-8">
                <p className="text-[13px] font-black text-[#555555] opacity-40 uppercase tracking-widest">Ranking based on:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-5">
                    <div className="flex items-center gap-4 group/bullet transition-all duration-300">
                        <div className="w-2.5 h-1 bg-[#c72030] rounded-full group-hover/bullet:w-5 transition-all" />
                        <span className="text-[15px] font-black text-[#1a1a1a] tracking-tight">Timely submission</span>
                    </div>
                    <div className="flex items-center gap-4 group/bullet transition-all duration-300">
                        <div className="w-2.5 h-1 bg-[#c72030] rounded-full group-hover/bullet:w-5 transition-all" />
                        <span className="text-[15px] font-black text-[#1a1a1a] tracking-tight">Chapter success</span>
                    </div>
                    <div className="flex items-center gap-4 group/bullet transition-all duration-300 md:col-span-2">
                        <div className="w-2.5 h-1 bg-[#c72030] rounded-full group-hover/bullet:w-5 transition-all" />
                        <span className="text-[15px] font-black text-[#1a1a1a] tracking-tight">Collaboration & Communication</span>
                    </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[40px] p-10 shadow-3xl shadow-[#ff9900]/10 flex flex-col items-center text-center gap-8 min-w-[340px] relative z-10 border border-[#ffecce]/40 group/badge-card">
            <div className="space-y-3">
              <p className="text-[18px] font-black text-[#1a1a1a] leading-tight">Certificates & Recognition</p>
              <p className="text-[13px] font-bold text-[#555555] opacity-40 uppercase tracking-widest">Mentor-specific</p>
            </div>
            <div className="relative p-1 w-full">
              <button className="w-full border-2 border-gray-100 text-[14px] font-black py-5 px-10 rounded-[24px] hover:bg-[#c72030] hover:text-white hover:border-transparent transition-all duration-500 active:scale-95 group/btn overflow-hidden relative shadow-sm">
                <span className="relative z-10">Recognition Badges</span>
                <div className="absolute inset-0 bg-brand-gradient opacity-0 group-hover/btn:opacity-100 transition-opacity" />
              </button>
            </div>
          </div>
          
          {/* Background Decorative Elements */}
          <div className="absolute top-[-50px] left-[-50px] w-96 h-96 bg-[#ff9900]/10 rounded-full blur-[120px] mix-blend-multiply" />
          <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-[#c72030]/5 rounded-full blur-[150px] mix-blend-multiply" />
        </div>
      </div>
    </div>
  );
};

export default AcademicWingProfile;
