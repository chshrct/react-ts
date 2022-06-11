import React, { FC } from 'react';

export type messageType = {
  message: string;
};

export const MessageItem: FC<messageType> = ({ message }) => {
  return <div className="message">{message}</div>;
};
