import { NormalizedCacheObject } from "@apollo/client";
import type { GetServerSidePropsResult, NextPage } from "next";

import { freeCoursesQuery } from "~/gql/queries";
import { createApolloClient } from "~/lib/apollo-client";
import { HomeScreen } from "~/screens/home";

interface HomeProps {
  apolloClientState: NormalizedCacheObject;
}

const Home: NextPage = () => {
  return <HomeScreen />;
};

export async function getServerSideProps(): Promise<
  GetServerSidePropsResult<HomeProps>
> {
  const client = createApolloClient();

  await client.query({
    query: freeCoursesQuery,
  });

  return {
    props: {
      apolloClientState: client.cache.extract(),
    },
  };
}

export default Home;
