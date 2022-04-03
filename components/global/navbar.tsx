import { Button, Group, Header, Text } from '@mantine/core';

export default function Navbar() {
    return (
        <Header height={60} p="sm">
            <Group position="apart">
                <Text size="xl" gradient={{ from: 'indigo', to: 'cyan', deg: 45 }} variant="gradient">
                    EDULONK
                </Text>
                <Group>
                    <Button variant="outline">Login</Button>
                    <Button variant="outline">Register</Button>
                </Group>
            </Group>
        </Header>
    );
}
