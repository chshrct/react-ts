import React, { ChangeEvent } from "react";
import AddMessageForm, { FormValuesType } from "./AddMessageForm/AddMessageForm";
import { DialogItem, userType } from "./DialogItem/DialogItem";
import style from "./Dialogs.module.css";
import { ReduxPropsType } from "./DialogsContainer";
import { MessageItem, messageType } from "./MessageItem/MessageItem";

export const Dialogs: React.FC<ReduxPropsType> = (props) => {
  const { dialogsPage, SendMessage, EditMessage } = props;
  const usersList: userType[] = dialogsPage.users;
  const dialogsList = usersList.map((user) => (
    <DialogItem key={user.id} id={user.id} name={user.name} />
  ));

  const messages: messageType[] = dialogsPage.messages;
  const messagesList = messages.map((msg) => (
    <MessageItem key={msg.id} id={msg.id} message={msg.message} />
  ));

  const onClickSendMessage = (values:FormValuesType) => {
    SendMessage(values);
  };

  const onChangeEditMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    EditMessage(e.currentTarget.value);
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogItems}>{dialogsList}</div>
      <div className={style.messages}>
        <div>{messagesList}</div>
        <AddMessageForm
          onClickSendMessage={onClickSendMessage}
          onChangeEditMessage={onChangeEditMessage}
        ></AddMessageForm>
      </div>
    </div>
  );
};
