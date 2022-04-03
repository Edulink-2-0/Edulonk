import { Box, Button, Card, Group, Text } from '@mantine/core';

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
                    <Button variant="outline">Login</Button>
                    <Button variant="outline">Register</Button>
                </Group>
            </Card>
        </Box>
    );
}
