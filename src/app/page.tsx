import React from "react";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Column } from "@/once-ui/components";
import { Projects } from "@/components/work/Projects"; // Updated path if needed

import { baseURL, routes } from "@/app/resources";
import { home, about, person, newsletter } from "@/app/resources/content";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";

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
      <Column fillWidth paddingY="l" gap="m">
        <Column maxWidth="s">
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
                  />
                )}
                {about.label}
              </Flex>
            </Button>
          </RevealFx>
        </Column>
      </Column>

      {/* Section: QA Profile Summary & Highlight */}
      <RevealFx translateY="16" delay={0.6} fillWidth>
        <Column gap="m" paddingY="l" paddingX="l">
          <Heading as="h2" variant="display-strong-xs">
            Perfil e Destaques como QA
          </Heading>
          <Text onBackground="neutral-weak">
            Analista de QA dedicado à garantia da qualidade de software, com foco em automação de testes (Robot Framework, Selenium, Cypress, Postman, Python) e experiência em testes funcionais, de carga, API e em ambientes SAP.
          </Text>
          <Text variant="body-strong-m" onBackground="neutral-weak">
            Destaque: Automatizei mais de 600 pedidos via UI em 10h contínuas com Robot Framework, permitindo testes de carga essenciais para microsserviços logísticos.
          </Text>
        </Column>
      </RevealFx>

      {/* Section: Projects Preview */}
      <RevealFx translateY="16" delay={0.8} fillWidth>
         <Column gap="m" paddingY="l" paddingX="l">
            <Heading as="h2" variant="display-strong-xs">
                Meus Projetos Recentes
            </Heading>
            {/* Call Projects component in summary mode, showing only the first project */}
            <Projects summaryMode={true} range={[1, 1]} />
         </Column>
      </RevealFx>

      {/* Section: Blog (Kept as is, check if still relevant) */}
      {routes["/blog"] && (
        <Flex fillWidth gap="24" mobileDirection="column" paddingY="l">
          <Flex flex={1} paddingLeft="l">
            <Heading as="h2" variant="display-strong-xs" wrap="balance">
              Últimas do Blog
            </Heading>
          </Flex>
          <Flex flex={3} paddingX="l">
            <Posts range={[1, 2]} columns="2" />
          </Flex>
        </Flex>
      )}

      {/* Section: Newsletter (Kept as is) */}
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}

