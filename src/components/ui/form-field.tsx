import { cn } from "@/lib/utils";
import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type BaseProps = {
  label: string;
  multiline?: boolean;
};

type FieldProps = BaseProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, "size"> &
  TextareaHTMLAttributes<HTMLTextAreaElement>;

export function FormField({
  label,
  className,
  multiline = false,
  ...props
}: FieldProps) {
  const sharedClassName = cn(
    "w-full rounded-[13px] border border-input-line bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(250,252,255,0.96))] px-4 text-[14px] text-ink-strong outline-none transition-[border-color,box-shadow,background-color] duration-200 focus:border-brand-blue/24 focus:ring-4 focus:ring-brand-blue/8 placeholder:text-[13px] placeholder:text-ink-faint/80",
    multiline ? "min-h-[136px] py-3.5 leading-7" : "h-[50px]",
    className,
  );

  return (
    <label className="block space-y-2">
      <span className="text-ink-soft text-[12px] font-medium tracking-[0.01em]">
        {label}
      </span>
      {multiline ? (
        <textarea className={sharedClassName} {...props} />
      ) : (
        <input className={sharedClassName} {...props} />
      )}
    </label>
  );
}
