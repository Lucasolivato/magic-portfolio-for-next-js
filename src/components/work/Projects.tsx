import { work } from "@/app/resources/content"; // Importar dados do content.js
import { Column } from "@/once-ui/components";
import { ProjectCard } from "@/components";

interface ProjectsProps {
  range?: [number, number?];
}

export function Projects({ range }: ProjectsProps) {
  // Usar diretamente os projetos do content.js
  let allProjects = work.projects;

  // Remover a ordenação por 'publishedAt' pois não existe em content.js
  // A ordem será a definida em content.js
  const displayedProjects = range
    ? allProjects.slice(range[0] - 1, range[1] ?? allProjects.length)
    : allProjects;

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {displayedProjects.map((project, index) => (
        <ProjectCard
          priority={index < 2} // Manter lógica de prioridade
          key={project.name} // Usar 'name' como chave única
          // href={`work/${project.slug}`} // Remover href se não houver slugs definidos em content.js ou se não for necessário linkar para página de detalhe
          href={project.link || "#"} // Usar o link definido em content.js, ou '#' como fallback
          images={project.image ? [project.image] : []} // Adaptar para a estrutura de imagem em content.js (assumindo uma única imagem)
          title={project.name} // Usar 'name' para o título
          description={project.description} // Usar 'description'
          // content={post.content} // Remover 'content' se não existir em content.js
          // avatars={project.team?.map((member) => ({ src: member.avatar })) || []} // Remover 'avatars' se não existir em content.js
          link={project.link || ""} // Usar o link definido em content.js
        />
      ))}
    </Column>
  );
}

