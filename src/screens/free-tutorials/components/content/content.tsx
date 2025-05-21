import Masonry from "react-masonry-css";

import { SocialMediaIcon } from "~/components/social-media-icon";
import { VideoCard } from "~/components/video-card";
import { FreeTutorialResponsePayload } from "~/typings/free-tutorials";

interface ContentProps {
  data: FreeTutorialResponsePayload[];
}

export function Content({ data }: ContentProps) {
  const freeTutorials = data ?? [];

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
      {freeTutorials.map((freeTutorial) => {
        return (
          <VideoCard
            key={freeTutorial.id}
            channelName={freeTutorial.tutor_name}
            videoName={freeTutorial.video_name}
            videoId={freeTutorial.video_id}
            src={freeTutorial.link_video_thumbnail}
            videoHost={freeTutorial.video_host}
            channelId={freeTutorial.tutor_channel_id}
            dateOfPublication={freeTutorial.date_of_publication}
            icon={<SocialMediaIcon type={freeTutorial.video_host} />}
          />
        );
      })}
    </Masonry>
  );
}
