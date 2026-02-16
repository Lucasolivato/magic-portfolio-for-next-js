"use client";

import { Column, Flex, Heading, Text, Icon, Card, Grid } from "@/once-ui/components";

export const ComparativeCard = () => {
    return (
        <Column fillWidth gap="l" paddingY="l">
            <Grid columns={2} mobileColumns={1} gap="m">
                {/* Industrial / Legacy */}
                <Card
                    fillWidth
                    padding="l"
                    radius="l"
                    border="neutral-medium"
                    background="neutral-weak"
                    direction="column"
                    gap="m"
                    style={{ opacity: 0.8 }}
                >
                    <Flex fillWidth horizontal="space-between" vertical="center">
                        <Heading as="h3" variant="heading-strong-m" onBackground="neutral-medium">
                            Industrial Automation
                        </Heading>
                        <Icon name="settings" onBackground="neutral-medium" size="m" />
                    </Flex>
                    <Column gap="xs">
                        <Text variant="body-default-s" onBackground="neutral-medium">
                            • Heavy Frameworks (Robot, Selenium)
                        </Text>
                         <Text variant="body-default-s" onBackground="neutral-medium">
                            • Linear Execution
                        </Text>
                         <Text variant="body-default-s" onBackground="neutral-medium">
                            • High Maintenance
                        </Text>
                    </Column>
                </Card>

                {/* Modern / AI-Driven */}
                <Card
                    fillWidth
                    padding="l"
                    radius="l"
                    border="brand-medium"
                    background="surface"
                    direction="column"
                    gap="m"
                    style={{ boxShadow: '0 4px 20px -2px var(--brand-alpha-medium)' }}
                >
                     <Flex fillWidth horizontal="space-between" vertical="center">
                        <Heading as="h3" variant="heading-strong-m" onBackground="brand-strong">
                            Modern Engineering
                        </Heading>
                        <Icon name="sparkle" onBackground="brand-strong" size="m" />
                    </Flex>
                    <Column gap="xs">
                        <Text variant="body-default-s" onBackground="brand-medium">
                            • Playwright & Cypress
                        </Text>
                         <Text variant="body-default-s" onBackground="brand-medium">
                            • Parallel & AI-Driven
                        </Text>
                         <Text variant="body-default-s" onBackground="brand-medium">
                            • Self-Healing Tests
                        </Text>
                    </Column>
                </Card>
            </Grid>
        </Column>
    );
};
