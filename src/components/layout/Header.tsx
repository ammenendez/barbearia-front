export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-black/10 bg-sand/90 px-4 py-4 backdrop-blur sm:px-6 lg:px-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-black/50">Barbearia</p>
          <h1 className="text-xl font-semibold">Agenda de Serviços</h1>
        </div>
        <div className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-black/60">
          Operação local
        </div>
      </div>
    </header>
  );
}
