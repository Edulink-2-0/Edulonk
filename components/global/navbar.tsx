import { Button, Group, Header, Text } from '@mantine/core';
import { NavLink } from 'react-router-dom';
import Link from 'next/link'

export default function Navbar() {
    return (
        <Header height={60} p="sm">
            <Group position="apart">
                <Text size="xl" gradient={{ from: 'indigo', to: 'cyan', deg: 45 }} variant="gradient">
                    EDULONK
                </Text>
                <Group>
                    
                    <Link passHref={true} href="/login"><Button variant="outline">Login</Button></Link>
                    <Link passHref={true} href="/signup"><Button variant="outline">Register</Button></Link>
                </Group>
            </Group>
        </Header>
    );
}
