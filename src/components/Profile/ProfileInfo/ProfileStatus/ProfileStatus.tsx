import React, { ChangeEvent, Component } from "react";

type ProfileStatusProps = {
  status: string;
  updateStatus: (status: string) => void;
};

type ProfileStatusState = {
  editMode: boolean;
  status: string;
};

export class ProfileStatus extends Component<
  ProfileStatusProps,
  ProfileStatusState
> {
  state = {
    editMode: false,
    status: this.props.status,
  };

  componentDidUpdate(prevProps:ProfileStatusProps,prevState:ProfileStatusState){
    if(prevProps.status!==this.props.status){
      this.setState({status:this.props.status})
    }
    
  }

  activateEditMode = () => {
    this.setState({ editMode: true });
  };
  deactivateEditMode = () => {
    this.setState({ editMode: false });
    this.props.updateStatus(this.state.status);
  };
  changeStatus = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };
  render() {
    return (
      <div>
        {this.state.editMode ? (
          <div>
            <input
              value={this.state.status}
              onChange={this.changeStatus}
              onBlur={this.deactivateEditMode}
              autoFocus
            />
          </div>
        ) : (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status || 'No Status'}
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
