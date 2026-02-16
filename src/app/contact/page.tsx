import { Button, Column, Flex, Heading, Text, Input, Textarea } from "@/once-ui/components";
import { person, social } from "@/app/resources/content";
import { baseURL } from "@/app/resources";

export async function generateMetadata() {
  const title = "Contact";
  const description = `Contact ${person.name}`;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/contact`,
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

export default function Contact() {
  return (
    <Column maxWidth="m" horizontal="center" fillWidth>
      <Heading variant="display-strong-s" marginBottom="m" align="center">
        Contato
      </Heading>
      <Column fillWidth gap="l" horizontal="center">
        <Text variant="body-default-l" align="center">
          Sinta-se à vontade para entrar em contato para colaborações ou apenas para dizer oi!
        </Text>
        <Flex gap="16" wrap>
          {social.map((item) => (
             item.link && (
                <Button
                  key={item.name}
                  href={item.link}
                  prefixIcon={item.icon}
                  label={item.name}
                  size="s"
                  variant="secondary"
                />
             )
          ))}
        </Flex>
      </Column>
    </Column>
  );
}
