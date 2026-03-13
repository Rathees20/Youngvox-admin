import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, LogIn, ShieldCheck } from 'lucide-react';
import { cn } from '../utils/cn';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Mock authentication logic
    setTimeout(() => {
      if (email === 'admin@youngvox.com' && password === 'admin123') {
        localStorage.setItem('isAuthenticated', 'true');
        navigate('/dashboard');
      } else {
        setError('Invalid email or password. Please use admin@youngvox.com / admin123');
        setIsLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#f7f7f8] p-6">
      <div className="w-full max-w-[450px] space-y-8">
        {/* Logo and Welcome */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="w-[70px] h-[70px] bg-[#c72030] rounded-2xl flex items-center justify-center text-white font-black text-3xl shadow-[0_12px_24px_rgba(199,32,48,0.3)]">
              YV
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="text-[32px] font-[900] text-[#1a1a1a] tracking-tight">Welcome Back</h1>
            <p className="text-[14px] font-black text-[#555555] opacity-50 uppercase tracking-widest">Mentor Portal Access</p>
          </div>
        </div>

        {/* Login Card */}
        <div className="bg-white p-10 rounded-[32px] shadow-[0_32px_64px_rgba(0,0,0,0.03)] border border-[#eeeeee]">
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[12px] font-black text-[#1a1a1a] uppercase tracking-wider ml-1">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-[#555555] opacity-30 group-focus-within:opacity-100 group-focus-within:text-[#c72030] transition-all" size={20} strokeWidth={2.5} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full h-[60px] bg-[#f7f7f8] border border-transparent focus:border-[#c72030]/20 focus:bg-white rounded-2xl pl-14 pr-6 text-[14px] font-extrabold text-[#1a1a1a] outline-none transition-all placeholder:text-[#555555]/30 placeholder:font-bold"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between ml-1">
                <label className="text-[12px] font-black text-[#1a1a1a] uppercase tracking-wider">Password</label>
                <button type="button" className="text-[11px] font-black text-[#c72030] uppercase tracking-wider hover:opacity-70">Forgot Password?</button>
              </div>
              <div className="relative group">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-[#555555] opacity-30 group-focus-within:opacity-100 group-focus-within:text-[#c72030] transition-all" size={20} strokeWidth={2.5} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full h-[60px] bg-[#f7f7f8] border border-transparent focus:border-[#c72030]/20 focus:bg-white rounded-2xl pl-14 pr-6 text-[14px] font-extrabold text-[#1a1a1a] outline-none transition-all placeholder:text-[#555555]/30 placeholder:font-bold"
                  required
                />
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-3 p-4 bg-red-50 rounded-2xl border border-red-100 animate-in fade-in slide-in-from-top-2">
                <ShieldCheck size={18} className="text-[#c72030]" strokeWidth={3} />
                <p className="text-[12px] font-extrabold text-[#c72030]">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className={cn(
                "w-full h-[60px] bg-[#c72030] text-white rounded-2xl font-black text-[15px] flex items-center justify-center gap-3 shadow-[0_16px_32px_rgba(199,32,48,0.2)] hover:shadow-[0_20px_40px_rgba(199,32,48,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed",
                isLoading && "animate-pulse"
              )}
            >
              {isLoading ? (
                "Verifying..."
              ) : (
                <>
                  <span>Sign In</span>
                  <LogIn size={20} strokeWidth={3} />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-[#eeeeee] flex items-center justify-center gap-2">
            <p className="text-[13px] font-bold text-[#555555]">Don't have an account?</p>
            <button className="text-[13px] font-black text-[#c72030] hover:underline transition-all">Contact Admin</button>
          </div>
        </div>

        {/* Footer Info */}
        <p className="text-center text-[12px] font-black text-[#555555] opacity-30 tracking-tight uppercase">
          © 2026 YoungVox Admin • Secure Login System
        </p>
      </div>
    </div>
  );
};

export default Login;
