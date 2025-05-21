import { Box } from "@chakra-ui/react";

import { DateFormat } from "~/components/date-format";
import { SearchBox, SearchBoxResultItem } from "~/components/search-box";
import { SocialMediaIcon } from "~/components/social-media-icon";
import { FreeTutorialResponsePayload } from "~/typings";

interface FreeTutorialsSearchBoxProps {
  data: FreeTutorialResponsePayload[];
}

export function FreeTutorialsSearchBox({ data }: FreeTutorialsSearchBoxProps) {
  const freeTutorials = data ?? [];

  return (
    <Box my={{ base: "8", sm: "14" }}>
      <SearchBox
        data={freeTutorials}
        filter="video_name"
        placeholder="Buscar tutorial por tecnologia..."
        renderResultItem={(freeTutorial) => {
          const href =
            freeTutorial.video_host === "youtube"
              ? `https://www.youtube.com/watch?v=${freeTutorial.video_id}`
              : `https://www.twitch.tv/videos/${freeTutorial.video_id}`;

          const description = (
            <>
              {freeTutorial.tutor_name} |{" "}
              <DateFormat date={freeTutorial.date_of_publication} />
            </>
          );

          return (
            <SearchBoxResultItem
              key={freeTutorial.id}
              href={href}
              label={freeTutorial.video_name}
              description={description}
              icon={<SocialMediaIcon type={freeTutorial.video_host} />}
            />
          );
        }}
      />
    </Box>
  );
}
