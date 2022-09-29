import { useQuery } from "@apollo/client";
import { Grid } from "@chakra-ui/react";

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

  return (
    <Grid
      templateColumns={{ base: "repeat(2, 1fr)", sm: "repeat(4, 1fr)" }}
      alignItems="start"
      gap={{ base: "3", sm: "4" }}
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
    </Grid>
  );
}
