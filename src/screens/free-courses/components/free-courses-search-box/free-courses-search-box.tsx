import { Box } from "@chakra-ui/react";

import { DateFormat } from "~/components/date-format";
import { SearchBox, SearchBoxResultItem } from "~/components/search-box";
import { SocialMediaIcon } from "~/components/social-media-icon";
import { FreeCourseResponsePayload } from "~/typings";

interface FreeCoursesSearchBoxProps {
  data: FreeCourseResponsePayload[];
}

export function FreeCoursesSearchBox(props: FreeCoursesSearchBoxProps) {
  const { data } = props;

  const freeCourses = data ?? [];

  return (
    <Box my={{ base: "8", sm: "14" }}>
      <SearchBox
        data={freeCourses}
        filter="course_name"
        placeholder="Buscar curso por tecnologia..."
        renderResultItem={(freeCourse) => {
          const href =
            freeCourse.course_host === "youtube"
              ? `https://www.youtube.com/watch?v=${freeCourse.course_id}`
              : `https://www.twitch.tv/videos/${freeCourse.course_id}`;

          const description = (
            <>
              {freeCourse.tutor_name} |{" "}
              <DateFormat date={freeCourse.date_of_publication} />
            </>
          );

          return (
            <SearchBoxResultItem
              key={freeCourse.id}
              href={href}
              label={freeCourse.course_name}
              description={description}
              icon={<SocialMediaIcon type={freeCourse.course_host} />}
            />
          );
        }}
      />
    </Box>
  );
}
