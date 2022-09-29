import { useQuery } from "@apollo/client";
import { Box } from "@chakra-ui/react";

import { DateFormat } from "~/components/date-format";
import { SearchBox, SearchBoxResultItem } from "~/components/search-box";
import { SocialMediaIcon } from "~/components/social-media-icon";
import { freeTutorialsQuery } from "~/gql/queries";
import { FreeTutorialsQueryResponsePayload } from "~/typings";

export function FreeTutorialsSearchBox() {
  const { data } = useQuery<FreeTutorialsQueryResponsePayload>(
    freeTutorialsQuery,
    { fetchPolicy: "cache-only" }
  );

  const freeTutorials = data?.freeTutorials ?? [];

  return (
    <Box my={{ base: "8", sm: "14" }}>
      <SearchBox
        data={freeTutorials}
        filter="videoName"
        placeholder="Buscar tutorial por tecnologia..."
        renderResultItem={(freeTutorial) => {
          const href =
            freeTutorial.videoHost === "youtube"
              ? `https://www.youtube.com/watch?v=${freeTutorial.videoId}`
              : `https://www.twitch.tv/videos/${freeTutorial.videoId}`;

          const description = (
            <>
              {freeTutorial.tutorName} |{" "}
              <DateFormat date={freeTutorial.dateOfPublication} />
            </>
          );

          return (
            <SearchBoxResultItem
              key={freeTutorial.id}
              href={href}
              label={freeTutorial.videoName}
              description={description}
              icon={<SocialMediaIcon type={freeTutorial.videoHost} />}
            />
          );
        }}
      />
    </Box>
  );
}
