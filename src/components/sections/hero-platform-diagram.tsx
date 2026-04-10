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
        className="hero-platform-glow-breathe--outer pointer-events-none absolute -inset-x-6 -inset-y-4 rounded-[50px] bg-[radial-gradient(ellipse_68%_62%_at_56%_48%,color-mix(in_srgb,var(--brand-primary)_9.5%,transparent),transparent_66%)] blur-[2px] sm:-inset-x-8 sm:-inset-y-5"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -inset-x-5 -inset-y-3 rounded-[46px] border border-[color:var(--brand-border)] bg-gradient-to-br from-[color:color-mix(in_srgb,var(--brand-primary)_4.5%,transparent)] via-[color:color-mix(in_srgb,var(--brand-primary)_1.5%,transparent)] to-transparent shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] sm:-inset-x-7 sm:-inset-y-4 sm:rounded-[50px]"
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
        <div className="hero-platform-glow-breathe--inner absolute inset-0 rounded-[48px] bg-[radial-gradient(ellipse_72%_58%_at_52%_42%,color-mix(in_srgb,var(--brand-primary)_18%,transparent),color-mix(in_srgb,var(--brand-accent-on-dark)_6%,transparent)_45%,transparent_72%)] blur-[80px]" />
        <div
          className="absolute inset-x-[7%] top-[11%] bottom-[17%] rounded-[32px] border border-[color:color-mix(in_srgb,var(--brand-primary)_7.5%,transparent)] opacity-75"
          aria-hidden="true"
        />

        <div className="hero-platform-shell relative z-[2] mx-auto w-full max-w-[356px] rounded-[26px] before:pointer-events-none before:absolute before:inset-x-6 before:top-0 before:z-10 before:h-px before:bg-white/14 after:pointer-events-none after:absolute after:inset-x-5 after:bottom-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-white/[0.1] after:to-transparent">
          <div
            className="hero-plat-stack-line pointer-events-none absolute bottom-10 left-3 w-px bg-gradient-to-b from-transparent via-white/[0.16] to-transparent"
            aria-hidden="true"
          />

          <div className="hero-plat-chrome">
            <div className="hero-plat-window-dots" aria-hidden>
              <span className="hero-plat-dot hero-plat-dot--close" />
              <span className="hero-plat-dot hero-plat-dot--warn" />
              <span className="hero-plat-dot hero-plat-dot--go" />
            </div>
            <div className="hero-plat-chrome-rule" aria-hidden />
            <div className="hero-plat-chrome-title">Logi Platform Core</div>
          </div>

          <div className="relative space-y-3.5 px-5 pb-5 pt-[1.125rem]">
            {structureCards.map((card, index) => {
              const active = isLayerActive(index);
              const dimmed = isLayerDimmed(index);

              return (
                <div
                  key={card.title}
                  className={cn(
                    "hero-plat-layer px-4 py-3.5",
                    `hero-plat-layer--${index}`,
                    dimmed && "opacity-[0.55]",
                    active && "hero-plat-layer--active",
                  )}
                  onMouseEnter={() => {
                    if (!lgHover) return;
                    setCardIndex(index);
                  }}
                  onMouseLeave={clearDiagramHover}
                >
                  <div className="hero-plat-layer-title">{card.title}</div>
                  <div className="flex flex-wrap gap-2">
                    {card.tags.map((tag) => {
                      const tagActive = tagHover === tag;

                      return (
                        <span
                          key={tag}
                          className={cn(
                            "hero-plat-tag",
                            tagActive && "hero-plat-tag--active",
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
