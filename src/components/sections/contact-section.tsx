import { Mail, MapPin, Phone } from "lucide-react";
import { contactItems } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FormField } from "@/components/ui/form-field";
import { Reveal } from "@/components/ui/reveal";

const icons = {
  phone: Phone,
  email: Mail,
  address: MapPin,
};

function QrPlaceholder() {
  return (
    <div className="grid size-[72px] grid-cols-5 gap-1 rounded-[14px] bg-white p-2 shadow-[0_10px_26px_rgba(8,14,30,0.08)]">
      {Array.from({ length: 25 }).map((_, index) => {
        const active = [
          0, 1, 3, 4, 5, 7, 9, 10, 12, 14, 15, 16, 18, 20, 22, 23, 24,
        ].includes(index);

        return (
          <span
            key={index}
            className={
              active ? "bg-navy rounded-[2px]" : "rounded-[2px] bg-[#eef2f9]"
            }
          />
        );
      })}
    </div>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="py-18 sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal className="max-w-[520px] space-y-8">
            <div className="space-y-5">
              <p className="text-brand-blue text-[11px] font-semibold tracking-[0.18em] uppercase">
                联系我们
              </p>
              <h2 className="text-ink-strong text-[34px] leading-[1.12] font-semibold tracking-[-0.05em] text-balance sm:text-[46px]">
                欢迎与我们
                <br />
                探讨合作可能
              </h2>
              <p className="text-ink-soft text-[15px] leading-8">
                无论是平台能力咨询、战略合作还是技术架构交流，我们期待与你深入对话。
              </p>
            </div>

            <div className="divide-line border-line shadow-soft divide-y rounded-[24px] border bg-white">
              {contactItems.map((item) => {
                const Icon = icons[item.type as keyof typeof icons];

                return (
                  <div key={item.title} className="flex gap-4 px-6 py-6">
                    <div className="bg-brand-blue/6 text-brand-blue mt-1 inline-flex size-10 items-center justify-center rounded-[14px]">
                      <Icon size={18} />
                    </div>
                    <div className="space-y-1">
                      <div className="text-ink-faint text-[13px] font-medium">
                        {item.title}
                      </div>
                      <div className="text-ink-strong text-[22px] font-semibold tracking-[-0.04em]">
                        {item.value}
                      </div>
                      <div className="text-ink-faint text-[13px]">
                        {item.meta}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="border-line bg-surface flex items-center gap-4 rounded-[24px] border px-5 py-5">
              <QrPlaceholder />
              <div className="space-y-1">
                <div className="text-ink-strong text-[14px] font-semibold">
                  微信扫码联系
                </div>
                <div className="text-ink-faint text-[13px] leading-6">
                  商务合作洽谈
                  <br />
                  方案与技术咨询
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="border-line shadow-soft rounded-[28px] border bg-white p-6 sm:p-8">
              <div className="border-line space-y-2 border-b pb-6">
                <h3 className="text-ink-strong text-[22px] font-semibold tracking-[-0.04em]">
                  商务咨询
                </h3>
                <p className="text-ink-faint text-[14px] leading-7">
                  请留下您的联系信息，我们将在 1 个工作日内与您联系。
                </p>
              </div>

              <form className="space-y-5 pt-6">
                <FormField label="姓名" placeholder="您的姓名" />
                <FormField label="公司" placeholder="公司全称" />
                <FormField
                  label="邮箱"
                  type="email"
                  placeholder="name@company.com"
                />
                <FormField
                  label="咨询内容"
                  multiline
                  placeholder="请简要说明您的业务情况与合作意向（选填）"
                />
                <Button as="button" type="button" className="w-full">
                  发送
                </Button>
              </form>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
