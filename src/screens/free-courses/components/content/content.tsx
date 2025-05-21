import Masonry from "react-masonry-css";

import { SocialMediaIcon } from "~/components/social-media-icon";
import { VideoCard } from "~/components/video-card";
import { FreeCourseResponsePayload } from "~/typings";

interface ContentProps {
  data: FreeCourseResponsePayload[];
}

export function Content({ data }: ContentProps) {
  const freeCourses = data ?? [];

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
            channelName={freeCourse.tutor_name}
            videoName={freeCourse.course_name}
            videoId={freeCourse.course_id}
            src={freeCourse.link_course_thumbnail}
            videoHost={freeCourse.course_host}
            channelId={freeCourse.tutor_channel_id}
            dateOfPublication={freeCourse.date_of_publication}
            publicationStatus={freeCourse.publication_status}
            icon={<SocialMediaIcon type={freeCourse.course_host} />}
          />
        );
      })}
    </Masonry>
  );
}
