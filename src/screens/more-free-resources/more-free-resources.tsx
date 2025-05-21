import { Alert, AlertIcon, AlertTitle, Spinner } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

import { Introduction } from "~/components/introduction";
import Meta from "~/components/meta";
import { MainLayout } from "~/layouts";
import { getMoreFreeResources } from "~/services/more-free-resources";

import { Content } from "./components/content";
import { MoreFreeResourcesSearchBox } from "./components/more-free-resources-search-box";

export function MoreFreeResourcesScreen() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["moreFreeResources"],
    queryFn: getMoreFreeResources,
  });

  const moreFreeResources = data ?? [];

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
      <Meta title="Más recursos gratis" />
      <Introduction
        title="Recursos más de programación"
        description="En esta sección encontrarás una selección de un gran número de
      recursos como documentaciónes, blogs y más herramientas para
      programadores."
        titleCount={moreFreeResources.length}
      />
      <MoreFreeResourcesSearchBox data={moreFreeResources} />
      <Content data={moreFreeResources} />
    </MainLayout>
  );
}
