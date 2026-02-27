import {
  ArrowRight,
  TrendingUp,
  Truck,
  Eye,
  Wallet,
} from "lucide-react";

import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";
import { COPY } from "@/lib/copy";

const H = COPY.hero;

// Stats icons mapping
const statIcons = [Truck, TrendingUp, Eye, Wallet];

export const Hero = () => {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
        {/* Left side - Main content */}
        <div className="flex-1">
          {/* Eyebrow */}
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary tracking-wide">
            <span className="h-1.5 w-1.5 rounded-full bg-primary opacity-70" />
            {H.eyebrow}
          </span>

          <h1 className="text-foreground max-w-160 text-3xl tracking-tight md:text-4xl lg:text-5xl xl:whitespace-nowrap mt-4">
            {H.title}
          </h1>

          <p className="text-muted-foreground text-lg mt-5 md:text-xl max-w-xl">
            {H.subtitle}
          </p>

          {/* Capsules */}
          <div className="mt-5 flex items-center gap-2 flex-wrap">
            {H.capsules.map((cap) => (
              <span
                key={cap}
                className="inline-flex items-center rounded-full border border-muted-foreground/20 bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                {cap}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 lg:flex-nowrap">
            <Button asChild>
              <a href="#contact">{H.ctaPrimary}</a>
            </Button>
            <Button
              variant="outline"
              className="from-background h-auto gap-2 bg-linear-to-r to-transparent shadow-md"
              asChild
            >
              <a href="#contact" className="max-w-56 truncate text-start md:max-w-none">
                {H.ctaSecondary}
                <ArrowRight className="stroke-3" />
              </a>
            </Button>
          </div>
        </div>

        {/* Right side - Stats */}
        <div className="relative flex flex-1 flex-col justify-center space-y-5 max-lg:pt-10 lg:pl-10">
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {H.stats.map((stat, index) => {
            const Icon = statIcons[index] || TrendingUp;
            return (
              <div key={stat.label} className="flex gap-2.5 lg:gap-5">
                <Icon className="text-primary mt-1 size-4 shrink-0 lg:size-5" />
                <div>
                  <h2 className="font-text text-foreground font-semibold text-2xl">
                    {stat.value}
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Hero image removed per requirements */}
    </section>
  );
};
