import { ArrowRight } from "lucide-react";
import { heroStats } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { StatItem } from "@/components/ui/stat-item";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-8 pb-18 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28">
      <div className="absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_top,rgba(36,79,210,0.08),transparent_46%)]" />
      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)]">
          <Reveal className="max-w-[560px] space-y-8">
            <div className="border-brand-blue/10 bg-brand-blue/5 text-brand-blue inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold tracking-[0.16em]">
              <span className="bg-brand-blue size-1.5 rounded-full" />
              物流数字化平台
            </div>

            <div className="space-y-6">
              <h1 className="text-ink-strong text-[42px] leading-[0.98] font-semibold tracking-[-0.07em] text-balance sm:text-[58px] lg:text-[68px]">
                连接物流全链路
                <br />
                <span className="text-brand-blue">数字化平台体系</span>
              </h1>
              <p className="text-ink-soft max-w-[520px] text-[16px] leading-8">
                统一平台底座、整合运营管理、业务协同、组织协同、运营分析与开放接口能力，为物流企业提供可靠的数字化建设基座。
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="#capabilities" className="min-w-[168px] gap-2">
                了解平台能力
                <ArrowRight size={16} />
              </Button>
              <Button
                href="#contact"
                variant="secondary"
                className="min-w-[132px]"
              >
                联系我们
              </Button>
            </div>

            <div className="border-line grid gap-8 border-t pt-8 sm:grid-cols-3 sm:gap-6">
              {heroStats.map((item) => (
                <StatItem
                  key={item.label}
                  value={item.value}
                  label={item.label}
                />
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08} className="relative lg:pl-8">
            <div className="hero-orbit absolute inset-0 hidden lg:block" />
            <div className="relative mx-auto max-w-[520px]">
              <div className="absolute inset-0 rounded-[40px] bg-[radial-gradient(circle_at_center,rgba(36,79,210,0.16),transparent_62%)] blur-3xl" />

              <div className="bg-navy relative mx-auto w-full max-w-[350px] rounded-[24px] border border-white/10 shadow-[0_30px_80px_rgba(12,18,36,0.3)]">
                <div className="flex items-center gap-2 border-b border-white/8 px-5 py-4">
                  <span className="size-2 rounded-full bg-white/24" />
                  <span className="size-2 rounded-full bg-white/16" />
                  <span className="size-2 rounded-full bg-white/10" />
                  <div className="ml-3 text-[11px] tracking-[0.22em] text-white/30 uppercase">
                    Logi Platform Core
                  </div>
                </div>

                <div className="space-y-4 p-5">
                  {[
                    {
                      title: "L4 应用层",
                      tags: ["调度中心", "运营看板", "门户"],
                    },
                    {
                      title: "L3 业务层",
                      tags: ["运单引擎", "协同服务", "订单"],
                    },
                    {
                      title: "L2 数据层",
                      tags: ["数仓", "实时计算", "主数据"],
                    },
                    {
                      title: "L1 基础设施",
                      tags: ["服务集群", "消息总线", "权限"],
                    },
                  ].map((card) => (
                    <div
                      key={card.title}
                      className="rounded-[16px] border border-white/8 bg-[linear-gradient(180deg,rgba(34,78,209,0.22),rgba(10,19,39,0.88))] p-4"
                    >
                      <div className="mb-3 text-[11px] tracking-[0.16em] text-white/38 uppercase">
                        {card.title}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {card.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-[10px] border border-white/7 bg-white/5 px-2.5 py-1 text-[11px] text-white/72"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute top-16 -right-1 hidden gap-4 xl:flex xl:flex-col">
                {["业务协同", "运输管理", "运营分析"].map((tag, index) => (
                  <div
                    key={tag}
                    className="border-line text-ink-strong shadow-soft rounded-[14px] border bg-white px-5 py-3 text-[12px] font-medium"
                    style={{ transform: `translateX(${index * 6}px)` }}
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
