// Server Component: apenas exibe os dados de um usuário via props.
// Não há interação do usuário (não precisa de "use client").

import Link from "next/link"
import { Project } from "@/lib/mock-data"

type Props = {
    project: Project
}

export default function ProjectCard({ project }: Props) {
    return (
        <div>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <span>{project.taskCount} tarefas</span>
            <Link href={`/projects/${project.id}`}>Ver tarefas</Link>
        </div>
    )
}