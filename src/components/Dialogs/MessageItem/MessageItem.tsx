import React from "react";

type MessageItemType = {
    message: string
}

export const MessageItem = (props: MessageItemType) => {
    return (
        <div className="message">{props.message}</div>
    )
}