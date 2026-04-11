import { ArrowRight } from "lucide-react";
import { homePageContent } from "@/content/homepage-content";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { HeroPlatformDiagram } from "@/components/sections/hero-platform-diagram";
import { Reveal } from "@/components/ui/reveal";
import { StatItem } from "@/components/ui/stat-item";

export function HeroSection() {
  const { hero } = homePageContent;

  return (
    <section className="section-shell-lg relative overflow-hidden pt-7 pb-20 sm:pb-24 sm:pt-14 lg:pb-[6.75rem] lg:pt-[4.75rem]">
      <div className="hero-stage-field" aria-hidden>
        <div className="hero-stage-field__base" />
        <div className="hero-stage-field__wash" />
        <div className="hero-stage-field__grid-wide" />
        <div className="hero-stage-field__mesh" />
        <div className="hero-stage-field__flow" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:gap-[4.75rem] xl:gap-[5.5rem]">
          <Reveal className="max-w-[600px]">
            <div className="border-brand-blue/10 bg-brand-blue/[0.055] text-brand-blue inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-[10px] font-semibold tracking-[0.16em]">
              <span className="bg-brand-blue size-1.5 rounded-full shadow-[0_0_0_3px_rgba(33,80,216,0.12)]" />
              {hero.eyebrow}
            </div>

            <div className="mt-9 space-y-7 sm:mt-10 sm:space-y-8 lg:mt-11 lg:space-y-9">
              <h1 className="text-ink-strong text-[44px] leading-[1.03] font-semibold tracking-[-0.076em] text-balance sm:text-[58px] sm:leading-[1.02] lg:text-[72px] lg:leading-[0.99] lg:tracking-[-0.078em]">
                {hero.titleLines[0]}
                <br />
                <span className="text-brand-blue tracking-[-0.08em]">
                  {hero.titleLines[1]}
                </span>
              </h1>
              <p className="text-ink-soft/93 max-w-[528px] text-[15px] leading-[1.82] tracking-[-0.012em] sm:text-[15.5px] sm:leading-[1.86]">
                {hero.description}
              </p>
            </div>

            <div className="mt-9 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:items-center lg:mt-11">
              <Button
                href={hero.primaryButton.href}
                className="min-w-[168px] gap-2 rounded-[13px] px-5"
                style={{ color: "#fff" }}
              >
                {hero.primaryButton.label}
                <ArrowRight size={16} />
              </Button>
              <Button
                href={hero.secondaryButton.href}
                variant="secondary"
                className="min-w-[132px] rounded-[13px] px-5"
              >
                {hero.secondaryButton.label}
              </Button>
            </div>

            <div className="relative mt-12 rounded-[22px] border border-brand-blue/[0.075] bg-[linear-gradient(142deg,rgba(255,255,255,0.93)_0%,rgba(248,251,255,0.82)_45%,rgba(238,244,252,0.55)_100%)] px-6 py-7 shadow-[0_14px_40px_rgba(33,80,216,0.038),inset_0_1px_0_rgba(255,255,255,0.78)] sm:mt-14 sm:px-8 sm:py-8 lg:mt-[3.25rem]">
              <div
                className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-brand-blue/18 to-transparent"
                aria-hidden="true"
              />
              <div className="grid gap-9 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-brand-blue/[0.08]">
                {hero.stats.map((item, index) => (
                  <div
                    key={item.label}
                    className={
                      index > 0
                        ? "sm:pl-8 lg:pl-10"
                        : "sm:pr-2"
                    }
                  >
                    <StatItem
                      value={item.value}
                      label={item.label}
                      variant="hero"
                    />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="relative lg:pl-0 xl:pl-4">
            <HeroPlatformDiagram structureCards={hero.structureCards} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
