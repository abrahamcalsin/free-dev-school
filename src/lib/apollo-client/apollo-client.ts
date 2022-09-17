import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

export function createApolloClient(initialState?: Record<string, any>) {
  const cache = new InMemoryCache();

  if (initialState) {
    cache.restore(initialState);
  }

  const httpLink = createHttpLink({
    uri: process.env.API_URI,
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.SECRET_TOKEN}`,
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: cache,
  });

  return client;
}
