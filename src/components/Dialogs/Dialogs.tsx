import React from "react";
import style from './Dialogs.module.css'
import {MessageItem} from "./MessageItem/MessageItem";
import {DialogItem} from "./DialogItem/DialogItem";

const Dialogs = (props: any) => {

    let usersData = [
        {id: 1, name: 'Алеша'},
        {id: 2, name: 'Володя'},
        {id: 3, name: 'Анюта'},
        {id: 4, name: 'Федя'},
        {id: 5, name: 'Вика'},
        {id: 6, name: 'Леся'},
        {id: 7, name: 'Зина'}
    ]
    let messagesData = [
        {id: 1, message: 'hello there'},
        {id: 2, message: 'How r u doing?'},
        {id: 3, message: 'No comprende'}
    ]

    let dialogsList = usersData
        .map(
            user => <DialogItem name={user.name} id={user.id}/>
        );
    let messagesList = messagesData
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