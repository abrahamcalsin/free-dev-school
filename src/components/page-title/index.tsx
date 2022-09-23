import { Heading, Text } from "@chakra-ui/react";

export interface TitleSectionProps {
  title?: string;
  spanText?: string;
}

export function TitleSection(props: TitleSectionProps) {
  const { title, spanText } = props;

  return (
    <Heading
      as="h1"
      fontSize={{ base: "2xl", sm: "4xl" }}
      mb={{ base: "3", sm: "4" }}
      fontWeight="extrabold"
      lineHeight={{ base: "auto", sm: "xl" }}
    >
      <Text as="span" bgGradient="linear(to-l, #4299E1, #39BBE4)" bgClip="text">
        {spanText}
      </Text>{" "}
      {title}
    </Heading>
  );
}
