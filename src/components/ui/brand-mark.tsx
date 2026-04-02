import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  inverse?: boolean;
};

export function BrandMark({ className, inverse = false }: BrandMarkProps) {
  return (
    <span
      className={cn(
        "grid size-8 grid-cols-2 gap-1 rounded-[9px] border p-1 shadow-[0_10px_24px_rgba(11,18,32,0.06)]",
        inverse
          ? "border-white/12 bg-white/6 shadow-none"
          : "border-brand-blue/10 bg-brand-blue shadow-[0_14px_28px_rgba(34,78,209,0.18)]",
        className,
      )}
      aria-hidden="true"
    >
      <span
        className={
          inverse ? "rounded-[4px] bg-white/90" : "rounded-[4px] bg-white"
        }
      />
      <span
        className={
          inverse ? "rounded-[4px] bg-white/40" : "rounded-[4px] bg-white/40"
        }
      />
      <span
        className={
          inverse ? "rounded-[4px] bg-white/36" : "rounded-[4px] bg-white/34"
        }
      />
      <span
        className={
          inverse ? "rounded-[4px] bg-white/68" : "rounded-[4px] bg-white/72"
        }
      />
    </span>
  );
}
