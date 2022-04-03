import Styled from "styled-components";
import { AppShell, Header, Text, Button, Group, Box, Card, SimpleGrid, ActionIcon } from "@mantine/core";
import { Book, AlertTriangle, Calendar, Star, Hourglass, BallFootball, Mail, Pinned, Certificate, Link, CalendarEvent, ReportAnalytics  } from "tabler-icons-react";


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
            <Book size={40} color="#FF0000" />
            <Button variant="outline">
              <Text gradient={{ from: "red", to: "orange", deg: 45 }} variant="gradient" style={{ fontSize: 26 }} align="center">Homework</Text>
            </Button>
           
          </Group>
          <Text p="lg">Check what homework you have coming up soon.</Text>
        </Card>
        <Card>
          <Group position="center">
            <AlertTriangle size={40} color="#FFA500" />
            <Button variant="outline">
              <Text gradient={{ from: "orange", to: "yellow", deg: 45 }} variant="gradient" style={{ fontSize: 26 }} align="center">Behaviour</Text>
            </Button>
           
          </Group>
          <Text p="lg">Check if you have any detentions or behavior points.</Text>
        </Card>
        <Card>
          <Group position="center">
            <Calendar size={40} color="#FFFF00" />
            <Button variant="outline">
              <Text gradient={{ from: "yellow", to: "green", deg: 45 }} variant="gradient" style={{ fontSize: 26 }} align="center">Timetable</Text>
            </Button>
          </Group>
          <Text p="lg">See what lessons you have throughout the day.</Text>
        </Card>
      </SimpleGrid>
      <SimpleGrid cols={3} mt="md">
        <Card>
          <Group position="center">
            <Star size={40} color="#00FF00" />
            <Button variant="outline">
              <Text gradient={{ from: "green", to: "cyan", deg: 45 }} variant="gradient" style={{ fontSize: 26 }} align="center">Housepoints</Text>
            </Button>
           
          </Group>
          <Text p="lg">Check how many houspoints you have been given.</Text>
        </Card>
        <Card>
          <Group position="center">
            <Mail size={40} color="#00FFFF" />
            <Button variant="outline">
              <Text gradient={{ from: "cyan", to: "blue", deg: 45 }} variant="gradient" style={{ fontSize: 26 }} align="center">Email</Text>
            </Button>
           
          </Group>
          <Text p="lg">See if you have any emails or send one.</Text>
        </Card>
        <Card>
          <Group position="center">
            <BallFootball size={40} color="#0000FF" />
            <Button variant="outline">
              <Text gradient={{ from: "blue", to: "violet", deg: 45 }} variant="gradient" style={{ fontSize: 26 }} align="center">Clubs</Text>
            </Button>
          </Group>
          <Text p="lg">Check if you have any clubs on.</Text>
        </Card>
      </SimpleGrid>
      <SimpleGrid cols={3} mt="md">
        <Card>
          <Group position="center">
            <Hourglass size={40} color="#FF00FF" />
            <Button variant="outline">
              <Text gradient={{ from: "violet", to: "blue", deg: 45 }} variant="gradient" style={{ fontSize: 26 }} align="center">Attendance</Text>
              
            </Button>
          </Group>
          <Text p="lg">Check how many days you have been absent.</Text>
        </Card>
        <Card> 
          <Group position="center">
            <Pinned size={40} color="#FF00FF" />
            <Button variant="outline">
              <Text gradient={{ from: "blue", to: "cyan", deg: 45 }} variant="gradient" style={{ fontSize: 26 }} align="center">Noticeboard</Text>
            </Button>
          </Group>
          <Text p="lg">Check what notices you have on the noticeboard.</Text>
        </Card>
        <Card>
          <Group position="center">
            <Certificate size={40} color="#FF00FF" />
            <Button variant="outline">
              <Text gradient={{ from: "cyan", to: "green", deg: 45 }} variant="gradient" style={{ fontSize: 26 }} align="center">Exams</Text>
            </Button>
          </Group>
          <Text p="lg">Check what exams you have passed or have coming up</Text>
        </Card>
        

      </SimpleGrid>
      <SimpleGrid cols={3} mt="md">
        <Card>
          <Group position="center">
            <CalendarEvent size={40} color="#FF00FF" />
            <Button variant="outline">
              <Text gradient={{ from: "green", to: "yellow", deg: 45 }} variant="gradient" style={{ fontSize: 26 }} align="center">Calendar</Text>
            </Button>
          </Group>
          <Text p="lg">Check what events you have coming up.</Text>
        </Card>
        <Card>
          <Group position="center">
            <Link size={40} color="#FF00FF" />
            <Button variant="outline">
              <Text gradient={{ from: "yellow", to: "orange", deg: 45 }} variant="gradient" style={{ fontSize: 26 }} align="center">Links</Text>
            </Button>
          </Group>
          <Text p="lg">Links to other resources.</Text>
        </Card>
        <Card>
          <Group position="center">
            <ReportAnalytics size={40} color="#FF00FF" />
            <Button variant="outline">
              <Text gradient={{ from: "orange", to: "red", deg: 45 }} variant="gradient" style={{ fontSize: 26 }} align="center">Attendance</Text>
            </Button>
          </Group>
          <Text p="lg">Check what attendance you have.</Text>
        </Card>
      </SimpleGrid>
      <SimpleGrid cols={3} mt="md">
      </SimpleGrid>
      
    </AppShell>
  );
}
