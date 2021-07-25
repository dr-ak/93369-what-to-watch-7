import {
  redirectToRoute,
  ActionType as RedirectActionType
} from './redirect';

const URL = '/films/3';

describe('Redirect actions', () => {
  it('action creator for loading similar films returns redirect url', () => {
    const expectedAction = {
      type: RedirectActionType.REDIRECT_TO_ROUTE,
      payload: URL,
    };

    expect(redirectToRoute(URL)).toEqual(expectedAction);
  });
});
