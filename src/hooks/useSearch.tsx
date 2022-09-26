import * as React from "react";

interface UseSearchOptions<T> {
  data: T[];
  // eslint-disable-next-line unused-imports/no-unused-vars
  filter: keyof T | ((term: string, item: T) => boolean);
  sortField: keyof T;
}

export function useSearch<T>(options: UseSearchOptions<T>) {
  const { data, filter, sortField } = options;

  const [searchTerm, setSearchTerm] = React.useState<string>("");

  const [searchSuggestions, setSearchSuggestions] = React.useState<T[]>([]);

  const handleSearch = (value: string) => {
    const isEmpty = value.length <= 0;

    if (isEmpty) {
      setSearchSuggestions([]);

      setSearchTerm(value);

      return;
    }

    const filteredData = [...data].filter((item) => {
      if (typeof filter === "function") {
        return filter(value, item);
      }

      const valueToFilter = item[filter] as unknown as string;

      const regex = new RegExp(value, "gi");

      return valueToFilter.match(regex);
    });

    const sortedData = filteredData.sort((firstItem, secondItem) => {
      const firstValueToSort = firstItem[sortField] as unknown as string;

      const secondValueToSort = secondItem[sortField] as unknown as string;

      const sortedIndex =
        new Date(firstValueToSort).getTime() -
        new Date(secondValueToSort).getTime();

      return sortedIndex;
    });

    setSearchSuggestions(sortedData);

    setSearchTerm(value);
  };

  const handleClearSuggestions = () => {
    setSearchSuggestions([]);
  };

  return {
    searchTerm,
    searchSuggestions,
    handleSearch,
    handleClearSuggestions,
  };
}
