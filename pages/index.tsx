
import HomepageGrid from '../components/homepage/homepageGrid';
import { AppShell, SimpleGrid } from '@mantine/core';
import {
    Book,
    AlertTriangle,
    Calendar,
    Star,
    Hourglass,
    BallFootball,
    Mail,
    Pinned,
    Certificate,
    Link,
    CalendarEvent,
    ReportAnalytics,
} from 'tabler-icons-react';
import Navbar from '../components/global/navbar';
import MainCard from '../components/global/MainCard';

export default function Home() {
    return (
        <AppShell
            styles={(theme) => ({
                main: {
                    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                },
            })}
            header={<Navbar />}
        >   
            <MainCard />
            <SimpleGrid cols={3} mt="md">
                <HomepageGrid
                    Title={'Homework'}
                    Description={'Check what homework you have coming up soon.'}
                    colour={{ from: 'violet', to: 'blue' }}
                >
                    <Book size={40} color="#FF0000" />
                </HomepageGrid>
                <HomepageGrid
                    Title={'Behaviour'}
                    Description={'Check if you have any detentions or behavior points.'}
                    colour={{ from: 'orange', to: 'yellow' }}
                >
                    <AlertTriangle size={40} color="#FF0000" />
                </HomepageGrid>

                <HomepageGrid
                    Title={'Timetable'}
                    Description={'See what lessons you have throughout the day.'}
                    colour={{ from: 'yellow', to: 'green' }}
                >
                    <Calendar size={40} color="#FF0000" />
                </HomepageGrid>
            </SimpleGrid>
            <SimpleGrid cols={3} mt="md">
                <HomepageGrid
                    Title={'Housepoints'}
                    Description={'Check how many houspoints you have been given.'}
                    colour={{ from: 'green', to: 'cyan' }}
                >
                    <Star size={40} color="#00FF00" />
                </HomepageGrid>

                <HomepageGrid Title={'Email'} Description={'See if you have any emails or send one.'} colour={{ from: 'cyan', to: 'blue' }}>
                    <Mail size={40} color="#00FFFF" />
                </HomepageGrid>

                <HomepageGrid Title={'Clubs'} Description={'Check if you have any clubs on.'} colour={{ from: 'cyan', to: 'blue' }}>
                    <BallFootball size={40} color="#0000FF" />
                </HomepageGrid>
            </SimpleGrid>
            <SimpleGrid cols={3} mt="md">
                <HomepageGrid
                    Title={'Attendance'}
                    Description={'Check how many days you have been absent.'}
                    colour={{ from: 'violet', to: 'blue' }}
                >
                    <Hourglass size={40} color="#8F00FF" />
                </HomepageGrid>
                <HomepageGrid
                    Title={'Noticeboard'}
                    Description={'Check what notices you have on the noticeboard.'}
                    colour={{ from: 'blue', to: 'cyan' }}
                >
                    <Pinned size={40} color="#0000FF" />
                </HomepageGrid>
                <HomepageGrid
                    Title={'Exams'}
                    Description={'Check what exams you have passed or have coming up.'}
                    colour={{ from: 'cyan', to: 'green' }}
                >
                    <Certificate size={40} color="#00FFFF" />
                </HomepageGrid>
            </SimpleGrid>
            <SimpleGrid cols={3} mt="md">
                <HomepageGrid
                    Title={'Calendar'}
                    Description={'Check what events you have coming up.'}
                    colour={{ from: 'green', to: 'yellow' }}
                >
                    <CalendarEvent size={40} color="#00FF00" />
                </HomepageGrid>
                <HomepageGrid Title={'Links'} Description={'Links to other resources.'} colour={{ from: 'green', to: 'yellow' }}>
                    <Link size={40} color="#FFFF00" />
                </HomepageGrid>

                <HomepageGrid Title={'Profile'} Description={'Check your profile.'} colour={{ from: 'orange', to: 'red' }}>
                    <ReportAnalytics size={40} color="#FFA500" />
                </HomepageGrid>
            </SimpleGrid>
        </AppShell>
    );
}
