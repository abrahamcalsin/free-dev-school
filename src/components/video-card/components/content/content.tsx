import * as React from "react";
import { Box, Heading, Link, Text } from "@chakra-ui/react";

import { DateFormat } from "~/components/date-format";

export interface ContentProps {
  channelName: string;
  channelId: string;
  videoName: string;
  videoId: string;
  dateOfPublication: string;
  videoHost: string;
  icon: string | React.ReactElement;
}

export function Content(props: ContentProps) {
  const {
    channelName,
    channelId,
    videoName,
    videoId,
    dateOfPublication,
    videoHost,
    icon,
  } = props;

  const hrefToChannel = `${
    videoHost === "twitch"
      ? `https://www.twitch.tv/${channelId}`
      : `https://www.youtube.com/channel/${channelId}`
  }`;

  const hrefToVideo = `${
    videoHost === "youtube"
      ? `https://www.youtube.com/watch?v=${videoId}`
      : `https://www.twitch.tv/videos/${videoId}`
  }`;

  return (
    <Box p="3">
      <Box>
        <Link
          href={hrefToChannel}
          display="flex"
          alignItems="center"
          gap="1.5"
          fontSize={{ base: "xs", sm: "sm" }}
          fontWeight="semibold"
          textColor="gray.500"
          isExternal
          _dark={{
            textColor: "gray.400",
          }}
        >
          {icon}
          <Text noOfLines={1}>{channelName}</Text>
        </Link>
      </Box>
      <Box mt="2">
        <Link href={hrefToVideo} isExternal display="block" mb="2">
          <Heading
            as="h3"
            fontSize={{ base: "xs", sm: "md" }}
            lineHeight={{ base: "4", sm: "6" }}
            fontWeight="bold"
          >
            {videoName}
          </Heading>
        </Link>
        {dateOfPublication && <DateFormat date={dateOfPublication} />}
      </Box>
    </Box>
  );
}
