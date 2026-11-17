import React, { useEffect, useRef, useState, useCallback } from 'react';

const TOTAL_FRAMES = 235;
const pad = (n) => String(n).padStart(3, '0');

export default function ScrollAnimation({ onActionClick }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const currentFrameRef = useRef(0);
  const playAnimRef = useRef(null);

  const [loadedCount, setLoadedCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isCoverMode, setIsCoverMode] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);

  // Preload all 235 frames
  useEffect(() => {
    let count = 0;
    const images = [];

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = `/frames/ezgif-frame-${pad(i)}.jpg`;

      img.onload = () => {
        count++;
        setLoadedCount(count);
        // Paint initial frame as soon as frame 1 arrives
        if (count === 1) {
          renderFrame(0);
        }
        if (count >= TOTAL_FRAMES) {
          setIsLoaded(true);
        }
      };

      img.onerror = () => {
        count++;
        setLoadedCount(count);
        if (count >= TOTAL_FRAMES) {
          setIsLoaded(true);
        }
      };

      images.push(img);
    }

    imagesRef.current = images;
  }, []);

  // Draw Specific Frame to Canvas
  const renderFrame = useCallback((frameIdx) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const safeIdx = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.round(frameIdx)));
    const img = imagesRef.current[safeIdx];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const w = canvas.width;
    const h = canvas.height;

    // Fill dark background
    ctx.fillStyle = '#080507';
    ctx.fillRect(0, 0, w, h);

    const imgRatio = img.naturalWidth / img.naturalHeight;
    const screenRatio = w / h;
    let drawW, drawH, drawX, drawY;

    if (isCoverMode) {
      if (screenRatio > imgRatio) {
        drawW = w;
        drawH = w / imgRatio;
        drawX = 0;
        drawY = (h - drawH) / 2;
      } else {
        drawH = h;
        drawW = h * imgRatio;
        drawX = (w - drawW) / 2;
        drawY = 0;
      }
    } else {
      // Contain (show entire image centered without cropping)
      if (screenRatio > imgRatio) {
        drawH = h;
        drawW = h * imgRatio;
        drawX = (w - drawW) / 2;
        drawY = 0;
      } else {
        drawW = w;
        drawH = drawW / imgRatio;
        drawX = 0;
        drawY = (h - drawH) / 2;
      }
    }

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(img, drawX, drawY, drawW, drawH);
  }, [isCoverMode]);

  // Handle Resize with DevicePixelRatio
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      renderFrame(currentFrameRef.current);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [renderFrame]);

  // Window Scroll Event -> Frame Index
  useEffect(() => {
    const handleScroll = () => {
      if (isPlaying) return;
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const maxScroll = rect.height - window.innerHeight;
      if (maxScroll <= 0) return;

      const progress = Math.max(0, Math.min(1, -rect.top / maxScroll));
      const targetFrame = Math.floor(progress * (TOTAL_FRAMES - 1));

      if (targetFrame !== currentFrameRef.current) {
        currentFrameRef.current = targetFrame;
        setCurrentFrame(targetFrame);
        renderFrame(targetFrame);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isPlaying, renderFrame]);

  // Auto-Play Cinema Mode (30fps)
  useEffect(() => {
    if (!isPlaying) {
      if (playAnimRef.current) cancelAnimationFrame(playAnimRef.current);
      return;
    }

    let lastTime = performance.now();
    const frameInterval = 1000 / (30 * playbackSpeed);

    const step = (now) => {
      if (now - lastTime >= frameInterval) {
        lastTime = now;
        currentFrameRef.current = (currentFrameRef.current + 1) % TOTAL_FRAMES;
        setCurrentFrame(currentFrameRef.current);
        renderFrame(currentFrameRef.current);
      }
      playAnimRef.current = requestAnimationFrame(step);
    };

    playAnimRef.current = requestAnimationFrame(step);
    return () => {
      if (playAnimRef.current) cancelAnimationFrame(playAnimRef.current);
    };
  }, [isPlaying, playbackSpeed, renderFrame]);

  // Handle Manual Slider Scrub
  const handleSliderScrub = (e) => {
    const frame = parseInt(e.target.value, 10);
    currentFrameRef.current = frame;
    setCurrentFrame(frame);
    renderFrame(frame);

    // Scroll window smoothly to match slider position
    const container = containerRef.current;
    if (container) {
      const rect = container.getBoundingClientRect();
      const maxScroll = rect.height - window.innerHeight;
      const scrollTarget = window.scrollY + rect.top + (frame / (TOTAL_FRAMES - 1)) * maxScroll;
      window.scrollTo({ top: scrollTarget, behavior: 'auto' });
    }
  };

  // Jump to specific milestone
  const jumpToMilestone = (progressFraction) => {
    const targetFrame = Math.floor(progressFraction * (TOTAL_FRAMES - 1));
    currentFrameRef.current = targetFrame;
    setCurrentFrame(targetFrame);
    renderFrame(targetFrame);

    const container = containerRef.current;
    if (container) {
      const rect = container.getBoundingClientRect();
      const maxScroll = rect.height - window.innerHeight;
      const scrollTarget = window.scrollY + rect.top + (progressFraction * maxScroll);
      window.scrollTo({ top: scrollTarget, behavior: 'smooth' });
    }
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.code === 'Space') {
        e.preventDefault();
        setIsPlaying((prev) => !prev);
      } else if (e.code === 'ArrowRight' || e.code === 'ArrowDown') {
        e.preventDefault();
        const next = Math.min(TOTAL_FRAMES - 1, currentFrameRef.current + 1);
        currentFrameRef.current = next;
        setCurrentFrame(next);
        renderFrame(next);
      } else if (e.code === 'ArrowLeft' || e.code === 'ArrowUp') {
        e.preventDefault();
        const prev = Math.max(0, currentFrameRef.current - 1);
        currentFrameRef.current = prev;
        setCurrentFrame(prev);
        renderFrame(prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [renderFrame]);

  const loadPercent = Math.min(100, Math.floor((loadedCount / TOTAL_FRAMES) * 100));

  return (
    <section ref={containerRef} className="relative h-[420vh] w-full bg-[#080507]" id="animation-hero">
      
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center bg-[#080507]">
        
        {/* Dynamic Ambient Glow */}
        <div 
          className="absolute w-[70vw] h-[70vh] rounded-full pointer-events-none filter blur-[90px] transition-opacity duration-500"
          style={{
            background: 'radial-gradient(circle, rgba(230,57,110,0.28) 0%, rgba(160,35,70,0.12) 50%, transparent 75%)',
            opacity: 0.5 + (currentFrame / TOTAL_FRAMES) * 0.5
          }}
        />

        {/* HTML5 Canvas for Full-Resolution Frame Rendering */}
        <canvas ref={canvasRef} className="w-full h-full block relative z-10" />

        {/* Cinematic Vignette */}
        <div className="absolute inset-0 z-20 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,transparent_45%,rgba(6,4,5,0.6)_80%,rgba(4,2,3,0.95)_100%)]" />

        {/* Preloader Overlay (Fades out when loaded) */}
        {!isLoaded && (
          <div className="absolute inset-0 z-50 bg-[#080507]/90 backdrop-blur-md flex flex-col items-center justify-center gap-4 text-white">
            <div className="w-16 h-16 rounded-full border-2 border-pink-500/20 border-t-primary animate-spin shadow-lg shadow-pink-500/30" />
            <div className="text-center">
              <h3 className="font-heading font-black tracking-widest text-lg uppercase text-white">AMUL KOOL ROSE</h3>
              <p className="text-xs font-mono text-pink-400 uppercase tracking-widest mt-1">Caching Frames ({loadPercent}%)</p>
            </div>
            <div className="w-64 h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary to-rose-400 rounded-full transition-all duration-150"
                style={{ width: `${loadPercent}%` }}
              />
            </div>
            <span className="text-[11px] font-mono text-slate-400">{loadedCount} / {TOTAL_FRAMES} frames</span>
          </div>
        )}

        {/* Story Narrative Overlays (Synced with currentFrame) */}
        <div className="absolute inset-0 z-30 pointer-events-none flex items-center justify-center px-6 sm:px-16">
          
          {/* Act 1 (Frames 0 - 55) */}
          <div className={`absolute left-6 sm:left-16 max-w-md p-6 sm:p-8 rounded-3xl bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-700 pointer-events-auto ${
            currentFrame < 55 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95 pointer-events-none'
          }`}>
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-widest uppercase bg-primary/20 text-pink-400 border border-primary/30 mb-3">
              01 // Pure Amul Dairy
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight font-heading">
              The Velocity of Purity
            </h2>
            <p className="text-slate-300 text-sm mt-3 leading-relaxed">
              100% pasteurized fresh Amul milk whirling in kinetic zero-gravity equilibrium. Cold-filtered, untouched, brimming with natural bioavailable calcium and wholesome dairy proteins.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-200">Fresh Cow &amp; Buffalo Milk</span>
              <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-200">Zero Preservatives</span>
            </div>
          </div>

          {/* Act 2 (Frames 60 - 120) */}
          <div className={`absolute right-6 sm:right-16 max-w-md p-6 sm:p-8 rounded-3xl bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-700 pointer-events-auto ${
            currentFrame >= 60 && currentFrame < 120 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95 pointer-events-none'
          }`}>
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-widest uppercase bg-primary/20 text-pink-400 border border-primary/30 mb-3">
              02 // Damascus Rose Infusion
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight font-heading">
              Sculpted by Fluid Dynamics
            </h2>
            <p className="text-slate-300 text-sm mt-3 leading-relaxed">
              Centrifugal vortices fold authentic Damascus rose essence into the velvety milk layers, generating aromatic pink ribbons that soothe the senses and cool you down instantly.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-200">Damascus Rose Petals</span>
              <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-200">Natural Cooling Effect</span>
            </div>
          </div>

          {/* Act 3 (Frames 125 - 180) */}
          <div className={`absolute left-6 sm:left-16 max-w-md p-6 sm:p-8 rounded-3xl bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-700 pointer-events-auto ${
            currentFrame >= 125 && currentFrame < 180 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95 pointer-events-none'
          }`}>
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-widest uppercase bg-primary/20 text-pink-400 border border-primary/30 mb-3">
              03 // Chilled at 4°C
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight font-heading">
              Structure Crystallizes
            </h2>
            <p className="text-slate-300 text-sm mt-3 leading-relaxed">
              Under laminar fluid motion, the swirling rose dairy stream solidifies into the ergonomic 200ml bottle silhouette, locked at peak freshness with airtight sealing.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-200">200ml Portable Bottle</span>
              <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-200">Airtight Freshness Seal</span>
            </div>
          </div>

          {/* Act 4 (Frames 185 - 234) */}
          <div className={`absolute right-6 sm:right-16 max-w-md p-6 sm:p-8 rounded-3xl bg-black/60 backdrop-blur-xl border border-pink-500/30 shadow-2xl transition-all duration-700 pointer-events-auto ${
            currentFrame >= 185 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95 pointer-events-none'
          }`}>
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-widest uppercase bg-primary text-white mb-3 shadow-md shadow-pink-500/40">
              04 // The Chilled Icon
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight font-heading">
              Amul Kool Rose
            </h2>
            <p className="text-slate-300 text-sm mt-3 leading-relaxed">
              Born from fluid motion into India's most beloved refreshment. Creamy, aromatic, and best served ice-cold straight from the fridge.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/10 text-xs font-mono text-pink-300 font-bold">₹25 Solo Bottle</span>
              <span className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/10 text-xs font-mono text-slate-200">6.2g Protein</span>
              <span className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/10 text-xs font-mono text-slate-200">180-Day Shelf Life</span>
            </div>
            <div className="flex gap-3 mt-6">
              <a 
                href="#packs"
                className="px-6 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-bold shadow-lg shadow-pink-500/30 transition-all hover:scale-105"
              >
                Buy Chiller Pack
              </a>
              <a 
                href="#experience"
                className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20 transition-all"
              >
                Explore Sips
              </a>
            </div>
          </div>

        </div>

        {/* Milestone Bullets on Right Edge */}
        <div className="hidden lg:flex flex-col gap-3 absolute right-6 top-1/2 -translate-y-1/2 z-30">
          {[
            { label: '01 Motion', fraction: 0.05 },
            { label: '02 Vortex', fraction: 0.35 },
            { label: '03 Chilling', fraction: 0.65 },
            { label: '04 Bottle', fraction: 0.95 },
          ].map((item, idx) => {
            const isActive = Math.abs(currentFrame / (TOTAL_FRAMES - 1) - item.fraction) < 0.18;
            return (
              <button
                key={idx}
                onClick={() => jumpToMilestone(item.fraction)}
                className="flex items-center gap-2 group cursor-pointer text-right justify-end"
                title={`Jump to ${item.label}`}
              >
                <span className={`text-[10px] font-mono tracking-wider transition-opacity duration-300 ${
                  isActive ? 'text-primary font-bold opacity-100' : 'text-slate-400 opacity-0 group-hover:opacity-100'
                }`}>
                  {item.label}
                </span>
                <span className={`w-2.5 h-2.5 rounded-full border transition-all duration-300 ${
                  isActive ? 'bg-primary border-primary scale-125 shadow-md shadow-pink-500/50' : 'border-white/30 bg-transparent group-hover:border-primary'
                }`} />
              </button>
            );
          })}
        </div>

        {/* Scroll Instruction Hint (fades after start) */}
        {currentFrame < 8 && (
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 pointer-events-none flex flex-col items-center gap-2 animate-bounce">
            <div className="w-5 h-8 rounded-full border-2 border-primary flex justify-center pt-1">
              <div className="w-1 h-2 rounded-full bg-primary animate-pulse" />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold">
              Scroll Down to Sculpt
            </span>
          </div>
        )}

      </div>

    </section>
  );
}
