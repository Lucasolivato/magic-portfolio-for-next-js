"use client";

import { useState } from "react";
import { Button, Column, Flex, Heading, Icon, Text, Line, RevealFx } from "@/once-ui/components";

export const TestSimulator = () => {
    const [status, setStatus] = useState<"idle" | "running" | "completed">("idle");
    const [logs, setLogs] = useState<string[]>([]);

    const runSimulation = () => {
        if (status === "running") return;
        
        setStatus("running");
        setLogs([]);

        const steps = [
            { msg: "Iniciando sessão do navegador...", delay: 500 },
            { msg: "Navegando para https://lucasolivato.com...", delay: 1000 },
            { msg: "Verificando título da página...", delay: 1500 },
            { msg: "Injetando axe-core para análise de acessibilidade...", delay: 2200 },
            { msg: "Escaneando DOM por violações WCAG...", delay: 3000 },
            { msg: "Verificando links quebrados...", delay: 3800 },
            { msg: "Gerando relatório de cobertura...", delay: 4500 },
        ];

        steps.forEach(({ msg, delay }) => {
            setTimeout(() => {
                setLogs(prev => [...prev, msg]);
            }, delay);
        });

        setTimeout(() => {
            setStatus("completed");
        }, 5000);
    };

    return (
        <Column
            fillWidth
            padding="l"
            border="neutral-medium"
            radius="l"
            background="surface"
            gap="m"
        >
            <Flex fillWidth horizontal="space-between" vertical="center">
                <Heading variant="display-strong-xs">Simulador de Teste E2E</Heading>
                <Flex gap="8" vertical="center">
                    <Icon name="play" size="s" onBackground="neutral-weak"/>
                    <Text variant="label-default-s" onBackground="neutral-weak">Playwright Environment</Text>
                </Flex>
            </Flex>
            
            <Line fillWidth />

            <Column 
                fillWidth 
                height="32" 
                background="neutral-weak" 
                radius="m" 
                padding="s"
                gap="4"
                style={{ fontFamily: "monospace", minHeight: "200px", justifyContent: "flex-end" }}
            >   
                {status === "idle" && (
                     <Flex fillWidth fillHeight horizontal="center" vertical="center" direction="column" gap="m">
                        <Text onBackground="neutral-medium">Pronto para iniciar a validação.</Text>
                        <Button onClick={runSimulation} variant="primary" size="m">
                            Executar Validação de Acessibilidade
                        </Button>
                     </Flex>
                )}

                {status !== "idle" && (
                    <Column fillWidth gap="4">
                         {logs.map((log, index) => (
                            <Text key={index} variant="code-default-s" onBackground="neutral-medium">
                                {">"} {log}
                            </Text>
                        ))}
                        {status === "running" && (
                            <Text variant="code-default-s" onBackground="brand-medium">
                                {">"} _
                            </Text>
                        )}
                        {status === "completed" && (
                             <RevealFx translateY="4">
                                <Flex gap="8" vertical="center" paddingTop="s">
                                    <Icon name="checkCircle" onBackground="success-medium" />
                                    <Text variant="heading-strong-s" onBackground="success-medium">
                                        Check: 100% Acessível. 0 Violações encontradas.
                                    </Text>
                                </Flex>
                             </RevealFx>
                        )}
                    </Column>
                )}
            </Column>
            
            {status === "completed" && (
                <Flex fillWidth horizontal="end">
                    <Button onClick={() => setStatus("idle")} variant="tertiary" size="s">
                        Reiniciar Simulação
                    </Button>
                </Flex>
            )}
        </Column>
    );
};
