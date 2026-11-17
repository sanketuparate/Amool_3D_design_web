import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-400 py-16 border-t border-navy-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-navy-800">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center text-white font-black text-sm">
                AK
              </div>
              <span className="text-xl font-bold text-white tracking-tight">Amul Kool</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Gujarat Cooperative Milk Marketing Federation Ltd. (GCMMF), Anand 388001, Gujarat, India. The Taste of India.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>FSSAI Lic. No. 10012021000071</span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Other Kool Flavors</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a className="hover:text-primary transition-colors" href="#">Amul Kool Kesar (Saffron)</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Amul Kool Elaichi (Cardamom)</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Amul Kool Badam (Almond)</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Amul Kool Strawberry</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Amul Kool Cafe (Iced Coffee)</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a className="hover:text-primary transition-colors" href="#experience">Sensory Profile</a></li>
              <li><a className="hover:text-primary transition-colors" href="#nutrition">Lab Nutrition Certification</a></li>
              <li><a className="hover:text-primary transition-colors" href="#packs">Wholesale &amp; Institutional</a></li>
              <li><a className="hover:text-primary transition-colors" href="#faq">Quality Assurance &amp; Safety</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Find an Amul Parlour</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Toll Free Helpline</h4>
            <p className="text-lg font-black text-white">1800 258 3333</p>
            <p className="text-xs text-slate-400 mt-1">Available 24x7 for customer assistance &amp; feedback.</p>
            <div className="mt-6 flex items-center gap-3">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-navy-900 border border-navy-700 text-[11px] text-slate-300">
                🇮🇳 Made in Gujarat, India
              </span>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2025 Gujarat Co-operative Milk Marketing Federation (GCMMF). All Rights Reserved.</p>
          <div className="flex gap-6">
            <a className="hover:text-slate-400 transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-slate-400 transition-colors" href="#">Terms of Service</a>
            <a className="hover:text-slate-400 transition-colors" href="#">FSSAI Compliance</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
