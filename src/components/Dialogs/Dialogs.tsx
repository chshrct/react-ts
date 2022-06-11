import React from 'react';

import AddMessageForm, { FormValuesType } from './AddMessageForm/AddMessageForm';
import { DialogItem, userType } from './DialogItem/DialogItem';
import style from './Dialogs.module.css';
import { ReduxPropsType } from './DialogsContainer';
import { MessageItem } from './MessageItem/MessageItem';

export const Dialogs: React.FC<ReduxPropsType> = props => {
  const { dialogsPage, SendMessage } = props;
  const usersList: userType[] = dialogsPage.users;
  const dialogsList = usersList.map(user => (
    <DialogItem key={user.id} id={user.id} name={user.name} />
  ));

  const { messages } = dialogsPage;
  const messagesList = messages.map(msg => (
    <MessageItem key={msg.id} message={msg.message} />
  ));

  const onClickSendMessage = (values: FormValuesType): void => {
    SendMessage(values);
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogItems}>{dialogsList}</div>
      <div className={style.messages}>
        <div>{messagesList}</div>
        <AddMessageForm onClickSendMessage={onClickSendMessage} />
      </div>
    </div>
  );
};
