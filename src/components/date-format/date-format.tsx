import "dayjs/locale/en";
import "dayjs/locale/es";

import * as React from "react";
import { Text } from "@chakra-ui/react";
import dayjs from "dayjs";

import { dateFormat } from "~/utils";

export interface DateFormatProps {
  date: Parameters<typeof dayjs>["0"];
  locale: "en" | "es";
}

export function DateFormat(props: DateFormatProps) {
  const { date, locale } = props;

  const formattedDate = dayjs(date).locale(locale).format(dateFormat.USA);

  return (
    <Text
      as="span"
      display="inline-block"
      fontSize={{ base: "x-small", sm: "xs" }}
      fontWeight="semibold"
      textColor="gray.400"
    >
      {formattedDate}
    </Text>
  );
}

DateFormat.defaultProps = {
  locale: "en",
};
