import { connect } from "react-redux";
import { Dispatch } from "redux";
import { withAuthRedirect } from "../../hoc/AuthRedirect/withAuthRedirect";
import {
  newMessageBody,
  sendMessage,
} from "../../redux/dialogs-reducer";
import { AppStateType } from "../../redux/redux-store";
import { Dialogs } from "./Dialogs";

const mapStateToProps = (state: AppStateType) => {
  return {
    dialogsPage: state.dialogsPage
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

const withRedirectDialogs=withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(withRedirectDialogs);

export default DialogsContainer;
