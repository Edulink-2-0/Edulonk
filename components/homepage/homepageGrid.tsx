import { Button, Card, Group, Text } from '@mantine/core';
import React, { Component } from 'react';

interface Props {
    children: any; // React children (inside brackets)
    Title: string;
    Description: string;
    colour: {
        from: string;
        to: string;
    };
}

export default function HomepageGrid({
    children,
    Title,
    Description,
    colour: { to, from }, // Destructuring Wacky but cool
}: Props) {
    return (
        <Card>
            <Group position="center">
                {children}
                <Button variant="outline">
                    <Text
                        gradient={{
                            from,
                            to,
                            deg: 45,
                        }}
                        variant="gradient"
                        style={{
                            fontSize: 26,
                        }}
                        align="center"
                    >
                        {Title}
                    </Text>
                </Button>
            </Group>
            <Group position="center">
                <Text p="lg">{Description}</Text>
            </Group>
        </Card>
    );
}
