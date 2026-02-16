"use client";

import React, { useState, useEffect } from 'react';
import { Card, Column, Flex, Text } from "@/once-ui/components";

const allLines = [
  "> CARREGANDO SKILLS...",
  "> [OK] Playwright (E2E Automation)",
  "> [OK] IA & ML (Integração)",
  "> [OK] Performance Testing",
  "> [OK] Next.js & React",
  "> SISTEMA PRONTO."
];

const TechStackTerminal: React.FC = () => {
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    let currentLineIndex = 0;
    
    const intervalId = setInterval(() => {
      if (currentLineIndex < allLines.length) {
        setLines(prev => [...prev, allLines[currentLineIndex]]);
        currentLineIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 600); // Add a new line every 600ms

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Card
      fillWidth
      padding="m"
      radius="l"
      background="surface"
      border="neutral-medium"
      style={{ fontFamily: 'monospace', minHeight: '200px' }} // Monospace font for terminal look
    >
      <Column fillWidth>
        <Flex fillWidth paddingBottom="s" gap="xs">
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FF5F56' }}></div>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FFBD2E' }}></div>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27C93F' }}></div>
        </Flex>
        <Column fillWidth gap="xs">
          {lines.map((line, index) => (
            <Text
              key={index}
              variant="body-default-s"
              style={{ 
                  color: index === 0 || index === allLines.length - 1 ? '#00FF00' : '#E0E0E0',
                  textShadow: '0 0 2px rgba(0, 255, 0, 0.4)'
              }}
            >
              {line}
            </Text>
          ))}
          {lines.length < allLines.length && (
               <Text variant="body-default-s" style={{ color: '#00FF00' }}>_</Text>
          )}
        </Column>
      </Column>
    </Card>
  );
};

export default TechStackTerminal;
