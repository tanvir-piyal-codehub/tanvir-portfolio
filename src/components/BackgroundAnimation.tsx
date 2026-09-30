import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, Activity, Eye, Play, Pause, Compass, Zap } from 'lucide-react';

type AnimationMode = 'constellation' | 'matrix' | 'aurora';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  originalRadius: number;
}

interface FloatingGlyph {
  x: number;
  y: number;
  text: string;
  vy: number;
  vx: number;
  opacity: number;
  size: number;
  rotation: number;
  vRot: number;
}

interface MatrixDrop {
  x: number;
  y: number;
  speed: number;
  chars: string[];
  length: number;
}

const CODE_SYMBOLS = [
  '</>', '{ }', 'O(1)', 'O(n log n)', 'C++', 'React', 'git', '&&', 
  '*ptr', 'std::cin', 'fn()', '0101', '=>', '[]', 'DIU', 'npm', 'DFS/BFS'
];

export const BackgroundAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mode, setMode] = useState<AnimationMode>('constellation');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isWidgetOpen, setIsWidgetOpen] = useState<boolean>(false);

  // Mouse coordinate tracker for physics interaction
  const mouseRef = useRef<{ x: number | null; y: number | null; radius: number }>({
    x: null,
    y: null,
    radius: 140,
  });

  useEffect(() => {
    // Respect user's system preferences for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsPlaying(false);
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // 1. CONSTELLATION PARTICLES SETUP
    const particleCount = width < 768 ? 38 : Math.min(85, Math.floor(width / 18));
    const particles: Particle[] = [];
    const colors = ['#16f2b3', '#8b5cf6', '#ec4899', '#38bdf8'];

    for (let i = 0; i < particleCount; i++) {
      const radius = Math.random() * 2 + 1.2;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius,
        originalRadius: radius,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // 2. FLOATING CODE GLYPHS
    const glyphCount = width < 768 ? 9 : 18;
    const glyphs: FloatingGlyph[] = [];
    for (let i = 0; i < glyphCount; i++) {
      glyphs.push({
        x: Math.random() * width,
        y: Math.random() * height,
        text: CODE_SYMBOLS[Math.floor(Math.random() * CODE_SYMBOLS.length)],
        vx: (Math.random() - 0.5) * 0.25,
        vy: -0.2 - Math.random() * 0.35,
        opacity: 0.08 + Math.random() * 0.16,
        size: Math.floor(Math.random() * 5) + 11,
        rotation: (Math.random() - 0.5) * 0.4,
        vRot: (Math.random() - 0.5) * 0.005,
      });
    }

    // 3. MATRIX RAIN DROPS
    const matrixColumnCount = Math.floor(width / 24);
    const matrixDrops: MatrixDrop[] = [];
    const matrixChars = '01abcdefghijklmnopqrstuvwxyzアイウエオカキクケコサシスセソタチツテト';

    for (let i = 0; i < matrixColumnCount; i++) {
      const length = Math.floor(Math.random() * 12) + 6;
      const chars: string[] = [];
      for (let j = 0; j < length; j++) {
        chars.push(matrixChars[Math.floor(Math.random() * matrixChars.length)]);
      }
      matrixDrops.push({
        x: i * 24,
        y: Math.random() * -height,
        speed: 1.2 + Math.random() * 2.2,
        chars,
        length,
      });
    }

    // --- ANIMATION LOOP ---
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      if (mode === 'constellation') {
        // Draw Floating Glyphs in the deep background layer
        ctx.font = '500 12px "Fira Code", monospace';
        glyphs.forEach((g) => {
          if (isPlaying) {
            g.x += g.vx;
            g.y += g.vy;
            g.rotation += g.vRot;

            if (g.y < -30) {
              g.y = height + 20;
              g.x = Math.random() * width;
            }
            if (g.x < -40) g.x = width + 30;
            if (g.x > width + 40) g.x = -30;
          }

          ctx.save();
          ctx.translate(g.x, g.y);
          ctx.rotate(g.rotation);
          ctx.fillStyle = `rgba(22, 242, 179, ${g.opacity})`;
          ctx.font = `${g.size}px "Fira Code", monospace`;
          ctx.fillText(g.text, 0, 0);
          ctx.restore();
        });

        // Update & Render Particles with Constellation Connective lines
        const maxDist = width < 768 ? 90 : 120;
        const mouse = mouseRef.current;

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];

          if (isPlaying) {
            p.x += p.vx;
            p.y += p.vy;

            // Bounce on screen edges smoothly
            if (p.x < 0 || p.x > width) p.vx *= -1;
            if (p.y < 0 || p.y > height) p.vy *= -1;

            // Interactive Mouse Gravity / Proximity reaction
            if (mouse.x !== null && mouse.y !== null) {
              const dx = mouse.x - p.x;
              const dy = mouse.y - p.y;
              const dist = Math.sqrt(dx * dx + dy * dy);

              if (dist < mouse.radius) {
                const force = (mouse.radius - dist) / mouse.radius;
                p.x -= (dx / dist) * force * 1.5;
                p.y -= (dy / dist) * force * 1.5;
                p.radius = p.originalRadius * (1 + force * 0.8);
              } else {
                p.radius = p.originalRadius;
              }
            }
          }

          // Draw Particle Node
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.shadowBlur = 8;
          ctx.shadowColor = p.color;
          ctx.fill();
          ctx.shadowBlur = 0; // reset

          // Connect with other particles within proximity
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < maxDist) {
              const alpha = (1 - dist / maxDist) * 0.32;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(22, 242, 179, ${alpha})`;
              ctx.lineWidth = 0.85;
              ctx.stroke();
            }
          }

          // Connect with Mouse Cursor
          if (mouse.x !== null && mouse.y !== null) {
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < mouse.radius) {
              const alpha = (1 - dist / mouse.radius) * 0.55;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(mouse.x, mouse.y);
              ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
              ctx.lineWidth = 1.2;
              ctx.stroke();
            }
          }
        }
      } else if (mode === 'matrix') {
        // High-tech vertical code rain
        ctx.font = '12px "Fira Code", monospace';

        matrixDrops.forEach((drop) => {
          if (isPlaying) {
            drop.y += drop.speed;
            if (drop.y > height + 100) {
              drop.y = -50 - Math.random() * 200;
              drop.speed = 1.2 + Math.random() * 2.2;
            }
          }

          // Render trailing code stream
          for (let i = 0; i < drop.chars.length; i++) {
            const charY = drop.y - i * 16;
            if (charY > -20 && charY < height + 20) {
              const alpha = (1 - i / drop.chars.length) * 0.35;
              if (i === 0) {
                ctx.fillStyle = `rgba(255, 255, 255, ${alpha + 0.4})`;
                ctx.shadowBlur = 6;
                ctx.shadowColor = '#16f2b3';
              } else {
                ctx.fillStyle = `rgba(22, 242, 179, ${alpha})`;
                ctx.shadowBlur = 0;
              }
              ctx.fillText(drop.chars[i], drop.x, charY);
            }
          }
        });
      } else if (mode === 'aurora') {
        // Soft pulsing ambient energy orbs
        const time = Date.now() * 0.001;
        const cx1 = width * 0.3 + Math.sin(time * 0.4) * 120;
        const cy1 = height * 0.4 + Math.cos(time * 0.3) * 80;

        const grad1 = ctx.createRadialGradient(cx1, cy1, 10, cx1, cy1, width * 0.4);
        grad1.addColorStop(0, 'rgba(22, 242, 179, 0.12)');
        grad1.addColorStop(0.5, 'rgba(56, 189, 248, 0.05)');
        grad1.addColorStop(1, 'rgba(13, 18, 36, 0)');
        ctx.fillStyle = grad1;
        ctx.fillRect(0, 0, width, height);

        const cx2 = width * 0.7 + Math.cos(time * 0.3) * 140;
        const cy2 = height * 0.6 + Math.sin(time * 0.5) * 90;
        const grad2 = ctx.createRadialGradient(cx2, cy2, 10, cx2, cy2, width * 0.35);
        grad2.addColorStop(0, 'rgba(139, 92, 246, 0.12)');
        grad2.addColorStop(0.6, 'rgba(236, 72, 153, 0.05)');
        grad2.addColorStop(1, 'rgba(13, 18, 36, 0)');
        ctx.fillStyle = grad2;
        ctx.fillRect(0, 0, width, height);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [mode, isPlaying]);

  return (
    <>
      {/* Dynamic Animated Canvas across the viewport */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-80 transition-opacity duration-700"
        aria-hidden="true"
      />

      {/* Floating Animated Ambient Glow Blobs in the CSS Layer for depth */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] rounded-full bg-gradient-to-br from-[#16f2b3]/8 via-[#8b5cf6]/5 to-transparent blur-[140px] animate-pulse duration-[8000ms]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tl from-pink-500/8 via-[#1b2c68]/30 to-transparent blur-[150px] animate-pulse duration-[10000ms]" />
        <div className="absolute top-[45%] right-[15%] w-[35vw] h-[35vw] rounded-full bg-[#16f2b3]/5 blur-[160px]" />
      </div>

      {/* Interactive Background Controller Widget in bottom-right corner */}
      <div className="fixed bottom-6 right-6 z-40">
        {isWidgetOpen ? (
          <div className="rounded-2xl border border-[#1b2c68] bg-[#0d1224]/95 backdrop-blur-xl p-4 shadow-2xl w-64 animate-in fade-in slide-in-from-bottom-3 duration-200">
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#1b2c68]/80 mb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#16f2b3]" />
                <span className="text-xs font-bold text-white font-mono uppercase tracking-wider">
                  Atmosphere
                </span>
              </div>
              <button
                onClick={() => setIsWidgetOpen(false)}
                className="text-xs text-slate-400 hover:text-white px-2 py-0.5 rounded bg-[#10172d] border border-[#1b2c68]"
              >
                Close
              </button>
            </div>

            {/* Animation Modes */}
            <div className="space-y-1.5 mb-3">
              <button
                onClick={() => setMode('constellation')}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                  mode === 'constellation'
                    ? 'bg-[#16f2b3]/15 text-[#16f2b3] border border-[#16f2b3]/40'
                    : 'bg-[#10172d] text-slate-300 hover:text-white border border-[#1b2c68]/60'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5" />
                  Neural Constellation
                </span>
                {mode === 'constellation' && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#16f2b3]" />
                )}
              </button>

              <button
                onClick={() => setMode('matrix')}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                  mode === 'matrix'
                    ? 'bg-[#16f2b3]/15 text-[#16f2b3] border border-[#16f2b3]/40'
                    : 'bg-[#10172d] text-slate-300 hover:text-white border border-[#1b2c68]/60'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5" />
                  Cyber Code Streams
                </span>
                {mode === 'matrix' && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#16f2b3]" />
                )}
              </button>

              <button
                onClick={() => setMode('aurora')}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                  mode === 'aurora'
                    ? 'bg-[#16f2b3]/15 text-[#16f2b3] border border-[#16f2b3]/40'
                    : 'bg-[#10172d] text-slate-300 hover:text-white border border-[#1b2c68]/60'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Compass className="w-3.5 h-3.5" />
                  Luminous Aurora
                </span>
                {mode === 'aurora' && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#16f2b3]" />
                )}
              </button>
            </div>

            {/* Play / Pause Toggle for Accessibility & Battery */}
            <div className="pt-2 border-t border-[#1b2c68]/60 flex items-center justify-between">
              <span className="text-[11px] text-slate-400 font-mono">
                Motion Status
              </span>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#10172d] border border-[#1b2c68] text-xs text-slate-200 hover:text-white"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3 h-3 text-[#16f2b3]" />
                    <span>Active</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3 h-3 text-amber-400" />
                    <span>Paused</span>
                  </>
                )}
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setIsWidgetOpen(true)}
            className="group flex items-center gap-2 px-3 py-2 rounded-full bg-[#10172d]/90 hover:bg-[#151e3b] border border-[#1b2c68] hover:border-[#16f2b3]/60 backdrop-blur-md shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
            aria-label="Customize background animation"
            title="Interactive Background Atmosphere"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#16f2b3] group-hover:rotate-12 transition-transform" />
            <span className="text-[11px] font-mono font-medium text-slate-300 group-hover:text-white hidden sm:inline">
              Vibe: {mode === 'constellation' ? 'Neural' : mode === 'matrix' ? 'Matrix' : 'Aurora'}
            </span>
            <span className="w-2 h-2 rounded-full bg-[#16f2b3] animate-pulse" />
          </button>
        )}
      </div>
    </>
  );
};
