import React, {ChangeEvent} from "react";
import { DialogItem, userType } from "./DialogItem/DialogItem";
import style from './Dialogs.module.css'
import { MessageItem, messageType } from "./MessageItem/MessageItem";

type DialogsStateType = {
    onClickSendMessage:()=>void
    onChangeEditMessage:(text:string)=>void
    dialogsPage:any
}


export const Dialogs:React.FC<DialogsStateType> = (props) => {

    const userslist: userType[] = props.dialogsPage.users;
  const dialogsList = userslist.map((user) => (
    <DialogItem key={user.id} id={user.id} name={user.name} />
  ));

  const messages: messageType[] = props.dialogsPage.messages
   const messagesList = messages.map((msg) => (
      <MessageItem key={msg.id} id={msg.id} message={msg.message} />
    ));

    const onClickSendMessage = ()=>{
        props.onClickSendMessage()
    }

    const onChangeEditMessage = (e:ChangeEvent<HTMLTextAreaElement>)=>{
        props.onChangeEditMessage(e.currentTarget.value)
    }

    return (
        <div className={style.dialogs}>

            <div className={style.dialogItems}>
                {dialogsList}
            </div>

            <div className={style.messages}>
                <div>{messagesList}</div>
                <div>
                    <div><textarea placeholder={'enter ur message'} onChange={onChangeEditMessage} >q</textarea></div>
                    <div><button onClick={onClickSendMessage}>+</button></div>
                </div>
            </div>
        </div>
    )
}