import { HiSearch } from "react-icons/hi";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

export interface SearchBoxInputProps {
  // eslint-disable-next-line unused-imports/no-unused-vars
  handleChange: (value: string) => void;
  handleBlur: () => void;
  value: string;
  placeholder: string;
  hasSuggestions: boolean;
}

export function SearchBoxInput(props: SearchBoxInputProps) {
  const { handleBlur, handleChange, value, placeholder, hasSuggestions } =
    props;

  return (
    <InputGroup
      mx="auto"
      w="full"
      bgColor="white"
      rounded="lg"
      border="2px"
      borderColor="gray.200"
      overflow="hidden"
      // ---
      borderBottomColor={hasSuggestions ? "transparent" : undefined}
      borderBottomRadius={hasSuggestions ? "0" : undefined}
      _dark={{
        borderColor: "gray.600",
        bgColor: "gray.700",
        borderBottomColor: hasSuggestions ? "transparent" : undefined,
      }}
    >
      <InputLeftElement
        pointerEvents="none"
        children={<HiSearch size="20" color="#A0AEC0" />}
      />
      <Input
        type="search"
        variant="unstyled"
        placeholder={placeholder}
        py="2"
        pr="2"
        border="none"
        onChange={(e) => handleChange(e.target.value)}
        value={value}
        onBlur={handleBlur}
      />
    </InputGroup>
  );
}
