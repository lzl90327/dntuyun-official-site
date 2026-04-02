import { ArrowRight } from "lucide-react";
import { homePageContent } from "@/content/homepage-content";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { StatItem } from "@/components/ui/stat-item";

export function HeroSection() {
  const { hero } = homePageContent;

  return (
    <section className="section-shell-lg relative overflow-hidden pt-7 sm:pt-14 lg:pt-[4.5rem]">
      <div className="absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(circle_at_top,rgba(33,80,216,0.08),transparent_44%)]" />
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:gap-16">
          <Reveal className="max-w-[560px] space-y-9">
            <div className="border-brand-blue/8 bg-brand-blue/[0.04] text-brand-blue inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[10px] font-semibold tracking-[0.16em]">
              <span className="bg-brand-blue size-1.5 rounded-full" />
              {hero.eyebrow}
            </div>

            <div className="space-y-5">
              <h1 className="text-ink-strong text-[40px] leading-[1.02] font-semibold tracking-[-0.072em] text-balance sm:text-[56px] lg:text-[64px]">
                {hero.titleLines[0]}
                <br />
                <span className="text-brand-blue tracking-[-0.076em]">
                  {hero.titleLines[1]}
                </span>
              </h1>
              <p className="text-ink-soft max-w-[505px] text-[14px] leading-[2.02]">
                {hero.description}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
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

            <div className="border-line grid gap-8 border-t pt-7 sm:grid-cols-3 sm:gap-6">
              {hero.stats.map((item) => (
                <StatItem
                  key={item.label}
                  value={item.value}
                  label={item.label}
                />
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08} className="relative lg:pl-4 xl:pl-8">
            <div className="hero-orbit absolute inset-0 hidden lg:block">
              <span />
            </div>
            <div className="relative mx-auto max-w-[520px]">
              <div className="absolute inset-0 rounded-[40px] bg-[radial-gradient(circle_at_center,rgba(36,79,210,0.14),transparent_60%)] blur-[72px]" />

              <div className="panel-dark relative mx-auto w-full max-w-[356px] rounded-[25px] before:absolute before:inset-x-6 before:top-0 before:h-px before:bg-white/10">
                <div className="flex items-center gap-2 border-b border-white/6 px-5 py-4">
                  <span className="size-1.5 rounded-full bg-white/24" />
                  <span className="size-1.5 rounded-full bg-white/14" />
                  <span className="size-1.5 rounded-full bg-white/8" />
                  <div className="ml-3 text-[10px] tracking-[0.24em] text-white/24 uppercase">
                    Logi Platform Core
                  </div>
                </div>

                <div className="space-y-3.5 p-5">
                  {hero.structureCards.map((card) => (
                    <div
                      key={card.title}
                      className="rounded-[15px] border border-white/[0.07] bg-[linear-gradient(180deg,rgba(33,80,216,0.22),rgba(9,18,35,0.82))] px-4 py-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                    >
                      <div className="mb-2.5 text-[10px] tracking-[0.18em] text-white/34 uppercase">
                        {card.title}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {card.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-[9px] border border-white/[0.06] bg-white/[0.055] px-2.5 py-1 text-[10px] font-medium text-white/68"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute top-16 -right-3 hidden gap-3 xl:flex xl:flex-col">
                {hero.floatingLabels.map((tag, index) => (
                  <div
                    key={tag}
                    className="rounded-[13px] border border-black/[0.035] bg-white/[0.68] px-4 py-2 text-[10px] font-medium tracking-[0.01em] text-ink-strong/72 shadow-[0_10px_22px_rgba(10,20,36,0.028)] backdrop-blur-[14px]"
                    style={{ transform: `translateX(${index * 7}px)` }}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
