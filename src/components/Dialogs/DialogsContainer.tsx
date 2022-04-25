import { connect } from "react-redux";
import { Dispatch } from "redux";
import {
  newMessageBody,
  sendMessage,
} from "../../redux/dialogs-reducer";
import { AppStateType } from "../../redux/redux-store";
import { Dialogs } from "./Dialogs";

const mapStateToProps = (state: AppStateType) => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onClickSendMessage: () => {
      dispatch(sendMessage());
    },
    onChangeEditMessage: (text: string) => {
      dispatch(newMessageBody(text));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
