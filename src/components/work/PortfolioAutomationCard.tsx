"use client";

import { Column, Flex, Heading, SmartLink, Text } from "@/once-ui/components";
import { LiveTerminal } from "@/components/common/LiveTerminal";

interface ProjectCardProps {
  project: any;
}

export const PortfolioAutomationCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Column fillWidth gap="m">
      <LiveTerminal />

      <Flex
        mobileDirection="column"
        fillWidth
        paddingX="s"
        paddingTop="12"
        paddingBottom="24"
        gap="l"
      >
        <Flex flex={5}>
          <SmartLink href={project.link || "#"} style={{ margin: "0", width: "fit-content" }}>
             <Heading as="h2" wrap="balance" variant="heading-strong-xl">
                {project.name}
            </Heading>
          </SmartLink>
        </Flex>
        <Column flex={7} gap="16">
          <Text wrap="balance" variant="body-default-m" onBackground="neutral-strong">
            {project.description}
          </Text>
          <Flex gap="24" wrap>
            <SmartLink
              suffixIcon="arrowRight"
              style={{ margin: "0", width: "fit-content" }}
              href={project.link}
            >
              <Text variant="body-default-s">Ver estudo de caso</Text>
            </SmartLink>
          </Flex>
        </Column>
      </Flex>
    </Column>
  );
};
