import {
  requireAuthorization,
  logout,
  ActionType as UserActionType
} from './user';

const STATUS = 'AUTH';

describe('User actions', () => {
  it('action creator for loading similar films returns status', () => {
    const expectedAction = {
      type: UserActionType.REQUIRED_AUTHORIZATION,
      payload: STATUS,
    };

    expect(requireAuthorization(STATUS)).toEqual(expectedAction);
  });

  it('action creator for setting not found page returns logout action', () => {
    const expectedAction = {
      type: UserActionType.LOGOUT,
    };

    expect(logout()).toEqual(expectedAction);
  });
});
