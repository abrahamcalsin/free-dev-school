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
import { useQuery } from "@apollo/client";
import cloneDeep from "lodash.clonedeep";
import { MainLayout } from "~/layouts";
import { VideoCard } from "~/components/video-card";
import { freeTutorialsQuery } from "~/gql/queries";
import { createApolloClient } from "~/lib/apollo-client";
import { SearchBox } from "~/components/search-box";
import Meta from "~/components/meta";
import { PageTitle } from "~/components/page-title";

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

  const publicVideos = freeTutorials.filter(
    (tutorial: any) => tutorial.state === "publish"
  );

  return (
    <MainLayout>
      <Meta title="Tutoriales gratis" />
      <Box
        textAlign="center"
        maxW="full"
        w="4xl"
        mx="auto"
        mb={{ base: "9", sm: "16" }}
      >
        <PageTitle
          title="Tutoriales de programación gratuitos"
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
          En esta sección encontrarás una selección de un gran número de
          tutoriales de programación gratuitos.
        </Text>
      </Box>
      <SearchBox
        label="Buscar tutorial por tecnologia..."
        data={data.freeTutorials}
        itemFieldFilterName="videoName"
        itemFieldId="videoId"
        itemFieldHost="videoHost"
        itemFieldName="videoName"
      />
      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", sm: "repeat(4, 1fr)" }}
        alignItems="start"
        gap={{ base: "3", sm: "4" }}
      >
        {freeTutorials
          .sort(
            (video1: any, video2: any) =>
              new Date(video2.dateOfPublication).getTime() -
              new Date(video1.dateOfPublication).getTime()
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
                  dateOfPublication={video.dateOfPublication}
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
    query: freeTutorialsQuery,
  });

  return {
    props: {
      apolloClientState: client.cache.extract(),
    },
  };
}

export default FreeTutorials;
