import * as React from "react";

export function useSearch(data: Record<string, any>[], itemField: string) {
  const [text, setText] = React.useState<string>("");

  const [suggestions, setSuggestions] = React.useState<string[]>([]);

  const onChangeHandler = (text: string) => {
    let matches: any[] = [];

    if (text.length > 0) {
      matches = data
        .filter((item: any) => {
          const regex = new RegExp(`${text}`, "gi");
          return item[itemField].match(regex);
        })
        .sort(
          (item1: any, item2: any) =>
            new Date(item2.dateOfPublication).getTime() -
            new Date(item1.dateOfPublication).getTime()
        );
    }
    setSuggestions(matches);
    setText(text);
  };

  return { onChangeHandler, suggestions, setSuggestions, text };
}
