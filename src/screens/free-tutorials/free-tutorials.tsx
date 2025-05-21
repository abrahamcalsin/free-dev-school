import { Alert, AlertIcon, AlertTitle, Spinner } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

import { Introduction } from "~/components/introduction";
import Meta from "~/components/meta";
import { MainLayout } from "~/layouts";
import { getFreeTutorials } from "~/services/free-tutorials";

import { Content } from "./components/content";
import { FreeTutorialsSearchBox } from "./components/free-tutorials-search-box";

export function FreeTutorialsScreen() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["freeTutorials"],
    queryFn: getFreeTutorials,
  });

  const freeTutorials = data ?? [];

  if (isLoading) {
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
      <FreeTutorialsSearchBox data={freeTutorials} />
      <Content data={freeTutorials} />
    </MainLayout>
  );
}
