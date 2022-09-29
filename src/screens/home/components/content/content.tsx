import * as React from "react";
import { useQuery } from "@apollo/client";
import { Box, Grid, Heading, Text } from "@chakra-ui/react";

import { SocialMediaIcon } from "~/components/social-media-icon";
import { VideoCard } from "~/components/video-card";
import { freeCoursesQuery } from "~/gql/queries";
import { FreeCoursesQueryResponsePayload } from "~/typings";

export function Content() {
  const { data } = useQuery<FreeCoursesQueryResponsePayload>(freeCoursesQuery, {
    fetchPolicy: "cache-only",
  });

  const freeCourses = data?.freeCourses ?? [];

  return (
    <>
      <Box position="relative" mt={{ base: "14", sm: "20" }} py="2px">
        <Box
          position="absolute"
          left="0"
          top="0"
          h="full"
          w="full"
          zIndex="-1"
          bgGradient="linear(90deg, transparent, #E2E8F0, #E2E8F0, #E2E8F0, #E2E8F0, #E2E8F0, #E2E8F0, #E2E8F0, #E2E8F0, #E2E8F0, transparent)"
          _dark={{
            bgGradient:
              "linear(90deg, transparent, #4A5568, #4A5568, #4A5568, #4A5568, #4A5568, #4A5568, #4A5568, #4A5568, #4A5568, transparent)",
          }}
        ></Box>
        <Box
          bgGradient="linear(90deg, transparent, white, white, white, white, white, white, white, white, white, transparent)"
          mx={{ base: "-5", sm: "-24" }}
          py="10"
          px={{ base: "5", sm: "24" }}
          _dark={{
            bgGradient:
              "linear(90deg, transparent, #2D3748, #2D3748, #2D3748, #2D3748, #2D3748, #2D3748, #2D3748, #2D3748, #2D3748, transparent)",
          }}
        >
          <Heading as="h3" fontSize="2xl" fontWeight="bold">
            Cursos recientes:
          </Heading>
          <Text
            my="4"
            textColor="gray.500"
            fontWeight="medium"
            fontSize={{ base: "md", sm: "lg" }}
            lineHeight={{ base: "auto", sm: "9" }}
            _dark={{
              textColor: "gray.400",
            }}
          >
            Estos son los mejor cursos que fueron lanzados recientemente.
          </Text>
          <Grid
            templateColumns={{ base: "repeat(2, 1fr)", sm: "repeat(4, 1fr)" }}
            alignItems="start"
            gap={{ base: "3", sm: "4" }}
          >
            {freeCourses.map((course) => {
              return (
                course.publicationStatus === "recent" && (
                  <VideoCard
                    key={course.id}
                    channelName={course.tutorName}
                    videoName={course.courseName}
                    videoId={course.courseId}
                    src={course.linkCourseThumbnail}
                    videoHost={course.courseHost}
                    channelId={course.tutorChannelId}
                    dateOfPublication={course.dateOfPublication}
                    publicationStatus={course.publicationStatus}
                    icon={<SocialMediaIcon type={course.courseHost} />}
                  />
                )
              );
            })}
          </Grid>
        </Box>
      </Box>
      <Box mt={{ base: "10", sm: "16" }}>
        <Heading
          as="h3"
          fontSize={{ base: "22px", sm: "2xl" }}
          fontWeight="bold"
        >
          Novedades:
        </Heading>
        <Text
          my="4"
          textColor="gray.500"
          fontWeight="medium"
          fontSize={{ base: "md", sm: "lg" }}
          lineHeight={{ base: "auto", sm: "9" }}
          _dark={{
            textColor: "inherit",
          }}
        >
          Se esta trabajando arduamente para añadir más funciones y nuevas
          características a la web, pronto se anunciarán más novedades en esta
          misma sección.
        </Text>
        <Text
          textColor="gray.500"
          fontWeight="medium"
          fontSize={{ base: "md", sm: "lg" }}
          lineHeight={{ base: "auto", sm: "9" }}
          _dark={{
            textColor: "inherit",
          }}
        >
          Hasta entonces no dejes pasar el tiempo y aprovecha los mejores cursos
          y tutoriales de programación gratuitos; la tecnología avanza y no se
          detiene. Feliz Viaje!!!
        </Text>
      </Box>
    </>
  );
}
