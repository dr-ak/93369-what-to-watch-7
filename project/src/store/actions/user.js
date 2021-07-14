import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
};

export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => {
  return {
    payload: status,
  };
});

export const logout = createAction(ActionType.LOGOUT);
