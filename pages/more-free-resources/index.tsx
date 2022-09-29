import type { NormalizedCacheObject } from "@apollo/client";
import { GetServerSidePropsResult } from "next";

import { moreFreeResourcesQuery } from "~/gql/queries";
import { createApolloClient } from "~/lib/apollo-client";
import { MoreFreeResourcesScreen } from "~/screens/more-free-resources";

interface MoreFreeResourcesPageProps {
  apolloClientState: NormalizedCacheObject;
}

function MoreFreeResourcesPage() {
  return <MoreFreeResourcesScreen />;
}

export async function getServerSideProps(): Promise<
  GetServerSidePropsResult<MoreFreeResourcesPageProps>
> {
  const client = createApolloClient();

  await client.query({
    query: moreFreeResourcesQuery,
  });

  return {
    props: {
      apolloClientState: client.cache.extract(),
    },
  };
}
export default MoreFreeResourcesPage;
