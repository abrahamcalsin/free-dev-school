import * as React from "react";

import { Box, GridItem, Heading, Image, Link, Text } from "@chakra-ui/react";
import { BsImageAlt, BsTwitch, BsYoutube } from "react-icons/bs";
import DateFormat from "~/components/date-format";

interface VideoCardProps {
  channelName?: string;
  channelId?: string;
  videoName?: string;
  videoId?: string;
  src?: string;
  dateOfPublication?: string;
  videoHost?: string;
  publicationStatus?: string;
}

export function VideoCard(props: VideoCardProps) {
  const {
    channelName,
    channelId,
    videoName,
    videoId,
    src,
    dateOfPublication,
    videoHost,
    publicationStatus,
  } = props;

  return (
    <GridItem
      bg="white"
      position="relative"
      overflow="hidden"
      borderRadius="lg"
      border="2px"
      borderColor="gray.200"
      _dark={{
        bg: "gray.700",
        borderColor: "gray.600",
      }}
    >
      {publicationStatus === "recent" && (
        <Box
          position="absolute"
          display="flex"
          top="2"
          right="2"
          bg="blue.400"
          py="1"
          px="2"
          borderRadius="sm"
        >
          <Text
            textAlign="center"
            fontSize="xs"
            textColor="white"
            fontWeight="bold"
          >
            NUEVO
          </Text>
        </Box>
      )}
      <Box>
        {src ? (
          <Image
            objectFit="cover"
            w="full"
            h={{ base: "95", sm: "148" }}
            src={src}
            alt={videoName}
          />
        ) : (
          <Box
            w="full"
            h={{ base: "95", sm: "148" }}
            bg="gray.100"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="2"
            textColor="gray.400"
            textAlign="center"
          >
            <BsImageAlt size={38} />
          </Box>
        )}
      </Box>
      <Box p="3">
        <Box>
          <Link
            href={`${
              videoHost == "youtube"
                ? `https://www.youtube.com/channel/${channelId}`
                : `https://www.twitch.tv/${channelId}`
            }`}
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
            {videoHost === "youtube" && <BsYoutube color="#C53030" size={16} />}
            {videoHost === "twitch" && <BsTwitch color="#8b43f7" size={16} />}
            <Text noOfLines={1}>{channelName}</Text>
          </Link>
        </Box>
        <Box mt="2">
          <Link
            href={`${
              videoHost === "youtube"
                ? `https://www.youtube.com/watch?v=${videoId}`
                : `https://www.twitch.tv/videos/${videoId}`
            }`}
            isExternal
            display="block"
            mb="2"
          >
            <Heading
              as="h3"
              fontSize={{ base: "xs", sm: "md" }}
              lineHeight={{ base: "4", sm: "6" }}
              fontWeight="bold"
            >
              {videoName}
            </Heading>
          </Link>
          {dateOfPublication && <DateFormat videoDate={dateOfPublication} />}
        </Box>
      </Box>
    </GridItem>
  );
}
