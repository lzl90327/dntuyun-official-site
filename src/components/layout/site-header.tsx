"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { homePageContent } from "@/content/homepage-content";
import { siteConfig } from "@/content/site-config";
import { BrandMark } from "@/components/ui/brand-mark";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { navigation, contactButtonLabel } = homePageContent.header;

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--brand-soft)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--bg-page)_92%,transparent),color-mix(in_srgb,var(--bg-section-alt)_86%,transparent))] backdrop-blur-[9px]">
      <Container className="flex h-[72px] items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2.5">
          <BrandMark className="size-7 rounded-[8px]" />
          <span className="text-ink-strong text-[14px] font-semibold leading-none tracking-[-0.045em]">
            {siteConfig.brand.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-ink-soft hover:text-ink-strong text-[13px] font-medium tracking-[0.01em] transition-colors"
            >
              {item.label}
            </a>
          ))}
          <Button
            href="#contact"
            className="h-[42px] rounded-[12px] px-[18px] text-[12px] text-white shadow-[var(--shadow-brand-xs)]"
          >
            {contactButtonLabel}
          </Button>
        </nav>

        <button
          type="button"
          className="border-[color:color-mix(in_srgb,var(--brand-primary)_8%,transparent)] text-ink-strong inline-flex size-[42px] items-center justify-center rounded-[13px] border bg-[color:color-mix(in_srgb,var(--bg-page)_88%,white)] lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "关闭菜单" : "打开菜单"}
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-line panel-white-soft border-t lg:hidden"
          >
            <Container className="flex flex-col gap-4 py-5">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-ink-soft py-1 text-[13px] font-medium"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button
                href="#contact"
                className="mt-2 w-full"
                onClick={() => setOpen(false)}
              >
                {contactButtonLabel}
              </Button>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
