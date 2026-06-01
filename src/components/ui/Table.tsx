import type { ReactNode } from "react";

export function Table({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-soft">
      <table className="w-full">{children}</table>
    </div>
  );
}
