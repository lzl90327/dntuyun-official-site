import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "between";
  action?: ReactNode;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  action,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "between" && "lg:flex-row lg:items-end lg:justify-between",
        className,
      )}
    >
      <div className="max-w-[620px] space-y-4">
        <p className="text-brand-blue text-[11px] font-semibold tracking-[0.18em] uppercase">
          {eyebrow}
        </p>
        <h2 className="text-ink-strong max-w-[12ch] text-[34px] leading-[1.12] font-semibold tracking-[-0.04em] text-balance sm:text-[42px]">
          {title}
        </h2>
        {description ? (
          <p className="text-ink-soft max-w-[620px] text-[15px] leading-8">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
