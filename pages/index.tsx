import type { GetServerSidePropsResult, NextPage } from "next";
import RouterLink from "next/link";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Grid,
  Heading,
  Link,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useQuery } from "@apollo/client";
import cloneDeep from "lodash.clonedeep";
import { MainLayout } from "~/layouts";
import { VideoCard } from "~/components/video-card";
import { freeCoursesQuery } from "~/gql/queries";
import { createApolloClient } from "~/lib/apollo-client";
import Meta from "~/components/meta";

const Home: NextPage = () => {
  const { loading, data, error } = useQuery(freeCoursesQuery);

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

  const freeCourses = cloneDeep(data.freeCourses);

  return (
    <MainLayout>
      <Meta />
      <Box textAlign="center" maxW="full" w="4xl" mx="auto">
        <Heading
          as="h1"
          mb={{ base: "3", sm: "4" }}
          fontWeight="extrabold"
          fontSize={{ base: "2xl", sm: "4xl" }}
          lineHeight={{ base: "auto", sm: "xl" }}
        >
          Descubre los mejores{" "}
          <Text
            as="span"
            bgGradient="linear(to-l, #4299E1, #39BBE4)"
            bgClip="text"
          >
            cursos y tutoriales de programación
          </Text>{" "}
          totalmente gratuitos.
        </Heading>
        <Text
          px="6"
          textColor="gray.500"
          fontWeight="medium"
          fontSize={{ base: "md", sm: "xl" }}
          lineHeight={{ base: "auto", sm: "9" }}
          _dark={{
            textColor: "gray.400",
          }}
        >
          Los cursos y tutoriales que se publican en esta web fueron recopilados
          inicialmente de plataformas como <strong>YouTube</strong> y{" "}
          <strong>Twitch</strong>, donde hay más contenido gratuito sobre
          desarrollo de software.{" "}
          <RouterLink href="/about-us">
            <Link
              textColor="blue.400"
              fontStyle="italic"
              textDecoration="underline"
              fontWeight="bold"
            >
              Mas información aquí.
            </Link>
          </RouterLink>
        </Text>
      </Box>
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
            {freeCourses
              .sort(
                (video1: any, video2: any) =>
                  new Date(video2.dateOfPublication).getTime() -
                  new Date(video1.dateOfPublication).getTime()
              )
              .map((course: any) => {
                return (
                  course.state === "publish" &&
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
    </MainLayout>
  );
};

export async function getServerSideProps(): Promise<
  GetServerSidePropsResult<any>
> {
  const client = createApolloClient();

  await client.query({
    query: freeCoursesQuery,
  });

  return {
    props: {
      apolloClientState: client.cache.extract(),
    },
  };
}

export default Home;
