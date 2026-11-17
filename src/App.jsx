import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import ScrollAnimation from './components/ScrollAnimation';
import Experience from './components/Experience';
import Nutrition from './components/Nutrition';
import Ritual from './components/Ritual';
import Packs from './components/Packs';
import Reviews from './components/Reviews';
import Faq from './components/Faq';
import StoreLocator from './components/StoreLocator';
import Footer from './components/Footer';
import Toast from './components/Toast';

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [toastMessage, setToastMessage] = useState('');
  const [soundEnabled, setSoundEnabled] = useState(false);

  const audioCtxRef = useRef(null);
  const gainNodeRef = useRef(null);
  const toastTimerRef = useRef(null);

  // Sync dark class on documentElement
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    toastTimerRef.current = setTimeout(() => {
      setToastMessage('');
    }, 3200);
  };

  // Ambient sound synthesizer
  const toggleSound = () => {
    if (!audioCtxRef.current) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioContext();
      audioCtxRef.current = ctx;

      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(65, ctx.currentTime);

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(380, ctx.currentTime);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.001, ctx.currentTime);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      osc.start();

      gainNodeRef.current = gain;
    }

    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }

    if (!soundEnabled) {
      gainNodeRef.current.gain.setTargetAtTime(0.06, audioCtxRef.current.currentTime, 0.2);
      setSoundEnabled(true);
      showToast('Ambient Soundscape Activated');
    } else {
      gainNodeRef.current.gain.setTargetAtTime(0.0001, audioCtxRef.current.currentTime, 0.2);
      setSoundEnabled(false);
      showToast('Ambient Soundscape Muted');
    }
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 transition-colors duration-300">
      
      {/* Sticky Header Navbar */}
      <Navbar 
        isDark={isDark} 
        onToggleTheme={toggleTheme} 
        soundEnabled={soundEnabled}
        onToggleSound={toggleSound}
      />

      {/* Main Scroll Animation Hero Section */}
      <ScrollAnimation onActionClick={showToast} />

      {/* Full Content Sections from code.html */}
      <main>
        <Experience />
        <Nutrition />
        <Ritual />
        <Packs onAddToCart={(item) => showToast(`Added: ${item}`)} />
        <Reviews />
        <Faq />
        <StoreLocator onFindStore={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Toast Notification */}
      <Toast message={toastMessage} />

    </div>
  );
}
