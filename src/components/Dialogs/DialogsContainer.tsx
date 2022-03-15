import { MessageItem, messageType } from "./MessageItem/MessageItem";
import { DialogItem, userType } from "./DialogItem/DialogItem";
import {
  newMessageBodyActionCreator,
  sendMessageActionCreator,
} from "../../redux/dialogs-reducer";
import { Dialogs } from "./Dialogs";

type DialogsDialogsContainerPropsType = {
  store: any;
};

export const DialogsContainer = (props: DialogsDialogsContainerPropsType) => {

  const onClickSendMessage = () => {
    props.store.dispatch(sendMessageActionCreator());
  };

  const onChangeEditMessage = (text: string) => {
      debugger
    props.store.dispatch(newMessageBodyActionCreator(text));
  };

  return (
    <Dialogs
      onClickSendMessage={onClickSendMessage}
      onChangeEditMessage={onChangeEditMessage}
      dialogsPage={props.store.getState().dialogsPage}
    />
  );
};
