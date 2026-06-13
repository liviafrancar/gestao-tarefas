// Server Component: apenas exibe os dados de uma tarefa via props.
// Não há interação do usuário (não precisa de "use client").

import { Task } from "@/lib/mock-data"

type Props = {
    task: Task
}

export default function TaskCard({ task }: Props) {
    return (
        <div>
            <h3>{task.title}</h3>
            <span>{task.status}</span>
            <time>{task.createdAt}</time>
        </div>
    )
}