import { gql } from "@apollo/client";

const moreFreeResourcesQuery = gql`
  query MoreFreeResources {
    moreFreeResources {
      id
      websiteName
      description
      technologies
      # language
      websiteUrl
      resourceType
      state
    }
  }
`;

export default moreFreeResourcesQuery;
