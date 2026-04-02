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
    "bg-brand-blue text-white shadow-[0_14px_32px_rgba(34,78,209,0.18)] hover:bg-brand-blue-strong",
  secondary:
    "border border-line bg-white text-ink-strong hover:border-brand-blue/30 hover:text-brand-blue",
  ghost:
    "border border-white/15 bg-white/0 text-white hover:border-white/25 hover:bg-white/5",
};

export function Button(allProps: ButtonProps) {
  const { className, variant = "primary", children } = allProps;
  const sharedClassName = cn(
    "inline-flex h-12 items-center justify-center rounded-[14px] px-6 text-sm font-medium tracking-[0.01em] transition-[transform,background-color,border-color,color,box-shadow] duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-blue/12",
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
    <a className={sharedClassName} {...anchorProps}>
      {children}
    </a>
  );
}
