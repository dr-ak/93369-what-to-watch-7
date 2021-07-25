import user from './user';
import {ActionType} from '../actions/user';

const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

describe('User reducer', () => {
  it('without additional parameters should return initial state', () => {
    expect(user(undefined, {}))
      .toEqual({
        authorizationStatus: AuthorizationStatus.UNKNOWN,
      });
  });

  it('should set user status', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.UNKNOWN,
    };

    const requireAuthorizationAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    };

    expect(user(state, requireAuthorizationAction))
      .toEqual({
        authorizationStatus: AuthorizationStatus.AUTH,
      });
  });

  it('should set logout user status', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.UNKNOWN,
    };

    const logoutAction = {
      type: ActionType.LOGOUT,
    };

    expect(user(state, logoutAction))
      .toEqual({
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      });
  });
});
