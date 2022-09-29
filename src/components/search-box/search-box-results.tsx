import * as React from "react";
import { Box } from "@chakra-ui/react";

export interface SearchBoxResultsProps<T> {
  data: T[];
  // eslint-disable-next-line unused-imports/no-unused-vars
  renderResultItem: (item: T, index: number) => React.ReactElement;
}

export function SearchBoxResults<T extends Record<string, any>>(
  props: SearchBoxResultsProps<T>
) {
  const { renderResultItem, data } = props;

  if (data.length <= 0) {
    return null;
  }

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
      width="100%"
      position="absolute"
      left="0"
      top="100%"
      bgColor="white"
      // ---
      border="2px"
      borderTop="0"
      borderColor="gray.200"
      rounded="lg"
      borderTopRadius="0"
      _dark={{ borderColor: "gray.600", bgColor: "gray.700" }}
    >
      {data.map((item, index) => renderResultItem(item, index))}
    </Box>
  );
}
