import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { NextPage } from "next";

import { HomeScreen } from "~/screens/home";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 30000,
    },
  },
});

const Home: NextPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <HomeScreen />
    </QueryClientProvider>
  );
};

export default Home;
