import { homePageContent } from "@/content/homepage-content";
import { siteConfig } from "@/content/site-config";
import { BrandMark } from "@/components/ui/brand-mark";
import { Container } from "@/components/ui/container";

const footerFilingLinkClass =
  "whitespace-nowrap text-[color:var(--footer-filing-link)] transition-[color,text-decoration-color] hover:text-[color:var(--footer-filing-link-hover)] hover:underline hover:decoration-2 hover:decoration-white/45 hover:underline-offset-[3px]";

export function SiteFooter() {
  const { footer } = homePageContent;

  return (
    <footer className="border-t border-[color:var(--border-default)] bg-navy text-white">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-12 border-b border-[color:var(--border-on-dark-soft)] pb-10 lg:grid-cols-[1.3fr_0.7fr_0.7fr_1fr]">
          <div className="max-w-[250px] space-y-4">
            <div className="flex items-center gap-3">
              <BrandMark inverse className="size-7 rounded-[8px]" />
              <span className="text-[13px] font-semibold tracking-[-0.03em] text-[color:var(--text-on-dark)]">
                {siteConfig.brand.name}
              </span>
            </div>
            <p className="text-[13px] leading-[1.9] text-[color:var(--footer-description)]">
              {footer.description}
            </p>
          </div>

          {footer.columns.map((column) => (
            <div key={column.title} className="space-y-3.5">
              <h3 className="text-[11px] font-semibold tracking-[0.18em] text-[color:var(--footer-heading)] uppercase">
                {column.title}
              </h3>
              <ul className="space-y-3 text-[13px] text-[color:var(--footer-body)]">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="transition-colors hover:text-[color:var(--text-on-dark)]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="space-y-3.5">
            <h3 className="text-[11px] font-semibold tracking-[0.18em] text-[color:var(--footer-heading)] uppercase">
              联系
            </h3>
            <div className="max-w-[220px] space-y-3 text-[13px] text-[color:var(--footer-body)]">
              <p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="transition-colors hover:text-[color:var(--text-on-dark)]"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/[\s-]/g, "")}`}
                  className="transition-colors hover:text-[color:var(--text-on-dark)]"
                >
                  {siteConfig.contact.phone}
                </a>
              </p>
              <p className="leading-[1.8] break-words text-[color:var(--footer-address)]">
                {siteConfig.contact.address}
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 pt-6 text-[11px] text-[color:var(--footer-legal-line)] sm:grid-cols-[1fr_auto_1fr] sm:items-center">
          <p>{siteConfig.footer.copyright}</p>
          <div className="flex flex-wrap items-center justify-center justify-self-start gap-x-5 sm:justify-self-center">
            <a
              href={siteConfig.footer.icp.href}
              target="_blank"
              rel="noreferrer noopener"
              className={footerFilingLinkClass}
            >
              {siteConfig.footer.icp.label}
            </a>
            <span
              className="h-2.5 w-px shrink-0 bg-[color:var(--footer-legal-line)]"
              aria-hidden
            />
            <a
              href={siteConfig.footer.policeBeian.href}
              target="_blank"
              rel="noreferrer noopener"
              className={footerFilingLinkClass}
            >
              {siteConfig.footer.policeBeian.label}
            </a>
          </div>
          <div className="flex gap-5 sm:justify-self-end">
            {siteConfig.footer.legalLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition-colors hover:text-[color:var(--text-on-dark)]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
