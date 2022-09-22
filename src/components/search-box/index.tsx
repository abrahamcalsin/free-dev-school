/* eslint-disable @next/next/no-img-element, react/no-children-prop */
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
import DateFormat from "~/components/date-format";
import { useSearch } from "~/hooks/useSearch";
import SearchSuggestions from "~/components/search-suggestions";

interface SearchBoxProps {
  label: string;
  data: Record<string, any>[];
  itemFieldFilterName: string;
  itemFieldId: string;
  itemFieldHost: string;
  itemFieldName: string;
}

export function SearchBox(props: SearchBoxProps) {
  const {
    label,
    data,
    itemFieldFilterName,
    itemFieldId,
    itemFieldHost,
    itemFieldName,
  } = props;

  const { onChangeHandler, suggestions, setSuggestions, text } = useSearch(
    data,
    itemFieldFilterName
  );

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
        {suggestions && (
          <SearchSuggestions>
            {suggestions.map(
              (suggestion: any) =>
                suggestion.state === "publish" && (
                  <Link
                    key={suggestion.id}
                    href={`${
                      suggestion[itemFieldHost] === "youtube"
                        ? `https://www.youtube.com/watch?v=${suggestion[itemFieldId]}`
                        : `https://www.twitch.tv/videos/${suggestion[itemFieldId]}`
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
                      {suggestion[itemFieldHost] === "youtube" && (
                        <BsYoutube color="#C53030" size={20} />
                      )}
                      {suggestion[itemFieldHost] === "twitch" && (
                        <BsTwitch color="#8b43f7" size={20} />
                      )}
                      <Box>
                        <Heading
                          as="h2"
                          mb="1"
                          fontSize={{ base: "sm", sm: "md" }}
                        >
                          {suggestion[itemFieldName]}
                        </Heading>
                        <Text
                          fontSize={{ base: "x-small", sm: "xs" }}
                          fontWeight="semibold"
                          textColor="gray.400"
                        >
                          {suggestion.tutorName} |{" "}
                          <DateFormat
                            videoDate={suggestion.dateOfPublication}
                          />
                        </Text>
                      </Box>
                    </Flex>
                  </Link>
                )
            )}
          </SearchSuggestions>
        )}
      </Box>
    </Box>
  );
}
