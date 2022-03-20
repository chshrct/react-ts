import { connect } from "react-redux";
import {
  newMessageBodyActionCreator,
  sendMessageActionCreator,
} from "../../redux/dialogs-reducer";
import { Dialogs } from "./Dialogs";



const mapStateToProps = (state: any) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

const mapDispatchToProps = (dispatch:any) => {
  return {
    onClickSendMessage:()=>{
      dispatch(sendMessageActionCreator())
    },
    onChangeEditMessage:(text:string)=>{
      dispatch(newMessageBodyActionCreator(text))
    }
  }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer
