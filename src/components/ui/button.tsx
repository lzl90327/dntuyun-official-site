import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type SharedProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

type LinkButtonProps = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as?: "link";
  };

type NativeButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as: "button";
  };

type ButtonProps = LinkButtonProps | NativeButtonProps;

const variants = {
  primary:
    "bg-brand-blue text-white visited:text-white shadow-[var(--shadow-brand-sm)] hover:bg-brand-blue-strong hover:text-white hover:shadow-[var(--shadow-brand-sm-hover)] focus-visible:text-white active:text-white",
  secondary:
    "border border-line bg-white/92 text-ink-strong visited:text-ink-strong hover:border-[color:color-mix(in_srgb,var(--brand-primary)_22%,transparent)] hover:bg-white hover:text-brand-blue visited:hover:text-brand-blue focus-visible:text-ink-strong active:text-ink-strong",
  ghost:
    "border border-white/12 bg-white/[0.02] text-white/86 visited:text-white/86 hover:border-white/18 hover:bg-white/[0.05] hover:text-white focus-visible:text-white active:text-white",
};

export function Button(allProps: ButtonProps) {
  const { className, variant = "primary", children } = allProps;
  const sharedClassName = cn(
    "inline-flex h-[46px] items-center justify-center rounded-[13px] px-[22px] text-[13px] font-medium tracking-[-0.01em] transition-[transform,background-color,border-color,color,box-shadow] duration-200 hover:-translate-y-[1px] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-blue/12",
    variants[variant],
    className,
  );

  if (allProps.as === "button") {
    const {
      as,
      className: _className,
      variant: _variant,
      children: _children,
      ...buttonProps
    } = allProps;
    void as;
    void _className;
    void _variant;
    void _children;

    return (
      <button className={sharedClassName} {...buttonProps}>
        {children}
      </button>
    );
  }

  const {
    as,
    className: _className,
    variant: _variant,
    children: _children,
    ...anchorProps
  } = allProps;
  void as;
  void _className;
  void _variant;
  void _children;

  return (
    <a
      className={cn(
        sharedClassName,
        variant === "primary" ? "ui-btn--primary" : null,
      )}
      {...anchorProps}
    >
      {children}
    </a>
  );
}
