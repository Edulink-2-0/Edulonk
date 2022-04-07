import { AppShell, Input, MantineProvider, PasswordInput, Group, Card, Text } from '@mantine/core';
import Head from 'next/head';
import Navbar from '../../components/global/navbar';
import Link from 'next/link';
import { useState } from 'react';
import { At, Lock } from 'tabler-icons-react';

export default function Login() {
    const [emailUsername, setemailUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <AppShell
            styles={(theme) => ({
                main: {
                    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                },
            })}
            header={<Navbar />}
        >
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <meta charSet="utf-8"></meta>
                <title>Login / Sign Up Form</title>
                <link rel="shortcut icon" href="/assets/favicon.ico"></link>
            </Head>
            <MantineProvider theme={{ colorScheme: 'light' }}>
                  <Group position="center">
                    <Card position="center">
                    <body>
                      <div className="container">
                          <form className="form" id="login">
                              <h1 className="form__title">Login</h1>
                              <div className="form__message form__message--error"></div>
                              <div className="form__input-group">
                                  <Input
                                      placeholder="Username or email"
                                      required
                                      onChange={(e) => {
                                          setemailUsername(e.target.value);
                                      }}
                                      icon={<At />}
                                  />
  
                                  <div className="form__input-error-message"></div>
                              </div>
                              <div className="form__input-group">
                                  <PasswordInput
                                      icon={<Lock />}
                                      placeholder="Password"
                                      required
                                      onChange={(e) => {
                                          setPassword(e.target.value);
                                      }}
                                  />
                                  <div className="form__input-error-message"></div>
                              </div>
                              
                                  <button className="form__button" type="submit" border={true}>
                                    <Link passHref={true} href="/">  
                                    Continue</Link>
                                  </button>
                              
                              <p className="form__text">
                                  <a href="#" className="form__link">
                                      Forgot your password?
                                  </a>
                              </p>
                              <p className="form__text">
                                  <Link href="/signup">Dont have an account? Create account</Link>
                              </p>
                          </form>
                      </div>
                  </body>
                    </Card>
                  </Group>
            </MantineProvider>
        </AppShell>
    );
}
