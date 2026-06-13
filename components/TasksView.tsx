// Client Component: renderiza os botões de filtro e chama OnFiltroChange
// quando o usuário clica. Precisa de "use client" por causa do OnClick.

"use client"

import { useState } from "react"
import { Task, TaskStatus } from "@/lib/mock-data"
import FilterBar from "./FilterBar"
import TaskCard from "./TaskCard"

type Props = {
    tasks: Task[]
}

export default function TasksView({ tasks }: Props) {
    const [filtroAtivo, setFiltroAtivo] = useState<TaskStatus | "todos">("todos")
    const tarefasFiltradas = filtroAtivo === "todos" ? tasks : tasks.filter((task) => task.status === filtroAtivo)
    return (
        <div>
            <FilterBar filtroAtivo={filtroAtivo} onFiltroChange={setFiltroAtivo}/>
            {tarefasFiltradas.map((task) => (
                <TaskCard key={task.id} task={task}/>
            ))}
        </div>
    )
}