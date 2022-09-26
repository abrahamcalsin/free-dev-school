import { NormalizedCacheObject } from "@apollo/client";
import { GetServerSidePropsResult } from "next";

import Meta from "~/components/meta";
import { freeCoursesQuery } from "~/gql/queries";
import { createApolloClient } from "~/lib/apollo-client";
import { FreeCoursesScreen } from "~/screens/free-courses";

interface FreeCoursesPageProps {
  apolloClientState: NormalizedCacheObject;
}

function FreeCoursesPage() {
  return (
    <>
      <Meta title="Cursos gratis" />
      <FreeCoursesScreen />
    </>
  );
}

export async function getServerSideProps(): Promise<
  GetServerSidePropsResult<FreeCoursesPageProps>
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

export default FreeCoursesPage;
