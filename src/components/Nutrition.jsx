import React, { useState } from 'react';

export default function Nutrition() {
  const [servingMode, setServingMode] = useState('200ml');

  return (
    <section className="py-20 bg-rosecream/40 dark:bg-navy-900/30 border-y border-pink-100/80 dark:border-slate-800" id="nutrition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-extrabold tracking-widest text-primary uppercase">Transparent Goodness</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 dark:text-white mt-2">
            Bottle Anatomy &amp; Nutritional Truth
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Engineered for freshness, certified 100% vegetarian, and designed with genuine wholesome dairy nourishment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Packaging Anatomy Showcase */}
          <div className="lg:col-span-5 relative flex items-center justify-center p-6 bg-white dark:bg-navy-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <img 
              alt="Amul Kool Rose Packaging Anatomy" 
              className="h-[380px] sm:h-[440px] w-auto object-contain z-10 rounded-2xl" 
              src="/frames/ezgif-frame-235.jpg"
            />
            
            <div className="absolute top-10 left-6 sm:left-8 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-3 rounded-2xl border border-pink-200 dark:border-slate-700 shadow-md max-w-[160px] z-20">
              <div className="flex items-center gap-1.5 text-xs font-bold text-navy-900 dark:text-white">
                <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                <span>Airtight Seal</span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Retains freshness &amp; locked rose fragrance.</p>
            </div>

            <div className="absolute bottom-20 left-6 sm:left-8 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-3 rounded-2xl border border-pink-200 dark:border-slate-700 shadow-md max-w-[160px] z-20">
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                <span className="w-2.5 h-2.5 rounded-full border border-emerald-600 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                </span>
                <span>Green Dot Certified</span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">100% Pure Vegetarian Milk.</p>
            </div>

            <div className="absolute top-1/2 right-4 sm:right-6 -translate-y-1/2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-3 rounded-2xl border border-pink-200 dark:border-slate-700 shadow-md max-w-[160px] z-20">
              <div className="flex items-center gap-1.5 text-xs font-bold text-navy-900 dark:text-white">
                <span className="material-symbols-outlined text-[16px] text-amber-500">wb_sunny</span>
                <span>UV Shield Barrier</span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Prevents flavor oxidation &amp; light damage.</p>
            </div>
          </div>

          {/* Nutritional Breakdown Table */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white dark:bg-navy-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 dark:border-slate-800 gap-3">
                <div>
                  <h3 className="text-2xl font-extrabold text-navy-900 dark:text-white">Nutrition Facts</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Per 100ml &amp; 200ml Full Bottle Serving</p>
                </div>
                <div className="inline-flex p-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-semibold">
                  <button 
                    onClick={() => setServingMode('200ml')}
                    className={`px-3 py-1 rounded-full transition-all ${
                      servingMode === '200ml' 
                        ? 'bg-primary text-white shadow-sm font-bold' 
                        : 'text-slate-500 dark:text-slate-400 hover:text-slate-700'
                    }`}
                  >
                    Standard (200ml)
                  </button>
                  <button 
                    onClick={() => setServingMode('100ml')}
                    className={`px-3 py-1 rounded-full transition-all ${
                      servingMode === '100ml' 
                        ? 'bg-primary text-white shadow-sm font-bold' 
                        : 'text-slate-500 dark:text-slate-400 hover:text-slate-700'
                    }`}
                  >
                    100ml
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-6">
                
                <div className="p-3.5 rounded-2xl bg-rose-50/60 dark:bg-navy-950/60 border border-pink-100 dark:border-slate-800">
                  <span className="text-xs text-slate-500 dark:text-slate-400">Energy</span>
                  <p className="text-xl font-black text-navy-900 dark:text-white mt-0.5">
                    {servingMode === '200ml' ? '170' : '85'} <span className="text-xs font-bold text-primary">kcal</span>
                  </p>
                  <p className="text-[10px] text-slate-400">{servingMode === '200ml' ? '8.5% of Daily Value' : '4.2% of Daily Value'}</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-rose-50/60 dark:bg-navy-950/60 border border-pink-100 dark:border-slate-800">
                  <span className="text-xs text-slate-500 dark:text-slate-400">Dairy Protein</span>
                  <p className="text-xl font-black text-navy-900 dark:text-white mt-0.5">
                    {servingMode === '200ml' ? '6.2' : '3.1'} <span className="text-xs font-bold text-primary">g</span>
                  </p>
                  <p className="text-[10px] text-slate-400">Complete Milk Aminos</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-rose-50/60 dark:bg-navy-950/60 border border-pink-100 dark:border-slate-800">
                  <span className="text-xs text-slate-500 dark:text-slate-400">Natural Calcium</span>
                  <p className="text-xl font-black text-navy-900 dark:text-white mt-0.5">
                    {servingMode === '200ml' ? '220' : '110'} <span className="text-xs font-bold text-primary">mg</span>
                  </p>
                  <p className="text-[10px] text-slate-400">Bone Strength Support</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-navy-950/40 border border-slate-100 dark:border-slate-800">
                  <span className="text-xs text-slate-500 dark:text-slate-400">Total Fat</span>
                  <p className="text-xl font-black text-navy-900 dark:text-white mt-0.5">
                    {servingMode === '200ml' ? '5.0' : '2.5'} <span className="text-xs font-bold text-slate-500">g</span>
                  </p>
                  <p className="text-[10px] text-slate-400">Zero Trans Fat</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-navy-950/40 border border-slate-100 dark:border-slate-800">
                  <span className="text-xs text-slate-500 dark:text-slate-400">Carbohydrates</span>
                  <p className="text-xl font-black text-navy-900 dark:text-white mt-0.5">
                    {servingMode === '200ml' ? '24.0' : '12.0'} <span className="text-xs font-bold text-slate-500">g</span>
                  </p>
                  <p className="text-[10px] text-slate-400">Lactose + Cane Sugar</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-navy-950/40 border border-slate-100 dark:border-slate-800">
                  <span className="text-xs text-slate-500 dark:text-slate-400">Added Cane Sugar</span>
                  <p className="text-xl font-black text-navy-900 dark:text-white mt-0.5">
                    {servingMode === '200ml' ? '17.0' : '8.5'} <span className="text-xs font-bold text-slate-500">g</span>
                  </p>
                  <p className="text-[10px] text-slate-400">Optimal sweetness</p>
                </div>

              </div>

              {/* Comparison Highlight */}
              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[20px]">thumb_up</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-emerald-900 dark:text-emerald-200">Better Choice Than Carbonated Soda</h4>
                    <p className="text-xs text-emerald-700 dark:text-emerald-400">Zero empty chemical calories. Supplies vital electrolytes, milk proteins, and natural hydration.</p>
                  </div>
                </div>
                <span className="px-3 py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-black tracking-wide whitespace-nowrap">
                  100% Real Dairy
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
