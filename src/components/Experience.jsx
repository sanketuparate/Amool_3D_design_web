import React from 'react';

export default function Experience() {
  return (
    <section className="py-20 bg-white dark:bg-navy-950 border-t border-slate-100 dark:border-slate-800 transition-colors" id="experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-extrabold tracking-widest text-primary uppercase">The Taste of Pure Joy</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 dark:text-white mt-2">
            Why You'll Fall In Love With Every Sip
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Carefully crafted by India's most trusted dairy cooperative using authentic techniques and wholesome farm milk.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="group relative rounded-3xl p-8 bg-background-light dark:bg-navy-900/70 border border-slate-200/80 dark:border-slate-800 hover:border-pink-300 dark:hover:border-pink-700 transition-all duration-300 shadow-sm hover:shadow-rose-glow">
            <div className="w-14 h-14 rounded-2xl bg-pink-100 dark:bg-pink-950/80 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[28px]">vital_signs</span>
            </div>
            <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3">Real Dairy Nutrition</h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
              Made from fresh Amul cow &amp; buffalo milk, packed with naturally occurring bio-available calcium and muscle-building protein without synthetic fillers.
            </p>
            <ul className="space-y-2 text-xs font-semibold text-slate-700 dark:text-slate-300 border-t border-slate-200 dark:border-slate-800 pt-4">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span>
                <span>6.2g Protein per bottle</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span>
                <span>220mg Calcium strength</span>
              </li>
            </ul>
          </div>

          <div className="group relative rounded-3xl p-8 bg-background-light dark:bg-navy-900/70 border-2 border-primary/40 dark:border-primary/50 shadow-rose-glow transition-all duration-300">
            <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-primary text-white text-[11px] font-black uppercase tracking-wider shadow">
              Signature Aroma
            </div>
            <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[28px]">local_florist</span>
            </div>
            <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3">Authentic Gulab Essence</h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
              Traditional aromatic Damascus rose notes that soothe your senses and naturally cool you down instantly under the sweltering summer heat.
            </p>
            <ul className="space-y-2 text-xs font-semibold text-slate-700 dark:text-slate-300 border-t border-slate-200 dark:border-slate-800 pt-4">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span>
                <span>Natural cooling properties</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span>
                <span>Distinct nostalgic floral finish</span>
              </li>
            </ul>
          </div>

          <div className="group relative rounded-3xl p-8 bg-background-light dark:bg-navy-900/70 border border-slate-200/80 dark:border-slate-800 hover:border-pink-300 dark:hover:border-pink-700 transition-all duration-300 shadow-sm hover:shadow-rose-glow">
            <div className="w-14 h-14 rounded-2xl bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[28px]">directions_run</span>
            </div>
            <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3">Everyday On-The-Go Fuel</h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
              Ergonomic 200ml grab-and-go bottle sterilized for an extended shelf-life of 180 days without any chemical preservatives or artificial colors.
            </p>
            <ul className="space-y-2 text-xs font-semibold text-slate-700 dark:text-slate-300 border-t border-slate-200 dark:border-slate-800 pt-4">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span>
                <span>Leak-proof twist cap</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span>
                <span>No refrigeration needed until opened</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
