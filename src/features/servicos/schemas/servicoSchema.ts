import { z } from "zod";

const tipoServicoSchema = z.enum(["barba", "cabelo", "bigode"]);

export const servicoSchema = z.object({
  tipo: tipoServicoSchema,
  nome: z.string().min(2, "Informe um nome válido"),
  descricao: z.string().max(500).optional().nullable(),
  preco: z.coerce.number().positive("O preço deve ser maior que zero"),
  duracao_minutos: z.coerce.number().int().positive("A duração deve ser maior que zero"),
  ativo: z.coerce.boolean().default(true),
});

export const servicoUpdateSchema = servicoSchema.partial();

export type ServicoFormData = z.infer<typeof servicoSchema>;
export type ServicoUpdateFormData = z.infer<typeof servicoUpdateSchema>;
