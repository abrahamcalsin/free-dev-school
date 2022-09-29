import { gql } from "@apollo/client";

const moreFreeResourcesQuery = gql`
  query MoreFreeResources {
    moreFreeResources(
      _order_by: { resourceType: "asc" }
      _filter: { _and: [{ state: { _eq: "publish" } }] }
    ) {
      id
      websiteName
      description
      technologies
      language
      websiteUrl
      resourceType
      state
    }
  }
`;

export default moreFreeResourcesQuery;
