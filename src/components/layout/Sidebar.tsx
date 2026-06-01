import { CalendarDays, LayoutDashboard, Scissors, Users, UserRound } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "../../lib/utils";

const items = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard, enabled: true },
  { to: "/servicos", label: "Serviços", icon: Scissors, enabled: true },
  { to: "#", label: "Barbeiros", icon: UserRound, enabled: false },
  { to: "#", label: "Clientes", icon: Users, enabled: false },
  { to: "#", label: "Agendamentos", icon: CalendarDays, enabled: false },
];

export function Sidebar() {
  return (
    <aside className="hidden w-72 border-r border-black/10 bg-[#201713] px-4 py-6 text-white lg:flex lg:flex-col">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
        <p className="text-xs uppercase tracking-[0.3em] text-white/45">Barbearia</p>
        <h2 className="mt-2 text-2xl font-semibold">Painel</h2>
        <p className="mt-2 text-sm text-white/65">Controle os serviços e prepare a operação.</p>
      </div>

      <nav className="mt-8 space-y-2">
        {items.map((item) => {
          const Icon = item.icon;
          if (!item.enabled) {
            return (
              <span
                key={item.label}
                className="flex cursor-not-allowed items-center gap-3 rounded-2xl px-4 py-3 text-sm text-white/35"
              >
                <Icon size={18} />
                {item.label}
                <span className="ml-auto rounded-full bg-white/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em]">
                  em breve
                </span>
              </span>
            );
          }

          return (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm transition",
                  isActive ? "bg-copper text-white" : "text-white/75 hover:bg-white/8 hover:text-white"
                )
              }
            >
              <Icon size={18} />
              {item.label}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}
