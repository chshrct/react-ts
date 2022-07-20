import React, { ChangeEvent, Component, ReactElement } from 'react';

type ProfileStatusProps = {
  status: string;
  updateStatus: (status: string) => void;
  authUserId: number | null;
  profileId: number;
};

type ProfileStatusState = {
  editMode: boolean;
  status: string;
};

export class ProfileStatus extends Component<ProfileStatusProps, ProfileStatusState> {
  constructor(props: ProfileStatusProps | Readonly<ProfileStatusProps>) {
    super(props);
    const { status } = props;
    this.state = {
      editMode: false,
      status,
    };
  }

  componentDidUpdate(prevProps: ProfileStatusProps): void {
    const { status } = this.props;

    if (prevProps.status !== status) {
      this.setState({ status });
    }
  }

  activateEditMode = (): void => {
    const { profileId, authUserId } = this.props;

    if (authUserId === profileId) this.setState({ editMode: true });
  };

  deactivateEditMode = (): void => {
    const { updateStatus } = this.props;
    const { status } = this.state;
    this.setState({ editMode: false });
    updateStatus(status);
  };

  changeStatus = (e: ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  render(): ReactElement {
    const { editMode, status } = this.state;
    const { status: propStatus } = this.props;
    return (
      <div>
        {editMode ? (
          <div>
            <input
              value={status}
              onChange={this.changeStatus}
              onBlur={this.deactivateEditMode}
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus
            />
          </div>
        ) : (
          <div>
            <span onDoubleClick={this.activateEditMode}>{propStatus || 'No Status'}</span>
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
