import { ComponentType } from 'react';

import { connect, ConnectedProps } from 'react-redux';
import { compose, Dispatch } from 'redux';

import { newMessageBody, sendMessage } from '../../redux/dialogs-reducer';
import { AppRootStateType } from '../../redux/redux-store';

import { FormValuesType } from './AddMessageForm/AddMessageForm';
import { Dialogs } from './Dialogs';

const mapStateToProps = (state: AppRootStateType) =>
  ({
    dialogsPage: state.dialogsPage,
  } as const);

const mapDispatchToProps = (dispatch: Dispatch) =>
  ({
    SendMessage: (values: FormValuesType) => {
      dispatch(sendMessage(values));
    },
    EditMessage: (text: string) => {
      dispatch(newMessageBody(text));
    },
  } as const);

const connector = connect(mapStateToProps, mapDispatchToProps);
export type ReduxPropsType = ConnectedProps<typeof connector>;

export default compose<ComponentType>(connector)(Dialogs);
