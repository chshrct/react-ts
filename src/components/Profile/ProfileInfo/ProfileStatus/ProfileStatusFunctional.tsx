import React, { ChangeEvent, FC, useEffect, useState } from "react";

type ProfileStatusProps = {
  status: string;
  updateStatus: (status: string) => void;
  authUserId: number | null;
  profileId: number;
};


export const ProfileStatusFunctional: FC<ProfileStatusProps> = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    props.authUserId === props.profileId && setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };
  const changeStatus = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value);
  };
  return (
    <div>
      {editMode ? (
        <div>
          <input
            value={status}
            onChange={changeStatus}
            onBlur={deactivateEditMode}
            autoFocus
          />
        </div>
      ) : (
        <div>
          <span onDoubleClick={activateEditMode}>
            {props.status || "No Status"}
          </span>
        </div>
      )}
    </div>
  );
};

export default ProfileStatusFunctional;
