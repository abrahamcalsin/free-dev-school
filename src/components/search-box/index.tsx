/* eslint-disable react/no-children-prop */
/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import { useQuery } from "@apollo/client";
import { HiSearch } from "react-icons/hi";
import { BsTwitch, BsYoutube } from "react-icons/bs";
import {
  Box,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Text,
} from "@chakra-ui/react";
import { freeCoursesQuery } from "~/gql/queries";
import DateFormat from "../date-format";

interface SearchBoxProps {
  label: string;
}

export function SearchBox(props: SearchBoxProps) {
  const { label } = props;

  const { loading, data, error } = useQuery(freeCoursesQuery);

  const [text, setText] = React.useState<string>("");
  const [suggestions, setSuggestions] = React.useState<string[]>([]);

  const onChangeHandler = (text: any) => {
    let matches = [];

    if (text.length > 0) {
      matches = data.freeCourses.filter((course: any) => {
        const regex = new RegExp(`${text}`, "gi");
        return course.courseName.match(regex);
      });
    }

    setSuggestions(matches);
    setText(text);
  };

  const Suggestions = () => {
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
      >
        {suggestions.map(
          (suggestion: any) =>
            suggestion.state === "publish" && (
              <Link
                key={suggestion.id}
                href={`${
                  suggestion.courseHost === "youtube"
                    ? `https://www.youtube.com/watch?v=${suggestion.courseId}`
                    : `https://www.twitch.tv/videos/${suggestion.courseId}`
                }`}
                px="3"
                py={{ base: "2", sm: "3" }}
                display="block"
                _hover={{
                  bg: "gray.100",
                }}
                _dark={{
                  _hover: {
                    bg: "gray.600",
                  },
                }}
                isExternal
              >
                <Flex gap="4" alignItems="center">
                  <>
                    {suggestion.courseHost === "youtube" && (
                      <BsYoutube color="#C53030" size={20} />
                    )}
                    {suggestion.courseHost === "twitch" && (
                      <BsTwitch color="#8b43f7" size={20} />
                    )}
                  </>
                  <Box>
                    <Heading as="h2" mb="1" fontSize={{ base: "sm", sm: "md" }}>
                      {suggestion.courseName}
                    </Heading>
                    <Text
                      fontSize={{ base: "x-small", sm: "xs" }}
                      fontWeight="semibold"
                      textColor="gray.400"
                    >
                      {suggestion.tutorName} |{" "}
                      <DateFormat videoDate={suggestion.yearOfPublication} />
                    </Text>
                  </Box>
                </Flex>
              </Link>
            )
        )}
      </Box>
    );
  };

  return (
    <Box
      position="relative"
      maxW="full"
      w="3xl"
      mx="auto"
      h={{ base: "20", sm: "28" }}
      mt={{ base: "8", sm: "14" }}
      zIndex="2"
    >
      <Box
        position="absolute"
        mx="auto"
        w="full"
        bgColor="white"
        rounded="lg"
        border="2px"
        borderColor="gray.200"
        overflow="hidden"
        _dark={{
          borderColor: "gray.600",
          bgColor: "gray.700",
        }}
      >
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={
              <HiSearch
                size="20"
                color="#A0AEC0
            "
              />
            }
          />
          <Input
            type="search"
            variant="unstyled"
            placeholder={label}
            py="2"
            pr="2"
            border="none"
            onChange={(e) => onChangeHandler(e.target.value)}
            value={text}
            onBlur={() => setTimeout(() => setSuggestions([]), 100)}
          />
        </InputGroup>
        {suggestions && <Suggestions />}
      </Box>
    </Box>
  );
}
