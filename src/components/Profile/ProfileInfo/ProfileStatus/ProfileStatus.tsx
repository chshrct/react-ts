import React, { Component } from "react";

type ProfileStatusProps = {
  status: string;
};

type ProfileStatusState = {
  editMode: boolean;
};

export class ProfileStatus extends Component<
  ProfileStatusProps,
  ProfileStatusState
> {
  state = {
    editMode: false,
  };

  activateEditMode = () => {
    this.setState({ editMode: true });
  };
  deactivateEditMode = () => {
    this.setState({ editMode: false });
  };
  render() {
    return (
      <div>
        {this.state.editMode ? (
          <div>
            <input value={this.props.status} onBlur={this.deactivateEditMode} autoFocus/>
          </div>
        ) : (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status}
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
