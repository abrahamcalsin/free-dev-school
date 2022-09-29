export interface MoreFreeResourceResponsePayload {
  id: string;
  websiteName: string;
  description: string;
  technologies: string[];
  language: string;
  websiteUrl: string;
  resourceType: string;
  state: string;
}

export interface MoreFreeResourcesQueryResponsePayload {
  moreFreeResources: MoreFreeResourceResponsePayload[];
}
