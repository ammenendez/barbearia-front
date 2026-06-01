import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";

export function NotFoundPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
      <h2 className="text-4xl font-semibold">Página não encontrada</h2>
      <p className="text-black/60">A rota solicitada não existe nesta etapa do projeto.</p>
      <Link to="/dashboard">
        <Button>Voltar ao dashboard</Button>
      </Link>
    </div>
  );
}
