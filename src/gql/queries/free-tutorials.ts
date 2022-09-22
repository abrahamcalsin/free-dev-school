import { gql } from "@apollo/client";

const freeTutorialsQuery = gql`
  query FreeTutorials {
    freeTutorials {
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
