import { ApolloProvider } from '@apollo/client'
import { useApollo } from '@temp/apolloClient'

import '../styles/globals.scss'

function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default App
