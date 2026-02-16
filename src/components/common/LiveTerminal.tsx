"use client";

import { Flex, Text, RevealFx, Column } from "@/once-ui/components";
import { useEffect, useState } from "react";

export const LiveTerminal = () => {
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    const steps = [
      { msg: "Playwright: Starting E2E tests...", delay: 500 },
      { msg: "Navigating to /home...", delay: 1000 },
      { msg: "Checking accessibility (axe-core)...", delay: 2000 },
      { msg: "Accessbility: 0 violations found.", delay: 3000 },
      { msg: "Verifying responsive layout...", delay: 4000 },
      { msg: "Test Suite Passed (5/5)", delay: 5000 },
    ];

    let timeouts: NodeJS.Timeout[] = [];

    const runSimulation = () => {
      setLogs([]);
      steps.forEach(({ msg, delay }) => {
        const timeout = setTimeout(() => {
          setLogs((prev) => {
            const newLogs = [...prev, msg];
            return newLogs.slice(-6); // Keep last 6 lines
          });
        }, delay);
        timeouts.push(timeout);
      });
    };

    runSimulation();
    const interval = setInterval(runSimulation, 8000); // Restart every 8s

    return () => {
      timeouts.forEach(clearTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <Flex
      fillWidth
      background="surface"
      border="neutral-medium"
      radius="l"
      overflow="hidden"
      direction="column"
      style={{ minHeight: "300px" }}
    >
      {/* Fake Browser Toolbar */}
      <Flex
        fillWidth
        paddingX="s"
        paddingY="12"
        gap="8"
        background="neutral-weak"
        vertical="center"
        borderBottom="neutral-medium"
      >
        <Flex gap="4">
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--danger-solid-medium)' }}></div>
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--warning-solid-medium)' }}></div>
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--success-solid-medium)' }}></div>
        </Flex>
        <Flex
          flex={1}
          background="neutral-medium"
          radius="s"
          paddingX="s"
          paddingY="4"
          vertical="center"
        >
          <Text variant="label-default-s" onBackground="neutral-weak" style={{ fontSize: '10px' }}>https://localhost:3000/test-runner</Text>
        </Flex>
      </Flex>

      {/* Terminal Content */}
      <Column
        fillWidth
        flex={1}
        padding="m"
        background="neutral-strong"
        gap="4"
        style={{ fontFamily: "monospace" }}
      >
        <Text variant="code-default-s" onBackground="brand-medium">user@portfolio-bot:~$ npm run test:e2e</Text>
        {logs.map((log, index) => (
          <RevealFx key={index} translateY="4">
            <Text variant="code-default-s" onBackground="neutral-medium" style={{ opacity: 0.9 }}>
              {">"} {log}
            </Text>
          </RevealFx>
        ))}
        <Text variant="code-default-s" onBackground="brand-medium" className="blinking-cursor">_</Text>
      </Column>
      <style jsx global>{`
        .blinking-cursor {
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </Flex>
  );
};
