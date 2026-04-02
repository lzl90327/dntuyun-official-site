type StatItemProps = {
  value: string;
  label: string;
  inverse?: boolean;
};

export function StatItem({ value, label, inverse = false }: StatItemProps) {
  return (
    <div className="space-y-1.5">
      <div
        className={
          inverse
            ? "text-[40px] font-semibold tracking-[-0.055em] text-white"
            : "text-ink-strong text-[34px] font-semibold tracking-[-0.055em]"
        }
      >
        {value}
      </div>
      <p
        className={
          inverse
            ? "text-[12px] tracking-[0.01em] text-white/58"
            : "text-ink-faint text-[12px] tracking-[0.01em]"
        }
      >
        {label}
      </p>
    </div>
  );
}
