import { scenarios } from "@/lib/site-data";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function ScenariosSection() {
  return (
    <section className="py-18 sm:py-24 lg:py-28">
      <Container className="space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="典型场景"
            title="面向真实物流业务，而非通用行业方案"
          />
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-3">
          {scenarios.map((scenario, index) => (
            <Reveal
              key={scenario.title}
              delay={index * 0.05}
              className="border-line shadow-soft rounded-[22px] border bg-white p-7"
            >
              <div className="mb-10 flex items-start justify-between">
                <span className="text-[48px] font-semibold tracking-[-0.06em] text-[#eff3fa]">
                  {scenario.index}
                </span>
                <span className="border-brand-blue/12 bg-brand-blue/5 text-brand-blue rounded-full border px-3 py-1 text-[11px] font-semibold tracking-[0.12em] uppercase">
                  {scenario.tag}
                </span>
              </div>

              <div className="space-y-4">
                <h3 className="text-ink-strong text-[28px] font-semibold tracking-[-0.05em]">
                  {scenario.title}
                </h3>
                <p className="text-ink-soft min-h-[108px] text-[14px] leading-8">
                  {scenario.description}
                </p>
              </div>

              <div className="border-line mt-8 flex flex-wrap gap-2 border-t pt-5">
                {scenario.chips.map((chip) => (
                  <span
                    key={chip}
                    className="bg-surface text-ink-faint rounded-full px-3 py-1 text-[11px]"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
