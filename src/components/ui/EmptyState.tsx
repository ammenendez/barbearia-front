import type { ReactNode } from "react";

export function EmptyState({ title, description, action }: { title: string; description: string; action?: ReactNode }) {
  return (
    <div className="rounded-2xl border border-dashed border-black/15 bg-white/70 p-8 text-center">
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-sm text-black/60">{description}</p>
      {action ? <div className="mt-4">{action}</div> : null}
    </div>
  );
}
