import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { MoreFreeResourcesScreen } from "~/screens/more-free-resources";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function MoreFreeResourcesPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <MoreFreeResourcesScreen />
    </QueryClientProvider>
  );
}

export default MoreFreeResourcesPage;
