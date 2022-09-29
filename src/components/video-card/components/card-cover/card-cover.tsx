import { BsImageAlt } from "react-icons/bs";
import { Box, Image } from "@chakra-ui/react";

interface CardCoverProps {
  videoName: string;
  src: string;
}

export function CardCover(props: CardCoverProps) {
  const { videoName, src } = props;

  return (
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
  );
}
