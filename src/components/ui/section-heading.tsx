import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "between";
  action?: ReactNode;
  className?: string;
  titleClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  action,
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3.5",
        align === "between" && "lg:flex-row lg:items-end lg:justify-between",
        className,
      )}
    >
      <div className="max-w-[620px] space-y-3.5">
        <p className="eyebrow">{eyebrow}</p>
        <h2
          className={cn(
            "text-ink-strong max-w-[12ch] text-[32px] leading-[1.14] font-semibold tracking-[-0.05em] text-balance sm:text-[40px]",
            titleClassName,
          )}
        >
          {title}
        </h2>
        {description ? (
          <p className="text-ink-soft max-w-[620px] text-[14px] leading-[1.95]">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
