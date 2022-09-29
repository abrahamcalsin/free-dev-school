import { Box, Heading, Link, Text } from "@chakra-ui/react";

export interface InfoCardProps {
  title: string;
  description: string;
  type: string;
  language: string;
  href: string;
}

export function InfoCard(props: InfoCardProps) {
  const { title, description, type, language, href } = props;

  return (
    <Box>
      <Link
        href={href}
        bg="white"
        px="4"
        py="3"
        border="2px"
        borderColor="gray.200"
        borderRadius="lg"
        isExternal={true}
        transition=".3s"
        display="block"
        _hover={{
          textDecor: "none",
          opacity: ".8",
          transform: "scale(1.04)",
        }}
        _dark={{
          bg: "gray.700",
          borderColor: "gray.600",
        }}
      >
        <Heading
          as="h3"
          fontSize={{ base: "xs", sm: "md" }}
          lineHeight={{ base: "4", sm: "6" }}
          fontWeight="bold"
        >
          {title}{" "}
          <Box display="inline-flex" columnGap="1" flexWrap="wrap">
            <Text
              as="span"
              bg="yellow.100"
              textColor="yellow.500"
              fontSize="xs"
              px="2"
              border="1px"
              rounded="full"
              borderColor="transparent"
              _dark={{
                bg: "transparent",
                borderColor: "yellow.500",
              }}
            >
              {type}
            </Text>
            <>
              {(language as unknown as any[]).map(
                (language: string, index: number) =>
                  language === "en" ? (
                    <Text
                      key={index}
                      as="span"
                      bg="pink.100"
                      textColor="pink.500"
                      fontSize="xs"
                      px="2"
                      border="1px"
                      rounded="full"
                      borderColor="transparent"
                      _dark={{
                        bg: "transparent",
                        borderColor: "pink.500",
                      }}
                    >
                      {language}
                    </Text>
                  ) : (
                    <Text
                      key={index}
                      as="span"
                      bg="blue.100"
                      textColor="blue.500"
                      fontSize="xs"
                      px="2"
                      border="1px"
                      rounded="full"
                      borderColor="transparent"
                      _dark={{
                        bg: "transparent",
                        borderColor: "blue.500",
                      }}
                    >
                      {language}
                    </Text>
                  )
              )}
            </>
          </Box>
        </Heading>
        <Text
          mt="3"
          fontSize={{ base: "xs", sm: "sm" }}
          lineHeight={{ base: "1.5", sm: "1.7" }}
          textColor="gray.500"
          fontWeight="semibold"
          _dark={{
            textColor: "gray.400",
          }}
        >
          {description}
        </Text>
      </Link>
    </Box>
  );
}
