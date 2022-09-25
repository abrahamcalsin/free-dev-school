import * as React from "react";
import { ApolloProvider } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import { Navbar } from "~/components/navbar";
import { createApolloClient } from "~/lib/apollo-client";
import { mainTheme } from "~/themes/main";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = React.useMemo(() => {
    return createApolloClient(pageProps.apolloClientState);
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
