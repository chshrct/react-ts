const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

const initialState = {
  users: [
    { id: 1, name: "Алеша" },
    { id: 2, name: "Володя" },
    { id: 3, name: "Анюта" },
    { id: 4, name: "Федя" },
    { id: 5, name: "Вика" },
    { id: 6, name: "Леся" },
    { id: 7, name: "Зина" },
  ],
  messages: [
    { id: 1, message: "hello there" },
    { id: 2, message: "How r u doing?" },
    { id: 3, message: "No comprende" },
  ],
  newMessageText: "qwe",
};

export const dialogsReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageText = action.body;
      return state;
    case SEND_MESSAGE:
      const body = state.newMessageText;
      state.messages.push({ id: 5, message: body });
      state.newMessageText = "";
      return state;
    default:
      return state;
  }
};

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const newMessageBodyActionCreator = (body: string) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});
