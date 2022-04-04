


import { AppShell, SimpleGrid } from '@mantine/core';
import Head from 'next/head';
import Navbar from '../../components/global/navbar';

import Link from 'next/link'

export default function Login() {
    return (
        <AppShell
            styles={(theme) => ({
                main: {
                    backgroundColor: theme.colorScheme === 'light' ? theme.colors.dark[8] : theme.colors.gray[0],
                },
            })}
            header={<Navbar />}
            
        >
        
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <meta charSet="utf-8"></meta>
                <title>Login / Sign Up Form</title>
                <link rel="shortcut icon" href="/assets/favicon.ico"></link>
                <link href="./src/main.css"></link>
            </Head>
            <body>
                <div className="container">
                    <form className="form" id="login">
                        <h1 className="form__title">Login</h1>
                        <div className="form__message form__message--error"></div>
                        <div className="form__input-group">
                            <input type="text" className="form__input" autoFocus placeholder="Username or email"></input>
                            <div className="form__input-error-message"></div>
                        </div>
                        <div className="form__input-group">
                            <input type="password" className="form__input" autoFocus placeholder="Password"></input>
                            <div className="form__input-error-message"></div>
                        </div>
                        <Link passHref={true} href="/"><button className="form__button" type="submit">Continue</button></Link>
                        <p className="form__text">
                            <a href="#" className="form__link">Forgot your password?</a>
                        </p>
                        <p className="form__text">
                            <Link href="/signup" >Dont have an account? Create account</Link>
                        </p>
                    </form>
                   
                </div>
                <script defer src="../src/main.js"></script>
            </body>
        </AppShell>
    );
}
