import type { ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  const variants = {
    primary: "bg-copper text-white hover:opacity-90",
    secondary: "bg-white text-ink border border-black/10 hover:bg-black/5",
    ghost: "bg-transparent text-ink hover:bg-black/5",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
