import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { FreeCoursesScreen } from "~/screens/free-courses";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 30000,
    },
  },
});

function FreeCoursesPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <FreeCoursesScreen />
    </QueryClientProvider>
  );
}

export default FreeCoursesPage;
