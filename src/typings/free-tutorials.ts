export interface FreeTutorialResponsePayload {
  id: string;
  tutorName: string;
  tutorChannelId: string;
  videoId: string;
  videoName: string;
  videoHost: string;
  stacks: string[];
  dateOfPublication: string;
  state: string;
  linkVideoThumbnail: string;
}

export interface FreeTutorialsQueryResponsePayload {
  freeTutorials: FreeTutorialResponsePayload[];
}
