import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  REDIRECT_TO_ROUTE: 'routing/redirectToRoute',
};

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => {
  return {
    payload: url,
  };
});
