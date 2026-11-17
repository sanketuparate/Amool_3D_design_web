import React from 'react';

export default function Ritual() {
  return (
    <section className="py-20 bg-white dark:bg-navy-950 border-b border-slate-100 dark:border-slate-800 transition-colors" id="ritual">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-extrabold tracking-widest text-primary uppercase">The Perfect Serve</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 dark:text-white mt-2">
            The 3-Step Chilling Ritual
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Unlock the fullest floral profile and silky dairy texture with this simple golden routine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          <div className="relative bg-background-light dark:bg-navy-900 p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 text-center flex flex-col items-center">
            <span className="absolute -top-4 px-4 py-1 rounded-full bg-navy-900 dark:bg-navy-800 text-white text-xs font-black">STEP 01</span>
            <div className="w-20 h-20 rounded-full bg-cyan-100 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 flex items-center justify-center my-4">
              <span className="material-symbols-outlined text-[36px]">ac_unit</span>
            </div>
            <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-2">Chill it Deep (4°C)</h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Place the bottle in the coldest shelf of your refrigerator for 2 hours. Cold temperature elevates the crispness of the rose petals.
            </p>
          </div>

          <div className="relative bg-background-light dark:bg-navy-900 p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 text-center flex flex-col items-center">
            <span className="absolute -top-4 px-4 py-1 rounded-full bg-navy-900 dark:bg-navy-800 text-white text-xs font-black">STEP 02</span>
            <div className="w-20 h-20 rounded-full bg-pink-100 dark:bg-pink-950/60 text-primary flex items-center justify-center my-4">
              <span className="material-symbols-outlined text-[36px]">vibration</span>
            </div>
            <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-2">Give it a Shake</h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Shake vigorously for 5 seconds to homogenize the velvety milk fat and disperse the concentrated aromatic rose extracts evenly.
            </p>
          </div>

          <div className="relative bg-background-light dark:bg-navy-900 p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 text-center flex flex-col items-center">
            <span className="absolute -top-4 px-4 py-1 rounded-full bg-navy-900 dark:bg-navy-800 text-white text-xs font-black">STEP 03</span>
            <div className="w-20 h-20 rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-500 flex items-center justify-center my-4">
              <span className="material-symbols-outlined text-[36px]">wine_bar</span>
            </div>
            <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-2">Sip or Pour on Ice</h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Sip right from the ergonomic bottle or pour over crushed ice with sweet basil seeds (sabja) and falooda sev for a festive royal treat!
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
