import { useQuery } from "@apollo/client";
import { Alert, AlertIcon, AlertTitle, Spinner } from "@chakra-ui/react";

import { Introduction } from "~/components/introduction";
import Meta from "~/components/meta";
import { freeTutorialsQuery } from "~/gql/queries";
import { MainLayout } from "~/layouts";
import { FreeTutorialsQueryResponsePayload } from "~/typings/free-tutorials";

import { Content } from "./components/content";
import { FreeTutorialsSearchBox } from "./components/free-tutorials-search-box";

export function FreeTutorialsScreen() {
  const { loading, data, error } =
    useQuery<FreeTutorialsQueryResponsePayload>(freeTutorialsQuery);

  const freeTutorials = data?.freeTutorials ?? [];

  if (loading) {
    return (
      <MainLayout>
        <Spinner size="lg" />
      </MainLayout>
    );
  }

  if (error) {
    return (
      <MainLayout>
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>{error.message}</AlertTitle>
        </Alert>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <Meta title="Tutoriales gratis" />
      <Introduction
        title="Tutoriales de programación gratuitos"
        description="En esta sección encontrarás una selección de un gran número de
        tutoriales de programación gratuitos."
        titleCount={freeTutorials.length}
      />
      <FreeTutorialsSearchBox />
      <Content />
    </MainLayout>
  );
}
