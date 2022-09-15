import * as React from "react";
import { GetServerSidePropsResult } from "next";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Grid,
  Heading,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { ApolloClient, InMemoryCache, useQuery } from "@apollo/client";
import cloneDeep from "lodash.clonedeep";
import { MainLayout } from "~/layouts";
import { SearchBox } from "~/components/search-box";
import { VideoCard } from "~/components/video-card";
import { freeCoursesQuery } from "~/gql/queries";

const FreeCourses = () => {
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
      <Box textAlign="center" maxW="full" w="3xl" mx="auto">
        <Heading
          as="h1"
          fontSize={{ base: "2xl", sm: "4xl" }}
          mb={{ base: "3", sm: "4" }}
          fontWeight="extrabold"
        >
          Cursos de programación gratuitos
        </Heading>
        <Text
          textColor="gray.500"
          fontWeight="medium"
          fontSize={{ base: "md", sm: "xl" }}
          lineHeight={{ base: "auto", sm: "10" }}
          _dark={{
            textColor: "gray.400",
          }}
        >
          En esta sección encontrarás una selección de un gran número de los
          mejores cursos de programación gratuitos.
        </Text>
      </Box>
      <SearchBox label="Buscar curso..." />
      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", sm: "repeat(4, 1fr)" }}
        alignItems="start"
        gap={{ base: "3", sm: "4" }}
      >
        {freeCourses
          .sort(
            (video1: any, video2: any) =>
              new Date(video2.yearOfPublication).getTime() -
              new Date(video1.yearOfPublication).getTime()
          )
          .map((course: any) => {
            return (
              course.state === "publish" && (
                <VideoCard
                  key={course.id}
                  channelName={course.tutorName}
                  videoName={course.courseName}
                  videoId={course.courseId}
                  src={course.linkCourseThumbnail}
                  videoHost={course.courseHost}
                  channelId={course.tutorChannelId}
                  dateOfPublication={course.yearOfPublication}
                  publicationStatus={course.publicationStatus}
                />
              )
            );
          })}
      </Grid>
    </MainLayout>
  );
};

export async function getServerSideProps(): Promise<
  GetServerSidePropsResult<any>
> {
  const client = new ApolloClient({
    uri: process.env.API_URI,
    cache: new InMemoryCache(),
  });

  await client.query({
    query: freeCoursesQuery,
  });

  return {
    props: {
      apolloClientState: client.cache.extract(),
    },
  };
}

export default FreeCourses;
