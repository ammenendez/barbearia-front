import type { TextareaHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        "min-h-28 w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm outline-none transition placeholder:text-black/35 focus:border-copper",
        className
      )}
      {...props}
    />
  );
}
