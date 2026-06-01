# Agents Guide

Este arquivo orienta agentes e colaboradores automáticos sobre como trabalhar no frontend `barbearia-front`.

## Objetivo do projeto

O frontend é a interface da barbearia para acompanhar e operar a agenda de serviços.
A base foi desenhada com:

- React
- TypeScript
- Vite
- React Router DOM
- Axios
- React Hook Form
- Zod
- Tailwind CSS

## Estrutura de pastas

Use a separação de responsabilidades abaixo como referência principal:

- `src/app`: composição da aplicação, rotas e bootstrap
- `src/components`: componentes compartilhados de layout e UI
- `src/features`: funcionalidades por domínio do produto
- `src/hooks`: hooks reutilizáveis
- `src/lib`: integrações técnicas, utilitários e cliente de API
- `src/pages`: páginas de alto nível
- `src/styles`: estilos globais e base visual

## Regras de trabalho

- Preserve a organização por feature sempre que possível.
- Não misture lógica de acesso à API com componentes de apresentação.
- Prefira manter validação com Zod nos schemas do domínio da feature.
- Centralize chamadas HTTP em `src/lib` ou em serviços da feature.
- Mantenha componentes pequenos e focados em uma única responsabilidade.
- Ao criar uma nova tela, comece pela rota, depois a página e por fim os componentes menores.
- Sempre que fizer mudanças de fluxo, confira estados de loading, vazio e erro.

## Padrões já adotados

- A aplicação usa React 19 e TypeScript.
- O roteamento fica em `src/app/routes.tsx`.
- O cliente HTTP fica em `src/lib/api.ts`.
- As features seguem a pasta `src/features/<feature>`.
- A entidade principal atual é `servico`.
- Componentes de formulário usam `react-hook-form` com validação via `zod`.

## Boas práticas

- Use nomes claros e consistentes com o domínio da barbearia.
- Prefira composição de componentes em vez de repetir markup.
- Reaproveite os componentes em `src/components/ui` antes de criar novos.
- Mantenha o estilo visual coerente com Tailwind e com os tokens já existentes.
- Trate erros de API de forma amigável na interface.
- Evite acoplamento entre regras de negócio e componentes de layout.

## Execução local

- Instalar dependências: `npm install`
- Rodar em desenvolvimento: `npm run dev`
- Gerar build: `npm run build`
- Pré-visualizar build: `npm run preview`
- Rodar lint: `npm run lint`

## Cuidados importantes

- Não versionar artefatos de build.
- Não espalhar chamadas diretas ao backend pelo app.
- Antes de introduzir uma nova biblioteca, verifique se o projeto já não cobre a necessidade.
- Se uma mudança afetar navegação, valide também os caminhos de fallback como `NotFoundPage`.

