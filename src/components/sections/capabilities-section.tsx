import {
  ArrowRight,
  Building2,
  ChartColumn,
  Cuboid,
  Plug2,
  Truck,
  Workflow,
} from "lucide-react";
import { homePageContent } from "@/content/homepage-content";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const capabilityIcons = {
  featured: Workflow,
  cards: [Truck, Building2, ChartColumn, Plug2],
  base: Cuboid,
};

export function CapabilitiesSection() {
  const { capabilities } = homePageContent.sections;
  const FeaturedIcon = capabilityIcons.featured;
  const BaseIcon = capabilityIcons.base;

  return (
    <section
      id="capabilities"
      className="bg-surface section-shell scroll-mt-28"
    >
      <Container className="space-y-12">
        <Reveal>
          <SectionHeading
            eyebrow={capabilities.eyebrow}
            title={capabilities.title}
            align="between"
            titleClassName="max-w-none whitespace-nowrap text-[24px] tracking-[-0.045em] sm:text-[32px] lg:text-[38px]"
            action={
              <a
                href={capabilities.action.href}
                className="text-link-subtle inline-flex items-center gap-2"
              >
                {capabilities.action.label}
                <ArrowRight size={16} />
              </a>
            }
          />
        </Reveal>

        <div className="hidden items-center justify-between px-10 lg:flex">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="flex flex-1 items-center">
              <span className="bg-brand-blue/48 size-1 rounded-full" />
              {index < 5 ? (
                <span className="h-px flex-1 bg-[linear-gradient(90deg,rgba(33,80,216,0.11),rgba(33,80,216,0.025))]" />
              ) : null}
            </div>
          ))}
        </div>

        <div className="space-y-4 lg:space-y-5">
          <div className="grid items-start gap-5 lg:grid-cols-[1.04fr_0.96fr] lg:items-stretch">
            <Reveal className="value-grid-panel panel-dark relative flex h-full min-h-[360px] overflow-hidden rounded-[29px] border border-white/[0.11] px-8 py-7 text-white shadow-[0_22px_56px_rgba(2,8,22,0.38)] sm:px-9 sm:py-8 lg:min-h-[426px]">
            <div className="absolute inset-y-0 left-0 w-px bg-white/[0.05]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.045),transparent_38%)]" />
              <div className="relative flex h-full w-full flex-col">
                <div className="space-y-3.5">
                  <div className="inline-flex size-10 items-center justify-center rounded-[14px] border border-white/[0.12] bg-brand-blue/26 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
                    <FeaturedIcon size={18} className="text-white" />
                  </div>
                  <h3 className="text-[28px] leading-[1.12] font-semibold tracking-[-0.052em]">
                    {capabilities.featured.title}
                  </h3>
                  <div className="space-y-2.5">
                    <p className="max-w-[446px] text-[14px] leading-[1.8] text-white/64">
                      {capabilities.featured.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {capabilities.featured.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-[9px] border border-white/[0.08] bg-brand-blue/[0.16] px-3 py-1 text-[10px] font-medium tracking-[0.01em] text-white/75"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <a
                  href={capabilities.featured.detailLink.href}
                  className="mt-auto inline-flex items-center gap-2 pt-3 text-[13px] text-white/72 transition-colors hover:text-white"
                >
                  {capabilities.featured.detailLink.label}
                  <ArrowRight size={16} />
                </a>
              </div>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2">
              {capabilities.cards.map((card, index) => {
                const Icon = capabilityIcons.cards[index];
                return (
                  <Reveal
                    key={card.title}
                    delay={index * 0.05}
                    className="panel-white group h-full rounded-[24px] p-6 shadow-[0_6px_22px_rgba(9,21,40,0.04)] transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-[2px] hover:border-[color:color-mix(in_srgb,var(--brand-primary)_11%,transparent)] hover:shadow-[0_20px_44px_rgba(9,21,40,0.065)]"
                  >
                    <div className="mb-4.5 flex items-start justify-between">
                      <div className="inline-flex size-10 items-center justify-center rounded-[13px] border border-brand-blue/[0.08] bg-brand-blue/[0.05] text-brand-blue">
                        <Icon size={18} />
                      </div>
                      <span className="text-[10px] font-semibold tracking-[0.16em] text-ink-faint">
                        0{index + 2}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-ink-strong min-h-[26px] text-[19px] leading-[1.35] font-semibold tracking-[-0.04em]">
                        {card.title}
                      </h3>
                      <p className="text-ink-soft max-w-[262px] text-[13px] leading-[1.8] sm:min-h-[92px]">
                        {card.description}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
          <Reveal className="relative overflow-hidden rounded-[22px] border border-[color:var(--border-default)] bg-gradient-to-b from-card to-card-soft px-6 py-5 shadow-[0_12px_34px_rgba(10,21,40,0.045)] backdrop-blur-[14px] sm:px-8 sm:py-6">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,color-mix(in_srgb,var(--brand-primary)_5%,transparent),color-mix(in_srgb,var(--brand-primary)_14%,transparent),color-mix(in_srgb,var(--brand-primary)_5%,transparent))]" />
            <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/55 to-transparent opacity-90" />
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-start gap-4">
                <div className="mt-0.5 inline-flex size-10 shrink-0 items-center justify-center rounded-[13px] border border-[color:color-mix(in_srgb,var(--brand-primary)_10%,transparent)] bg-brand-blue/[0.06] text-brand-blue shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]">
                  <BaseIcon size={18} />
                </div>
                <div className="space-y-2.5">
                  <div className="text-ink-strong text-[14px] font-semibold tracking-[-0.02em]">
                    {capabilities.base.title}
                  </div>
                  <p className="text-ink-soft max-w-[720px] text-[13px] leading-[1.9]">
                    {capabilities.base.description}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {capabilities.base.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border-brand-blue/8 bg-brand-blue/[0.045] text-brand-blue rounded-full border px-3 py-1 text-[10px] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
