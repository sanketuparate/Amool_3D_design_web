import React from 'react';

export default function Reviews() {
  return (
    <section className="py-20 bg-white dark:bg-navy-950 border-t border-slate-100 dark:border-slate-800 transition-colors" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-extrabold tracking-widest text-primary uppercase">Loved Across India</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 dark:text-white mt-2">
              Over 45,000+ Five-Star Sips
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm">
              Real reviews from real rose milk lovers, fitness buffs, and nostalgic families.
            </p>
          </div>
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60">
            <div className="flex text-amber-500">
              <span className="material-symbols-outlined text-[20px]">star</span>
              <span className="material-symbols-outlined text-[20px]">star</span>
              <span className="material-symbols-outlined text-[20px]">star</span>
              <span className="material-symbols-outlined text-[20px]">star</span>
              <span className="material-symbols-outlined text-[20px]">star</span>
            </div>
            <div>
              <p className="text-sm font-black text-navy-900 dark:text-white">4.9 / 5.0 Rating</p>
              <p className="text-[10px] text-slate-500 dark:text-slate-400">Verified Dairy Consumers</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 rounded-3xl bg-background-light dark:bg-navy-900 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex text-amber-500">
                <span className="material-symbols-outlined text-[18px]">star</span>
                <span className="material-symbols-outlined text-[18px]">star</span>
                <span className="material-symbols-outlined text-[18px]">star</span>
                <span className="material-symbols-outlined text-[18px]">star</span>
                <span className="material-symbols-outlined text-[18px]">star</span>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
                "Nothing beats coming back home from playing cricket in 42°C Delhi heat and downing an ice-cold Amul Kool Rose bottle. The floral rose fragrance is unmatched!"
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-pink-100 dark:bg-pink-900 text-primary font-bold flex items-center justify-center text-sm">
                RK
              </div>
              <div>
                <p className="text-xs font-bold text-navy-900 dark:text-white">Rohit Khanna</p>
                <p className="text-[10px] text-slate-400">Verified Buyer • New Delhi</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-background-light dark:bg-navy-900 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex text-amber-500">
                <span className="material-symbols-outlined text-[18px]">star</span>
                <span className="material-symbols-outlined text-[18px]">star</span>
                <span className="material-symbols-outlined text-[18px]">star</span>
                <span className="material-symbols-outlined text-[18px]">star</span>
                <span className="material-symbols-outlined text-[18px]">star</span>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
                "I stopped giving soda to my children. Amul Kool Rose gives them real cow milk calcium and protein, and they absolutely love the sweet pink gulab flavor!"
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 font-bold flex items-center justify-center text-sm">
                SP
              </div>
              <div>
                <p className="text-xs font-bold text-navy-900 dark:text-white">Sneha Patel</p>
                <p className="text-[10px] text-slate-400">Verified Buyer • Ahmedabad</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-background-light dark:bg-navy-900 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex text-amber-500">
                <span className="material-symbols-outlined text-[18px]">star</span>
                <span className="material-symbols-outlined text-[18px]">star</span>
                <span className="material-symbols-outlined text-[18px]">star</span>
                <span className="material-symbols-outlined text-[18px]">star</span>
                <span className="material-symbols-outlined text-[18px]">star</span>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
                "We ordered 5 crates of the Party Pack for my sister’s Mehendi function. Served it chilled with crushed pistachios — absolute crowd favorite of the night!"
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-400 font-bold flex items-center justify-center text-sm">
                AM
              </div>
              <div>
                <p className="text-xs font-bold text-navy-900 dark:text-white">Aditya Menon</p>
                <p className="text-[10px] text-slate-400">Verified Buyer • Bengaluru</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
