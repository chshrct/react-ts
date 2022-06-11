import React, { FC } from 'react';

import { Link } from 'react-router-dom';

import style from '../Dialogs.module.css';

export type userType = {
  id: number;
  name: string;
};

export const DialogItem: FC<userType> = ({ id, name }) => {
  return (
    <div className={`${style.dialog} ${style.active}`}>
      <Link to={`/dialogs/${id}`}>{name}</Link>
    </div>
  );
};
