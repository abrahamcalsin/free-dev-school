/* eslint-disable @next/next/no-img-element, react/no-children-prop */
import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";

export interface SearchBoxResultItemProps {
  icon: React.ReactElement;
  href: string;
  label: string;
  description: React.ReactElement;
}

export function SearchBoxResultItem(props: SearchBoxResultItemProps) {
  const { description, icon, label, href } = props;

  return (
    <Link
      href={href}
      px="3"
      display="block"
      isExternal={true}
      py={{ base: "2", sm: "3" }}
      _hover={{
        bg: "gray.100",
      }}
      _dark={{
        _hover: {
          bg: "gray.600",
        },
      }}
    >
      <Flex gap="4" alignItems="center">
        {icon}
        <Box>
          <Heading as="h2" mb="1" fontSize={{ base: "sm", sm: "md" }}>
            {label}
          </Heading>
          <Text
            fontSize={{ base: "x-small", sm: "xs" }}
            fontWeight="semibold"
            textColor="gray.400"
          >
            {description}
          </Text>
        </Box>
      </Flex>
    </Link>
  );
}
