import * as React from "react";
import { ApolloProvider } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Script from "next/script";

import { Navbar } from "~/components/navbar";
import { createApolloClient } from "~/lib/apollo-client";
import * as gtag from "~/lib/gtag";
import { mainTheme } from "~/themes/main";
import env from "~/utils/env";
import isProduction from "~/utils/isProduction";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const apolloClient = React.useMemo(() => {
    return createApolloClient(pageProps.apolloClientState);
  }, [pageProps.apolloClientState]);

  React.useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ChakraProvider theme={mainTheme}>
      <ApolloProvider client={apolloClient}>
        {isProduction && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${env.GOOGLE_ANALYTICS_ID}`}
            />
            <Script
              id="gtag-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                      window.dataLayer = window.dataLayer || [];

                      function gtag(){dataLayer.push(arguments);}

                      gtag('js', new Date());

                      gtag('config', '${env.GOOGLE_ANALYTICS_ID}', {
                          page_path: window.location.pathname,
                      });
                  `,
              }}
            />
          </>
        )}
        <Navbar />
        <Component {...pageProps} />
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default MyApp;
