import React from "react";
import style from './Dialogs.module.css'
import {Link} from "react-router-dom";

type DialogItemType = {
    name: string
    id: number
}

const DialogItem = (props: DialogItemType) => {
    return (
        <div className={style.dialog + ' ' + style.active}>
            <Link to={`/dialogs/${props.id}`}>{props.name}</Link>
        </div>
    )
}

type MessageItemType ={
    message:string
}

const MessageItem =(props:MessageItemType)=>{
    return(
        <div className="message">{props.message}</div>
    )
}

const Dialogs = (props: any) => {
    return (
        <div className={style.dialogs}>

            <div className={style.dialogItems}>
                <DialogItem name={'Алеша'} id={1}/>
                <DialogItem name={'Володя'} id={2}/>
                <DialogItem name={'Анюта'} id={3}/>
                <DialogItem name={'Федя'} id={4}/>
                <DialogItem name={'Вика'} id={5}/>
                <DialogItem name={'Леся'} id={6}/>
                <DialogItem name={'Зина'} id={7}/>
            </div>

            <div className={style.messages}>
                <MessageItem message={'hello there'}/>
                <MessageItem message={'How r u doing?'}/>
                <MessageItem message={'No comprende'}/>
            </div>
        </div>
    )
}


export default Dialogs