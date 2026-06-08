// Server Component: busca os projetos dos dados mockados e renderiza
// um ProjectCard para cada projeto. Sem interação e por isso não
// precisa de "use client".

import { projects } from "@/lib/mock-data"
import ProjectCard from "@/components/ProjectCard"

export default function HomePage() {
  return (
    <main>
      <h1>Meus Projetos</h1>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </main>
  )
}
