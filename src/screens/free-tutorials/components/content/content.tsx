import Masonry from "react-masonry-css";
import { useQuery } from "@apollo/client";

import { SocialMediaIcon } from "~/components/social-media-icon";
import { VideoCard } from "~/components/video-card";
import { freeTutorialsQuery } from "~/gql/queries";
import { FreeTutorialsQueryResponsePayload } from "~/typings/free-tutorials";

export function Content() {
  const { data } = useQuery<FreeTutorialsQueryResponsePayload>(
    freeTutorialsQuery,
    { fetchPolicy: "cache-only" }
  );

  const freeTutorials = data?.freeTutorials ?? [];

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
            channelName={freeTutorial.tutorName}
            videoName={freeTutorial.videoName}
            videoId={freeTutorial.videoId}
            src={freeTutorial.linkVideoThumbnail}
            videoHost={freeTutorial.videoHost}
            channelId={freeTutorial.tutorChannelId}
            dateOfPublication={freeTutorial.dateOfPublication}
            icon={<SocialMediaIcon type={freeTutorial.videoHost} />}
          />
        );
      })}
    </Masonry>
  );
}
