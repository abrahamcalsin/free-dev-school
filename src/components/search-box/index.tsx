import * as React from "react";
import { Box, Button, Input } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

interface SearchBoxProps {
  label: string;
}

export function SearchBox(props: SearchBoxProps) {
  const { label } = props;

  return (
    <Box
      display="flex"
      gap="2"
      maxW="full"
      w="3xl"
      mx="auto"
      my={{ base: "9", sm: "16" }}
    >
      <Input
        type="text"
        placeholder={label}
        bgColor="white"
        variant="outline"
        _dark={{
          bgColor: "gray.700",
        }}
      />
      <Button colorScheme="blue">
        <FaSearch size="20" />
      </Button>
    </Box>
  );
}
