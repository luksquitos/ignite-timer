# Ignite Timer

Aplicação web de timer para tarefas no estilo Pomodoro: você define o nome da atividade e a duração em minutos, acompanha a contagem regressiva na tela e consulta o histórico dos ciclos registrados. Projeto desenvolvido no contexto do Ignite (Rocketseat), com interface alinhada ao layout de referência.

## Design

- [Figma — Ignite Timer (Community)](https://www.figma.com/file/ihMWPOxYnHOCSFXjMQeTLr/Ignite-Timer-(Community)?type=design&node-id=0-1&mode=design&t=wyNhkwaLLLpM3wdH-0)

## Funcionalidades

- **Home:** formulário com validação (nome obrigatório; duração entre 1 e 60 minutos) usando React Hook Form e Zod.
- **Timer:** contagem regressiva em destaque; enquanto o timer está ativo, o título da aba do navegador exibe o tempo restante.
- **Conclusão:** ao zerar o tempo, a tarefa ativa é marcada como concluída.
- **Histórico:** lista de tarefas com descrição, duração, início (tempo relativo em português) e status (em andamento, interrompido ou concluído).

Os dados são mantidos apenas em memória durante a sessão. Ao carregar a aplicação, algumas tarefas de exemplo são injetadas em [`src/components/App.tsx`](src/components/App.tsx) para demonstração.

## Como rodar

**Pré-requisito:** [Node.js](https://nodejs.org/) (versão LTS recomendada).

Na raiz do projeto:

```bash
npm install
```

| Comando | Descrição |
|--------|-----------|
| `npm run dev` | Servidor de desenvolvimento (Vite) |
| `npm run build` | Typecheck (`tsc`) e build de produção |
| `npm run preview` | Visualiza o build localmente |
| `npm run lint` | Executa o ESLint no projeto |

Depois de `npm run dev`, abra o endereço indicado no terminal (em geral `http://localhost:5173`).

## Rotas

| Caminho | Página |
|---------|--------|
| `/` | Home — nova tarefa e timer |
| `/history` | Histórico de tarefas |

## Estrutura do código (`src/`)

- `pages/` — páginas (`Home`, `History`)
- `components/` — componentes reutilizáveis (timer, formulário, tabela de tarefas, etc.)
- `contexts/` — estado global (`TasksContext`, `TimerContext`)
- `layouts/` — layout com cabeçalho e área das rotas

## Ferramentas utilizadas

Bibliotecas e ferramentas já adotadas no projeto:

- [Tailwind CSS](https://tailwindcss.com/)
- [React Hook Form](https://www.react-hook-form.com/)
- [Zod](https://zod.dev/)
- [React Router DOM](https://reactrouter.com/en/main)

Outras tecnologias principais:

- [Vite](https://vitejs.dev/) — build e dev server
- [React](https://react.dev/) e [TypeScript](https://www.typescriptlang.org/)
- [date-fns](https://date-fns.org/) — formatação de datas e tempo relativo (pt-BR)
- [Phosphor Icons](https://phosphoricons.com/) — ícones (`@phosphor-icons/react`)
