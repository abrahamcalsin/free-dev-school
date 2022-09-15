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
import { VideoCard } from "~/components/video-card";
import { freeTutorialsQuery } from "~/gql/queries";

const FreeTutorials = () => {
  const { loading, data, error } = useQuery(freeTutorialsQuery);

  if (loading)
    return (
      <MainLayout>
        <Spinner size="lg" />
      </MainLayout>
    );

  if (error)
    return (
      <MainLayout>
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>{error.message}</AlertTitle>
        </Alert>
      </MainLayout>
    );

  const freeTutorials = cloneDeep(data.freeTutorials);

  return (
    <MainLayout>
      <Box
        textAlign="center"
        maxW="full"
        w="3xl"
        mx="auto"
        mb={{ base: "9", sm: "16" }}
      >
        <Heading
          as="h1"
          fontSize={{ base: "2xl", sm: "4xl" }}
          mb={{ base: "3", sm: "4" }}
          fontWeight="extrabold"
        >
          Tutoriales de programación gratuitos
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
          En esta sección encontrarás una selección de un gran número de
          tutoriales de programación gratuitos.
        </Text>
      </Box>
      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", sm: "repeat(4, 1fr)" }}
        alignItems="start"
        gap={{ base: "3", sm: "4" }}
      >
        {freeTutorials
          .sort(
            (video1: any, video2: any) =>
              new Date(video2.yearOfPublication).getTime() -
              new Date(video1.yearOfPublication).getTime()
          )
          .map((video: any) => {
            return (
              video.state === "publish" && (
                <VideoCard
                  key={video.id}
                  channelName={video.tutorName}
                  videoName={video.videoName}
                  videoId={video.videoId}
                  src={video.linkVideoThumbnail}
                  videoHost={video.videoHost}
                  channelId={video.tutorChannelId}
                  dateOfPublication={video.yearOfPublication}
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
    query: freeTutorialsQuery,
  });

  return {
    props: {
      apolloClientState: client.cache.extract(),
    },
  };
}

export default FreeTutorials;
