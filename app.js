/**
 * LACTEA — Fluid Scrollytelling Engine
 * 235 Frame Canvas Renderer with Smooth Momentum & Interactive HUD
 */

(function () {
  'use strict';

  // Configuration
  const TOTAL_FRAMES = 235;
  const FRAME_PREFIX = 'frames/ezgif-frame-';
  const FRAME_EXT = '.jpg';
  
  // Elements
  const preloader = document.getElementById('preloader');
  const loaderBarFill = document.getElementById('loader-bar-fill');
  const loaderPercent = document.getElementById('loader-percent');
  const loaderCount = document.getElementById('loader-count');
  const scrollTrack = document.getElementById('scroll-track');
  const canvas = document.getElementById('scroll-canvas');
  const ctx = canvas.getContext('2d', { alpha: false });
  const ambientGlow = document.getElementById('ambient-glow');

  // HUD Elements
  const timelineScrubber = document.getElementById('timeline-scrubber');
  const timelineFill = document.getElementById('timeline-fill');
  const playBtn = document.getElementById('play-btn');
  const playIcon = document.getElementById('play-icon');
  const pauseIcon = document.getElementById('pause-icon');
  const hudFrameNum = document.getElementById('hud-frame-num');
  const hudPercent = document.getElementById('hud-percent');
  const hudVelocity = document.getElementById('hud-velocity');
  const fitBtn = document.getElementById('fit-btn');
  const speedBtn = document.getElementById('speed-btn');
  const soundBtn = document.getElementById('sound-btn');
  const fullscreenBtn = document.getElementById('fullscreen-btn');
  const scrollHint = document.getElementById('scroll-hint');

  // Story Cards & Bullets
  const storyCards = document.querySelectorAll('.story-card');
  const bulletItems = document.querySelectorAll('.bullet-item');
  const navLinks = document.querySelectorAll('.nav-link[data-target]');

  // Application State
  const images = [];
  let loadedCount = 0;
  let isAllLoaded = false;
  
  let targetFrameFloat = 0;
  let currentFrameFloat = 0;
  let displayedFrame = 0;
  
  let isPlaying = false;
  let playSpeed = 1.0;
  let playbackAnimId = null;
  let isUserScrubbing = false;
  let scaleMode = 'contain'; // 'contain' or 'cover'
  
  let lastScrollY = window.scrollY;
  let lastTimestamp = performance.now();
  let scrollVelocity = 0;

  // Web Audio Synth State
  let audioCtx = null;
  let isAudioEnabled = false;
  let ambientDroneGain = null;
  let osc1 = null;
  let osc2 = null;

  // Format frame number to 3-digit string (e.g., 001, 042, 235)
  function padZero(num) {
    return String(num).padStart(3, '0');
  }

  // Preload All Frames
  function preloadFrames() {
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameNum = padZero(i);
      img.src = `${FRAME_PREFIX}${frameNum}${FRAME_EXT}`;
      
      img.onload = () => {
        loadedCount++;
        const pct = Math.floor((loadedCount / TOTAL_FRAMES) * 100);
        
        loaderBarFill.style.width = `${pct}%`;
        loaderPercent.textContent = `${pct}%`;
        loaderCount.textContent = `${loadedCount} / ${TOTAL_FRAMES}`;

        // Render first frame as soon as available
        if (loadedCount === 1) {
          renderFrame(0);
        }

        if (loadedCount >= TOTAL_FRAMES) {
          onAllFramesLoaded();
        }
      };

      img.onerror = () => {
        console.warn(`Failed to load frame ${i}`);
        loadedCount++;
        if (loadedCount >= TOTAL_FRAMES) {
          onAllFramesLoaded();
        }
      };

      images.push(img);
    }
  }

  function onAllFramesLoaded() {
    isAllLoaded = true;
    setTimeout(() => {
      preloader.classList.add('loaded');
      renderFrame(displayedFrame);
    }, 400);
  }

  // Canvas Resize with High-DPI support
  function resizeCanvas() {
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
    
    renderFrame(displayedFrame);
  }

  // Draw Specific Frame to Canvas
  function renderFrame(index) {
    const dpr = window.devicePixelRatio || 1;
    const safeIndex = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.round(index)));
    const img = images[safeIndex];

    const w = canvas.clientWidth;
    const h = canvas.clientHeight;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Clear background
    ctx.fillStyle = '#080507';
    ctx.fillRect(0, 0, w, h);

    if (!img || !img.complete || img.naturalWidth === 0) {
      // Find closest loaded frame as fallback
      for (let offset = 1; offset < 30; offset++) {
        const prev = images[Math.max(0, safeIndex - offset)];
        if (prev && prev.complete && prev.naturalWidth > 0) {
          drawImageScaled(prev, w, h);
          return;
        }
        const next = images[Math.min(TOTAL_FRAMES - 1, safeIndex + offset)];
        if (next && next.complete && next.naturalWidth > 0) {
          drawImageScaled(next, w, h);
          return;
        }
      }
      return;
    }

    drawImageScaled(img, w, h);
  }

  function drawImageScaled(img, w, h) {
    const imgW = img.naturalWidth;
    const imgH = img.naturalHeight;

    let scale;
    if (scaleMode === 'cover') {
      scale = Math.max(w / imgW, h / imgH);
    } else {
      scale = Math.min(w / imgW, h / imgH);
    }

    const drawW = imgW * scale;
    const drawH = imgH * scale;
    const drawX = (w - drawW) / 2;
    const drawY = (h - drawH) / 2;

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(img, drawX, drawY, drawW, drawH);
  }

  // Update Story Overlays Based on Progress
  function updateStoryOverlays(fraction) {
    const acts = [
      { id: 'story-act-1', start: 0.00, end: 0.20 },
      { id: 'story-act-2', start: 0.26, end: 0.46 },
      { id: 'story-act-3', start: 0.52, end: 0.72 },
      { id: 'story-act-4', start: 0.78, end: 1.00 }
    ];

    storyCards.forEach(card => {
      const actId = card.id;
      const act = acts.find(a => a.id === actId);
      if (act && fraction >= act.start && fraction <= act.end) {
        card.classList.add('visible');
      } else {
        card.classList.remove('visible');
      }
    });

    // Update Right Bullet Navigation
    let activeChapter = 0;
    if (fraction >= 0.78) activeChapter = 3;
    else if (fraction >= 0.52) activeChapter = 2;
    else if (fraction >= 0.26) activeChapter = 1;
    else activeChapter = 0;

    bulletItems.forEach((b, idx) => {
      if (idx === activeChapter) b.classList.add('active');
      else b.classList.remove('active');
    });

    navLinks.forEach((link, idx) => {
      if (idx === activeChapter) link.classList.add('active');
      else link.classList.remove('active');
    });
  }

  // Main Render Loop (LERP momentum)
  function animationLoop(timestamp) {
    // Calculate scroll velocity
    const now = performance.now();
    const dt = Math.max(1, now - lastTimestamp);
    const scrollDelta = Math.abs(window.scrollY - lastScrollY);
    scrollVelocity = (scrollDelta / dt) * 100;
    lastScrollY = window.scrollY;
    lastTimestamp = now;

    // Ambient glow pulse with scroll velocity
    if (ambientGlow) {
      const intensity = Math.min(1.0, 0.4 + scrollVelocity * 0.05);
      ambientGlow.style.opacity = intensity.toFixed(2);
    }

    // Audio frequency shift with scroll velocity
    if (isAudioEnabled && osc1) {
      const freq = 65 + Math.min(120, scrollVelocity * 8);
      osc1.frequency.setTargetAtTime(freq, audioCtx.currentTime, 0.1);
    }

    // LERP current frame towards target frame
    if (!isPlaying) {
      const lerpSpeed = isUserScrubbing ? 0.35 : 0.16;
      currentFrameFloat += (targetFrameFloat - currentFrameFloat) * lerpSpeed;
      
      const frameToDraw = Math.round(currentFrameFloat);
      if (frameToDraw !== displayedFrame) {
        displayedFrame = frameToDraw;
        renderFrame(displayedFrame);
        updateHUD(displayedFrame / (TOTAL_FRAMES - 1));
      }
    }

    requestAnimationFrame(animationLoop);
  }

  // Update HUD Display
  function updateHUD(fraction) {
    const clampedPct = Math.max(0, Math.min(1, fraction));
    timelineFill.style.width = `${(clampedPct * 100).toFixed(2)}%`;
    hudFrameNum.textContent = padZero(Math.round(clampedPct * (TOTAL_FRAMES - 1)) + 1);
    hudPercent.textContent = `${(clampedPct * 100).toFixed(1)}%`;
    hudVelocity.textContent = `${Math.round(scrollVelocity * 5)} ml/s`;

    if (clampedPct > 0.03 && scrollHint) {
      scrollHint.classList.add('hidden');
    }
  }

  // On Scroll Event Handler
  function onScroll() {
    if (isPlaying) return;

    const trackRect = scrollTrack.getBoundingClientRect();
    const maxScroll = trackRect.height - window.innerHeight;
    const progress = Math.max(0, Math.min(1, -trackRect.top / maxScroll));

    targetFrameFloat = progress * (TOTAL_FRAMES - 1);
    updateStoryOverlays(progress);
  }

  // Scrubber Dragging / Clicking
  function seekToClientX(clientX) {
    const rect = timelineScrubber.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    
    // Jump scroll track
    const trackTop = window.scrollY + scrollTrack.getBoundingClientRect().top;
    const maxScroll = scrollTrack.offsetHeight - window.innerHeight;
    const targetScrollY = trackTop + (ratio * maxScroll);

    window.scrollTo({
      top: targetScrollY,
      behavior: 'auto'
    });

    targetFrameFloat = ratio * (TOTAL_FRAMES - 1);
    currentFrameFloat = targetFrameFloat;
    displayedFrame = Math.round(targetFrameFloat);
    renderFrame(displayedFrame);
    updateHUD(ratio);
    updateStoryOverlays(ratio);
  }

  // Timeline Event Listeners
  timelineScrubber.addEventListener('mousedown', (e) => {
    isUserScrubbing = true;
    seekToClientX(e.clientX);
    
    function onMouseMove(moveEvent) {
      if (isUserScrubbing) {
        seekToClientX(moveEvent.clientX);
      }
    }

    function onMouseUp() {
      isUserScrubbing = false;
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    }

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  });

  // Touch support for scrubber
  timelineScrubber.addEventListener('touchstart', (e) => {
    if (e.touches.length > 0) {
      isUserScrubbing = true;
      seekToClientX(e.touches[0].clientX);
    }
  }, { passive: true });

  timelineScrubber.addEventListener('touchmove', (e) => {
    if (isUserScrubbing && e.touches.length > 0) {
      seekToClientX(e.touches[0].clientX);
    }
  }, { passive: true });

  timelineScrubber.addEventListener('touchend', () => {
    isUserScrubbing = false;
  });

  // Auto-Play / Cinema Mode
  function togglePlay() {
    isPlaying = !isPlaying;
    if (isPlaying) {
      playIcon.style.display = 'none';
      pauseIcon.style.display = 'block';
      playBtn.style.background = 'var(--accent-gold)';
      playBtn.style.color = '#080507';
      startAutoPlay();
    } else {
      playIcon.style.display = 'block';
      pauseIcon.style.display = 'none';
      playBtn.style.background = 'rgba(229, 194, 128, 0.1)';
      playBtn.style.color = 'var(--accent-gold)';
      cancelAnimationFrame(playbackAnimId);
    }
  }

  let lastFrameTime = performance.now();
  function startAutoPlay() {
    function playStep(time) {
      if (!isPlaying) return;

      const interval = 1000 / (30 * playSpeed); // 30 FPS standard
      if (time - lastFrameTime >= interval) {
        lastFrameTime = time;
        targetFrameFloat = (targetFrameFloat + 1) % TOTAL_FRAMES;
        currentFrameFloat = targetFrameFloat;
        displayedFrame = Math.round(targetFrameFloat);
        
        renderFrame(displayedFrame);
        const progress = targetFrameFloat / (TOTAL_FRAMES - 1);
        updateHUD(progress);
        updateStoryOverlays(progress);

        // Also smoothly scroll page to match cinema mode
        const trackTop = window.scrollY + scrollTrack.getBoundingClientRect().top;
        const maxScroll = scrollTrack.offsetHeight - window.innerHeight;
        window.scrollTo({
          top: trackTop + (progress * maxScroll),
          behavior: 'auto'
        });
      }

      playbackAnimId = requestAnimationFrame(playStep);
    }
    lastFrameTime = performance.now();
    playbackAnimId = requestAnimationFrame(playStep);
  }

  // Speed Toggle (1x -> 1.5x -> 2x -> 0.5x -> 1x)
  const speeds = [1.0, 1.5, 2.0, 0.5];
  let speedIdx = 0;
  function cycleSpeed() {
    speedIdx = (speedIdx + 1) % speeds.length;
    playSpeed = speeds[speedIdx];
    speedBtn.textContent = `${playSpeed}x`;
  }

  // Scale Mode Toggle (Contain <-> Cover)
  function toggleScaleMode() {
    scaleMode = scaleMode === 'contain' ? 'cover' : 'contain';
    fitBtn.textContent = scaleMode === 'contain' ? 'FIT' : 'COVER';
    fitBtn.classList.toggle('active', scaleMode === 'cover');
    renderFrame(displayedFrame);
  }

  // Web Audio Synth Ambiance
  function initAudio() {
    if (audioCtx) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContext();

    // Warm deep drone
    osc1 = audioCtx.createOscillator();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(65, audioCtx.currentTime);

    osc2 = audioCtx.createOscillator();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(130, audioCtx.currentTime);

    const filter = audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(450, audioCtx.currentTime);

    ambientDroneGain = audioCtx.createGain();
    ambientDroneGain.gain.setValueAtTime(0.001, audioCtx.currentTime);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(ambientDroneGain);
    ambientDroneGain.connect(audioCtx.destination);

    osc1.start();
    osc2.start();
  }

  function toggleAudio() {
    initAudio();
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    isAudioEnabled = !isAudioEnabled;
    soundBtn.classList.toggle('active', isAudioEnabled);

    if (isAudioEnabled) {
      ambientDroneGain.gain.setTargetAtTime(0.08, audioCtx.currentTime, 0.3);
      showToast('Soundscape activated: Ambient resonance');
    } else {
      ambientDroneGain.gain.setTargetAtTime(0.0001, audioCtx.currentTime, 0.3);
      showToast('Soundscape muted');
    }
  }

  // Fullscreen Toggle
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  // Jump to Chapter Anchor
  function jumpToProgress(targetProgress) {
    const trackTop = window.scrollY + scrollTrack.getBoundingClientRect().top;
    const maxScroll = scrollTrack.offsetHeight - window.innerHeight;
    const targetScrollY = trackTop + (targetProgress * maxScroll);

    window.scrollTo({
      top: targetScrollY,
      behavior: 'smooth'
    });
  }

  // Toast Notification
  function showToast(text) {
    const toast = document.getElementById('toast-msg');
    const toastText = document.getElementById('toast-text');
    if (!toast || !toastText) return;

    toastText.textContent = text;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  // Interactive Allocation Calculator
  let selectedPack = 'reserve';
  let quantity = 1;
  const packPrices = {
    solo: 14,
    reserve: 38,
    estate: 120
  };

  function updateOrderTotal() {
    const unitPrice = packPrices[selectedPack] || 38;
    const total = unitPrice * quantity;
    const totalEl = document.getElementById('order-total-price');
    if (totalEl) totalEl.textContent = `$${total}.00`;
  }

  // Setup Event Listeners
  function setupEventListeners() {
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('scroll', onScroll, { passive: true });

    // Buttons
    playBtn.addEventListener('click', togglePlay);
    speedBtn.addEventListener('click', cycleSpeed);
    fitBtn.addEventListener('click', toggleScaleMode);
    soundBtn.addEventListener('click', toggleAudio);
    fullscreenBtn.addEventListener('click', toggleFullscreen);

    // Chapter Navigation Links
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const target = link.getAttribute('data-target');
        if (!target) return; // Allow normal anchors like href="#packs" to scroll naturally
        e.preventDefault();
        if (target === 'chapter-1') jumpToProgress(0.02);
        else if (target === 'chapter-2') jumpToProgress(0.32);
        else if (target === 'chapter-3') jumpToProgress(0.60);
        else if (target === 'chapter-4') jumpToProgress(0.90);
      });
    });

    bulletItems.forEach(bullet => {
      bullet.addEventListener('click', () => {
        const prog = parseFloat(bullet.getAttribute('data-progress') || 0);
        jumpToProgress(prog);
      });
    });

    // Story Card Button quick jumps
    document.querySelectorAll('[data-jump]').forEach(btn => {
      btn.addEventListener('click', () => {
        const val = parseFloat(btn.getAttribute('data-jump'));
        jumpToProgress(val);
      });
    });

    // Pack Buttons in Store section
    document.querySelectorAll('#packs button').forEach(btn => {
      btn.addEventListener('click', () => {
        const txt = btn.textContent.trim();
        showToast(`Selected: ${txt} — Added to order queue!`);
      });
    });

    // Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if (e.code === 'Space') {
        e.preventDefault();
        togglePlay();
      } else if (e.code === 'ArrowRight' || e.code === 'ArrowDown') {
        e.preventDefault();
        targetFrameFloat = Math.min(TOTAL_FRAMES - 1, targetFrameFloat + 1);
        currentFrameFloat = targetFrameFloat;
        displayedFrame = Math.round(targetFrameFloat);
        renderFrame(displayedFrame);
        updateHUD(targetFrameFloat / (TOTAL_FRAMES - 1));
      } else if (e.code === 'ArrowLeft' || e.code === 'ArrowUp') {
        e.preventDefault();
        targetFrameFloat = Math.max(0, targetFrameFloat - 1);
        currentFrameFloat = targetFrameFloat;
        displayedFrame = Math.round(targetFrameFloat);
        renderFrame(displayedFrame);
        updateHUD(targetFrameFloat / (TOTAL_FRAMES - 1));
      } else if (e.code === 'KeyF') {
        toggleFullscreen();
      } else if (e.code === 'KeyM') {
        toggleAudio();
      }
    });
  }

  function filterLabTable(mode) {
    const rows = document.querySelectorAll('.lab-row');
    rows.forEach(row => {
      const type = row.getAttribute('data-type');
      if (mode === 'all' || type === mode) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });
  }

  // Initialization
  function init() {
    resizeCanvas();
    setupEventListeners();
    preloadFrames();
    requestAnimationFrame(animationLoop);
  }

  // Start on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
