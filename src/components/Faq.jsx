import React from 'react';

export default function Faq() {
  return (
    <section className="py-20 bg-rosecream/40 dark:bg-navy-900/30 border-y border-pink-100/80 dark:border-slate-800" id="faq">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-extrabold tracking-widest text-primary uppercase">Got Questions?</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 dark:text-white mt-2">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm">
            Everything you need to know about shelf life, refrigeration, and ingredients.
          </p>
        </div>

        <div className="space-y-4">
          
          <details className="group bg-white dark:bg-navy-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 [&_summary::-webkit-details-marker]:hidden" open>
            <summary className="flex items-center justify-between cursor-pointer font-bold text-navy-900 dark:text-white text-base">
              <span>What is the shelf life of Amul Kool Rose Milk?</span>
              <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
            </summary>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
              Amul Kool Rose has a sealed shelf life of <strong>180 days (6 months)</strong> from the date of manufacture. Because of our advanced ultra-high temperature sterilization (UHT) process and airtight sealing, it does not require refrigeration until opened. Once opened, consume immediately or refrigerate and consume within 24 hours.
            </p>
          </details>

          <details className="group bg-white dark:bg-navy-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between cursor-pointer font-bold text-navy-900 dark:text-white text-base">
              <span>Does Amul Kool contain any artificial chemical preservatives?</span>
              <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
            </summary>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
              No. Amul Kool contains <strong>zero chemical preservatives</strong>. The long room-temperature shelf life is achieved strictly through thermal sterilization technology that eliminates bacteria while preserving the rich taste, bioavailable calcium, and dairy proteins.
            </p>
          </details>

          <details className="group bg-white dark:bg-navy-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between cursor-pointer font-bold text-navy-900 dark:text-white text-base">
              <span>Is the plastic bottle fully recyclable?</span>
              <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
            </summary>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
              Yes, our 200ml bottles are manufactured from 100% recyclable food-grade PET plastic. Please rinse after drinking and discard in your designated plastic recycling bin.
            </p>
          </details>

          <details className="group bg-white dark:bg-navy-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between cursor-pointer font-bold text-navy-900 dark:text-white text-base">
              <span>Can I order bulk crates for weddings, cafes, or school canteens?</span>
              <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
            </summary>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
              Yes! We provide dedicated institutional supply and customized event pricing for orders exceeding 10 crates (240 bottles). Please reach out to your nearest GCMMF regional branch office or submit an inquiry through our retail portal.
            </p>
          </details>

        </div>

        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-navy-900 to-navy-800 text-white flex flex-col md:flex-row items-center gap-6 shadow-xl">
          <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 text-amber-300">
            <span className="material-symbols-outlined text-[36px]">agriculture</span>
          </div>
          <div>
            <h4 className="text-xl font-bold">Empowering 3.6 Million Indian Dairy Farmers</h4>
            <p className="text-sm text-slate-300 mt-1 leading-relaxed">
              Every bottle of Amul Kool you enjoy directly supports the Gujarat Co-operative Milk Marketing Federation (GCMMF), returning up to 80% of consumer rupee directly to local village dairy farmers.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
