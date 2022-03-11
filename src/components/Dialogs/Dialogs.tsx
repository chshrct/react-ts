import React, {ChangeEvent} from "react";
import style from './Dialogs.module.css'
import {MessageItem, messageType} from "./MessageItem/MessageItem";
import {DialogItem, userType} from "./DialogItem/DialogItem";
import {newMessageBodyActionCreator, sendMessageActionCreator} from "../../redux/dialogs-reducer";

type dialogsPageType = {
    users: Array<userType>
    messages: Array<messageType>
}

type DialogsStateType = {
    state: dialogsPageType
    dispatch:any
}


const Dialogs = (props: DialogsStateType) => {

    const dialogsList = props.state.users
        .map(
            user => <DialogItem
                key={user.id}
                id={user.id}
                name={user.name}/>
        );
    const messagesList = props.state.messages
        .map(
            msg => <MessageItem
                key={msg.id}
                id={msg.id}
                message={msg.message}/>
        )

    const onClickSendMessage = ()=>{
        props.dispatch(sendMessageActionCreator())
    }

    const onChangeEditMessage = (e:ChangeEvent<HTMLTextAreaElement>)=>{
        props.dispatch(newMessageBodyActionCreator(e.currentTarget.value))
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


export default Dialogs