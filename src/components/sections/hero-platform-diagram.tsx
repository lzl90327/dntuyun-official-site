"use client";

import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type StructureCard = {
  title: string;
  tags: string[];
};

type HeroPlatformDiagramProps = {
  structureCards: StructureCard[];
};

/** L4→L1 静止态表面：自上而下略递减亮度，均明显亮于 hero-platform-shell */
const LAYER_BASE: [string, string][] = [
  [
    "180deg,rgba(56,92,188,0.58),rgba(28,48,88,0.96)",
    "border-white/[0.17]",
  ],
  [
    "180deg,rgba(44,78,162,0.5),rgba(22,42,76,0.945)",
    "border-white/[0.14]",
  ],
  [
    "180deg,rgba(36,66,142,0.44),rgba(18,36,68,0.935)",
    "border-white/[0.12]",
  ],
  [
    "180deg,rgba(26,52,118,0.36),rgba(14,30,56,0.92)",
    "border-white/[0.1]",
  ],
];

export function HeroPlatformDiagram({
  structureCards,
}: HeroPlatformDiagramProps) {
  const [lgHover, setLgHover] = useState(false);
  const [cardIndex, setCardIndex] = useState<number | null>(null);
  const [tagHover, setTagHover] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
      return;
    }
    const mqLg = window.matchMedia("(min-width: 1024px)");
    const mqHover = window.matchMedia("(hover: hover)");
    const update = () => setLgHover(mqLg.matches && mqHover.matches);
    update();
    mqLg.addEventListener("change", update);
    mqHover.addEventListener("change", update);
    return () => {
      mqLg.removeEventListener("change", update);
      mqHover.removeEventListener("change", update);
    };
  }, []);

  const clearDiagramHover = useCallback(() => {
    setCardIndex(null);
    setTagHover(null);
  }, []);

  const anyDiagramFocus =
    lgHover && (cardIndex !== null || tagHover !== null);

  const activeCardIndex = (() => {
    if (!lgHover) return null;
    if (tagHover !== null) {
      const i = structureCards.findIndex((c) => c.tags.includes(tagHover));
      return i >= 0 ? i : null;
    }
    return cardIndex;
  })();

  const isLayerActive = (index: number) =>
    lgHover && activeCardIndex === index;

  const isLayerDimmed = (index: number) => {
    if (!lgHover || !anyDiagramFocus) return false;
    return !isLayerActive(index);
  };

  return (
    <div className="hero-platform-drift relative mx-auto max-w-[560px] lg:max-w-none">
      <div className="hero-orbit absolute inset-0 hidden lg:block">
        <span />
      </div>

      <div
        className="hero-platform-glow-breathe--outer pointer-events-none absolute -inset-x-6 -inset-y-4 rounded-[50px] bg-[radial-gradient(ellipse_68%_62%_at_56%_48%,rgba(33,80,216,0.095),transparent_66%)] blur-[2px] sm:-inset-x-8 sm:-inset-y-5"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -inset-x-5 -inset-y-3 rounded-[46px] border border-brand-blue/[0.08] bg-gradient-to-br from-brand-blue/[0.045] via-brand-blue/[0.015] to-transparent shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] sm:-inset-x-7 sm:-inset-y-4 sm:rounded-[50px]"
        aria-hidden="true"
      />

      <svg
        className="hero-platform-arc-soft-svg pointer-events-none absolute top-[8%] right-[-6%] z-0 hidden h-[min(440px,50vh)] w-[min(300px,34vw)] text-brand-blue opacity-[0.125] lg:block"
        viewBox="0 0 320 420"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M16 52C124 68 212 158 288 288"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <ellipse
          cx="228"
          cy="232"
          rx="102"
          ry="148"
          stroke="currentColor"
          strokeOpacity="0.075"
          strokeWidth="0.9"
          transform="rotate(-11 228 232)"
        />
      </svg>

      <div className="relative z-[1] mx-auto max-w-[520px]">
        <div className="hero-platform-glow-breathe--inner absolute inset-0 rounded-[48px] bg-[radial-gradient(ellipse_72%_58%_at_52%_42%,rgba(36,79,210,0.18),rgba(132,163,255,0.06)_45%,transparent_72%)] blur-[80px]" />
        <div
          className="absolute inset-x-[7%] top-[11%] bottom-[17%] rounded-[32px] border border-brand-blue/[0.075] opacity-75"
          aria-hidden="true"
        />

        <div className="hero-platform-shell relative z-[2] mx-auto w-full max-w-[356px] rounded-[26px] before:pointer-events-none before:absolute before:inset-x-6 before:top-0 before:z-10 before:h-px before:bg-white/14 after:pointer-events-none after:absolute after:inset-x-5 after:bottom-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-white/[0.1] after:to-transparent">
          <div
            className="pointer-events-none absolute top-[4.75rem] bottom-10 left-3 w-px bg-gradient-to-b from-transparent via-white/[0.16] to-transparent"
            aria-hidden="true"
          />

          <div className="relative flex items-center gap-2 border-b border-white/[0.1] px-5 pt-4 pb-5">
            <span
              className="size-1.5 shrink-0 rounded-full bg-[rgba(168,76,82,0.78)] shadow-[inset_0_1px_0_rgba(255,255,255,0.28),0_0_0_1px_rgba(0,0,0,0.22)]"
              aria-hidden
            />
            <span
              className="size-1.5 shrink-0 rounded-full bg-[rgba(196,152,68,0.72)] shadow-[inset_0_1px_0_rgba(255,255,255,0.26),0_0_0_1px_rgba(0,0,0,0.2)]"
              aria-hidden
            />
            <span
              className="size-1.5 shrink-0 rounded-full bg-[rgba(72,138,98,0.74)] shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_0_0_1px_rgba(0,0,0,0.2)]"
              aria-hidden
            />
            <div className="ml-3 text-[10px] font-medium tracking-[0.22em] text-[rgba(200,214,248,0.62)] uppercase">
              Logi Platform Core
            </div>
          </div>

          <div className="relative space-y-3.5 px-5 pb-5 pt-[1.125rem]">
            {structureCards.map((card, index) => {
              const active = isLayerActive(index);
              const dimmed = isLayerDimmed(index);
              const [grad, borderBase] = LAYER_BASE[index] ?? LAYER_BASE[0];

              return (
                <div
                  key={card.title}
                  className={cn(
                    "rounded-[15px] border px-4 py-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] transition-[opacity,box-shadow,border-color,background-color,background-image] duration-200 ease-out",
                    borderBase,
                    `bg-[linear-gradient(${grad})]`,
                    dimmed && "opacity-[0.55]",
                    active &&
                      "border-[rgba(186,204,255,0.52)] bg-[linear-gradient(180deg,rgba(62,108,248,0.58),rgba(28,50,92,0.97))] shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_0_0_1px_rgba(172,196,255,0.38),0_0_40px_rgba(33,80,216,0.28)]",
                  )}
                  onMouseEnter={() => {
                    if (!lgHover) return;
                    setCardIndex(index);
                  }}
                  onMouseLeave={clearDiagramHover}
                >
                  <div
                    className={cn(
                      "mb-2.5 text-[10px] font-semibold tracking-[0.18em] uppercase transition-colors duration-200",
                      !active && "text-[rgba(224,232,252,0.74)]",
                      active && "text-white/[0.95]",
                    )}
                  >
                    {card.title}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {card.tags.map((tag) => {
                      const tagActive = tagHover === tag;

                      return (
                        <span
                          key={tag}
                          className={cn(
                            "inline-block rounded-[9px] border px-2.5 py-1 text-[10px] font-medium transition-[color,background-color,border-color,box-shadow] duration-200 ease-out",
                            "border-white/[0.16] bg-white/[0.1] text-[rgba(248,250,255,0.9)]",
                            !tagActive &&
                              "lg:hover:border-[rgba(172,196,255,0.35)] lg:hover:bg-white/[0.16] lg:hover:text-white lg:hover:shadow-[0_0_0_1px_rgba(132,163,255,0.2),0_0_14px_rgba(33,80,216,0.12)]",
                            tagActive &&
                              "relative z-[1] border-[rgba(178,200,255,0.5)] bg-white/[0.2] text-white shadow-[0_0_0_1px_rgba(160,188,255,0.35),0_0_18px_rgba(33,80,216,0.18)]",
                          )}
                          onMouseEnter={() => {
                            if (!lgHover) return;
                            setTagHover(tag);
                            setCardIndex(index);
                          }}
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
