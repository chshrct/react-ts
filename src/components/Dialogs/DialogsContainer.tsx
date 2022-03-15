import {
  newMessageBodyActionCreator,
  sendMessageActionCreator,
} from "../../redux/dialogs-reducer";
import StoreContext from "../../StoreContext";
import { Dialogs } from "./Dialogs";

export const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store: any) => {
        const onClickSendMessage = () => {
          store.dispatch(sendMessageActionCreator());
        };

        const onChangeEditMessage = (text: string) => {
          store.dispatch(newMessageBodyActionCreator(text));
        };
        return (
          <Dialogs
            onClickSendMessage={onClickSendMessage}
            onChangeEditMessage={onChangeEditMessage}
            dialogsPage={store.getState().dialogsPage}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};
