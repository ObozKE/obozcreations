'use client';

import React, { useState, useEffect } from 'react';

export default function ComingSoonPage() {
  // Target Launch Date: 30 days from today
  const [targetDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 30);
    return d.getTime();
  });

  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<string>('All Updates');

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    // Simulate API request delay
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1200);
  };

  const topics = [
    'All Updates',
    'Early Beta Access',
    'Design Insights',
    'Special Launch Offers',
  ];

  const features = [
    {
      icon: (
        <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Bespoke Experience',
      description: 'Crafted with precision, modern design aesthetics, and fluid micro-animations.',
    },
    {
      icon: (
        <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Peak Performance',
      description: 'Built on the next-gen Next.js framework for instant loading speeds and SEO brilliance.',
    },
    {
      icon: (
        <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'VIP Early Access',
      description: 'Subscribers will receive priority access and exclusive launch previews before public release.',
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white">
      {/* Background Animated Gradient Mesh / Ambient Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 rounded-full filter blur-[125px] pointer-events-none animate-blob" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full filter blur-[125px] pointer-events-none animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/15 rounded-full filter blur-[140px] pointer-events-none animate-blob animation-delay-4000" />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Top Header / Branding */}
      <header className="relative z-10 w-full max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 p-[1px] shadow-lg shadow-indigo-500/20">
            <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
              <span className="font-black text-transparent bg-clip-text bg-gradient-to-tr from-indigo-400 to-cyan-300 text-xl tracking-tighter">
                O
              </span>
            </div>
          </div>
          <span className="font-bold text-xl tracking-tight text-white">
            OBOZ <span className="text-indigo-400 font-light">CREATIONS</span>
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            In Development
          </span>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 w-full max-w-4xl mx-auto px-6 py-12 flex flex-col items-center text-center my-auto">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-slate-300 bg-slate-900/80 border border-slate-800 backdrop-blur-xl shadow-xl mb-8 hover:border-indigo-500/40 transition-colors">
          <svg className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '6s' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
          Something Big Is Coming
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
          Website <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400">Coming Soon</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl font-normal leading-relaxed mb-12">
          We are building an extraordinary new web platform for <strong className="text-slate-200 font-semibold">Oboz Creations</strong>. 
          Our digital doors will be opening very soon. Join the waitlist for launch notifications and exclusive access.
        </p>

        {/* Countdown Timer Grid */}
        <div className="grid grid-cols-4 gap-3 sm:gap-6 w-full max-w-xl mb-12">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds },
          ].map((item, index) => (
            <div
              key={index}
              className="relative group flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:border-indigo-500/40 hover:scale-[1.02]"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <span className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-1 font-mono">
                {String(item.value).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-indigo-400 uppercase">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Topic Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          {topics.map((topic) => (
            <button
              key={topic}
              onClick={() => setSelectedTopic(topic)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedTopic === topic
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
              }`}
            >
              {topic}
            </button>
          ))}
        </div>

        {/* Subscription Form Card */}
        <div className="w-full max-w-md bg-slate-900/80 border border-slate-800 rounded-3xl p-3 sm:p-4 backdrop-blur-2xl shadow-2xl mb-16 relative">
          {status === 'success' ? (
            <div className="py-6 px-4 flex flex-col items-center justify-center space-y-3 animate-fadeIn">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white">You're on the list!</h3>
              <p className="text-xs text-slate-400 text-center">
                We'll notify you first when Oboz Creations officially launches for <span className="text-indigo-400 font-medium">{selectedTopic}</span>.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-2 text-xs font-semibold text-slate-400 hover:text-white underline underline-offset-4"
              >
                Submit another email
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="w-full pl-10 pr-4 py-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                  disabled={status === 'loading'}
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {status === 'loading' ? (
                  <>
                    <svg className="w-4 h-4 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Joining...</span>
                  </>
                ) : (
                  <>
                    <span>Notify Me</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          )}

          {errorMessage && (
            <p className="mt-2 text-xs text-rose-400 text-left pl-2 font-medium">
              {errorMessage}
            </p>
          )}
        </div>

        {/* Features Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
          {features.map((feat, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-md hover:border-slate-700 hover:bg-slate-900/70 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-indigo-500/50 transition-all">
                {feat.icon}
              </div>
              <h3 className="text-base font-bold text-white mb-1">{feat.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{feat.description}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer & Social Links */}
      <footer className="relative z-10 w-full max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between border-t border-slate-900 gap-4 text-xs text-slate-500">
        <div>
          © {new Date().getFullYear()} Oboz Creations. All rights reserved.
        </div>

        <div className="flex items-center space-x-6">
          <a href="#" className="hover:text-slate-300 transition-colors flex items-center gap-1.5">
            <svg className="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            <span>Twitter</span>
          </a>
          <a href="#" className="hover:text-slate-300 transition-colors flex items-center gap-1.5">
            <svg className="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            <span>GitHub</span>
          </a>
          <a href="#" className="hover:text-slate-300 transition-colors flex items-center gap-1.5">
            <svg className="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
            <span>LinkedIn</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
