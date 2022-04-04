import React from "react";
import { NavLink } from "react-router-dom";
import { Box, Button, Card, Group, Text } from '@mantine/core';
import Link from 'next/link'

export default function MainCard() {
    return (
        <Box>
            <Card>
                <Text gradient={{ from: 'indigo', to: 'cyan', deg: 45 }} variant="gradient" style={{ fontSize: 64 }} align="center">
                    Welcome to Edulonk
                </Text>
                <Text color="gray" size="xl" align="center" pb="lg">
                    Enhancing Education
                </Text>
                <Group position={'center'}>
                    <Link passHref={true} href="/login"><Button variant="outline">Login</Button></Link>
                    <Link passHref={true} href="/signup"><Button variant="outline">Register</Button></Link>
                </Group>
            </Card>
        </Box>
    );
}
