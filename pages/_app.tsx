import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes';
import MyApolloProvider from '../graphql/apollo'

import 'antd/dist/antd.css'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="data-theme" defaultTheme="light">
      <MyApolloProvider>
        <Component {...pageProps} />
      </MyApolloProvider>
    </ThemeProvider>
  )
}

export default MyApp
