import '../styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import type { AppProps } from 'next/app'

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme(colors)

const App = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
)

export default App
