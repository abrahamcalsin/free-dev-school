import { useQuery } from "@apollo/client";
import { Alert, AlertIcon, AlertTitle, Spinner } from "@chakra-ui/react";

import { Introduction } from "~/components/introduction";
import Meta from "~/components/meta";
import { moreFreeResourcesQuery } from "~/gql/queries";
import { MainLayout } from "~/layouts";
import { MoreFreeResourcesQueryResponsePayload } from "~/typings";

import { Content } from "./components/content";
import { MoreFreeResourcesSearchBox } from "./components/more-free-resources-search-box";

export function MoreFreeResourcesScreen() {
  const { loading, data, error } =
    useQuery<MoreFreeResourcesQueryResponsePayload>(moreFreeResourcesQuery);

  const moreFreeResources = data?.moreFreeResources ?? [];

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
      <Meta title="Más recursos gratis" />
      <Introduction
        title="Recursos más de programación"
        description="En esta sección encontrarás una selección de un gran número de
      recursos como documentaciónes, blogs y más herramientas para
      programadores."
        titleCount={moreFreeResources.length}
      />
      <MoreFreeResourcesSearchBox />
      <Content />
    </MainLayout>
  );
}
