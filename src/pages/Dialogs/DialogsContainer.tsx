import { ComponentType } from 'react';

import { compose, Dispatch } from '@reduxjs/toolkit';
import { connect, ConnectedProps } from 'react-redux';

import { FormValuesType } from './AddMessageForm/AddMessageForm';
import { Dialogs } from './Dialogs';

import { AppRootStateType, sendMessage, updateMessage } from 'store';

const mapStateToProps = (state: AppRootStateType) =>
  ({
    dialogsPage: state.dialogsPage,
  } as const);

const mapDispatchToProps = (dispatch: Dispatch) =>
  ({
    SendMessage: (values: FormValuesType) => {
      dispatch(sendMessage(values));
    },
    EditMessage: (message: string) => {
      dispatch(updateMessage({ message }));
    },
  } as const);

const connector = connect(mapStateToProps, mapDispatchToProps);
export type ReduxPropsType = ConnectedProps<typeof connector>;

export default compose<ComponentType>(connector)(Dialogs);
