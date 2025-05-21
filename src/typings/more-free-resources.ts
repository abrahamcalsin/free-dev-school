export interface MoreFreeResourceResponsePayload {
  id: number;
  website_name: string;
  description: string;
  website_url: string;
  technologies: string[];
  resource_type: string;
  language: string;
  state: string;
  stacks: string[];
}

export interface MoreFreeResourcesQueryResponsePayload {
  moreFreeResources: MoreFreeResourceResponsePayload[];
}
