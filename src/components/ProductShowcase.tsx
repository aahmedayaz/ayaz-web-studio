"use client";

import { useEffect, useState } from "react";

const LAYERS = ["Overview", "Metrics", "Activity", "Users"] as const;
type Layer = (typeof LAYERS)[number];

const METRICS = [
  { t: "Revenue", v: "₨ 2.4M", c: "#0080FF" },
  { t: "Users", v: "12.8k", c: "#7dcea0" },
  { t: "Uptime", v: "99.9%", c: "#60a5fa" },
] as const;

const SWATCHES = [
  ["Primary", "#E5A246"],
  ["Mint", "#7DCEA0"],
  ["Ink", "#0E0E0E"],
] as const;

const CHART_SETS: Record<Layer, number[]> = {
  Overview: [40, 65, 45, 80, 55, 90, 70],
  Metrics: [55, 48, 72, 60, 85, 68, 78],
  Activity: [30, 70, 55, 95, 40, 88, 62],
  Users: [22, 38, 52, 64, 70, 82, 94],
};

const CHART_LABELS = ["M", "T", "W", "T", "F", "S", "S"];

export function ProductShowcase() {
  const [layer, setLayer] = useState<Layer>("Overview");
  const [mockDark, setMockDark] = useState(false);
  const [activeSwatch, setActiveSwatch] = useState(0);
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);
  const [chartReady, setChartReady] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);

  const bars = CHART_SETS[layer];
  const accent = SWATCHES[activeSwatch][1];

  useEffect(() => {
    setChartReady(false);
    const id = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setChartReady(true));
    });
    return () => window.cancelAnimationFrame(id);
  }, [layer, mockDark]);

  useEffect(() => {
    if (!autoPlay) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let id = 0;
    const root = document.querySelector(".product-showcase");
    if (!root || !("IntersectionObserver" in window)) {
      id = window.setInterval(() => {
        setLayer((current) => {
          const next = (LAYERS.indexOf(current) + 1) % LAYERS.length;
          return LAYERS[next];
        });
      }, 3800);
      return () => window.clearInterval(id);
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        window.clearInterval(id);
        if (!entry.isIntersecting) return;
        id = window.setInterval(() => {
          setLayer((current) => {
            const next = (LAYERS.indexOf(current) + 1) % LAYERS.length;
            return LAYERS[next];
          });
        }, 3800);
      },
      { rootMargin: "0px", threshold: 0.2 },
    );
    io.observe(root);

    return () => {
      io.disconnect();
      window.clearInterval(id);
    };
  }, [autoPlay]);

  const shell = mockDark
    ? {
        frame: "bg-[#141414] border-(--line-strong)",
        titlebar: "border-white/10",
        title: "text-white/40",
        aside: "bg-[#1a1a1a] border-white/8",
        panel: "bg-[#1a1a1a] border-white/8",
        asideLabel: "text-white/35",
        navIdle: "text-white/45 hover:bg-white/5 hover:text-white/70",
        main: "bg-[#121212]",
        card: "bg-[#1c1c1c] shadow-none ring-1 ring-white/8",
        cardLabel: "text-white/40",
        cardTitle: "text-white/75",
        live: "bg-white/8 text-white/50",
        chartTrack: "bg-white/5",
        swatchLabel: "text-white/70",
        swatchHex: "text-white/40",
        swatchBtn: "hover:bg-white/5",
        swatchActive: "ring-1 ring-white/20 bg-white/5",
        toggleTrack: "bg-white/8",
        toggleIdle: "text-white/40",
        mobileTabs: "bg-[#1a1a1a] border-white/8",
      }
    : {
        frame: "bg-(--mock-bg) border-(--line-strong)",
        titlebar: "border-black/10",
        title: "text-black/40",
        aside: "bg-[#f0f0f2] border-black/8",
        panel: "bg-white border-black/8",
        asideLabel: "text-black/35",
        navIdle: "text-black/50 hover:bg-black/5 hover:text-black/70",
        main: "bg-[#e8e8ea]",
        card: "bg-white shadow-sm",
        cardLabel: "text-black/40",
        cardTitle: "text-black/70",
        live: "bg-black/5 text-black/45",
        chartTrack: "bg-black/[0.04]",
        swatchLabel: "text-black/70",
        swatchHex: "text-black/40",
        swatchBtn: "hover:bg-black/[0.03]",
        swatchActive: "ring-1 ring-(--accent)/50 bg-black/[0.03]",
        toggleTrack: "bg-black/5",
        toggleIdle: "text-black/40",
        mobileTabs: "bg-[#f0f0f2] border-black/8",
      };

  return (
    <div className="product-showcase relative mx-auto w-full min-w-0 max-w-215">
      <div
        className="pointer-events-none absolute -inset-3 rounded-3xl bg-[radial-gradient(circle_at_50%_30%,color-mix(in_srgb,var(--accent)_18%,transparent),transparent_65%)] blur-2xl sm:-inset-6 sm:rounded-4xl"
        aria-hidden
      />

      <div
        className={`product-showcase__frame relative min-w-0 overflow-hidden rounded-2xl border shadow-elite sm:rounded-3xl ${shell.frame}`}
      >
        <div
          className={`flex min-w-0 items-center gap-1.5 border-b px-3 py-2.5 sm:gap-2 sm:px-4 sm:py-3 ${shell.titlebar}`}
        >
          <span className="h-2 w-2 shrink-0 rounded-full bg-[#ff5f57] sm:h-2.5 sm:w-2.5" />
          <span className="h-2 w-2 shrink-0 rounded-full bg-[#febc2e] sm:h-2.5 sm:w-2.5" />
          <span className="h-2 w-2 shrink-0 rounded-full bg-[#28c840] sm:h-2.5 sm:w-2.5" />
          <span
            className={`ml-1.5 min-w-0 truncate text-[0.65rem] font-medium sm:ml-3 sm:text-[0.72rem] ${shell.title}`}
          >
            Product Dashboard.design
          </span>
          <span
            className={`product-showcase__live ml-auto inline-flex shrink-0 items-center gap-1 rounded-full px-1.5 py-0.5 text-[0.58rem] font-medium sm:gap-1.5 sm:px-2 sm:text-[0.62rem] ${shell.live}`}
          >
            <span className="product-showcase__live-dot h-1.5 w-1.5 rounded-full bg-[#28c840]" />
            Live
          </span>
        </div>

        {/* Mobile layer tabs — full width, above content */}
        <div
          className={`flex gap-1 overflow-x-auto border-b px-2 py-2 sm:hidden ${shell.mobileTabs}`}
          role="tablist"
          aria-label="Dashboard layers"
        >
          {LAYERS.map((item) => {
            const active = layer === item;
            return (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => {
                  setAutoPlay(false);
                  setLayer(item);
                }}
                className={`min-w-0 flex-1 rounded-lg px-1.5 py-1.5 text-center text-[0.62rem] font-medium transition-colors ${
                  active ? "font-semibold" : shell.navIdle
                }`}
                style={
                  active
                    ? {
                        background: `color-mix(in srgb, ${accent} 22%, transparent)`,
                        color: accent,
                      }
                    : undefined
                }
              >
                {item}
              </button>
            );
          })}
        </div>

        <div className="grid min-w-0 grid-cols-1 sm:grid-cols-[132px_minmax(0,1fr)] lg:grid-cols-[140px_minmax(0,1fr)_150px]">
          <aside className={`hidden border-r p-3 sm:block ${shell.aside}`}>
            <div
              className={`mb-3 text-[0.65rem] font-semibold uppercase tracking-wider ${shell.asideLabel}`}
            >
              Layers
            </div>
            <div className="space-y-1.5" role="tablist" aria-label="Dashboard layers">
              {LAYERS.map((item) => {
                const active = layer === item;
                return (
                  <button
                    key={item}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => {
                      setAutoPlay(false);
                      setLayer(item);
                    }}
                    className={`w-full rounded-md px-2 py-1.5 text-left text-xs transition-[background-color,color,transform] duration-200 ${
                      active ? "font-semibold" : shell.navIdle
                    }`}
                    style={
                      active
                        ? {
                            background: `color-mix(in srgb, ${accent} 22%, transparent)`,
                            color: accent,
                          }
                        : undefined
                    }
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </aside>

          <div className={`min-w-0 space-y-2 p-2 sm:space-y-3 sm:p-4 ${shell.main}`}>
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2.5">
              {METRICS.map((card, i) => (
                <button
                  key={card.t}
                  type="button"
                  className={`product-showcase__metric group min-w-0 rounded-xl p-2 text-left transition duration-200 sm:rounded-xl sm:p-3.5 ${shell.card}`}
                  style={{ animationDelay: `${i * 80}ms` }}
                  onClick={() => {
                    setAutoPlay(false);
                    setLayer(
                      card.t === "Revenue"
                        ? "Metrics"
                        : card.t === "Users"
                          ? "Users"
                          : "Overview",
                    );
                  }}
                >
                  <div
                    className={`truncate text-[0.55rem] font-medium leading-tight sm:text-[0.65rem] ${shell.cardLabel}`}
                  >
                    {card.t}
                  </div>
                  <div
                    className="mt-0.5 truncate text-[0.78rem] font-bold leading-tight tracking-tight transition-transform duration-300 group-hover:-translate-y-px sm:mt-1 sm:text-[1.05rem]"
                    style={{ color: i === 0 ? accent : card.c }}
                  >
                    {card.v}
                  </div>
                  <div
                    className="mt-1.5 h-1.5 w-full rounded-full opacity-90 sm:mt-2 sm:h-2"
                    style={{
                      background: `linear-gradient(90deg, ${i === 0 ? accent : card.c}, transparent)`,
                    }}
                  />
                </button>
              ))}
            </div>

            <div className={`min-w-0 rounded-xl p-2.5 sm:p-4 ${shell.card}`}>
              <div className="mb-2 flex min-w-0 items-center justify-between gap-2 sm:mb-3">
                <span
                  className={`min-w-0 truncate text-[0.72rem] font-semibold sm:text-[0.78rem] ${shell.cardTitle}`}
                >
                  {layer === "Users" ? "User growth" : "Weekly activity"}
                </span>
                <span
                  className={`product-showcase__live hidden shrink-0 items-center gap-1.5 rounded-full px-2 py-0.5 text-[0.65rem] sm:inline-flex ${shell.live}`}
                >
                  <span className="product-showcase__live-dot h-1.5 w-1.5 rounded-full bg-[#28c840]" />
                  Live
                </span>
              </div>

              <div
                className="flex h-16 items-end gap-1 sm:h-20 sm:gap-2"
                onMouseLeave={() => setHoveredBar(null)}
              >
                {bars.map((h, i) => {
                  const active = hoveredBar === i;
                  return (
                    <button
                      key={`${layer}-${i}`}
                      type="button"
                      aria-label={`${CHART_LABELS[i]}: ${h}%`}
                      className={`product-showcase__bar relative min-w-0 flex-1 rounded-t-md transition-[height,filter,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent) ${shell.chartTrack}`}
                      style={{
                        height: chartReady ? `${h}%` : "8%",
                        background: active
                          ? `linear-gradient(180deg, ${accent}, color-mix(in srgb, ${accent} 55%, white))`
                          : `linear-gradient(180deg, ${accent}, color-mix(in srgb, ${accent} 40%, #66b3ff))`,
                        filter:
                          hoveredBar != null && !active
                            ? "brightness(0.72)"
                            : undefined,
                        transform: active ? "scaleX(1.08)" : undefined,
                        transitionDelay: chartReady ? `${i * 45}ms` : "0ms",
                      }}
                      onMouseEnter={() => setHoveredBar(i)}
                      onFocus={() => setHoveredBar(i)}
                      onBlur={() => setHoveredBar(null)}
                      onClick={() => setAutoPlay(false)}
                    >
                      <span
                        className={`pointer-events-none absolute -top-5 left-1/2 -translate-x-1/2 rounded-md px-1 py-0.5 font-mono text-[0.55rem] font-semibold opacity-0 transition-opacity duration-200 sm:-top-6 sm:px-1.5 sm:text-[0.58rem] ${
                          active ? "opacity-100" : ""
                        }`}
                        style={{
                          background: accent,
                          color: activeSwatch === 2 ? "#fff" : "#0e0e0e",
                        }}
                      >
                        {h}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-1.5 flex gap-1 sm:mt-2 sm:gap-2">
                {CHART_LABELS.map((label, i) => (
                  <span
                    key={`${label}-${i}`}
                    className={`min-w-0 flex-1 text-center font-mono text-[0.55rem] sm:text-[0.58rem] ${shell.cardLabel}`}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* Compact theme + swatches on small/medium — matches mobile mock */}
            <div className={`rounded-xl p-2.5 sm:p-3 lg:hidden ${shell.card}`}>
              <div
                className={`mb-2.5 flex gap-1 rounded-full p-1 ${shell.toggleTrack}`}
                role="group"
                aria-label="Mock theme"
              >
                {(["Light", "Dark"] as const).map((mode) => {
                  const active = mode === "Dark" ? mockDark : !mockDark;
                  return (
                    <button
                      key={mode}
                      type="button"
                      aria-pressed={active}
                      onClick={() => {
                        setAutoPlay(false);
                        setMockDark(mode === "Dark");
                      }}
                      className={`flex-1 rounded-full py-1.5 text-center text-[0.65rem] font-semibold transition-[background-color,color] duration-200 ${
                        active ? "" : shell.toggleIdle
                      }`}
                      style={
                        active
                          ? {
                              background: accent,
                              color:
                                activeSwatch === 2 ? "#fff" : "var(--accent-fg)",
                            }
                          : undefined
                      }
                    >
                      {mode}
                    </button>
                  );
                })}
              </div>
              <div className="flex items-center justify-center gap-3.5">
                {SWATCHES.map(([name, hex], i) => {
                  const active = activeSwatch === i;
                  return (
                    <button
                      key={name}
                      type="button"
                      aria-label={name}
                      aria-pressed={active}
                      onClick={() => {
                        setAutoPlay(false);
                        setActiveSwatch(i);
                      }}
                      className="rounded-full p-0.5 transition"
                      style={{
                        boxShadow: active ? `0 0 0 2px ${hex}` : undefined,
                      }}
                    >
                      <span
                        className="block h-6 w-6 rounded-full border border-black/10 sm:h-5 sm:w-5"
                        style={{ background: hex }}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <aside className={`hidden border-l p-3 lg:block ${shell.panel}`}>
            <div
              className={`mb-3 text-[0.65rem] font-semibold uppercase tracking-wider ${shell.asideLabel}`}
            >
              Design System
            </div>

            <div
              className={`mb-3 flex gap-1 rounded-full p-1 ${shell.toggleTrack}`}
              role="group"
              aria-label="Mock theme"
            >
              {(["Light", "Dark"] as const).map((mode) => {
                const active = mode === "Dark" ? mockDark : !mockDark;
                return (
                  <button
                    key={mode}
                    type="button"
                    aria-pressed={active}
                    onClick={() => {
                      setAutoPlay(false);
                      setMockDark(mode === "Dark");
                    }}
                    className={`flex-1 rounded-full py-1 text-center text-[0.65rem] font-semibold transition-[background-color,color,transform] duration-200 ${
                      active ? "" : shell.toggleIdle
                    }`}
                    style={
                      active
                        ? {
                            background: accent,
                            color:
                              activeSwatch === 2 ? "#fff" : "var(--accent-fg)",
                          }
                        : undefined
                    }
                  >
                    {mode}
                  </button>
                );
              })}
            </div>

            <div className="space-y-2">
              {SWATCHES.map(([name, hex], i) => {
                const active = activeSwatch === i;
                return (
                  <button
                    key={name}
                    type="button"
                    onClick={() => {
                      setAutoPlay(false);
                      setActiveSwatch(i);
                    }}
                    className={`flex w-full items-center gap-2 rounded-lg p-1 text-left transition duration-200 ${
                      active ? shell.swatchActive : shell.swatchBtn
                    }`}
                    aria-pressed={active}
                  >
                    <span
                      className="h-5 w-5 rounded-md border border-black/10 transition-transform duration-200"
                      style={{
                        background: hex,
                        transform: active ? "scale(1.08)" : undefined,
                        boxShadow: active ? `0 0 0 2px ${hex}55` : undefined,
                      }}
                    />
                    <div>
                      <div
                        className={`text-[0.7rem] font-medium ${shell.swatchLabel}`}
                      >
                        {name}
                      </div>
                      <div className={`font-mono text-[0.6rem] ${shell.swatchHex}`}>
                        {hex}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
