import React from "react";
import style from './Dialogs.module.css'
import {MessageItem} from "./MessageItem/MessageItem";
import {DialogItem} from "./DialogItem/DialogItem";

type usersType = {
    id: number
    name: string
}

type messagesType = {
    id: number
    message: string
}

type DialogsType = {
    users: Array<usersType>
    messages: Array<messagesType>
}


const Dialogs = (props: DialogsType) => {

    let dialogsList = props.users
        .map(
            user => <DialogItem
                key={user.id}
                id={user.id}
                name={user.name}/>
        );
    let messagesList = props.messages
        .map(
            msg => <MessageItem
                key={msg.id}
                id={msg.id}
                message={msg.message}/>
        )

    return (
        <div className={style.dialogs}>

            <div className={style.dialogItems}>
                {dialogsList}
            </div>

            <div className={style.messages}>
                {messagesList}
            </div>
        </div>
    )
}


export default Dialogs