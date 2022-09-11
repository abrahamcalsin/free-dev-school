import * as React from "react";

import { Box, Link, Text } from "@chakra-ui/react";

export function Footer() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      mt={{ base: "6", sm: "14" }}
      py="7"
      bg="white"
      textColor="gray.500"
      fontSize={{ base: "sm", sm: "md" }}
      borderTop="1px"
      borderColor="gray.300"
      _dark={{
        bg: "gray.700",
        textColor: "gray.400",
        borderColor: "gray.500",
      }}
    >
      <Text mr="1">{"{"}Developed by</Text>
      <Link
        href="https://abrahamcalsin.com/"
        fontStyle="italic"
        fontWeight="bold"
        isExternal
      >
        Abraham Calsin
        {"}"}
      </Link>
    </Box>
  );
}
