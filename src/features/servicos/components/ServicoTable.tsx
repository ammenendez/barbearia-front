import { Pencil, Trash2 } from "lucide-react";
import { Button } from "../../../components/ui/Button";
import { Table } from "../../../components/ui/Table";
import { formatCurrency } from "../../../lib/formatters";
import type { Servico } from "../types/servico";

type ServicoTableProps = {
  servicos: Servico[];
  onEdit: (servico: Servico) => void;
  onDelete: (servico: Servico) => void;
};

export function ServicoTable({ servicos, onEdit, onDelete }: ServicoTableProps) {
  return (
    <Table>
      <thead className="bg-black/3 text-left text-sm text-black/60">
        <tr>
          <th className="px-4 py-3">Nome</th>
          <th className="px-4 py-3">Preço</th>
          <th className="px-4 py-3">Duração</th>
          <th className="px-4 py-3">Status</th>
          <th className="px-4 py-3 text-right">Ações</th>
        </tr>
      </thead>
      <tbody>
        {servicos.map((servico) => (
          <tr key={servico.id} className="border-t border-black/8 text-sm">
            <td className="px-4 py-4">
              <div className="font-medium">{servico.nome}</div>
              <div className="text-black/55">{servico.descricao ?? "Sem descrição"}</div>
            </td>
            <td className="px-4 py-4">{formatCurrency(servico.preco)}</td>
            <td className="px-4 py-4">{servico.duracao_minutos} min</td>
            <td className="px-4 py-4">
              <span className={servico.ativo ? "rounded-full bg-emerald-100 px-3 py-1 text-emerald-700" : "rounded-full bg-black/5 px-3 py-1 text-black/60"}>
                {servico.ativo ? "Ativo" : "Inativo"}
              </span>
            </td>
            <td className="px-4 py-4">
              <div className="flex justify-end gap-2">
                <Button variant="secondary" onClick={() => onEdit(servico)}>
                  <Pencil size={16} />
                </Button>
                <Button variant="secondary" onClick={() => onDelete(servico)}>
                  <Trash2 size={16} />
                </Button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
