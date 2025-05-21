import freeCourses from "~/assets/data/free-courses.json";
import { FreeCourseResponsePayload } from "~/typings";

const getFreeCourses = () => {
  const allCourses = freeCourses as unknown as FreeCourseResponsePayload[];

  const publishedCourses = allCourses.filter(
    (course) => course.state === "publish"
  );

  return publishedCourses;
};

export { getFreeCourses };
