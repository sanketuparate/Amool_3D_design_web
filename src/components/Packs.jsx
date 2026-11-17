import React from 'react';

export default function Packs({ onAddToCart }) {
  return (
    <section className="py-20 bg-rosecream/30 dark:bg-background-dark transition-colors" id="packs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-extrabold tracking-widest text-primary uppercase">Stock Your Fridge</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 dark:text-white mt-2">
            Choose Your Chiller Pack
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Delivered directly to your doorstep in insulated temperature-controlled cold packaging.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Single Bottle */}
          <div className="bg-white dark:bg-navy-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Trial Grab</span>
                <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">Single</span>
              </div>
              <h3 className="text-2xl font-bold text-navy-900 dark:text-white">Single Bottle</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">200ml Individual Bottle</p>
              <div className="my-6">
                <span className="text-4xl font-black text-navy-900 dark:text-white">₹25</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 ml-1">incl. all taxes</span>
              </div>
              <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-300 mb-8 border-t border-slate-100 dark:border-slate-800 pt-6">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-500 text-[18px]">check</span>
                  <span>Perfect on-the-go quick refresher</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-500 text-[18px]">check</span>
                  <span>Fits in any backpack side pocket</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-500 text-[18px]">check</span>
                  <span>Ideal for a quick workout cooldown</span>
                </li>
              </ul>
            </div>
            <button 
              onClick={() => onAddToCart('Single Bottle (200ml) - ₹25')}
              className="w-full py-3.5 px-4 rounded-2xl border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold text-sm transition-all duration-200 cursor-pointer"
            >
              Add to Basket
            </button>
          </div>

          {/* Pack of 6 */}
          <div className="relative bg-white dark:bg-navy-900 rounded-3xl p-8 border-2 border-primary shadow-rose-glow flex flex-col justify-between">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-white text-xs font-black tracking-wide uppercase shadow">
              Most Popular Crate
            </div>
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">Weekly Reserve</span>
                <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-pink-100 dark:bg-pink-950 text-primary">6 Bottles</span>
              </div>
              <h3 className="text-2xl font-bold text-navy-900 dark:text-white">Pack of 6 Crate</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">6 x 200ml Tasting Bundle</p>
              <div className="my-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-navy-900 dark:text-white">₹145</span>
                  <span className="text-sm line-through text-slate-400">₹150</span>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">Save ₹5</span>
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400">₹24.1 / bottle</span>
              </div>
              <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-300 mb-8 border-t border-slate-100 dark:border-slate-800 pt-6">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px]">check</span>
                  <span>Heavy-duty insulated carry handle carton</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px]">check</span>
                  <span>Full week chilled breakfast companion</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px]">check</span>
                  <span>Free chilled priority delivery</span>
                </li>
              </ul>
            </div>
            <button 
              onClick={() => onAddToCart('Pack of 6 Crate (6 x 200ml) - ₹145')}
              className="w-full py-3.5 px-4 rounded-2xl bg-primary hover:bg-primary-hover text-white font-bold text-sm shadow-md shadow-pink-500/30 transition-all duration-200 cursor-pointer"
            >
              Buy Pack of 6 Now
            </button>
          </div>

          {/* Party Pack */}
          <div className="bg-white dark:bg-navy-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Mega Value</span>
                <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400">24 Bottles</span>
              </div>
              <h3 className="text-2xl font-bold text-navy-900 dark:text-white">Party Pack of 24</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">24 x 200ml Family Box</p>
              <div className="my-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-navy-900 dark:text-white">₹540</span>
                  <span className="text-sm line-through text-slate-400">₹600</span>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">Save ₹60 (10% OFF)</span>
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400">Best price for weddings &amp; celebrations</span>
              </div>
              <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-300 mb-8 border-t border-slate-100 dark:border-slate-800 pt-6">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-500 text-[18px]">check</span>
                  <span>Long 180-day shelf life guarantee</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-500 text-[18px]">check</span>
                  <span>Bulk carton delivery to doorstep</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-500 text-[18px]">check</span>
                  <span>Lowest price per 200ml bottle</span>
                </li>
              </ul>
            </div>
            <button 
              onClick={() => onAddToCart('Party Pack of 24 (24 x 200ml) - ₹540')}
              className="w-full py-3.5 px-4 rounded-2xl border-2 border-slate-800 dark:border-slate-600 text-navy-900 dark:text-white hover:bg-navy-900 hover:text-white dark:hover:bg-slate-800 font-bold text-sm transition-all duration-200 cursor-pointer"
            >
              Order Party Pack
            </button>
          </div>

        </div>

        {/* Quick Commerce 15-Minute Delivery */}
        <div className="mt-12 p-6 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950 flex items-center justify-center text-amber-600 flex-shrink-0">
              <span className="material-symbols-outlined text-[24px]">electric_moped</span>
            </div>
            <div>
              <h4 className="text-base font-bold text-navy-900 dark:text-white">Need it right now ice-cold in 15 minutes?</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">Order from your preferred instant quick commerce partners nearby.</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
              ⚡ Blinkit
            </div>
            <div className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
              ⚡ Zepto
            </div>
            <div className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
              ⚡ Swiggy Instamart
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
