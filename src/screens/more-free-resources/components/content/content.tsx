import Masonry from "react-masonry-css";
import { useQuery } from "@apollo/client";
import { Box, Heading } from "@chakra-ui/react";

import { moreFreeResourcesQuery } from "~/gql/queries";
import { MoreFreeResourcesQueryResponsePayload } from "~/typings";

import { InfoCard } from "../info-card";

export function Content() {
  const { data } = useQuery<MoreFreeResourcesQueryResponsePayload>(
    moreFreeResourcesQuery,
    { fetchPolicy: "cache-only" }
  );

  const moreFreeResources = data?.moreFreeResources ?? [];

  const breakpointColumns = {
    default: 4,
    1100: 3,
    700: 2,
    500: 2,
  };

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
        <Masonry
          breakpointCols={breakpointColumns}
          className="card-grid"
          columnClassName="card-grid_column"
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
        </Masonry>
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
        <Masonry
          breakpointCols={breakpointColumns}
          className="card-grid"
          columnClassName="card-grid_column"
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
        </Masonry>
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
        <Masonry
          breakpointCols={breakpointColumns}
          className="card-grid"
          columnClassName="card-grid_column"
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
        </Masonry>
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
        <Masonry
          breakpointCols={breakpointColumns}
          className="card-grid"
          columnClassName="card-grid_column"
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
        </Masonry>
      </Box>
    </>
  );
}
