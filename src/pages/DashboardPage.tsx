const stats = [
  { label: "Serviços cadastrados", value: "12" },
  { label: "Barbeiros ativos", value: "4" },
  { label: "Clientes cadastrados", value: "128" },
  { label: "Agendamentos de hoje", value: "18" },
];

export function DashboardPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl bg-ink p-6 text-white shadow-soft">
        <p className="text-sm uppercase tracking-[0.3em] text-white/50">Resumo do dia</p>
        <h2 className="mt-3 text-3xl font-semibold">Bem-vindo ao painel da barbearia</h2>
        <p className="mt-2 max-w-2xl text-sm text-white/70">
          Use essa base para acompanhar a operação, validar a navegação e evoluir o módulo de serviços.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <article key={item.label} className="rounded-3xl border border-black/10 bg-white p-5 shadow-soft">
            <p className="text-sm text-black/55">{item.label}</p>
            <p className="mt-3 text-3xl font-semibold">{item.value}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
