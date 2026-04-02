import { ArrowRight } from "lucide-react";
import { aboutStats } from "@/lib/site-data";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function AboutSection() {
  return (
    <section id="about" className="bg-surface py-18 sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <Reveal className="max-w-[520px] space-y-6">
            <p className="text-brand-blue text-[11px] font-semibold tracking-[0.18em] uppercase">
              关于我们
            </p>
            <h2 className="text-ink-strong text-[34px] leading-[1.12] font-semibold tracking-[-0.05em] text-balance sm:text-[46px]">
              专注物流数字化的
              <br />
              平台型科技公司
            </h2>
            <p className="text-ink-soft text-[15px] leading-8">
              专注物流行业数字化平台建设，深耕物流业务场景，为物流企业提供覆盖全链路的统一数字化平台。
            </p>
            <p className="text-ink-soft text-[15px] leading-8">
              以模块化架构为基础，以业务协同为核心，以开放集成为边界，支撑物流企业从单点数字化向全局平台化持续演进。
            </p>
            <a
              href="#contact"
              className="text-brand-blue inline-flex items-center gap-2 pt-3 text-sm font-medium"
            >
              了解公司详情
              <ArrowRight size={15} />
            </a>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="border-line shadow-soft overflow-hidden rounded-[24px] border bg-white">
              <div className="border-line bg-brand-blue/[0.06] text-ink-strong border-b px-6 py-4 text-sm font-medium">
                企业概况
              </div>
              <div className="divide-line divide-y">
                {aboutStats.map((item) => (
                  <div
                    key={item.title}
                    className="grid gap-2 px-6 py-6 sm:grid-cols-[120px_1fr] sm:items-center"
                  >
                    <div className="text-brand-blue text-[40px] font-semibold tracking-[-0.05em]">
                      {item.value}
                    </div>
                    <div className="space-y-1">
                      <div className="text-ink-strong text-[18px] font-semibold tracking-[-0.03em]">
                        {item.title}
                      </div>
                      <div className="text-ink-faint text-[14px]">
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
