import { ArrowRight } from "lucide-react";
import { homePageContent } from "@/content/homepage-content";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function ArchitectureSection() {
  const { architecture } = homePageContent.sections;

  return (
    <section
      id="architecture"
      className="bg-navy section-shell-lg relative scroll-mt-28 overflow-hidden text-white"
    >
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.016)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:112px_112px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,color-mix(in_srgb,var(--brand-primary)_8%,transparent),transparent_34%),radial-gradient(circle_at_right,color-mix(in_srgb,var(--brand-primary)_5%,transparent),transparent_28%)]" />
      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal className="max-w-[468px] space-y-5">
            <p className="text-brand-blue-light text-[10px] font-semibold tracking-[0.18em] uppercase">
              {architecture.eyebrow}
            </p>
            <h2 className="text-[32px] leading-[1.14] font-semibold tracking-[-0.055em] text-balance sm:text-[44px]">
              {architecture.titleLines[0]}
              <br />
              {architecture.titleLines[1]}
            </h2>
            <p className="max-w-[440px] text-[14px] leading-[1.95] text-[color:color-mix(in_srgb,var(--text-on-dark)_54%,transparent)]">
              {architecture.description}
            </p>
            <ul className="space-y-2.5 pt-2 text-[13px] leading-[1.82] text-[color:color-mix(in_srgb,var(--text-on-dark)_60%,transparent)]">
              {architecture.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="bg-brand-blue-light mt-[9px] size-1.5 rounded-full" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button
              href={architecture.action.href}
              variant="ghost"
              className="mt-4 w-fit gap-2 rounded-[13px] px-5"
            >
              {architecture.action.label}
              <ArrowRight size={16} />
            </Button>
          </Reveal>

          <Reveal delay={0.08} className="relative">
            <div className="absolute inset-0 rounded-[40px] bg-[radial-gradient(circle_at_center,color-mix(in_srgb,var(--brand-primary)_11%,transparent),transparent_60%)] blur-[92px]" />
            <div className="relative space-y-4.5">
              {architecture.layers.map((layer, index) => (
                <div
                  key={layer.level}
                  className="architecture-layer relative ml-auto max-w-[620px] rounded-[24px] border border-[color:var(--border-on-dark-soft)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--brand-primary)_14%,transparent),rgba(10,22,41,0.76))] px-5 py-[18px] shadow-[0_16px_42px_rgba(3,8,20,0.12)]"
                  style={{ width: `${100 - index * 6}%` }}
                >
                  <div className="grid gap-4 sm:grid-cols-[112px_1fr_64px] sm:items-center">
                    <div className="rounded-[15px] border border-[color:var(--border-on-dark-faint)] bg-white/[0.03] px-4 py-3">
                      <div className="text-[10px] font-semibold tracking-[0.18em] text-[color:color-mix(in_srgb,var(--text-on-dark)_28%,transparent)] uppercase">
                        {layer.level}
                      </div>
                      <div className="mt-1 text-[13px] font-medium text-[color:color-mix(in_srgb,var(--text-on-dark)_72%,transparent)]">
                        {layer.name}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {layer.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-[9px] border border-[color:var(--border-on-dark-faint)] bg-white/[0.04] px-3 py-1.5 text-[10px] font-medium text-[color:color-mix(in_srgb,var(--text-on-dark)_64%,transparent)]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <div className="text-brand-blue-light/54 hidden items-center justify-end text-[10px] font-semibold tracking-[0.1em] sm:flex">
                      {layer.side}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
