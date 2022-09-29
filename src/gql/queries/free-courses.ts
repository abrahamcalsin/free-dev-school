import { gql } from "@apollo/client";

const freeCoursesQuery = gql`
  query FreeCourses {
    freeCourses(
      _order_by: { dateOfPublication: "desc" }
      _filter: { _and: [{ state: { _eq: "publish" } }] }
    ) {
      id
      tutorName
      courseName
      courseId
      linkCourseThumbnail
      courseHost
      tutorChannelId
      dateOfPublication
      publicationStatus
      state
    }
  }
`;

export default freeCoursesQuery;
