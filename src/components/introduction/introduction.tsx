import { Box, Link, Text } from "@chakra-ui/react";

import { PageTitle } from "~/components/page-title";

export interface IntroductionProps {
  title: string;
  titleCount: number;
  description: string;
  formId?: string;
  formLabel?: string;
}

export function Introduction(props: IntroductionProps) {
  const { title, description, titleCount, formId, formLabel } = props;

  return (
    <Box
      textAlign="center"
      maxW="full"
      w="4xl"
      mx="auto"
      mb={{ base: "9", sm: "16" }}
    >
      <PageTitle title={title} spanText={String(titleCount)} />
      <Text
        textColor="gray.500"
        fontWeight="medium"
        fontSize={{
          base: "md",
          sm: "xl",
        }}
        lineHeight={{
          base: "auto",
          sm: "10",
        }}
        _dark={{
          textColor: "gray.400",
        }}
      >
        {description}
        {formId && (
          <Link
            href={`https://tally.so/r/${formId}`}
            textColor="blue.400"
            fontStyle="italic"
            textDecoration="underline"
            fontWeight="bold"
            ml="1.5"
            isExternal={true}
          >
            {formLabel}
          </Link>
        )}
      </Text>
    </Box>
  );
}
