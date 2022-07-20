import { FC } from 'react';

import { connect, ConnectedProps } from 'react-redux';

import Header from './Header';

import { AppRootStateType, logout } from 'store';

export const HeaderContainer: FC<ReduxPropsHeader> = props => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Header {...props} />;
};

const mapStateToProps = (state: AppRootStateType) =>
  ({
    login: state.auth.login,
    email: state.auth.email,
    isAuth: state.auth.isAuth,
  } as const);
const mapDispatchToProps = { logout };

const connector = connect(mapStateToProps, mapDispatchToProps);
export type ReduxPropsHeader = ConnectedProps<typeof connector>;

export default connector(HeaderContainer);
