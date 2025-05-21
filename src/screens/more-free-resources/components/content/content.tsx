import Masonry from "react-masonry-css";
import { Box, Heading } from "@chakra-ui/react";

import { MoreFreeResourceResponsePayload } from "~/typings";

import { InfoCard } from "../info-card";

interface ContentProps {
  data: MoreFreeResourceResponsePayload[];
}

export function Content({ data }: ContentProps) {
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
          {data?.map((freeResource) => {
            return (
              freeResource.resource_type === "documentation" && (
                <InfoCard
                  key={freeResource.id}
                  href={freeResource.website_url}
                  title={freeResource.website_name}
                  description={freeResource.description}
                  type={freeResource.resource_type}
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
          {data?.map((freeResource) => {
            return (
              freeResource.resource_type === "tool" && (
                <InfoCard
                  key={freeResource.id}
                  href={freeResource.website_url}
                  title={freeResource.website_name}
                  description={freeResource.description}
                  type={freeResource.resource_type}
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
          {data?.map((freeResource) => {
            return (
              freeResource.resource_type === "blog" && (
                <InfoCard
                  key={freeResource.id}
                  href={freeResource.website_url}
                  title={freeResource.website_name}
                  description={freeResource.description}
                  type={freeResource.resource_type}
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
          {data?.map((freeResource) => {
            return (
              freeResource.resource_type === "game" && (
                <InfoCard
                  key={freeResource.id}
                  href={freeResource.website_url}
                  title={freeResource.website_name}
                  description={freeResource.description}
                  type={freeResource.resource_type}
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
