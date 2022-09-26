import { gql } from "@apollo/client";

const freeTutorialsQuery = gql`
  query FreeTutorials {
    freeTutorials(
      _order_by: { dateOfPublication: "desc" }
      _filter: { _and: [{ state: { _eq: "publish" } }] }
    ) {
      id
      tutorName
      videoId
      linkVideoThumbnail
      videoHost
      tutorChannelId
      videoName
      dateOfPublication
      state
    }
  }
`;

export default freeTutorialsQuery;
