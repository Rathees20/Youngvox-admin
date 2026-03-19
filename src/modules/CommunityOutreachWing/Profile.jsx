import React from 'react';
import { Mail, Phone, MapPin, Calendar, Award, CheckCircle2, ShieldCheck, Globe } from 'lucide-react';
import { cn } from '../../utils/cn';

const InfoCard = ({ title, children, icon: Icon }) => (
  <div className="bg-white rounded-[24px] p-8 border border-gray-100 shadow-sm space-y-6 relative overflow-hidden group hover:shadow-xl transition-all duration-500">
    <div className="flex items-center gap-3 relative z-10">
      <Icon size={18} className="text-[#1a1a1a]" strokeWidth={2.5} />
      <h3 className="text-[16px] font-normal text-[#1a1a1a] tracking-tight">{title}</h3>
    </div>
    <div className="relative z-10">
      {children}
    </div>
  </div>
);

const DetailItem = ({ label, value }) => (
  <div className="space-y-1">
    <p className="text-[12px] font-normal text-[#555555] opacity-50 tracking-tight">{label}</p>
    <p className="text-[14px] font-normal text-[#1a1a1a] tracking-tight">{value}</p>
  </div>
);

const CertificateItem = ({ title, date }) => (
  <div className="flex items-center justify-between p-5 bg-[#f8f9fa] rounded-2xl border border-gray-50 group hover:bg-white hover:shadow-lg transition-all duration-300">
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#10b981] shadow-sm">
        <CheckCircle2 size={24} strokeWidth={2} />
      </div>
      <div className="space-y-0.5">
        <h5 className="text-[14px] font-normal text-[#1a1a1a] tracking-tight">{title}</h5>
        <div className="flex items-center gap-2 text-[12px] text-[#555555] opacity-60">
          <Calendar size={12} />
          <span>Completed on {date}</span>
        </div>
      </div>
    </div>
    <span className="bg-[#10b981] text-white text-[10px] font-normal px-3 py-1 rounded-md uppercase tracking-wider">
      Completed
    </span>
  </div>
);

