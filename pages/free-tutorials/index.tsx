import type { NormalizedCacheObject } from "@apollo/client";
import { GetServerSidePropsResult } from "next";

import { freeTutorialsQuery } from "~/gql/queries";
import { createApolloClient } from "~/lib/apollo-client";
import { FreeTutorialsScreen } from "~/screens/free-tutorials";

interface FreeTutorialsPageProps {
  apolloClientState: NormalizedCacheObject;
}

function FreeTutorialsPage() {
  return <FreeTutorialsScreen />;
}

export async function getServerSideProps(): Promise<
  GetServerSidePropsResult<FreeTutorialsPageProps>
> {
  const client = createApolloClient();

  await client.query({
    query: freeTutorialsQuery,
  });

  return {
    props: {
      apolloClientState: client.cache.extract(),
    },
  };
}

export default FreeTutorialsPage;
