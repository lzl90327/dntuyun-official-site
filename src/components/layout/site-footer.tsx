import { homePageContent } from "@/content/homepage-content";
import { siteConfig } from "@/content/site-config";
import { BrandMark } from "@/components/ui/brand-mark";
import { Container } from "@/components/ui/container";

export function SiteFooter() {
  const { footer } = homePageContent;

  return (
    <footer className="bg-navy text-white">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-12 border-b border-white/[0.08] pb-10 lg:grid-cols-[1.3fr_0.7fr_0.7fr_1fr]">
          <div className="max-w-[250px] space-y-4">
            <div className="flex items-center gap-3">
              <BrandMark inverse className="size-7 rounded-[8px]" />
              <span className="text-[13px] font-semibold tracking-[-0.03em] text-white">
                {siteConfig.brand.name}
              </span>
            </div>
            <p className="text-[13px] leading-[1.9] text-white/46">
              {footer.description}
            </p>
          </div>

          {footer.columns.map((column) => (
            <div key={column.title} className="space-y-3.5">
              <h3 className="text-[11px] font-semibold tracking-[0.18em] text-white/30 uppercase">
                {column.title}
              </h3>
              <ul className="space-y-3 text-[13px] text-white/56">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="transition-colors hover:text-white/82"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="space-y-3.5">
            <h3 className="text-[11px] font-semibold tracking-[0.18em] text-white/30 uppercase">
              联系
            </h3>
            <div className="max-w-[220px] space-y-3 text-[13px] text-white/56">
              <p>{siteConfig.contact.email}</p>
              <p>{siteConfig.contact.phone}</p>
              <p className="leading-[1.8] break-words text-white/50">
                {siteConfig.contact.address}
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 pt-6 text-[11px] text-white/24 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
          <p>{siteConfig.footer.copyright}</p>
          <a
            href={siteConfig.footer.icp.href}
            target="_blank"
            rel="noreferrer noopener"
            className="justify-self-start text-white/32 transition-[color,text-decoration-color] hover:text-white/46 hover:underline hover:decoration-white/28 hover:underline-offset-2 sm:justify-self-center"
          >
            {siteConfig.footer.icp.label}
          </a>
          <div className="flex gap-5 sm:justify-self-end">
            {siteConfig.footer.legalLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-white/40"
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
