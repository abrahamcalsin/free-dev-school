export interface FreeTutorialResponsePayload {
  id: number;
  tutor_name: string;
  tutor_channel_id: string;
  video_id: string;
  video_name: string;
  description: string;
  date_of_publication: string;
  link_video_thumbnail: string;
  video_host: string;
  stacks: string[];
  state: string;
}

export interface FreeTutorialsQueryResponsePayload {
  freeTutorials: FreeTutorialResponsePayload[];
}
