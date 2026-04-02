import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  inverse?: boolean;
};

export function BrandMark({ className, inverse = false }: BrandMarkProps) {
  return (
    <span
      className={cn(
        "relative inline-flex size-8 shrink-0 items-center justify-center",
        className,
      )}
      aria-hidden="true"
    >
      <Image
        src="/dntuyun-logo.png"
        alt=""
        fill
        sizes="32px"
        className={cn("object-contain", inverse && "brightness-0 invert")}
      />
    </span>
  );
}
