import { ArrowRight } from "lucide-react";
import { valueItems } from "@/lib/site-data";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function ValueSection() {
  return (
    <section className="py-18 sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14">
          <Reveal>
            <div className="value-grid-panel bg-navy relative overflow-hidden rounded-[28px] border border-white/5 px-8 py-10 text-white shadow-[0_24px_70px_rgba(10,18,36,0.14)] sm:px-10 sm:py-12">
              <div className="space-y-6">
                <div className="inline-flex size-10 items-center justify-center rounded-[14px] border border-white/10 bg-white/6 text-[12px] font-semibold text-white/80">
                  ▣
                </div>
                <h2 className="max-w-[10ch] text-[34px] leading-[1.18] font-semibold tracking-[-0.05em]">
                  不只是软件，
                  <br />
                  是物流业务的
                  <br />
                  <span className="text-brand-blue-light">数字化平台底座</span>
                </h2>
                <p className="max-w-[420px] text-[14px] leading-8 text-white/52">
                  围绕物流企业真实运营流程构建，而非通用功能的堆叠。平台的价值在于长期演进中的可重构性与扩展性。
                </p>
              </div>

              <a
                href="#capabilities"
                className="mt-16 inline-flex items-center gap-2 text-sm text-white/72 transition-colors hover:text-white"
              >
                查看平台能力
                <ArrowRight size={15} />
              </a>
            </div>
          </Reveal>

          <div className="divide-line border-line divide-y rounded-[28px] border bg-white/72 backdrop-blur-sm">
            {valueItems.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 0.05}
                className="grid gap-4 px-7 py-7 sm:grid-cols-[72px_1fr] sm:px-10"
              >
                <div className="text-line-strong text-[12px] font-semibold tracking-[0.2em]">
                  {item.index}
                </div>
                <div className="space-y-2">
                  <h3 className="text-ink-strong text-[22px] font-semibold tracking-[-0.04em]">
                    {item.title}
                  </h3>
                  <p className="text-ink-soft max-w-[650px] text-[14px] leading-8">
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
