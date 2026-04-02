import { homePageContent } from "@/content/homepage-content";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function ScenariosSection() {
  const { scenarios } = homePageContent.sections;

  return (
    <section className="section-shell">
      <Container className="space-y-12">
        <Reveal>
          <SectionHeading
            eyebrow={scenarios.eyebrow}
            title={scenarios.title}
            titleClassName="max-w-[15ch] text-[30px] leading-[1.18] tracking-[-0.045em] sm:text-[38px]"
          />
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-3">
          {scenarios.cards.map((scenario, index) => (
            <Reveal
              key={scenario.title}
              delay={index * 0.05}
              className="panel-white group relative flex h-full flex-col rounded-[24px] p-7 transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-[1px] hover:shadow-[0_20px_42px_rgba(9,21,40,0.06)]"
            >
              <div className="bg-brand-blue/72 absolute inset-x-0 top-0 h-px rounded-full" />
              <div className="mb-8 flex items-start justify-between">
                <span className="text-[40px] font-semibold tracking-[-0.055em] text-[#edf1f7]">
                  {scenario.index}
                </span>
                <span className="border-brand-blue/[0.06] bg-brand-blue/[0.025] text-brand-blue/78 rounded-full border px-3 py-1 text-[10px] font-semibold tracking-[0.09em] uppercase">
                  {scenario.tag}
                </span>
              </div>

              <div className="space-y-3.5">
                <h3 className="text-ink-strong text-[25px] font-semibold tracking-[-0.05em]">
                  {scenario.title}
                </h3>
                <p className="text-ink-soft/92 min-h-[110px] text-[13px] leading-[1.88]">
                  {scenario.description}
                </p>
              </div>

              <div className="mt-auto flex flex-wrap gap-2 border-t border-black/[0.05] pt-5">
                {scenario.chips.map((chip) => (
                  <span
                    key={chip}
                    className="border-line bg-surface text-ink-soft rounded-full border px-3 py-1 text-[10px] font-medium"
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
