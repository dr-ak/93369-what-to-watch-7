
import {
  loadMyList,
  ActionType as MyListActionType
} from './my-list';

describe('My list actions', () => {
  it('action creator for loading similar films returns array of favorite film objects', () => {
    const expectedAction = {
      type: MyListActionType.LOAD_MY_LIST,
      payload: [{}, {}],
    };

    expect(loadMyList([{}, {}])).toEqual(expectedAction);
  });
});
