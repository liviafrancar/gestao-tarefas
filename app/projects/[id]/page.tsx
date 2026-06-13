// Server Component: busca as tarefas do projeto pelo id da URL e passa para o TasksView.
// Não há interação do usuário (não precisa de "use client").

import Link from "next/link"
import { tasks } from "@/lib/mock-data"
import TasksView from "@/components/TasksView"

type Props = {
    params: { id: string }
}

export default async function ProjectPage({ params }: Props) {
    const { id } = await params
    const projectTasks = tasks.filter((task) => task.projectId === id)
    return (
        <main>
            <h1>Tarefas do projeto</h1>
            <Link href="/">Voltar para projetos</Link>
            <TasksView tasks={projectTasks} />
        </main>
    )
}