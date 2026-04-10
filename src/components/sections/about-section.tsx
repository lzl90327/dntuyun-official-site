import { ArrowRight } from "lucide-react";
import { homePageContent } from "@/content/homepage-content";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function AboutSection() {
  const { about } = homePageContent.sections;

  return (
    <section id="about" className="bg-surface section-shell scroll-mt-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-16">
          <Reveal className="max-w-[530px] space-y-6 lg:pt-1">
            <p className="eyebrow">{about.eyebrow}</p>
            <h2 className="text-ink-strong text-[32px] leading-[1.14] font-semibold tracking-[-0.055em] text-balance sm:text-[42px]">
              {about.titleLines[0]}
              <br />
              {about.titleLines[1]}
            </h2>
            <div className="max-w-[498px] space-y-4">
              {about.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-ink-soft text-[14px] leading-[1.92]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <a
              href={about.action.href}
              className="text-link-subtle inline-flex items-center gap-2 pt-5"
            >
              {about.action.label}
              <ArrowRight size={16} />
            </a>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="panel-white overflow-hidden rounded-[26px]">
              <div className="border-b border-line bg-[color:color-mix(in_srgb,var(--brand-primary)_3%,transparent)] px-6 py-[13px] text-[13px] font-medium text-ink-strong">
                {about.statsPanelTitle}
              </div>
              <div className="divide-y divide-line">
                {about.stats.map((item) => (
                  <div
                    key={item.title}
                    className="grid gap-2 px-6 py-[22px] sm:grid-cols-[120px_1fr] sm:items-center"
                  >
                    <div className="text-brand-blue/90 text-[34px] font-semibold tracking-[-0.05em]">
                      {item.value}
                    </div>
                    <div className="space-y-1">
                      <div className="text-ink-strong text-[16px] font-semibold tracking-[-0.03em]">
                        {item.title}
                      </div>
                      <div className="text-[11px] leading-[1.65] text-ink-faint">
                        {item.description}
                      </div>
                    </div>
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
