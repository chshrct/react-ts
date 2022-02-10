import React from "react";

export type messageType = {
    id: number
    message: string
}

export const MessageItem = (props: messageType) => {
    return (
        <div className="message">{props.message}</div>
    )
}