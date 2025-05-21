export interface FreeCourseResponsePayload {
  id: string | number;
  tutor_name: string;
  course_name: string;
  description: string;
  course_id: string;
  link_course_thumbnail: string;
  course_host: string;
  tutor_channel_id: string;
  stacks: string[];
  date_of_publication: string;
  publication_status: string;
  state: string;
}

export interface FreeCoursesQueryResponsePayload {
  freeCourses: FreeCourseResponsePayload[];
}
