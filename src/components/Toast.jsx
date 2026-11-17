import React from 'react';

export default function Toast({ message }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-[#120d11] text-white border border-primary px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 animate-slide-up">
      <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
      <span className="text-sm font-sans font-medium">{message}</span>
    </div>
  );
}
