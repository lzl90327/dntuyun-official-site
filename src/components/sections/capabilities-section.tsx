import {
  ArrowRight,
  Network,
  Package2,
  PanelsTopLeft,
  ScanSearch,
} from "lucide-react";
import {
  capabilityCards,
  capabilityTags,
  platformBaseTags,
} from "@/lib/site-data";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const capabilityIcons = [Network, Package2, PanelsTopLeft, ScanSearch];

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="bg-surface py-18 sm:py-24 lg:py-28">
      <Container className="space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="平台能力"
            title="六大能力，共属一个平台体系"
            align="between"
            action={
              <a
                href="#contact"
                className="text-brand-blue inline-flex items-center gap-2 text-sm font-medium"
              >
                查看完整能力
                <ArrowRight size={15} />
              </a>
            }
          />
        </Reveal>

        <div className="hidden items-center justify-between px-10 lg:flex">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="flex flex-1 items-center">
              <span className="bg-brand-blue size-2 rounded-full" />
              {index < 5 ? (
                <span className="bg-line-strong/40 h-px flex-1" />
              ) : null}
            </div>
          ))}
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.04fr_0.96fr]">
          <Reveal className="bg-navy relative overflow-hidden rounded-[28px] border border-white/5 p-8 text-white shadow-[0_24px_70px_rgba(10,18,36,0.16)] sm:p-10">
            <div className="absolute inset-y-0 left-0 w-px bg-white/5" />
            <div className="space-y-6">
              <div className="bg-brand-blue/30 inline-flex size-11 items-center justify-center rounded-[15px] border border-white/10">
                <Network size={18} className="text-white" />
              </div>
              <h3 className="text-[32px] font-semibold tracking-[-0.05em]">
                业务协同
              </h3>
              <p className="max-w-[510px] text-[15px] leading-8 text-white/58">
                覆盖发货方、承运方、调度方多角色协同链路，实现订单、运单与结算的全流程数字化闭环。
              </p>
              <div className="flex flex-wrap gap-2">
                {capabilityTags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-brand-blue/22 rounded-[10px] border border-white/8 px-3 py-1.5 text-[11px] text-white/76"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 pt-4 text-sm text-white/72 transition-colors hover:text-white"
              >
                详细介绍
                <ArrowRight size={15} />
              </a>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {capabilityCards.map((card, index) => {
              const Icon = capabilityIcons[index];
              return (
                <Reveal
                  key={card.title}
                  delay={index * 0.05}
                  className="group border-line shadow-soft rounded-[22px] border bg-white p-6 transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <div className="mb-5 flex items-start justify-between">
                    <div className="bg-brand-blue/6 text-brand-blue inline-flex size-10 items-center justify-center rounded-[14px]">
                      <Icon size={18} />
                    </div>
                    <span className="text-line-strong text-[11px] font-semibold tracking-[0.18em]">
                      0{index + 2}
                    </span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-ink-strong text-[22px] font-semibold tracking-[-0.04em]">
                      {card.title}
                    </h3>
                    <p className="text-ink-soft text-[14px] leading-8">
                      {card.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal className="border-line shadow-soft rounded-[20px] border bg-white px-6 py-5 sm:px-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-2">
              <div className="text-ink-strong text-[15px] font-semibold">
                平台底座
              </div>
              <p className="text-ink-soft max-w-[740px] text-[14px] leading-7">
                模块化、可扩展的企业级平台架构，统一数据模型、消息总线与服务治理，是上述六大能力共同运行的工程基础。
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {platformBaseTags.map((tag) => (
                <span
                  key={tag}
                  className="border-brand-blue/12 bg-brand-blue/5 text-brand-blue rounded-full border px-3 py-1 text-[11px] font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
