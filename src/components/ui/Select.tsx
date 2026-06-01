import type { SelectHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

export function Select({ className, ...props }: SelectProps) {
  return (
    <select
      className={cn(
        "h-11 w-full rounded-xl border border-black/10 bg-white px-3 text-sm outline-none transition focus:border-copper",
        className
      )}
      {...props}
    />
  );
}
