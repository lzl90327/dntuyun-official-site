type StatItemProps = {
  value: string;
  label: string;
  inverse?: boolean;
};

export function StatItem({ value, label, inverse = false }: StatItemProps) {
  return (
    <div className="space-y-2">
      <div
        className={
          inverse
            ? "text-[44px] font-semibold tracking-[-0.05em] text-white"
            : "text-ink-strong text-[38px] font-semibold tracking-[-0.05em]"
        }
      >
        {value}
      </div>
      <p
        className={inverse ? "text-sm text-white/64" : "text-ink-faint text-sm"}
      >
        {label}
      </p>
    </div>
  );
}
