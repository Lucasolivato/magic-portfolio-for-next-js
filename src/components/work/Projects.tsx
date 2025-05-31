import { work } from "@/app/resources/content";
import { Column, Button } from "@/once-ui/components"; // Added Button import
import { ProjectCard } from "@/components";
import { PlantaoFarmaCard } from "./PlantaoFarmaCard";

interface ProjectsProps {
  range?: [number, number?];
  summaryMode?: boolean; // Add summaryMode prop
}

// Function to truncate description
const truncateDescription = (text: string, maxLength: number = 100) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, text.lastIndexOf(" ", maxLength)) + "...";
};

export function Projects({ range, summaryMode = false }: ProjectsProps) {
  let allProjects = work.projects;

  // If summaryMode, maybe show only the first project or based on range
  const projectsToDisplay = summaryMode ? allProjects.slice(0, range ? range[1] ?? 1 : 1) : (range ? allProjects.slice(range[0] - 1, range[1] ?? allProjects.length) : allProjects);

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {projectsToDisplay.map((project, index) => {
        const description = summaryMode
          ? truncateDescription(project.description, 120) // Truncate description in summary mode
          : project.description;

        if (project.name === "PlantãoFarma App (TCC)") {
          // Pass the potentially truncated description to PlantaoFarmaCard
          return <PlantaoFarmaCard key={project.name} project={{ ...project, description }} />;
        } else {
          return (
            <ProjectCard
              priority={index < 2}
              key={project.name}
              href={project.link || "#"}
              images={project.name === "Automação de Pedidos (Tecnologia Única)" ? ["/images/projects/robot_framework_automation.png"] : (project.image ? [project.image] : [])}
              title={project.name}
              description={description} // Use truncated or full description
              link={project.link || ""}
              hideDetails={summaryMode} // Add prop to potentially hide more details in ProjectCard if needed
            />
          );
        }
      })}
      {/* Add "View All" button in summary mode */}
      {summaryMode && (
          <Button
            href="/work" // Link to the main projects page
            variant="secondary"
            size="m"
            arrowIcon
            style={{ alignSelf: "flex-start", marginTop: "var(--static-space-m)" }} // Align button left
          >
            Ver todos os projetos
          </Button>
      )}
    </Column>
  );
}

