import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../../components/ui/Button";
import { Input } from "../../../components/ui/Input";
import { Textarea } from "../../../components/ui/Textarea";
import { servicoSchema, type ServicoFormData } from "../schemas/servicoSchema";
import type { Servico } from "../types/servico";

type ServicoFormProps = {
  initialData?: Servico | null;
  onSubmit: (data: ServicoFormData) => void;
  onCancel: () => void;
};

export function ServicoForm({ initialData, onSubmit, onCancel }: ServicoFormProps) {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ServicoFormData>({
    resolver: zodResolver(servicoSchema),
    defaultValues: {
      nome: "",
      descricao: "",
      preco: 0,
      duracao_minutos: 0,
      ativo: true,
    },
  });

  useEffect(() => {
    if (initialData) {
      reset({
        nome: initialData.nome,
        descricao: initialData.descricao ?? "",
        preco: initialData.preco,
        duracao_minutos: initialData.duracao_minutos,
        ativo: initialData.ativo,
      });
    } else {
      reset({
        nome: "",
        descricao: "",
        preco: 0,
        duracao_minutos: 0,
        ativo: true,
      });
    }
  }, [initialData, reset]);

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-medium">Nome</span>
          <Input {...register("nome")} placeholder="Corte tradicional" />
          {errors.nome ? <p className="text-sm text-red-600">{errors.nome.message}</p> : null}
        </label>
        <label className="space-y-2">
          <span className="text-sm font-medium">Preço</span>
          <Input type="number" step="0.01" {...register("preco")} />
          {errors.preco ? <p className="text-sm text-red-600">{errors.preco.message}</p> : null}
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-medium">Duração (minutos)</span>
          <Input type="number" {...register("duracao_minutos")} />
          {errors.duracao_minutos ? <p className="text-sm text-red-600">{errors.duracao_minutos.message}</p> : null}
        </label>
        <label className="space-y-2">
          <span className="text-sm font-medium">Ativo</span>
          <select className="h-11 w-full rounded-xl border border-black/10 bg-white px-3 text-sm" {...register("ativo")}>
            <option value="true">Sim</option>
            <option value="false">Não</option>
          </select>
        </label>
      </div>

      <label className="space-y-2 block">
        <span className="text-sm font-medium">Descrição</span>
        <Textarea {...register("descricao")} placeholder="Descrição do serviço" />
      </label>

      <div className="flex justify-end gap-3 pt-2">
        <Button type="button" variant="secondary" onClick={onCancel}>
          Cancelar
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Salvando..." : "Salvar serviço"}
        </Button>
      </div>
    </form>
  );
}
