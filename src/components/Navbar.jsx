import React from 'react';

export default function Navbar({ isDark, onToggleTheme, soundEnabled, onToggleSound }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-navy-950/80 border-b border-pink-100/60 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a className="flex items-center gap-3 group" href="#">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-primary to-rose-400 flex items-center justify-center shadow-md shadow-pink-500/20 group-hover:scale-105 transition-transform">
            <span className="text-white font-black text-xl tracking-tighter">A•K</span>
          </div>
          <div>
            <span className="text-2xl font-black tracking-tight text-navy-900 dark:text-white flex items-center gap-1.5">
              Amul <span className="text-primary italic font-serif">Kool</span>
            </span>
            <span className="block text-[10px] tracking-widest uppercase font-bold text-pink-600 dark:text-pink-400 -mt-1">
              Gulab Rose Petal Milk
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-600 dark:text-slate-300">
          <a className="hover:text-primary dark:hover:text-primary transition-colors" href="#animation-hero">
            Animation
          </a>
          <a className="hover:text-primary dark:hover:text-primary transition-colors" href="#experience">
            The Experience
          </a>
          <a className="hover:text-primary dark:hover:text-primary transition-colors" href="#nutrition">
            Nutrition Facts
          </a>
          <a className="hover:text-primary dark:hover:text-primary transition-colors" href="#ritual">
            Chilling Ritual
          </a>
          <a className="hover:text-primary dark:hover:text-primary transition-colors" href="#packs">
            Order Packs
          </a>
          <a className="hover:text-primary dark:hover:text-primary transition-colors" href="#reviews">
            Community
          </a>
          <a className="hover:text-primary dark:hover:text-primary transition-colors" href="#faq">
            FAQ
          </a>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          
          {/* Ambient Soundscape Toggle */}
          <button 
            onClick={onToggleSound}
            className={`p-2.5 rounded-full transition-colors ${
              soundEnabled 
                ? 'bg-primary text-white shadow-md shadow-pink-500/30' 
                : 'text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-pink-50 dark:hover:bg-slate-700'
            }`}
            title="Toggle Ambient Audio (M)"
          >
            <span className="material-symbols-outlined text-[20px]">
              {soundEnabled ? 'volume_up' : 'volume_off'}
            </span>
          </button>

          {/* Dark / Light Mode Toggle */}
          <button 
            onClick={onToggleTheme}
            className="p-2.5 rounded-full text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-pink-50 dark:hover:bg-slate-700 transition-colors" 
            title="Toggle Light/Dark Theme"
          >
            <span className="material-symbols-outlined block dark:hidden text-[20px]">dark_mode</span>
            <span className="material-symbols-outlined hidden dark:block text-[20px]">light_mode</span>
          </button>

          {/* CTA Button */}
          <a 
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-white text-sm font-bold shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transform hover:-translate-y-0.5 transition-all" 
            href="#packs"
          >
            <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
            <span>Order Pack</span>
          </a>

        </div>

      </div>
    </header>
  );
}
