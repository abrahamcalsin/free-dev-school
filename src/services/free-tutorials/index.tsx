import freeTutorials from "~/assets/data/free-tutorials.json";
import { FreeTutorialResponsePayload } from "~/typings";

const getFreeTutorials = () => {
  const allTutorials =
    freeTutorials as unknown as FreeTutorialResponsePayload[];

  const publishedTutorials = allTutorials.filter(
    (tutorial) => tutorial.state === "publish"
  );

  return publishedTutorials;
};

export { getFreeTutorials };
