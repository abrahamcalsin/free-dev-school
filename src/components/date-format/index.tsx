import * as React from "react";
import { Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import en from "dayjs/locale/en";

import { dateFormat } from "~/utils";

interface DateFormatProps {
  videoDate?: string;
}

export default function DateFormat(props: DateFormatProps) {
  const { videoDate = new Date() } = props;

  const date = dayjs(videoDate).locale(en).format(dateFormat.video);

  return (
    <Text
      as="span"
      display="inline-block"
      fontSize={{ base: "x-small", sm: "xs" }}
      fontWeight="semibold"
      textColor="gray.400"
    >
      {date}
    </Text>
  );
}
