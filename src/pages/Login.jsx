import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, LogIn, ShieldCheck } from 'lucide-react';
import { cn } from '../utils/cn';

const Login = () => {
  const [primaryType, setPrimaryType] = useState('mentor'); // 'mentor', 'chief', 'wing'
  const [loginType, setLoginType] = useState('mentor'); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const roleConfig = {
    'mentor': { label: 'Mentor', email: 'admin@youngvox.com', pass: 'admin123', redirect: '/dashboard', role: 'mentor' },
    'chief': { label: 'Chapter Chief', email: 'chief@youngvox.com', pass: 'chief123', redirect: '/chapter-chief-dashboard', role: 'chapter-chief' },
    'academic-wing': { label: 'Academic & Career Guidance', email: 'academic@youngvox.com', pass: 'wing123', redirect: '/academic-wing-dashboard', role: 'wing-leader' },
    'wellbeing-wing': { label: 'Student Wellbeing', email: 'wellbeing@youngvox.com', pass: 'wing123', redirect: '/wellbeing-wing-dashboard', role: 'wing-leader' },
    'rights-wing': { label: 'Child Rights & Social Justice', email: 'rights@youngvox.com', pass: 'wing123', redirect: '/dashboard', role: 'wing-leader' },
    'outreach-wing': { label: 'Community Outreach & Service', email: 'outreach@youngvox.com', pass: 'wing123', redirect: '/dashboard', role: 'wing-leader' }
  };

  const handlePrimaryChange = (type) => {
    setPrimaryType(type);
    if (type === 'wing') {
      setLoginType('academic-wing'); // Default to first wing
    } else {
      setLoginType(type);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    const config = roleConfig[loginType] || roleConfig['mentor'];

    // Mock authentication logic
    setTimeout(() => {
      if (email === config.email && password === config.pass) {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('userRole', config.role);
        localStorage.setItem('wingType', loginType.includes('wing') ? loginType : '');
        navigate(config.redirect);
      } else {
        setError(`Invalid credentials. For ${roleConfig[loginType].label}, use ${config.email} / ${config.pass}`);
        setIsLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#f7f7f8] p-6 py-12">
      <div className="w-full max-w-[550px] space-y-8">
        {/* Logo and Welcome */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="w-[70px] h-[70px] bg-[#c72030] rounded-2xl flex items-center justify-center text-white font-black text-3xl shadow-[0_12px_24px_rgba(199,32,48,0.3)]">
              YV
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-[32px] font-[900] text-[#1a1a1a] tracking-tight leading-tight">
              {roleConfig[loginType].label} Portal
            </h1>
            
            {/* Tiered Login Type Switcher */}
            <div className="space-y-3">
              {/* Primary Level */}
              <div className="flex justify-center p-1 bg-gray-200/50 rounded-2xl w-fit mx-auto border border-gray-100">
                <button 
                  onClick={() => handlePrimaryChange('mentor')}
                  className={cn(
                    "px-6 py-2.5 rounded-xl text-[12px] font-[900] uppercase tracking-widest transition-all",
                    primaryType === 'mentor' 
                      ? "bg-white text-[#c72030] shadow-md shadow-black/5" 
                      : "text-[#555555] opacity-50 hover:opacity-100"
                  )}
                >
                  Mentor
                </button>
                <button 
                  onClick={() => handlePrimaryChange('chief')}
                  className={cn(
                    "px-6 py-2.5 rounded-xl text-[12px] font-[900] uppercase tracking-widest transition-all",
                    primaryType === 'chief' 
                      ? "bg-white text-[#c72030] shadow-md shadow-black/5" 
                      : "text-[#555555] opacity-50 hover:opacity-100"
                  )}
                >
                  Chapter Chief
                </button>
                <button 
                  onClick={() => handlePrimaryChange('wing')}
                  className={cn(
                    "px-6 py-2.5 rounded-xl text-[12px] font-[900] uppercase tracking-widest transition-all",
                    primaryType === 'wing' 
                      ? "bg-white text-[#c72030] shadow-md shadow-black/5" 
                      : "text-[#555555] opacity-50 hover:opacity-100"
                  )}
                >
                  Wing Leader
                </button>
              </div>

              {/* Secondary Level (Only if Wing Leader selected) */}
              {primaryType === 'wing' && (
                <div className="flex flex-wrap justify-center gap-1.5 p-1 bg-[#c72030]/5 rounded-2xl w-full max-w-lg mx-auto border border-[#c72030]/10 animate-in fade-in slide-in-from-top-2 duration-300">
                  <button 
                    onClick={() => setLoginType('academic-wing')}
                    className={cn(
                      "flex-1 px-3 py-2 rounded-xl text-[9px] font-[900] uppercase tracking-widest transition-all text-center leading-tight",
                      loginType === 'academic-wing' 
                        ? "bg-[#c72030] text-white shadow-md shadow-[#c72030]/20" 
                        : "text-[#c72030] opacity-40 hover:opacity-100"
                    )}
                  >
                    Academic
                  </button>
                  <button 
                    onClick={() => setLoginType('wellbeing-wing')}
                    className={cn(
                      "flex-1 px-3 py-2 rounded-xl text-[9px] font-[900] uppercase tracking-widest transition-all text-center leading-tight",
                      loginType === 'wellbeing-wing' 
                        ? "bg-[#c72030] text-white shadow-md shadow-[#c72030]/20" 
                        : "text-[#c72030] opacity-40 hover:opacity-100"
                    )}
                  >
                    Wellbeing
                  </button>
                  <button 
                    onClick={() => setLoginType('rights-wing')}
                    className={cn(
                      "flex-1 px-3 py-2 rounded-xl text-[9px] font-[900] uppercase tracking-widest transition-all text-center leading-tight",
                      loginType === 'rights-wing' 
                        ? "bg-[#c72030] text-white shadow-md shadow-[#c72030]/20" 
                        : "text-[#c72030] opacity-40 hover:opacity-100"
                    )}
                  >
                    Rights
                  </button>
                  <button 
                    onClick={() => setLoginType('outreach-wing')}
                    className={cn(
                      "flex-1 px-3 py-2 rounded-xl text-[9px] font-[900] uppercase tracking-widest transition-all text-center leading-tight",
                      loginType === 'outreach-wing' 
                        ? "bg-[#c72030] text-white shadow-md shadow-[#c72030]/20" 
                        : "text-[#c72030] opacity-40 hover:opacity-100"
                    )}
                  >
                    Outreach
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Login Card */}
        <div className="bg-white p-10 rounded-[40px] shadow-[0_32px_80px_rgba(0,0,0,0.06)] border border-[#eeeeee] relative overflow-hidden group">
          {/* Progress Bar (Visible during loading) */}
          {isLoading && (
            <div className="absolute top-0 left-0 h-1 bg-[#c72030] animate-[shimmer_2s_infinite_linear]" style={{ width: '100%', backgroundSize: '200% 100%', backgroundImage: 'linear-gradient(90deg, transparent, #c72030, transparent)' }} />
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[12px] font-black text-[#1a1a1a] uppercase tracking-widest ml-1 opacity-70">Email Address</label>
              <div className="relative group/input">
                <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-[#555555] opacity-30 group-focus-within/input:opacity-100 group-focus-within/input:text-[#c72030] transition-all" size={20} strokeWidth={3} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={(roleConfig[loginType] || roleConfig['mentor']).email}
                  className="w-full h-[64px] bg-[#f7f7f8] border-2 border-transparent focus:border-[#c72030]/10 focus:bg-white rounded-[20px] pl-16 pr-8 text-[14px] font-[900] text-[#1a1a1a] outline-none transition-all placeholder:text-[#555555]/20"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between ml-1">
                <label className="text-[12px] font-black text-[#1a1a1a] uppercase tracking-widest opacity-70">Password</label>
                <button type="button" className="text-[11px] font-black text-[#c72030] uppercase tracking-widest hover:opacity-70 transition-opacity">Forgot Password?</button>
              </div>
              <div className="relative group/input">
                <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-[#555555] opacity-30 group-focus-within/input:opacity-100 group-focus-within/input:text-[#c72030] transition-all" size={20} strokeWidth={3} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full h-[64px] bg-[#f7f7f8] border-2 border-transparent focus:border-[#c72030]/10 focus:bg-white rounded-[20px] pl-16 pr-8 text-[14px] font-[900] text-[#1a1a1a] outline-none transition-all placeholder:text-[#555555]/20"
                  required
                />
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-4 p-5 bg-red-50 rounded-[20px] border border-red-100 animate-in fade-in slide-in-from-top-4 duration-500">
                <div className="shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <ShieldCheck size={18} className="text-[#c72030]" strokeWidth={3} />
                </div>
                <p className="text-[12px] font-black text-[#c72030] leading-relaxed tracking-tight">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className={cn(
                "w-full h-[64px] bg-[#c72030] text-white rounded-[20px] font-black text-[15px] uppercase tracking-widest flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(199,32,48,0.2)] hover:shadow-[0_25px_50px_rgba(199,32,48,0.3)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed",
                isLoading && "animate-pulse"
              )}
            >
              {isLoading ? (
                "Verifying Portal Access..."
              ) : (
                <>
                  <span>Sign In To Portal</span>
                  <LogIn size={22} strokeWidth={3} />
                </>
              )}
            </button>
          </form>

          <div className="mt-10 pt-10 border-t border-[#eeeeee] flex items-center justify-center gap-3">
            <p className="text-[13px] font-bold text-[#555555] opacity-40 uppercase tracking-widest">New to YoungVox?</p>
            <button className="text-[13px] font-black text-[#c72030] hover:underline transition-all uppercase tracking-widest">Contact IT</button>
          </div>
        </div>

        {/* Footer Info */}
        <p className="text-center text-[11px] font-black text-[#555555] opacity-20 tracking-widest uppercase py-4">
          © 2026 YoungVox Admin • Secure Authentication Protocol
        </p>
      </div>
    </div>
  );
};
export default Login;
