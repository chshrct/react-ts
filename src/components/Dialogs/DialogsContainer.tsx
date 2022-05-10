import { ComponentType } from "react";
import { connect, ConnectedProps } from "react-redux";
import { compose, Dispatch } from "redux";
import { withAuthRedirect } from "../../hoc/AuthRedirect/withAuthRedirect";
import { newMessageBody, sendMessage } from "../../redux/dialogs-reducer";
import { AppRootStateType } from "../../redux/redux-store";
import { FormValuesType } from "./AddMessageForm/AddMessageForm";
import { Dialogs } from "./Dialogs";

const mapStateToProps = (state: AppRootStateType) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    SendMessage: (values:FormValuesType) => {
      dispatch(sendMessage(values));
    },
    EditMessage: (text: string) => {
      dispatch(newMessageBody(text));
    },
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps)
export type ReduxPropsType = ConnectedProps<typeof connector>

export default compose<ComponentType>(
  connector,
  withAuthRedirect
)(Dialogs);
