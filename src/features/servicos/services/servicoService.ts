import { api } from "../../../lib/api";
import type { Servico } from "../types/servico";
import type { ServicoFormData, ServicoUpdateFormData } from "../schemas/servicoSchema";

export async function listServicos(): Promise<Servico[]> {
  const { data } = await api.get<Servico[]>("/servicos");
  return data;
}

export async function createServico(payload: ServicoFormData): Promise<Servico> {
  const { data } = await api.post<Servico>("/servicos", payload);
  return data;
}

export async function updateServico(id: number, payload: ServicoUpdateFormData): Promise<Servico> {
  const { data } = await api.put<Servico>(`/servicos/${id}`, payload);
  return data;
}

export async function deleteServico(id: number): Promise<void> {
  await api.delete(`/servicos/${id}`);
}
