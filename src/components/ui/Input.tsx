import type { InputHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-xl border border-black/10 bg-white px-3 text-sm outline-none transition placeholder:text-black/35 focus:border-copper",
        className
      )}
      {...props}
    />
  );
}
