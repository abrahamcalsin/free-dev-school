import * as React from "react";
import { Box } from "@chakra-ui/react";

export interface SearchBoxContainerProps {
  children: React.ReactNode;
}

export function SearchBoxContainer(props: SearchBoxContainerProps) {
  const { children } = props;
  return (
    <Box position="relative" maxW="full" w="3xl" mx="auto" zIndex="2">
      {children}
    </Box>
  );
}
