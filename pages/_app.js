import '../styles/globals.css'
import { MantineProvider } from "@mantine/core"

function MyApp({ Component, pageProps }) {
  return <MantineProvider theme={{ colorScheme: 'dark', fontFamily: "Hammersmith One" }}>
    <Component {...pageProps} />
  </MantineProvider>
}

export default MyApp
