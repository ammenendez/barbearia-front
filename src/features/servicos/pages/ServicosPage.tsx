import { useEffect, useMemo, useRef, useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "../../../components/ui/Button";
import { EmptyState } from "../../../components/ui/EmptyState";
import { Loading } from "../../../components/ui/Loading";
import { useApiError } from "../../../hooks/useApiError";
import { createServico, deleteServico, listServicos, updateServico } from "../services/servicoService";
import { ServicoModal } from "../components/ServicoModal";
import { ServicoTable } from "../components/ServicoTable";
import type { Servico } from "../types/servico";
import type { ServicoFormData } from "../schemas/servicoSchema";

export function ServicosPage() {
  const [servicos, setServicos] = useState<Servico[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedServico, setSelectedServico] = useState<Servico | null>(null);
  const didLoadOnce = useRef(false);
  const { getErrorMessage } = useApiError();

  const sortedServicos = useMemo(() => [...servicos].sort((a, b) => a.nome.localeCompare(b.nome)), [servicos]);

  function handleCreate() {
    setSelectedServico(null);
    setModalOpen(true);
  }

  function handleEdit(servico: Servico) {
    setSelectedServico(servico);
    setModalOpen(true);
  }

  async function handleSubmit(data: ServicoFormData) {
    if (selectedServico) {
      const updated = await updateServico(selectedServico.id, data);
      setServicos((current) => current.map((item) => (item.id === updated.id ? updated : item)));
    } else {
      const created = await createServico(data);
      setServicos((current) => [...current, created]);
    }
    setModalOpen(false);
  }

  async function handleDelete(servico: Servico) {
    if (!window.confirm(`Excluir ${servico.nome}?`)) return;
    try {
      await deleteServico(servico.id);
      setServicos((current) => current.filter((item) => item.id !== servico.id));
    } catch (error) {
      window.alert(getErrorMessage(error));
    }
  }

  async function loadServicos() {
    setLoading(true);
    try {
      const apiServicos = await listServicos();
      setServicos(apiServicos);
    } catch (error) {
      window.alert(getErrorMessage(error));
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (didLoadOnce.current) {
      return;
    }
    didLoadOnce.current = true;

    void (async () => {
      setLoading(true);
      try {
        const apiServicos = await listServicos();
        setServicos(apiServicos);
      } catch (error) {
        window.alert(getErrorMessage(error));
      } finally {
        setLoading(false);
      }
    })();
  }, [getErrorMessage]);

  return (
    <div className="space-y-6">
      <section className="flex flex-col gap-4 rounded-3xl bg-white p-6 shadow-soft lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-black/45">Módulo</p>
          <h2 className="mt-1 text-3xl font-semibold">Serviços</h2>
          <p className="mt-2 text-sm text-black/60">Cadastre, edite e organize os serviços oferecidos pela barbearia.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary" onClick={loadServicos}>
            Atualizar da API
          </Button>
          <Button onClick={handleCreate}>
            <Plus size={16} />
            Novo serviço
          </Button>
        </div>
      </section>

      {loading ? <Loading /> : null}

      {!loading && sortedServicos.length === 0 ? (
        <EmptyState
          title="Nenhum serviço encontrado"
          description="Comece adicionando o primeiro serviço da sua barbearia."
          action={<Button onClick={handleCreate}>Criar serviço</Button>}
        />
      ) : null}

      {!loading && sortedServicos.length > 0 ? (
        <ServicoTable servicos={sortedServicos} onEdit={handleEdit} onDelete={handleDelete} />
      ) : null}

      <ServicoModal
        open={modalOpen}
        initialData={selectedServico}
        onClose={() => setModalOpen(false)}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
