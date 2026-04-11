import { Mail, MapPin, Phone } from "lucide-react";
import { homePageContent } from "@/content/homepage-content";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FormField } from "@/components/ui/form-field";
import { Reveal } from "@/components/ui/reveal";

const icons = {
  phone: Phone,
  email: Mail,
  address: MapPin,
};

export function ContactSection() {
  const { contact } = homePageContent.sections;

  return (
    <section id="contact" className="section-shell scroll-mt-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
          <Reveal className="max-w-[520px] space-y-7">
            <div className="space-y-4">
              <p className="eyebrow">{contact.eyebrow}</p>
              <h2 className="text-ink-strong text-[32px] leading-[1.14] font-semibold tracking-[-0.055em] text-balance sm:text-[42px]">
                {contact.titleLines[0]}
                <br />
                {contact.titleLines[1]}
              </h2>
              <p className="text-ink-soft max-w-[470px] text-[14px] leading-[1.95]">
                {contact.description}
              </p>
            </div>

            <div className="panel-white divide-y divide-black/[0.05] rounded-[26px]">
              {contact.items.map((item) => {
                const Icon = icons[item.type as keyof typeof icons];

                return (
                  <div key={item.title} className="flex gap-4 px-6 py-[22px]">
                    <div className="border-brand-blue/6 bg-brand-blue/[0.045] text-brand-blue mt-0.5 inline-flex size-10 items-center justify-center rounded-[13px] border">
                      <Icon size={18} />
                    </div>
                    <div className="space-y-1.5">
                      <div className="text-ink-faint text-[12px] font-medium">
                        {item.title}
                      </div>
                      <div className="text-ink-strong break-words text-[20px] leading-[1.45] font-semibold tracking-[-0.04em]">
                        {item.value}
                      </div>
                      {item.meta ? (
                        <div className="text-ink-faint text-[12px]">
                          {item.meta}
                        </div>
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="panel-white rounded-[28px] p-6 sm:p-8 lg:sticky lg:top-28">
              <div className="space-y-2 border-b border-black/[0.05] pb-6">
                <h3 className="text-ink-strong text-[20px] font-semibold tracking-[-0.04em]">
                  {contact.form.title}
                </h3>
                <p className="text-ink-faint/90 text-[13px] leading-[1.82]">
                  {contact.form.description}
                </p>
              </div>

              <form className="space-y-4.5 pt-6">
                <FormField
                  label={contact.form.fields.name.label}
                  placeholder={contact.form.fields.name.placeholder}
                />
                <FormField
                  label={contact.form.fields.company.label}
                  placeholder={contact.form.fields.company.placeholder}
                />
                <FormField
                  label={contact.form.fields.email.label}
                  type="email"
                  placeholder={contact.form.fields.email.placeholder}
                />
                <FormField
                  label={contact.form.fields.message.label}
                  multiline
                  placeholder={contact.form.fields.message.placeholder}
                />
                <Button
                  as="button"
                  type="button"
                  className="bg-brand-blue mt-1 h-[46px] w-full rounded-[13px] shadow-[0_10px_22px_rgba(33,80,216,0.11)] hover:shadow-[0_12px_24px_rgba(33,80,216,0.13)]"
                >
                  {contact.form.submitLabel}
                </Button>
              </form>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
