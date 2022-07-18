import React, { ChangeEvent, FC, useEffect, useState } from 'react';

type ProfileStatusProps = {
  status: string;
  updateStatus: (payload: { status: string }) => void;
  authUserId: number | null;
  profileId: number;
};

export const ProfileStatusFunctional: FC<ProfileStatusProps> = ({
  status: propStatus,
  authUserId,
  profileId,
  updateStatus,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(propStatus);

  useEffect(() => {
    setStatus(propStatus);
  }, [propStatus]);

  const activateEditMode = (): void => {
    if (authUserId === profileId) setEditMode(true);
  };
  const deactivateEditMode = (): void => {
    setEditMode(false);
    updateStatus({ status });
  };
  const changeStatus = (e: ChangeEvent<HTMLInputElement>): void => {
    setStatus(e.currentTarget.value);
  };
  return (
    <div>
      {editMode ? (
        <div>
          <input value={status} onChange={changeStatus} onBlur={deactivateEditMode} />
        </div>
      ) : (
        <div>
          <span onDoubleClick={activateEditMode}>{propStatus || 'No Status'}</span>
        </div>
      )}
    </div>
  );
};

export default ProfileStatusFunctional;
