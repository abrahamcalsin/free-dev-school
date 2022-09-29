import { Badge, GridItem } from "@chakra-ui/react";

import { CardCover } from "./components/card-cover";
import { Content, ContentProps } from "./components/content";

interface VideoCardProps extends ContentProps {
  publicationStatus?: string;
  src: string;
}

export function VideoCard(props: VideoCardProps) {
  const {
    channelName,
    channelId,
    videoName,
    videoId,
    videoHost,
    dateOfPublication,
    icon,
    publicationStatus,
    src,
  } = props;

  return (
    <GridItem
      bg="white"
      position="relative"
      overflow="hidden"
      borderRadius="lg"
      border="2px"
      borderColor="gray.200"
      transition=".3s"
      _dark={{
        bg: "gray.700",
        borderColor: "gray.600",
      }}
      _hover={{
        textDecor: "none",
        opacity: ".8",
        transform: "scale(1.04)",
      }}
    >
      {publicationStatus === "recent" && (
        <Badge
          variant="solid"
          colorScheme="blue"
          position="absolute"
          display="flex"
          top="2"
          right="2"
          py="1"
          px="2"
          borderRadius="sm"
        >
          Nuevo
        </Badge>
      )}
      <CardCover videoName={videoName} src={src} />
      <Content
        channelName={channelName}
        channelId={channelId}
        videoName={videoName}
        videoId={videoId}
        videoHost={videoHost}
        dateOfPublication={dateOfPublication}
        icon={icon}
      />
    </GridItem>
  );
}
