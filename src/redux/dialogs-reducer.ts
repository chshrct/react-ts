enum DialogActionsTypes {
  UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY",
  SEND_MESSAGE = "SEND-MESSAGE",
}

type sendMessageAction = {
  type: DialogActionsTypes.SEND_MESSAGE;
};
type newMessageBodyAction = {
  type: DialogActionsTypes.UPDATE_NEW_MESSAGE_BODY;
  body: string;
};

type RootAction = newMessageBodyAction | sendMessageAction;

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
  newMessageText: string;
};

const initialState = {
  users: [
    { id: 1, name: "Алеша" },
    { id: 2, name: "Володя" },
    { id: 3, name: "Анюта" },
  ],
  messages: [
    { id: 1, message: "hello there" },
    { id: 2, message: "How r u doing?" },
  ],
  newMessageText: "qwe",
};

export const dialogsReducer = (
  state: DialogsStateType = initialState,
  action: RootAction
) => {
  switch (action.type) {
    case DialogActionsTypes.UPDATE_NEW_MESSAGE_BODY:
      return { ...state, newMessageText: action.body };
    case DialogActionsTypes.SEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, { id: 5, message: state.newMessageText }],
        newMessageText: "",
      };
    default:
      return { ...state };
  }
};

export const sendMessage = (): sendMessageAction => ({
  type: DialogActionsTypes.SEND_MESSAGE,
});
export const newMessageBody = (body: string): newMessageBodyAction => ({
  type: DialogActionsTypes.UPDATE_NEW_MESSAGE_BODY,
  body,
});
