import React from "react";
import style from './Dialogs.module.css'
import {MessageItem} from "./MessageItem/MessageItem";
import {DialogItem} from "./DialogItem/DialogItem";

type DialogsDataType = {
    users: Array<any>
    messages: Array<any>
}
type DialogsType = {
    dialogs: DialogsDataType
}

const Dialogs = (props: DialogsType) => {


    let dialogsList = props.dialogs.users
        .map(
            user => <DialogItem key={user.id} id={user.id} name={user.name} />
        );
    let messagesList = props.dialogs.messages
        .map(
            msg => <MessageItem message={msg.message}/>
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