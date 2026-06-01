export type Servico = {
  id: number;
  tipo: "barba" | "cabelo" | "bigode";
  nome: string;
  descricao: string | null;
  preco: number;
  duracao_minutos: number;
  ativo: boolean;
  created_at?: string;
  updated_at?: string | null;
};
