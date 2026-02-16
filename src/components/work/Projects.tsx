import React from "react";
import { work } from "@/app/resources/content";
import { Column, Button, Flex, Icon } from "@/once-ui/components";
import { ProjectCard } from "@/components";
import { PlantaoFarmaCard } from "./PlantaoFarmaCard";
import { PortfolioAutomationCard } from "./PortfolioAutomationCard";
import { RobotFrameworkCard } from "./RobotFrameworkCard";

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
    <Column fillWidth gap="m" marginBottom="40" paddingX="l">
      {projectsToDisplay.map((project, index) => {
        const description = summaryMode
          ? truncateDescription(project.description, 120) // Truncate description in summary mode
          : project.description;

        return (
          <React.Fragment key={project.name}>
             {project.name === "PlantãoFarma App (TCC)" ? (
               <PlantaoFarmaCard project={{ ...project, description }} />
             ) : project.name === "Portfólio Automation" ? (
               <PortfolioAutomationCard project={{ ...project, description }} />
             ) : project.name === "Automação de Pedidos (Tecnologia Única)" ? (
               <RobotFrameworkCard project={{ ...project, description }} />
             ) : (
                <ProjectCard
                  priority={index < 2}
                  href={project.link || "#"}
                  images={project.image ? [project.image] : []}
                  title={project.name}
                  description={description}
                  link={project.link || ""}
                  content=""
                  avatars={[]}
                  objectFit="contain"
                />
             )}
             
             {!summaryMode && index === 0 && (
                <Flex fillWidth horizontal="center" paddingY="s" style={{ opacity: 0.5 }}>
                    <div style={{ animation: 'bounce 2s infinite' }}>
                        <Icon name="chevronDown" size="m" />
                    </div>
                </Flex>
             )}
          </React.Fragment>
        );
      })}
      {/* Add "View All" button in summary mode */}
      {summaryMode && (
          <Button
            href="/work" // Link to the main projects page
            variant="secondary"
            size="m"
            arrowIcon
            style={{ alignSelf: "flex-start", marginTop: "0" }} // Align button left and remove extra top margin
          >
            Ver todos os projetos
          </Button>
      )}
      
       {!summaryMode && (
        <style dangerouslySetInnerHTML={{__html: `
            @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
            40% {transform: translateY(-5px);}
            60% {transform: translateY(-3px);}
            }
        `}} />
       )}
    </Column>
  );
}

