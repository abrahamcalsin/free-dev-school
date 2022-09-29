import { useQuery } from "@apollo/client";
import { Box } from "@chakra-ui/react";

import { DateFormat } from "~/components/date-format";
import { SearchBox, SearchBoxResultItem } from "~/components/search-box";
import { SocialMediaIcon } from "~/components/social-media-icon";
import { freeCoursesQuery } from "~/gql/queries";
import { FreeCoursesQueryResponsePayload } from "~/typings";

export function FreeCoursesSearchBox() {
  const { data } = useQuery<FreeCoursesQueryResponsePayload>(freeCoursesQuery, {
    fetchPolicy: "cache-only",
  });

  const freeCourses = data?.freeCourses ?? [];

  return (
    <Box my={{ base: "8", sm: "14" }}>
      <SearchBox
        data={freeCourses}
        filter="courseName"
        placeholder="Buscar curso por tecnologia..."
        renderResultItem={(freeCourse) => {
          const href =
            freeCourse.courseHost === "youtube"
              ? `https://www.youtube.com/watch?v=${freeCourse.courseId}`
              : `https://www.twitch.tv/videos/${freeCourse.courseId}`;

          const description = (
            <>
              {freeCourse.tutorName} |{" "}
              <DateFormat date={freeCourse.dateOfPublication} />
            </>
          );

          return (
            <SearchBoxResultItem
              key={freeCourse.id}
              href={href}
              label={freeCourse.courseName}
              description={description}
              icon={<SocialMediaIcon type={freeCourse.courseHost} />}
            />
          );
        }}
      />
    </Box>
  );
}
