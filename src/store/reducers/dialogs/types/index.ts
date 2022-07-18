type User = {
  id: number;
  name: string;
};
type Message = {
  id: number;
  message: string;
};

export type DialogsStateType = {
  users: User[];
  messages: Message[];
  message: string;
};