const CommunityOutreachWingProfile = () => {
  return (
    <div className="p-6 space-y-8 animate-in fade-in duration-700 pb-24 max-w-[1600px] mx-auto font-['Arial'] bg-[#f7f7f8] min-h-screen">
      <div className="space-y-1">
        <h2 className="text-[20px] font-normal text-[#1a1a1a] tracking-tight">Profile Overview</h2>
        <p className="text-[13px] font-normal text-[#555555] opacity-60">Your complete profile and credentials</p>
      </div>

      {/* Main Profile Header Card */}
      <div className="bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-sm h-full">
        {/* Banner with characters */}
        <div className="h-[180px] w-full relative">
          <img 
            src="/images/profile-banner-outreach.png" 
            alt="Profile Banner" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-8 pt-0 -mt-16 relative flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="flex flex-col md:flex-row items-end gap-6 w-full md:w-auto">
            {/* Avatar */}
            <div className="relative group">
              <div className="w-[160px] h-[160px] rounded-full bg-white p-1.5 shadow-xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#fef3c7] flex items-center justify-center">
                  <img src="/images/avatar-outreach.png" alt="Profile" className="w-[85%] h-auto object-contain" />
                </div>
              </div>
            </div>

            <div className="pb-4 space-y-4 w-full md:w-auto">
              <div className="space-y-1 text-center md:text-left">
                <h1 className="text-[24px] font-normal text-[#1a1a1a] tracking-tight">Jane Doe</h1>
                <p className="text-[14px] font-normal text-[#555555] opacity-60">Community Outreach & Service Wing Leader</p>
                <div className="flex items-center justify-center md:justify-start gap-2 pt-1">
                  <span className="bg-[#10b981] text-white text-[10px] font-normal px-2.5 py-1 rounded-md uppercase tracking-wider">Active</span>
                  <span className="bg-gray-100 text-[#555555] text-[10px] font-normal px-2.5 py-1 rounded-md tracking-wider">YV-TM-2024-0647</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <div className="flex items-center gap-3 bg-gray-50 px-5 py-3 rounded-2xl border border-gray-100/50 flex-1 md:flex-initial">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-[#555555]">
                    <Mail size={16} />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-[10px] font-normal text-[#555555] opacity-40 uppercase tracking-widest">Email</p>
                    <p className="text-[13px] font-normal text-[#1a1a1a]">jane.doe@greenwood.edu</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 px-5 py-3 rounded-2xl border border-gray-100/50 flex-1 md:flex-initial">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-[#555555]">
                    <Phone size={16} />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-[10px] font-normal text-[#555555] opacity-40 uppercase tracking-widest">Contact</p>
                    <p className="text-[13px] font-normal text-[#1a1a1a]">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ranking mini card */}
          <div className="bg-[#fefce8] border border-[#fef08a] rounded-[24px] p-6 flex flex-col items-center justify-center space-y-1 min-w-[140px] mb-4">
             <div className="text-[#facc15]">
               <Award size={32} strokeWidth={2.5} />
             </div>
             <p className="text-[24px] font-normal text-[#1a1a1a] tracking-tight">#3</p>
             <p className="text-[10px] font-normal text-[#555555] opacity-60 uppercase tracking-widest">of 50 mentors</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Personal Info */}
        <InfoCard title="Personal Information" icon={Calendar}>
          <div className="grid grid-cols-2 gap-y-6 gap-x-8">
            <DetailItem label="Full Name" value="Jane Doe" />
            <DetailItem label="Gender" value="Female" />
            <DetailItem label="Date of Birth" value="6/15/1985 (40 years)" />
            <DetailItem label="Grade" value="VI" />
            <div className="col-span-2 space-y-2">
              <p className="text-[12px] font-normal text-[#555555] opacity-50 tracking-tight">Languages Known</p>
              <div className="flex flex-wrap gap-2">
                {['English', 'Spanish', 'French'].map(lang => (
                  <span key={lang} className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-lg text-[12px] font-normal text-[#1a1a1a]">
                    <Globe size={12} className="opacity-40" /> {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </InfoCard>

        {/* Chapter Info */}
        <InfoCard title="Chapter Information" icon={MapPin}>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-8 relative h-full">
             <div className="space-y-6 relative z-10">
               <DetailItem label="School Name" value="Greenwood High School" />
               <DetailItem label="Branch / Location" value="North Valley Campus" />
               <DetailItem label="Chapter established on" value="2022" />
               <DetailItem label="Current status" value="Active" />
             </div>
             
             {/* Mascot Illustration */}
             <div className="absolute right-0 -bottom-8 w-40 h-40 pointer-events-none">
                <img src="/images/mascot-character.png" alt="Mascot" className="w-full h-full object-contain opacity-50" />
             </div>
           </div>
        </InfoCard>
      </div>

      {/* Certificates & Recognition */}
      <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm space-y-8">
        <div className="flex items-center gap-3">
          <Award size={20} className="text-[#1a1a1a]" strokeWidth={2.5} />
          <h3 className="text-[18px] font-normal text-[#1a1a1a] tracking-tight">Certificates & Recognition</h3>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <CertificateItem title="YoungVox Mentor Orientation" date="1/15/2024" />
          <CertificateItem title="Child Protection Training" date="2/10/2024" />
          <CertificateItem title="Advanced Leadership Workshop" date="8/22/2024" />
        </div>
      </div>

      {/* Chapter Leader Ranking */}
      <div className="bg-[#fffbeb] rounded-[32px] p-8 border border-[#fef3c7] shadow-sm">
        <div className="flex items-center gap-3 mb-8">
          <Award size={20} className="text-[#1a1a1a]" strokeWidth={2.5} />
          <h3 className="text-[18px] font-normal text-[#1a1a1a] tracking-tight">Chapter chief ranking</h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1 flex items-center gap-8">
             <div className="w-[100px] h-[100px] rounded-full bg-orange-400 flex items-center justify-center text-white shadow-xl shadow-orange-400/20">
               <Award size={48} strokeWidth={2} />
             </div>
             <div className="space-y-1">
               <p className="text-[12px] font-normal text-[#555555] opacity-60 uppercase tracking-widest">Current Ranking</p>
               <div className="flex items-baseline gap-2">
                 <span className="text-[48px] font-normal text-[#1a1a1a] tracking-tighter">#3</span>
                 <span className="text-[14px] font-normal text-[#555555] opacity-40">out of 50 mentors</span>
               </div>
               <div className="flex items-center gap-2 text-[#10b981] pt-1">
                 <TrendingUp size={16} />
                 <span className="text-[14px] font-normal">Up from #5</span>
                 <span className="ml-2 bg-[#10b981] text-white text-[10px] px-2 py-0.5 rounded uppercase tracking-wider font-normal">Top 6%</span>
               </div>
             </div>
          </div>

          <div className="lg:w-[400px] bg-white rounded-[24px] p-6 shadow-sm flex flex-col items-center justify-center space-y-4 text-center border border-yellow-100">
             <h4 className="text-[16px] font-normal text-[#1a1a1a] tracking-tight leading-snug">
               Certificates & Recognition Mentor-specific
             </h4>
             <button className="w-full py-3.5 border border-[#A82228] text-[#A82228] rounded-xl text-[13px] font-normal hover:bg-[#A82228] hover:text-white transition-all tracking-tight">
               Recognition Badges
             </button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-yellow-200/50 flex flex-wrap gap-x-12 gap-y-4">
           <div className="space-y-4 min-w-[200px]">
             <div className="flex items-center gap-2">
               <div className="w-2 h-2 rounded-full bg-[#ef4444]" />
               <span className="text-[14px] font-normal text-[#555555]">Timely submission</span>
             </div>
             <div className="flex items-center gap-2">
               <div className="w-2 h-2 rounded-full bg-[#ef4444]" />
               <span className="text-[14px] font-normal text-[#555555]">Collaboration & Communication</span>
             </div>
           </div>
           <div className="space-y-4 min-w-[200px]">
             <div className="flex items-center gap-2">
               <div className="w-2 h-2 rounded-full bg-[#ef4444]" />
               <span className="text-[14px] font-normal text-[#555555]">Chapter success</span>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

// Helper component for trending
const TrendingUp = ({ size, className }) => (
  <svg 
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
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

export default CommunityOutreachWingProfile;
