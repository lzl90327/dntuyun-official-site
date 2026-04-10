import { ArrowRight } from "lucide-react";
import { homePageContent } from "@/content/homepage-content";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function ValueSection() {
  const { value } = homePageContent.sections;

  return (
    <section className="section-shell">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
          <Reveal>
            <div className="value-grid-panel panel-dark relative overflow-hidden rounded-[29px] px-8 py-10 text-white sm:px-10 sm:py-12">
              <div className="space-y-5">
                <div className="inline-flex size-[38px] items-center justify-center rounded-[13px] border border-white/8 bg-white/[0.055] text-[11px] font-semibold text-white/78">
                  ▣
                </div>
                <h2 className="max-w-[11.5ch] text-[32px] leading-[1.14] font-semibold tracking-[-0.055em]">
                  {value.titleCard.titleLines[0]}
                  <br />
                  {value.titleCard.titleLines[1]}
                  <br />
                  <span className="text-brand-blue-light whitespace-nowrap">
                    {value.titleCard.titleLines[2]}
                  </span>
                </h2>
                <p className="max-w-[420px] text-[13px] leading-[2] text-white/50">
                  {value.titleCard.description}
                </p>
              </div>

              <a
                href={value.titleCard.action.href}
                className="mt-14 inline-flex items-center gap-2 text-[13px] text-white/68 transition-colors hover:text-white"
              >
                {value.titleCard.action.label}
                <ArrowRight size={16} />
              </a>
            </div>
          </Reveal>

          <div className="panel-white-soft divide-y divide-black/[0.05] rounded-[28px]">
            {value.items.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 0.05}
                className="grid gap-4 px-7 py-7 sm:grid-cols-[64px_1fr] sm:px-9"
              >
                <div className="text-[11px] font-semibold tracking-[0.16em] text-ink-faint">
                  {item.index}
                </div>
                <div className="space-y-2.5">
                  <h3 className="text-ink-strong text-[20px] font-semibold tracking-[-0.04em]">
                    {item.title}
                  </h3>
                  <p className="text-ink-soft max-w-[650px] text-[13px] leading-[1.95]">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
