import moreFreeResources from "~/assets/data/more-free-resources.json";
import { MoreFreeResourceResponsePayload } from "~/typings";

const getMoreFreeResources = () => {
  const allResources =
    moreFreeResources as unknown as MoreFreeResourceResponsePayload[];

  const publishedResources = allResources.filter(
    (resource) => resource.state === "publish"
  );

  return publishedResources;
};

export { getMoreFreeResources };
