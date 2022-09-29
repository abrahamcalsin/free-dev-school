import { FiExternalLink } from "react-icons/fi";
import { useQuery } from "@apollo/client";
import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";

import { SearchBox } from "~/components/search-box";
import { moreFreeResourcesQuery } from "~/gql/queries";
import { MoreFreeResourcesQueryResponsePayload } from "~/typings";

export function MoreFreeResourcesSearchBox() {
  const { data } = useQuery<MoreFreeResourcesQueryResponsePayload>(
    moreFreeResourcesQuery
  );

  const moreFreeResources = data?.moreFreeResources ?? [];

  return (
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
        renderResultItem={(freeResource) => {
          return (
            <Link
              key={freeResource.id}
              href={freeResource.websiteUrl}
              className="my-link"
              px="3"
              display="block"
              isExternal={true}
              py={{ base: "2", sm: "3" }}
              _hover={{
                bg: "gray.100",
              }}
              _dark={{
                _hover: {
                  bg: "gray.600",
                },
              }}
            >
              <Flex justifyContent="space-between" alignItems="center">
                <Box>
                  <Heading as="h2" mb="1" fontSize={{ base: "sm", sm: "md" }}>
                    {freeResource.websiteName}
                  </Heading>
                  <Box
                    display="inline-flex"
                    columnGap="1"
                    fontSize={{ base: "x-small", sm: "xs" }}
                    fontWeight="semibold"
                  >
                    <Text
                      as="span"
                      bg="yellow.100"
                      textColor="yellow.500"
                      fontSize="xs"
                      px="2"
                      border="1px"
                      rounded="full"
                      borderColor="transparent"
                      _dark={{
                        bg: "transparent",
                        borderColor: "yellow.500",
                      }}
                    >
                      {freeResource.resourceType}
                    </Text>
                    {(freeResource.language as unknown as any[]).map(
                      (language: string, index: number) =>
                        language === "en" ? (
                          <Text
                            key={index}
                            as="span"
                            bg="pink.100"
                            textColor="pink.500"
                            fontSize="xs"
                            px="2"
                            border="1px"
                            rounded="full"
                            borderColor="transparent"
                            _dark={{
                              bg: "transparent",
                              borderColor: "pink.500",
                            }}
                          >
                            {language}
                          </Text>
                        ) : (
                          <Text
                            as="span"
                            bg="blue.100"
                            textColor="blue.500"
                            fontSize="xs"
                            px="2"
                            border="1px"
                            rounded="full"
                            borderColor="transparent"
                            _dark={{
                              bg: "transparent",
                              borderColor: "blue.500",
                            }}
                          >
                            {language}
                          </Text>
                        )
                    )}
                  </Box>
                </Box>
                <Text
                  as="span"
                  opacity={{ base: "1", sm: "0" }}
                  sx={{
                    ".my-link:hover &": {
                      opacity: "1",
                    },
                  }}
                >
                  <FiExternalLink size={20} />
                </Text>
              </Flex>
            </Link>
          );
        }}
      />
    </Box>
  );
}
