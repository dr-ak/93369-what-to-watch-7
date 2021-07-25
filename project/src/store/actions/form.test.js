import {
  changeRating,
  changeText,
  createComment,
  createCommentError,
  reset,
  ActionType as FormActionType
} from './form';

const RATING = 8;
const TEXT = 'Unfortunately we don\'t have a reliable way to tell the true ratings of a movie.';

describe('Form actions', () => {
  it('action creator for loading similar films returns rating', () => {
    const expectedAction = {
      type: FormActionType.CHANGE_RATING,
      payload: RATING,
    };

    expect(changeRating(RATING)).toEqual(expectedAction);
  });

  it('action creator for loading similar films returns text', () => {
    const expectedAction = {
      type: FormActionType.CHANGE_TEXT,
      payload: TEXT,
    };

    expect(changeText(TEXT)).toEqual(expectedAction);
  });

  it('action creator for loading similar films returns create comment action', () => {
    const expectedAction = {
      type: FormActionType.CREATE_COMMENT,
    };

    expect(createComment()).toEqual(expectedAction);
  });

  it('action creator for loading similar films returns create comment error action', () => {
    const expectedAction = {
      type: FormActionType.CREATE_COMMENT_ERROR,
    };

    expect(createCommentError()).toEqual(expectedAction);
  });

  it('action creator for loading similar films returns reset action', () => {
    const expectedAction = {
      type: FormActionType.RESET,
    };

    expect(reset()).toEqual(expectedAction);
  });
});
