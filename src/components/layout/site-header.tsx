"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { navigation } from "@/lib/site-data";
import { BrandMark } from "@/components/ui/brand-mark";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-transparent bg-white/82 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <BrandMark className="size-7 rounded-[8px]" />
          <span className="text-ink-strong text-sm font-semibold tracking-[-0.03em]">
            LogiPlatform
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-ink-soft hover:text-ink-strong text-sm transition-colors"
            >
              {item.label}
            </a>
          ))}
          <Button
            href="#contact"
            className="h-11 rounded-[12px] px-5 text-[13px]"
          >
            联系我们
          </Button>
        </nav>

        <button
          type="button"
          className="border-line text-ink-strong inline-flex size-11 items-center justify-center rounded-[14px] border lg:hidden"
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
            className="border-line border-t bg-white lg:hidden"
          >
            <Container className="flex flex-col gap-4 py-5">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-ink-soft py-1 text-sm"
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
                联系我们
              </Button>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
