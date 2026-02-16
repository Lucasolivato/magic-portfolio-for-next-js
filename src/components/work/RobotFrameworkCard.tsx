"use client";

import { Column, Flex, Heading, SmartLink, Text, RevealFx } from "@/once-ui/components";

interface ProjectCardProps {
  project: any;
}

export const RobotFrameworkCard: React.FC<ProjectCardProps> = ({ project }) => {
  const codeSnippet = `
*** Settings ***
Library    SeleniumLibrary

*** Test Cases ***
Create Sales Order
    Open Browser    \${URL}    chrome
    Login           \${USER}    \${PASS}
    Navigate To     Sales > Order
    Input Text      id=customer    C001
    Input Text      id=item        I999
    Click Button    id=add_item
    Wait Until Element Is Visible  id=success
    [Teardown]      Close Browser
`;

  return (
    <Column fillWidth gap="m">
      <Flex
        fillWidth
        background="surface"
        border="neutral-medium"
        radius="l"
        overflow="hidden"
        direction="column"
        style={{ minHeight: "300px" }}
      >
         {/* Fake VS Code Header */}
         <Flex
            fillWidth
            paddingX="s"
            paddingY="8"
            gap="8"
            background="neutral-strong"
            vertical="center"
            borderBottom="neutral-medium"
        >
             <Text variant="label-default-s" onBackground="neutral-weak">sales_order.robot</Text>
        </Flex>

        {/* Code Content */}
        <Column 
            fillWidth 
            flex={1} 
            padding="m" 
            background="neutral-strong" 
            style={{ fontFamily: "monospace", overflowX: "auto" }}
        >
            <pre style={{ margin: 0 }}>
                <code style={{ color: "var(--neutral-on-background-medium)", fontSize: "12px", lineHeight: "1.5" }}>
                    {codeSnippet.split('\n').filter(line => line.trim() !== '').map((line, i) => (
                        <div key={i} style={{ display: 'flex' }}>
                             <span style={{ color: 'var(--neutral-on-background-weak)', marginRight: '16px', userSelect: 'none' }}>{i + 1}</span>
                             <span dangerouslySetInnerHTML={{ 
                                 __html: line
                                    .replace(/\*\*\* (.*?) \*\*\*/g, '<span style="color: var(--brand-solid-strong)">*** $1 ***</span>')
                                    .replace(/Library|Open Browser|Login|Navigate To|Input Text|Click Button|Wait Until Element Is Visible|Close Browser/g, '<span style="color: var(--accent-solid-medium)">$&</span>')
                                    .replace(/(\$\{.*?\})/g, '<span style="color: var(--warning-solid-medium)">$1</span>')
                             }} />
                        </div>
                    ))}
                </code>
            </pre>
        </Column>
      </Flex>

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
             {project.link && (
                <SmartLink
                suffixIcon="arrowRight"
                style={{ margin: "0", width: "fit-content" }}
                href={project.link}
                >
                <Text variant="body-default-s">Ver projeto</Text>
                </SmartLink>
             )}
          </Flex>
        </Column>
      </Flex>
    </Column>
  );
};
