import { ProfileType } from 'shared/api/profile';

type MessageType = {
  id: number;
  message: string;
  likeCount: number;
};

export type ProfileStateType = {
  posts: MessageType[];
  profile: ProfileType | null;
  status: string;
};
