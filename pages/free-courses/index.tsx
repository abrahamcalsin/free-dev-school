import { useQuery } from "@apollo/client";
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
import cloneDeep from "lodash.clonedeep";
import { GetServerSidePropsResult } from "next";

import Meta from "~/components/meta";
import { PageTitle } from "~/components/page-title";
import { SearchBox } from "~/components/search-box";
import { VideoCard } from "~/components/video-card";
import { freeCoursesQuery } from "~/gql/queries";
import { MainLayout } from "~/layouts";
import { createApolloClient } from "~/lib/apollo-client";

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

  const publicVideos = freeCourses.filter(
    (course: any) => course.state === "publish"
  );

  return (
    <MainLayout>
      <Meta title="Cursos gratis" />
      <Box textAlign="center" maxW="full" w="3xl" mx="auto">
        <PageTitle
          title="Cursos de programación gratuitos"
          spanText={`${publicVideos.length}`}
        />
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
      <SearchBox
        label="Buscar curso por tecnologia..."
        data={data.freeCourses}
        itemFieldFilterName="courseName"
        itemFieldId="courseId"
        itemFieldHost="courseHost"
        itemFieldName="courseName"
      />
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
              course.state === "publish" && (
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

export default FreeCourses;
