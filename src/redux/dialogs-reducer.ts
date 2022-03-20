const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

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

export const dialogsReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return { ...state, newMessageText: action.body };
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, { id: 5, message: state.newMessageText }],
        newMessageText: "",
      };
    default:
      return { ...state };
  }
};

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const newMessageBodyActionCreator = (body: string) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});
