import React from "react"; // Import React for Fragment
import { Column, Flex, Heading, Text, Button, Icon, IconButton } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { blog, person, social } from "@/app/resources/content"; // Import social for links

export async function generateMetadata() {
  // Use 'blog' object which holds Contact page info
  const title = blog.title;
  const description = blog.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/contact`, // Update URL to /contact if route changes, otherwise keep /blog
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

export default function Contact() { // Renamed component to Contact for clarity
  const phone = "14991993618"; // Phone number without formatting for the link
  const whatsappLink = `https://wa.me/55${phone}`; // WhatsApp link with country code
  const githubLink = "https://github.com/Lucasolivato"; // Corrected GitHub link

  return (
    <Column maxWidth="s" gap="l"> {/* Added gap */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage", // Changed type to ContactPage
            headline: blog.title,
            description: blog.description,
            url: `https://${baseURL}/contact`, // Update URL to /contact if route changes
            image: `${baseURL}/og?title=${encodeURIComponent(blog.title)}`,
            author: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: `${baseURL}${person.avatar}`,
              },
            },
            // No list mapping here that needs a React key
          }),
        }}
      />
      <Heading marginBottom="m" variant="display-strong-s"> {/* Adjusted margin */}
        {blog.title}
      </Heading>
      <Text onBackground="neutral-weak" marginBottom="l"> {/* Added margin */}
        Entre em contato através dos canais abaixo ou envie uma mensagem direta.
      </Text>

      {/* Contact Links and Info */}
      <Column gap="m" vertical="start"> {/* Changed Flex to Column for better vertical spacing */}
        {/* Mapping over social links */}
        {social.map((item) =>
          item.link && (
            // Using React.Fragment with key for the group of Button/IconButton
            <React.Fragment key={item.name}>
              <Button
                className="s-flex-hide"
                // key prop moved to Fragment
                href={item.link}
                prefixIcon={item.icon}
                label={item.name} // Button accepts label
                size="m"
                variant="secondary"
                target="_blank"
              />
              <IconButton
                className="s-flex-show"
                // key prop moved to Fragment
                href={item.link}
                icon={item.icon}
                tooltip={item.name} // Changed label to tooltip
                size="l"
                variant="secondary"
                target="_blank"
              />
            </React.Fragment>
          ),
        )}
        {/* GitHub Link */}
         <Button
            key="GitHub"
            href={githubLink}
            prefixIcon="github"
            label="GitHub"
            size="m"
            variant="secondary"
            target="_blank"
          />
        {/* WhatsApp Button */}
        <Button
            key="WhatsApp"
            href={whatsappLink}
            prefixIcon="whatsapp" // Assuming 'whatsapp' icon exists in once-ui
            label="WhatsApp"
            size="m"
            variant="secondary"
            target="_blank"
          />
        {/* Removed the plain text phone display */}
      </Column>

      {/* Removed Posts and Mailchimp components */}
    </Column>
  );
}

