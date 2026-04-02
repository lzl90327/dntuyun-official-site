import { ArrowRight } from "lucide-react";
import { architectureHighlights, architectureLayers } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function ArchitectureSection() {
  return (
    <section
      id="architecture"
      className="bg-navy relative overflow-hidden py-20 text-white sm:py-24 lg:py-28"
    >
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:120px_120px]" />
      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="max-w-[470px] space-y-6">
            <p className="text-brand-blue-light text-[11px] font-semibold tracking-[0.18em] uppercase">
              技术架构
            </p>
            <h2 className="text-[34px] leading-[1.12] font-semibold tracking-[-0.05em] text-balance sm:text-[46px]">
              扎实的平台底座，
              <br />
              支撑业务持续演进
            </h2>
            <p className="text-[15px] leading-8 text-white/56">
              分层架构设计，从基础设施到应用层每一层保持模块化、可替换、可扩展的工程规范，确保业务增长下的平台韧性。
            </p>
            <ul className="space-y-3 pt-1 text-[14px] leading-7 text-white/68">
              {architectureHighlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="bg-brand-blue-light mt-2 size-1.5 rounded-full" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button
              href="#contact"
              variant="ghost"
              className="mt-4 w-fit gap-2"
            >
              查看完整技术架构
              <ArrowRight size={15} />
            </Button>
          </Reveal>

          <Reveal delay={0.08} className="relative">
            <div className="absolute inset-0 rounded-[40px] bg-[radial-gradient(circle_at_center,rgba(34,78,209,0.22),transparent_60%)] blur-[110px]" />
            <div className="relative space-y-5">
              {architectureLayers.map((layer, index) => (
                <div
                  key={layer.level}
                  className="architecture-layer relative ml-auto max-w-[620px] rounded-[24px] border border-white/8 bg-[linear-gradient(180deg,rgba(40,79,207,0.25),rgba(13,24,46,0.82))] px-5 py-5 shadow-[0_24px_60px_rgba(4,9,20,0.18)]"
                  style={{ width: `${100 - index * 6}%` }}
                >
                  <div className="grid gap-4 sm:grid-cols-[96px_1fr_56px] sm:items-center">
                    <div className="rounded-[16px] border border-white/6 bg-white/4 px-4 py-3">
                      <div className="text-[11px] font-semibold tracking-[0.18em] text-white/34 uppercase">
                        {layer.level}
                      </div>
                      <div className="mt-1 text-sm font-medium text-white/74">
                        {layer.name}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {layer.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-[10px] border border-white/6 bg-white/6 px-3 py-1.5 text-[12px] text-white/74"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <div className="text-brand-blue-light hidden items-center justify-end text-[11px] font-semibold tracking-[0.18em] uppercase sm:flex">
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
