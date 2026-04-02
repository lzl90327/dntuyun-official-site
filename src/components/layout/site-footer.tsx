import { footerColumns } from "@/lib/site-data";
import { BrandMark } from "@/components/ui/brand-mark";
import { Container } from "@/components/ui/container";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-12 border-b border-white/10 pb-10 lg:grid-cols-[1.3fr_0.7fr_0.7fr_1fr]">
          <div className="max-w-[260px] space-y-4">
            <div className="flex items-center gap-3">
              <BrandMark inverse className="size-7 rounded-[8px]" />
              <span className="text-sm font-semibold tracking-[-0.03em] text-white">
                LogiPlatform
              </span>
            </div>
            <p className="text-sm leading-7 text-white/56">
              面向物流行业的数字化平台，构建业务协同、运营管理与开放集成能力。
            </p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title} className="space-y-4">
              <h3 className="text-xs font-semibold tracking-[0.2em] text-white/42 uppercase">
                {column.title}
              </h3>
              <ul className="space-y-3 text-sm text-white/68">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="transition-colors hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="space-y-4">
            <h3 className="text-xs font-semibold tracking-[0.2em] text-white/42 uppercase">
              联系
            </h3>
            <div className="space-y-3 text-sm text-white/68">
              <p>hello@logiplatform.com</p>
              <p>+86 021-0000-0000</p>
              <p>上海市浦东新区张江高科技园区</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-xs text-white/34 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2024 LogiPlatform Inc. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white/60">
              隐私政策
            </a>
            <a href="#" className="hover:text-white/60">
              服务条款
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
