import style from "../Dialogs.module.css";
import {Link} from "react-router-dom";
import React from "react";

type DialogItemType = {
    name: string
    id: number
}

export const DialogItem = (props: DialogItemType) => {
    return (
        <div className={style.dialog + ' ' + style.active}>
            <Link to={`/dialogs/${props.id}`}>{props.name}</Link>
        </div>
    )
}