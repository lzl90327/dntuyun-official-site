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
    "w-full rounded-[12px] border border-input-line bg-white px-4 text-[14px] text-ink-strong outline-none transition focus:border-brand-blue/40 focus:ring-4 focus:ring-brand-blue/10 placeholder:text-ink-faint",
    multiline ? "min-h-[132px] py-3.5 leading-7" : "h-12",
    className,
  );

  return (
    <label className="block space-y-2.5">
      <span className="text-ink-soft text-[13px] font-medium">{label}</span>
      {multiline ? (
        <textarea className={sharedClassName} {...props} />
      ) : (
        <input className={sharedClassName} {...props} />
      )}
    </label>
  );
}
