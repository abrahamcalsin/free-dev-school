import "../styles/globals.css";
import * as React from "react";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { mainTheme } from "~/themes/main";
import { Navbar } from "~/components/navbar";

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = React.useMemo(() => {
    const cache = new InMemoryCache();

    if (pageProps.apolloClientState) {
      cache.restore(pageProps.apolloClientState);
    }

    const client = new ApolloClient({
      uri: process.env.API_URI,
      cache: cache,
    });

    return client;
  }, [pageProps.apolloClientState]);

  return (
    <ChakraProvider theme={mainTheme}>
      <ApolloProvider client={apolloClient}>
        <Navbar />
        <Component {...pageProps} />
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default MyApp;
