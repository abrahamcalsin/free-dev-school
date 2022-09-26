export interface FreeCourseResponsePayload {
  id: string;
  tutorName: string;
  courseName: string;
  courseId: string;
  linkCourseThumbnail: string;
  courseHost: string;
  tutorChannelId: string;
  dateOfPublication: string;
  publicationStatus: string;
  state: string;
}

export interface FreeCourseQueryResponsePayload {
  freeCourses: FreeCourseResponsePayload[];
}
