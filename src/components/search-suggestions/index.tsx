import { Box } from "@chakra-ui/react";

export default function SearchSuggestions(props: any) {
  return (
    <Box
      maxH="lg"
      overflow="hidden"
      overflowY="auto"
      css={{
        "&::-webkit-scrollbar": {
          width: "4px",
        },
        "&::-webkit-scrollbar-track": {
          width: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#A0AEC0",
          borderRadius: "24px",
        },
      }}
      {...props}
    />
  );
}
