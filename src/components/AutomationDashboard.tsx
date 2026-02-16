"use client";

import React from 'react';
import {
  Column,
  Flex,
  Heading,
  Text,
  StatusIndicator,
  Card,
  Grid,
  Button
} from "@/once-ui/components";

interface AutomationDashboardProps {
    interactive?: boolean;
}

const AutomationDashboard: React.FC<AutomationDashboardProps> = ({ interactive = false }) => {
    // Mock Data mimicking real-time test results
    const summaryMetrics = [
        { label: "Total de Testes", value: "42", status: "neutral" },
        { label: "Taxa de Sucesso", value: "100%", status: "success" },
        { label: "Duração", value: "2m 14s", status: "neutral" },
    ];

    const recentActivity = [
        { id: 1, name: "E2E: Navegação Crítica", status: "passed", time: "2 min atrás" },
        { id: 2, name: "Axe: Acessibilidade", status: "passed", time: "2 min atrás" },
        { id: 3, name: "Unit: Renderização", status: "passed", time: "2 min atrás" },
        { id: 4, name: "SEO: Meta Tags", status: "passed", time: "2 min atrás" },
    ];

    return (
        <Card
            fillWidth
            padding="l"
            radius="l"
            border="neutral-medium"
            background="surface"
            className={interactive ? "interactive-dashboard" : ""}
            style={interactive ? { cursor: 'default', transition: 'transform 0.2s', transformOrigin: 'center' } : {}}
            onMouseEnter={interactive ? (e) => (e.currentTarget.style.transform = 'scale(1.01)') : undefined}
            onMouseLeave={interactive ? (e) => (e.currentTarget.style.transform = 'scale(1)') : undefined}
        >
            <Column fillWidth gap="l">
                {/* Header */}
                <Flex
                    fillWidth
                    mobileDirection="column"
                    horizontal="space-between"
                    vertical="center"
                    gap="s"
                >
                    <Column>
                        <Heading as="h3" variant="heading-strong-m">
                            Status do Sistema
                        </Heading>
                        <Text variant="body-default-s" onBackground="neutral-weak">
                            Métricas de execução em tempo real.
                        </Text>
                    </Column>
                    <Flex gap="8" vertical="center">
                        <StatusIndicator
                            color="green"
                            size="m"
                            ariaLabel="Sistemas Operacionais"
                        />
                         <Text variant="body-default-s" onBackground="neutral-weak">
                            Sistemas Operacionais
                        </Text>
                    </Flex>
                </Flex>

                {/* Metrics Grid */}
                <Grid
                    columns={3}
                    mobileColumns={1}
                    gap="m"
                    fillWidth
                >
                    {summaryMetrics.map((metric, index) => (
                        <Card
                             key={index}
                             padding="m"
                             radius="m"
                             background="neutral-weak"
                             border="neutral-medium"
                        >
                            <Column gap="xs" horizontal="center">
                                <Text variant="body-default-s" onBackground="neutral-weak">
                                    {metric.label}
                                </Text>
                                <Heading as="h4" variant="display-strong-s">
                                    {metric.value}
                                </Heading>
                            </Column>
                        </Card>
                    ))}
                </Grid>

                {/* Recent Activity List */}
                <Column fillWidth gap="s">
                    <Heading as="h4" variant="heading-strong-s" marginBottom="xs">
                        Atividade Recente
                    </Heading>
                    {recentActivity.map((activity) => (
                        <Flex
                            key={activity.id}
                            fillWidth
                            horizontal="space-between"
                            vertical="center"
                            padding="s"
                            radius="m"
                            background="neutral-weak"
                        >
                            <Flex gap="s" vertical="center">
                                <StatusIndicator
                                    color={activity.status === 'passed' ? 'green' : 'red'}
                                    size="s"
                                />
                                <Text variant="body-strong-s">
                                    {activity.name}
                                </Text>
                            </Flex>
                            <Text variant="body-default-xs" onBackground="neutral-weak">
                                {activity.time}
                            </Text>
                        </Flex>
                    ))}
                </Column>
                
                <Flex fillWidth horizontal="space-between" vertical="center" marginTop="s">
                     <Text variant="body-default-xs" onBackground="neutral-weak">
                        * Dados validados por Playwright & Axe-core
                    </Text>
                    {interactive && (
                        <Button
                            href="/work/portfolio-automation"
                            variant="tertiary"
                            size="s"
                            arrowIcon
                        >
                            Ver Detalhes do Case
                        </Button>
                    )}
                </Flex>
            </Column>
        </Card>
    );
};

export default AutomationDashboard;
