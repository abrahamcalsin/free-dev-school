import { useQuery } from "@apollo/client";
import { Grid } from "@chakra-ui/react";

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
    <Grid
      templateColumns={{ base: "repeat(2, 1fr)", sm: "repeat(4, 1fr)" }}
      alignItems="start"
      gap={{ base: "3", sm: "4" }}
    >
      {freeCourses.map((freeCourse) => {
        return (
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
            icon={<SocialMediaIcon type={freeCourse.courseHost} />}
          />
        );
      })}
    </Grid>
  );
}
