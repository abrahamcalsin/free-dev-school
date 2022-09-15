import { gql } from "@apollo/client";

const freeCoursesQuery = gql`
  query FreeCourses {
    freeCourses {
      id
      tutorName
      courseName
      courseId
      linkCourseThumbnail
      courseHost
      tutorChannelId
      yearOfPublication
      publicationStatus
      state
    }
  }
`;

export default freeCoursesQuery;