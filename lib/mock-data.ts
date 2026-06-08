export type Project = {
    id: string
    name: string
    description: string
    taskCount: number
}

export type TaskStatus = "pendente" | "em andamento" | "concluída"

export type Task = {
    id: string
    projectId: string
    title: string
    status: TaskStatus
    createdAt: string
}

export const projects: Project[] = [
    {
        id: "1",
        name: "Redesign do site",
        description: "Atualizar a identidade visual da empresa",
        taskCount: 3,
    }, {
        id: "2",
        name: "App mobile",
        description: "Versão mobile do produto principal",
        taskCount: 4,
    },
]

export const tasks: Task[] = [
    {
        id: "t1",
        projectId: "1",
        title: "Criar wireframes",
        status: "concluída",
        createdAt: "2025-01-10",
    }, {
        id: "t2",
        projectId: "1",
        title: "Desenvolver componentes",
        status: "em andamento",
        createdAt: "2025-01-12",
    }, {
        id: "t3",
        projectId: "1",
        title: "Revisar acessibilidade",
        status: "pendente",
        createdAt: "2025-01-15",
    }, {
        id: "t4",
        projectId: "2",
        title: "Configurar ambiente",
        status: "concluída",
        createdAt: "2025-01-08",
    }, {
        id: "t5",
        projectId: "2",
        title: "Criar tela de login",
        status: "em andamento",
        createdAt: "2025-01-11",
    }, {
        id: "t6",
        projectId: "2",
        title: "Integrar com API",
        status: "pendente",
        createdAt: "2025-01-14",
    }, {
        id: "t7",
        projectId: "2",
        title: "Escrever testes",
        status: "pendente",
        createdAt: "2025-01-16",
    },
]