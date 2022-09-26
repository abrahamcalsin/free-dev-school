import { useQuery } from "@apollo/client";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Grid,
  Spinner,
} from "@chakra-ui/react";

import { DateFormat } from "~/components/date-format";
import { Introduction } from "~/components/introduction";
import Meta from "~/components/meta";
import { SearchBox, SearchBoxResultItem } from "~/components/search-box";
import { SocialMediaIcon } from "~/components/social-media-icon";
import { VideoCard } from "~/components/video-card";
import { freeCoursesQuery } from "~/gql/queries";
import { MainLayout } from "~/layouts";
import { FreeCourseQueryResponsePayload } from "~/typings/free-courses";

export function FreeCoursesScreen() {
  const { data, loading, error } =
    useQuery<FreeCourseQueryResponsePayload>(freeCoursesQuery);

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

  const freeCourses = data?.freeCourses ?? [];

  return (
    <MainLayout>
      <Meta title="Cursos gratis" />
      <Introduction
        title="Cursos de programación gratuitos"
        description="En esta sección encontrarás una selección de un gran número de los
      mejores cursos de programación gratuitos."
        titleCount={freeCourses.length}
      />
      <Box my={{ base: "8", sm: "14" }}>
        <SearchBox
          placeholder="Buscar curso por tecnologia..."
          data={freeCourses}
          filter="courseName"
          renderResultItem={(freeCourse) => {
            const href =
              freeCourse.courseHost === "youtube"
                ? `https://www.youtube.com/watch?v=${freeCourse.courseId}`
                : `https://www.twitch.tv/videos/${freeCourse.courseId}`;

            const description = (
              <>
                {freeCourse.tutorName} |{" "}
                <DateFormat date={freeCourse.dateOfPublication} />
              </>
            );

            return (
              <SearchBoxResultItem
                key={freeCourse.id}
                href={href}
                label={freeCourse.courseName}
                description={description}
                icon={<SocialMediaIcon type={freeCourse.courseHost} />}
              />
            );
          }}
        />
      </Box>
      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", sm: "repeat(4, 1fr)" }}
        alignItems="start"
        gap={{ base: "3", sm: "4" }}
      >
        {freeCourses.map((freeCourse) => {
          return (
            freeCourse.state === "publish" && (
              <VideoCard
                key={freeCourse.id}
                channelName={freeCourse.tutorName}
                videoName={freeCourse.courseName}
                videoId={freeCourse.courseId}
                src={freeCourse.linkCourseThumbnail}
                videoHost={freeCourse.courseHost}
                channelId={freeCourse.tutorChannelId}
                dateOfPublication={freeCourse.dateOfPublication}
                publicationStatus={freeCourse.publicationStatus}
              />
            )
          );
        })}
      </Grid>
    </MainLayout>
  );
}
