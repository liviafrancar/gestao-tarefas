// Client Component: renderiza os botões de filtro e chama OnFiltroChange
// quando o usuário clica. Precisa de "use client" por causa do OnClick.

"use client"

import { TaskStatus } from "@/lib/mock-data"

type Props = {
    filtroAtivo: TaskStatus | "todos" // chama filtroAtivo pq é o status da task do filtro ativo
    onFiltroChange: (novoFiltro: TaskStatus | "todos") => void
}

const opcoes: (TaskStatus | "todos")[] = [
    "todos", "concluída", "em andamento", "pendente",
]

export default function FilterBar({ filtroAtivo, onFiltroChange }: Props) {
    return (
        <div>
            {opcoes.map((opcao) => (
                <button key={opcao} onClick={() => onFiltroChange(opcao)}
                    style={{ fontWeight: filtroAtivo === opcao ? "bold" : "normal" }} // se nao tivesse esse style, o filtroAtivo nao precisaria existir nesse código
                >
                    {opcao}
                </button>
            ))}
        </div>
    )
}