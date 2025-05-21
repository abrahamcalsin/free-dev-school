import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { FreeTutorialsScreen } from "~/screens/free-tutorials";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 30000,
    },
  },
});

function FreeTutorialsPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <FreeTutorialsScreen />
    </QueryClientProvider>
  );
}

export default FreeTutorialsPage;
