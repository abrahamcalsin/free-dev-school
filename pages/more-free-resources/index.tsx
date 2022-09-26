import React from "react";
import { useQuery } from "@apollo/client";
import { Alert, AlertIcon, AlertTitle, Box, Spinner } from "@chakra-ui/react";

import { Introduction } from "~/components/introduction";
import { SearchBox } from "~/components/search-box";
import { moreFreeResourcesQuery } from "~/gql/queries";
import { MainLayout } from "~/layouts";
import { MoreFreeResourceQueryResponsePayload } from "~/typings";

const MoreFreeResources = () => {
  const { loading, data, error } =
    useQuery<MoreFreeResourceQueryResponsePayload>(moreFreeResourcesQuery);

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

  const moreFreeResources = data?.moreFreeResources ?? [];

  return (
    <MainLayout>
      <Introduction
        title="Recursos más de programación"
        description="En esta sección encontrarás una selección de un gran número de
      recursos como documentaciónes, blogs y más herramientas para
      programadores."
        titleCount={moreFreeResources.length}
      />
      <Box my={{ base: "8", sm: "14" }}>
        <SearchBox
          data={moreFreeResources}
          filter={(term, item) => {
            if (!item?.technologies) {
              return false;
            }

            const safeTechnologies = [...item.technologies!];

            return safeTechnologies.some((tech) =>
              tech.match(new RegExp(term, "gi"))
            );
          }}
          placeholder="Buscar recurso por tecnologia.."
          renderResultItem={(item) => {
            return <div key={item.id}>{item.websiteName}</div>;
          }}
        />
      </Box>
    </MainLayout>
  );
};

export default MoreFreeResources;
