"use client";

import React, { useState, useEffect, useRef } from "react"; // Import useEffect and useRef
import { Column, Flex, Text, SmartImage, IconButton, Button } from "@/once-ui/components"; // Added Button
import styles from "./PlantaoFarmaCard.module.scss";

interface PlantaoFarmaCardProps {
  project: {
    name: string;
    description: string;
    image?: string; // Keep for potential fallback, but we'll use the array
    link?: string;
    // Add other project properties if needed
  };
}


// Define the content for the carousel (image + description)
const carouselContent = [
  {
    image: "/images/projects/plantaofarma/LOGO.png",
    altText: "Logo PlantãoFarma",
    description: "Nesta tela: Apresentamos a identidade visual do PlantãoFarma, um aplicativo focado em conectar você à saúde de forma rápida e acessível."
  },
  {
    image: "/images/projects/plantaofarma/Tela_inicial.png",
    altText: "Tela inicial do PlantãoFarma",
    description: "Nesta tela: Você tem acesso imediato às farmácias de plantão. Pode ligar diretamente ou abrir a localização no mapa com um toque."
  },
  {
    image: "/images/projects/plantaofarma/menu.png",
    altText: "Menu principal do PlantãoFarma",
    description: "Nesta tela: O menu principal oferece navegação clara e direta para telefones úteis, contatos de urgência e a lista completa de farmácias."
  },
  {
    image: "/images/projects/plantaofarma/FarmaciasFechadas.png",
    altText: "Tela de farmácias fechadas",
    description: "Nesta tela: Visualize facilmente quais farmácias estão abertas ou fechadas. Toque em \"Saber mais\" para ver detalhes, ligar ou traçar rota."
  },
  {
    image: "/images/projects/plantaofarma/Postos_de_saude.png",
    altText: "Tela de postos de saúde",
    description: "Nesta tela: Encontre os postos de saúde próximos. A interface mantém a consistência, oferecendo opções de contato e mapa."
  },
  {
    image: "/images/projects/plantaofarma/Telefones_Urgencia.png",
    altText: "Tela de telefones de urgência",
    description: "Nesta tela: Acesse rapidamente números de emergência cruciais (SAMU, Bombeiros, Hospital). Um toque no botão \"Ligar\" inicia a chamada."
  }
];

export const PlantaoFarmaCard: React.FC<PlantaoFarmaCardProps> = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false); // State to manage fade effect
  const imageRef = useRef<HTMLDivElement>(null); // Ref for the image container
  const descriptionRef = useRef<HTMLDivElement>(null); // Ref for the description text

  // Function to handle changing the image with fade effect
  const changeImage = (newIndex: number) => {
    if (newIndex === currentImageIndex) return; // Do nothing if index is the same

    setIsFading(true); // Start fade out

    // Wait for fade out to complete, then change image and fade in
    setTimeout(() => {
      setCurrentImageIndex(newIndex);
      setIsFading(false); // Trigger fade in (by removing fade class)
    }, 300); // Match description fade duration
  };

  const nextImage = () => {
    changeImage((currentImageIndex + 1) % carouselContent.length);
  };

  const prevImage = () => {
    changeImage(
      currentImageIndex === 0
        ? carouselContent.length - 1
        : currentImageIndex - 1
    );
  };

  const goToImage = (index: number) => {
    changeImage(index);
  };

  // Get current content based on index
  const currentContent = carouselContent[currentImageIndex];

  // Apply fade-in animation class to image when not fading out
  useEffect(() => {
    if (!isFading && imageRef.current) {
      // Re-trigger animation by removing and adding the class
      imageRef.current.classList.remove(styles.imageFadeIn);
      // Force reflow to restart animation
      void imageRef.current.offsetWidth;
      imageRef.current.classList.add(styles.imageFadeIn);
    }
  }, [currentImageIndex, isFading]); // Depend on index and fading state

  return (
    <Flex
      className={styles.cardContainer}
      gap="xl"
      padding="xl"
      radius="l"
      mobileDirection="column"
      vertical="center"
    >
      {/* Left Side: iPhone Mockup with Carousel */}
      <Flex flex={1} horizontal="center" className={styles.mockupContainer}>
        <div className={styles.iphoneMockup}>
          <div className={styles.iphoneScreen}>
            {/* Slide Wrapper */}
            <div
              ref={imageRef} // Use ref on the wrapper for potential animation control
              className={styles.slideWrapper}
              style={{ transform: `translateX(-${currentImageIndex * 100}%)` }} // Apply transform based on index
            >
              {carouselContent.map((content, index) => (
                <div key={index} className={styles.slideItem}>
                  <SmartImage
                    src={content.image}
                    alt={content.altText}
                    width={250} // Keep original dimensions for aspect ratio
                    height={541}
                    radius="m"
                    priority={index === 0} // Prioritize first image
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Navigation Controls (Dots and Arrows) below mockup */}
        <Flex horizontal="center" vertical="center" gap="m" className={styles.navigationControls}>
          {/* Text Buttons */}
          <Button onClick={prevImage} size="s" variant="secondary">Tela Anterior</Button>
          {/* Dot indicators */}
          <Flex horizontal="center" gap="s" className={styles.carouselDots}>
            {carouselContent.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${index === currentImageIndex ? styles.activeDot : ''}`}
                onClick={() => goToImage(index)}
                aria-label={`Ir para tela ${index + 1}`}
              />
            ))}
          </Flex>
          <Button onClick={nextImage} size="s" variant="secondary">Próxima Tela</Button>
        </Flex>
      </Flex>

      {/* Right Side: Project Description */}
      <Column flex={2} gap="m">
        <Text variant="heading-strong-l">{project.name}</Text>
        {/* Dynamic Description based on current slide */}
        <Text variant="body-default-m" onBackground="neutral-weak" className={styles.dynamicDescription}>
          {currentContent.description}
        </Text>
        {project.link && project.link !== "#" && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
            Ver no GitHub
          </a>
        )}
      </Column>
    </Flex>
  );
};
