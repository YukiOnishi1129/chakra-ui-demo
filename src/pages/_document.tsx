// pages/_document.js

import { ColorModeScript, extendTheme } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme(colors)

export default function Document() {
  return (
    <Html lang='ja'>
      <Head />
      <body>
        {/* 👇 Here's the script */}
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
