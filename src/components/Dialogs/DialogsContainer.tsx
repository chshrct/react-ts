import { connect } from "react-redux";
import { Dispatch } from "redux";
import {
  newMessageBodyActionCreator,
  sendMessageActionCreator,
} from "../../redux/dialogs-reducer";
import { AppStateType } from "../../redux/redux-store";
import { Dialogs } from "./Dialogs";

const mapStateToProps = (state: AppStateType) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onClickSendMessage: () => {
      dispatch(sendMessageActionCreator());
    },
    onChangeEditMessage: (text: string) => {
      dispatch(newMessageBodyActionCreator(text));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
