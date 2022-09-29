import { useQuery } from "@apollo/client";
import { Box, Grid, Heading } from "@chakra-ui/react";

import { moreFreeResourcesQuery } from "~/gql/queries";
import { MoreFreeResourcesQueryResponsePayload } from "~/typings";

import { InfoCard } from "../info-card";

export function Content() {
  const { data } = useQuery<MoreFreeResourcesQueryResponsePayload>(
    moreFreeResourcesQuery,
    { fetchPolicy: "cache-only" }
  );

  const moreFreeResources = data?.moreFreeResources ?? [];

  return (
    <>
      <Box>
        <Heading
          as="h3"
          fontSize={{ base: "22px", sm: "2xl" }}
          fontWeight="bold"
          mb="6"
        >
          Documentaciónes:
        </Heading>
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", sm: "repeat(4, 1fr)" }}
          alignItems="start"
          gap={{ base: "3", sm: "4" }}
        >
          {moreFreeResources.map((freeResource) => {
            return (
              freeResource.resourceType === "documentation" && (
                <InfoCard
                  key={freeResource.id}
                  href={freeResource.websiteUrl}
                  title={freeResource.websiteName}
                  description={freeResource.description}
                  type={freeResource.resourceType}
                  language={freeResource.language}
                />
              )
            );
          })}
        </Grid>
      </Box>
      <Box mt="10">
        <Heading
          as="h3"
          fontSize={{ base: "22px", sm: "2xl" }}
          fontWeight="bold"
          mb="6"
        >
          Herramientas:
        </Heading>
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", sm: "repeat(4, 1fr)" }}
          alignItems="start"
          gap={{ base: "3", sm: "4" }}
        >
          {moreFreeResources.map((freeResource) => {
            return (
              freeResource.resourceType === "tool" && (
                <InfoCard
                  key={freeResource.id}
                  href={freeResource.websiteUrl}
                  title={freeResource.websiteName}
                  description={freeResource.description}
                  type={freeResource.resourceType}
                  language={freeResource.language}
                />
              )
            );
          })}
        </Grid>
      </Box>
      <Box mt="10">
        <Heading
          as="h3"
          fontSize={{ base: "22px", sm: "2xl" }}
          fontWeight="bold"
          mb="6"
        >
          Blogs:
        </Heading>
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", sm: "repeat(4, 1fr)" }}
          alignItems="start"
          gap={{ base: "3", sm: "4" }}
        >
          {moreFreeResources.map((freeResource) => {
            return (
              freeResource.resourceType === "blog" && (
                <InfoCard
                  key={freeResource.id}
                  href={freeResource.websiteUrl}
                  title={freeResource.websiteName}
                  description={freeResource.description}
                  type={freeResource.resourceType}
                  language={freeResource.language}
                />
              )
            );
          })}
        </Grid>
      </Box>
      <Box mt="10">
        <Heading
          as="h3"
          fontSize={{ base: "22px", sm: "2xl" }}
          fontWeight="bold"
          mb="6"
        >
          Juegos para aprender a programar:
        </Heading>
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", sm: "repeat(4, 1fr)" }}
          alignItems="start"
          gap={{ base: "3", sm: "4" }}
        >
          {moreFreeResources.map((freeResource) => {
            return (
              freeResource.resourceType === "game" && (
                <InfoCard
                  key={freeResource.id}
                  href={freeResource.websiteUrl}
                  title={freeResource.websiteName}
                  description={freeResource.description}
                  type={freeResource.resourceType}
                  language={freeResource.language}
                />
              )
            );
          })}
        </Grid>
      </Box>
    </>
  );
}
