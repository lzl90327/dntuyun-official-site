type StatItemProps = {
  value: string;
  label: string;
  inverse?: boolean;
  /** 首屏专用：略强化数字与标签层级，融入舞台而不像看板 */
  variant?: "default" | "hero";
};

export function StatItem({
  value,
  label,
  inverse = false,
  variant = "default",
}: StatItemProps) {
  const isHero = variant === "hero" && !inverse;

  return (
    <div className={isHero ? "space-y-2" : "space-y-1.5"}>
      <div
        className={
          inverse
            ? "text-[40px] font-semibold tracking-[-0.055em] text-white"
            : isHero
              ? "text-ink-strong text-[36px] font-semibold tracking-[-0.058em] sm:text-[38px] sm:tracking-[-0.06em]"
              : "text-ink-strong text-[34px] font-semibold tracking-[-0.055em]"
        }
      >
        {value}
      </div>
      <p
        className={
          inverse
            ? "text-[12px] tracking-[0.01em] text-white/58"
            : isHero
              ? "text-ink-soft/88 text-[12px] font-medium tracking-[0.02em]"
              : "text-ink-faint text-[12px] tracking-[0.01em]"
        }
      >
        {label}
      </p>
    </div>
  );
}
