import React from "react";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Column, Icon } from "@/once-ui/components";
import { Projects } from "@/components/work/Projects"; // Updated path if needed

import { baseURL, routes } from "@/app/resources";
import { home, about, person, newsletter } from "@/app/resources/content";
import { AutomationDashboard, TechStackTerminal } from "@/components"; // Import new components

export async function generateMetadata() {
  const title = home.title;
  const description = home.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: home.title,
            description: home.description,
            url: `https://${baseURL}`,
            image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
            publisher: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: `${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />
      {/* Section: Hero */}
      <Column fillWidth paddingY="l" gap="m" horizontal="center">
        <Column maxWidth="m" paddingX="l">
          <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="m">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="m">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx translateY="12" delay={0.4} horizontal="start">
              <Flex gap="16" vertical="center" fillWidth mobileDirection="column" horizontal="start">
                <Flex gap="8">
                    <Button
                    id="about"
                    data-border="rounded"
                    href="/about"
                    variant="secondary"
                    size="m"
                    arrowIcon
                    >
                    <Flex gap="8" vertical="center">
                        {about.avatar.display && (
                        <Avatar
                            style={{ marginLeft: "-0.75rem", marginRight: "0.25rem" }}
                            src={person.avatar}
                            size="m"
                            aria-label="Avatar de Lucas"
                        />
                        )}
                        {about.label}
                    </Flex>
                    </Button>
                    <Button
                    id="download-cv"
                    data-border="rounded"
                    href={person.cv}
                    variant="primary"
                    size="m"
                    download
                    >
                    <Flex gap="8" vertical="center">
                        Download CV
                    </Flex>
                    </Button>
                </Flex>
             </Flex>
             {/* Scroll Indicator */}
             <Flex fillWidth horizontal="center" paddingTop="l" style={{ opacity: 0.7 }}>
                 <div style={{ animation: 'bounce 2s infinite' }}>
                    <Icon name="chevronDown" size="l" />
                 </div>
             </Flex>
          </RevealFx>
        </Column>
      </Column>

      {/* Section: Interactive Automation Dashboard */}
      <RevealFx translateY="16" delay={0.6} fillWidth>
         <Column maxWidth="m" paddingX="l" gap="l">
            <Heading as="h2" variant="display-strong-xs">
                Status de Automação em Tempo Real
            </Heading>
            <AutomationDashboard interactive={true} />
         </Column>
      </RevealFx>

      {/* Section: Tech Stack Terminal */}
      <RevealFx translateY="16" delay={0.8} fillWidth>
        <Column maxWidth="m" paddingX="l" gap="l">
          <Heading as="h2" variant="display-strong-xs">
            Arsenal Técnico
          </Heading>
          <TechStackTerminal />
        </Column>
      </RevealFx>

      {/* Section: Projects Preview */}
      <RevealFx translateY="16" delay={1.0} fillWidth>
         <Column maxWidth="m" gap="8" paddingY="s" paddingX="l">
            <Heading as="h2" variant="display-strong-xs">
                Meus Projetos Recentes
            </Heading>
            {/* Call Projects component in summary mode, showing only the first project */}
            <Projects summaryMode={true} range={[1, 1]} />
         </Column>
      </RevealFx>

        {/* Global Styles for bounce animation (could be in module.css but inline for speed/safety) */}
        <style dangerouslySetInnerHTML={{__html: `
            @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
            40% {transform: translateY(-5px);}
            60% {transform: translateY(-3px);}
            }
        `}} />


    </Column>
  );
}

