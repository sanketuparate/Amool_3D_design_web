import React, { useState } from 'react';

export default function StoreLocator({ onFindStore }) {
  const [pincode, setPincode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!pincode.trim()) {
      onFindStore('Please enter a valid 6-digit Pincode');
      return;
    }
    onFindStore(`Locating chilled Amul Kool Rose stock near ${pincode}... 14 parlours found!`);
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-primary via-rose-600 to-pink-700 text-white overflow-hidden">
      <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-white/10 blur-2xl pointer-events-none"></div>
      <div className="absolute -left-20 -top-20 w-96 h-96 rounded-full bg-black/10 blur-2xl pointer-events-none"></div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider mb-6">
          <span className="material-symbols-outlined text-[16px]">local_drink</span>
          Immediate Cooldown
        </span>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight max-w-3xl mx-auto leading-tight">
          Beat The Heat. Grab Your Chilled Rose Kool Today.
        </h2>

        <p className="mt-4 text-rose-100 text-base sm:text-lg max-w-2xl mx-auto">
          Available at over 1,000,000 retail stores across India, Amul Parlours, and quick grocery apps.
        </p>

        <div className="mt-8 max-w-md mx-auto">
          <form 
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-2 bg-white/15 p-2 rounded-2xl sm:rounded-full backdrop-blur-md border border-white/20"
          >
            <input 
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              className="w-full px-5 py-3 rounded-full bg-white text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-navy-900" 
              placeholder="Enter your Pincode (e.g. 110001)" 
              type="text"
            />
            <button 
              className="px-6 py-3 rounded-full bg-navy-900 hover:bg-navy-950 text-white font-bold text-sm whitespace-nowrap transition-colors shadow-md cursor-pointer" 
              type="submit"
            >
              Find Nearby Store
            </button>
          </form>
          <p className="text-xs text-rose-200 mt-2">Checking real-time stock across 12,000+ certified Amul parlours</p>
        </div>

      </div>
    </section>
  );
}
