import { useSearch } from "~/hooks/useSearch";

import { SearchBoxContainer } from "./search-box-container";
import { SearchBoxInput } from "./search-box-input";
import { SearchBoxResults, SearchBoxResultsProps } from "./search-box-results";

export interface SearchBoxProps<T> {
  data: T[];
  placeholder: string;
  // eslint-disable-next-line unused-imports/no-unused-vars
  filter: keyof T | ((term: string, item: T) => boolean);
  renderResultItem: SearchBoxResultsProps<T>["renderResultItem"];
}

export function SearchBox<T extends Record<string, any>>(
  props: SearchBoxProps<T>
) {
  const { placeholder, data, filter, renderResultItem } = props;

  const {
    searchTerm,
    searchSuggestions,
    handleSearch,
    handleClearSuggestions,
  } = useSearch({
    data,
    filter,
    sortField: "dateOfPublication",
  });

  return (
    <SearchBoxContainer>
      <SearchBoxInput
        placeholder={placeholder}
        value={searchTerm}
        handleBlur={() => setTimeout(() => handleClearSuggestions(), 200)}
        handleChange={handleSearch}
        hasSuggestions={searchSuggestions.length > 0}
      />
      <SearchBoxResults
        data={searchSuggestions}
        renderResultItem={renderResultItem}
      />
    </SearchBoxContainer>
  );
}
