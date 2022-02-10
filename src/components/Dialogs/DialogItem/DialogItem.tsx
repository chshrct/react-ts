import style from "../Dialogs.module.css";
import {Link} from "react-router-dom";
import React from "react";

export type userType = {
    id: number
    name: string
}

export const DialogItem = (props: userType) => {
    return (
        <div className={style.dialog + ' ' + style.active}>
            <Link to={`/dialogs/${props.id}`}>{props.name}</Link>
        </div>
    )
}