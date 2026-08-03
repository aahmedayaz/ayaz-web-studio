"use client";

import { useEffect, useRef } from "react";

/**
 * Lightweight CSS 3D hero visual — no Three.js, GPU transforms only.
 * Desktop (xl+) only; respects prefers-reduced-motion.
 */
export function HeroScene3D() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    const card = cardRef.current;
    if (!scene || !card) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (reduce || !hover) return;

    let raf = 0;
    let tx = 0;
    let ty = 0;

    const onMove = (e: MouseEvent) => {
      const rect = scene.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      tx = py * -12;
      ty = px * 16;
      if (!raf) raf = requestAnimationFrame(apply);
    };

    const apply = () => {
      card.style.transform = `rotateX(${6 + tx}deg) rotateY(${-10 + ty}deg)`;
      raf = 0;
    };

    const onLeave = () => {
      tx = 0;
      ty = 0;
      if (!raf) raf = requestAnimationFrame(apply);
    };

    scene.addEventListener("mousemove", onMove, { passive: true });
    scene.addEventListener("mouseleave", onLeave);
    return () => {
      scene.removeEventListener("mousemove", onMove);
      scene.removeEventListener("mouseleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={sceneRef}
      className="hero-3d-scene relative hidden h-full min-h-105 w-full items-center justify-center xl:flex"
      aria-hidden
    >
      <div className="hero-3d-glow" />

      <div ref={cardRef} className="hero-3d-card">
        <div className="hero-3d-card-face">
          <div className="flex items-center gap-1.5 border-b border-white/10 px-3.5 py-3">
            <span className="h-2 w-2 rounded-full bg-white/25" />
            <span className="h-2 w-2 rounded-full bg-white/25" />
            <span className="h-2 w-2 rounded-full bg-white/25" />
            <span className="ml-2 rounded-full bg-white/6 px-2.5 py-0.5 font-mono text-[0.62rem] text-ivory/50">
              app.product.io
            </span>
          </div>

          <div className="relative p-4">
            <div className="mb-3 flex items-center justify-between">
              <div className="hero-3d-mark h-11! w-11! rounded-lg!">
                <svg viewBox="0 0 64 64" className="h-8 w-8" fill="none">
                  <path
                    d="M32 8 L52 52 H40 L32 32 L24 52 H12 L32 8Z"
                    fill="url(#chromeGrad)"
                  />
                  <path d="M26 28 L18 52 H12 L26 28Z" fill="#0080FF" />
                  <defs>
                    <linearGradient id="chromeGrad" x1="12" y1="8" x2="52" y2="52">
                      <stop stopColor="#f5f5f5" />
                      <stop offset="0.45" stopColor="#c9c9c9" />
                      <stop offset="1" stopColor="#8a8a8a" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="rounded-full border border-mint/30 bg-mint/10 px-2.5 py-1 font-mono text-[0.58rem] uppercase tracking-widest text-mint">
                Live
              </span>
            </div>

            <div className="mb-3 grid grid-cols-3 gap-2">
              <div className="rounded-lg border border-white/10 bg-white/5 p-2">
                <div className="mb-1.5 h-1 w-6 rounded-full bg-gold/70" />
                <div className="h-4 w-8 rounded bg-white/15" />
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-2">
                <div className="mb-1.5 h-1 w-6 rounded-full bg-mint/70" />
                <div className="h-4 w-8 rounded bg-white/15" />
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-2">
                <div className="mb-1.5 h-1 w-6 rounded-full bg-white/40" />
                <div className="h-4 w-8 rounded bg-white/15" />
              </div>
            </div>

            <div className="mb-3 h-20 overflow-hidden rounded-lg border border-white/10 bg-white/4 p-2.5">
              <div className="mb-2 flex items-end gap-1.5">
                <span className="h-6 w-2 rounded-sm bg-gold/50" />
                <span className="h-10 w-2 rounded-sm bg-gold/70" />
                <span className="h-7 w-2 rounded-sm bg-mint/60" />
                <span className="h-12 w-2 rounded-sm bg-gold" />
                <span className="h-8 w-2 rounded-sm bg-mint/50" />
                <span className="h-14 w-2 rounded-sm bg-gold/80" />
                <span className="h-9 w-2 rounded-sm bg-mint/70" />
              </div>
              <div className="h-1.5 w-[70%] rounded-full bg-white/10" />
            </div>

            <div className="flex h-9 w-full items-center justify-center rounded-lg bg-gold font-mono text-[0.62rem] font-semibold tracking-wide text-void">
              DEPLOY PRODUCT
            </div>
          </div>
        </div>

        <div className="hero-3d-orb hero-3d-orb-a" />
        <div className="hero-3d-orb hero-3d-orb-b" />
        <div className="hero-3d-ring" />
      </div>
    </div>
  );
}
