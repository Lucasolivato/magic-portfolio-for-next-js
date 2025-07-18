import { getPosts } from "@/app/utils/utils";
import { Column, RevealFx } from "@/once-ui/components";
import { Projects } from "@/components/work/Projects";
import { baseURL } from "@/app/resources";
import { person, work } from "@/app/resources/content";

export async function generateMetadata() {
  const title = work.title;
  const description = work.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/work/`,
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

export default function Work() {
  // Note: getPosts reads from MDX files, which are not being used per previous correction.
  // The Projects component now reads from content.js.
  // This LD+JSON generation might be inconsistent if it relies on MDX metadata.
  // For now, we'll keep getPosts here for the LD+JSON schema, but add keys.
  // A better long-term solution might involve generating LD+JSON from content.js data.
  let allProjectsFromMdx = getPosts(["src", "app", "work", "projects"]);

  return (
    <Column maxWidth="m">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            headline: work.title,
            description: work.description,
            url: `https://${baseURL}/projects`,
            image: `${baseURL}/og?title=Design%20Projects`,
            author: {
              "@type": "Person",
              name: person.name,
            },
            // Mapping over MDX posts for LD+JSON
            hasPart: allProjectsFromMdx.map((project) => ({
              // No React key needed inside JSON.stringify
              "@type": "CreativeWork",
              headline: project.metadata.title,
              description: project.metadata.summary,
              url: `https://${baseURL}/projects/${project.slug}`,
              image: `${baseURL}/${project.metadata.image}`,
            })),
          }),
        }}
      />
      {/* Projects component now reads from content.js */}
      <RevealFx translateY="4" fillWidth>
        <Projects />
      </RevealFx>
    </Column>
  );
}

