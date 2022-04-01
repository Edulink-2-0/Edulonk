import Styled from "styled-components";
import { AppShell, Header, Text, Button, Group, Box, Card, SimpleGrid, ActionIcon } from "@mantine/core";
import { Book, AlertTriangle, Calendar } from "tabler-icons-react"

function Navbar() {
  return <Header height={60} p="sm">
    <Group position="apart">
      <Text size="xl" gradient={{ from: "indigo", to: "cyan", deg: 45 }} variant="gradient">EDULONK</Text>
      <Group>
        <Button variant="outline">Login</Button>
        <Button variant="outline">Register</Button>
      </Group>
    </Group>
  </Header>
}

function MainCard() {
  return <Box>
    <Card>
      <Text gradient={{ from: "indigo", to: "cyan", deg: 45 }} variant="gradient" style={{ fontSize: 64 }} align="center">Welcome to Edulonk</Text>
      <Text color="gray" size="xl" align="center" pb="lg">Enhancing Education</Text>
      <Group position={"center"}>
        <Button variant="outline">Login</Button>
        <Button variant="outline">Register</Button>
      </Group>
    </Card>
  </Box>
}

export default function Home() {
  return (
    <AppShell
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
      header={<Navbar />}>
      <MainCard />
      <SimpleGrid cols={3} mt="md">
        <Card>
          <Group position="center">
            <Book size={40} color="#FD7E14" />
            <Text gradient={{ from: "orange", to: "red", deg: 45 }} variant="gradient" style={{ fontSize: 32 }} align="center">Homework</Text>
            <Text p="lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam recusandae sapiente a vel mollitia suscipit aspernatur minima? Minus voluptates soluta facere cupiditate, amet sapiente similique, maiores, natus quos pariatur doloribus.</Text>
          </Group>
        </Card>
        <Card>
          <Group position="center">
            <AlertTriangle size={40} color="#82C91E" />
            <Text gradient={{ from: "lime", to: "cyan", deg: 45 }} variant="gradient" style={{ fontSize: 32 }} align="center">Behaviour</Text>
            <Text p="lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam recusandae sapiente a vel mollitia suscipit aspernatur minima? Minus voluptates soluta facere cupiditate, amet sapiente similique, maiores, natus quos pariatur doloribus.</Text>
          </Group>
        </Card>
        <Card>
          <Group position="center">
            <Calendar size={40} color="#845EF7" />
            <Text gradient={{ from: "violet", to: "pink", deg: 45 }} variant="gradient" style={{ fontSize: 32 }} align="center">Planning</Text>
          </Group>
          <Text p="lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam recusandae sapiente a vel mollitia suscipit aspernatur minima? Minus voluptates soluta facere cupiditate, amet sapiente similique, maiores, natus quos pariatur doloribus.</Text>
        </Card>
      </SimpleGrid>

    </AppShell>
  );
}
