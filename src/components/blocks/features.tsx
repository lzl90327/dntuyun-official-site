import { Check, ChevronRight } from "lucide-react";

import { DashedLine } from "../dashed-line";

import { Card, CardContent } from "@/components/ui/card";
import { COPY } from "@/lib/copy";

const C = COPY.capability;

export const Features = () => {
  return (
    <section id="capabilities" className="pb-28 lg:pb-32 scroll-mt-20">
      <div className="container">
        {/* Top dashed line with text */}
        <div className="relative flex items-center justify-center">
          <DashedLine className="text-muted-foreground" />
          <span className="bg-muted text-muted-foreground absolute px-3 font-mono text-sm font-medium tracking-wide max-md:hidden">
            {C.eyebrow}
          </span>
        </div>

        {/* Content */}
        <div className="mx-auto mt-10 grid max-w-4xl items-center gap-3 md:gap-0 lg:mt-24 lg:grid-cols-2">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            {C.title}
          </h2>
          <p className="text-muted-foreground leading-snug">
            {C.subtitle}
          </p>
        </div>

        {/* Features Card - 3 capability cards */}
        <Card className="mt-8 rounded-3xl md:mt-12 lg:mt-20">
          <CardContent className="flex p-0 max-md:flex-col">
            {C.cards.map((card, i) => (
              <div key={i} className="flex flex-1 max-md:flex-col">
                <div className="flex-1 p-6">
                  <h3 className="font-display text-xl leading-tight font-bold tracking-tight mb-2">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {card.desc}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-2">
                    {card.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <Check
                          className="size-4 shrink-0 mt-0.5 text-primary"
                          style={{ opacity: 0.7 }}
                        />
                        <span className="text-sm text-muted-foreground">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="group flex items-center justify-between gap-4 pt-6 mt-auto">
                    <div className="rounded-full border p-2">
                      <ChevronRight className="size-5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
                {i < C.cards.length - 1 && (
                  <div className="relative hidden md:block">
                    <DashedLine orientation="vertical" />
                  </div>
                )}
                {i < C.cards.length - 1 && (
                  <div className="relative block md:hidden">
                    <DashedLine orientation="horizontal" />
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
