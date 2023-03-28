import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { PropsWithChildren } from 'react';

export const MyApolloProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
  });

  return (<ApolloProvider client={client}>
    {children}
    </ApolloProvider>);
}

export default MyApolloProvider;