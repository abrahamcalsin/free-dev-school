import Masonry from "react-masonry-css";
import { useQuery } from "@apollo/client";

import { SocialMediaIcon } from "~/components/social-media-icon";
import { VideoCard } from "~/components/video-card";
import { freeCoursesQuery } from "~/gql/queries";
import { FreeCoursesQueryResponsePayload } from "~/typings";

export function Content() {
  const { data } = useQuery<FreeCoursesQueryResponsePayload>(freeCoursesQuery, {
    fetchPolicy: "cache-only",
  });

  const freeCourses = data?.freeCourses ?? [];

  const breakpointColumns = {
    default: 4,
    1100: 3,
    700: 2,
    500: 2,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumns}
      className="card-grid"
      columnClassName="card-grid_column"
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
    </Masonry>
  );
}
