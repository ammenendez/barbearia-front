import { Modal } from "../../../components/ui/Modal";
import { ServicoForm } from "./ServicoForm";
import type { Servico } from "../types/servico";
import type { ServicoFormData } from "../schemas/servicoSchema";

type ServicoModalProps = {
  open: boolean;
  initialData?: Servico | null;
  onSubmit: (data: ServicoFormData) => void;
  onClose: () => void;
};

export function ServicoModal({ open, initialData, onSubmit, onClose }: ServicoModalProps) {
  return (
    <Modal open={open} title={initialData ? "Editar serviço" : "Novo serviço"}>
      <ServicoForm initialData={initialData} onSubmit={onSubmit} onCancel={onClose} />
    </Modal>
  );
}
