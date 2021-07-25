import form from './form';
import {ActionType} from '../actions/form';

const RATING = 5;

const TEXT_1 = 'Unfortunately';
const TEXT_2 = 'Unfortunately we don\'t have a reliable way to tell the true ratings of a movie.';
const TEXT_3 = 'I love this movie. This film is a milestone in cinematography. Great Immersive camera-work. This film is an experience and i has already seen it 4 times and I only see more quality of the film. I love this movie. This film is a milestone in cinematography. Great Immersive camera-work. This film is an experience and i has already seen it 4 times and I only see more quality of the film. I love this movie. This film is a milestone in cinematography. Great Immersive camera-work. This film is an experience and i has already seen it 4 times and I only see more quality of the film.';


describe('Form reducer', () => {
  it('without additional parameters should return initial state', () => {
    expect(form(undefined, {}))
      .toEqual({
        isDisabledFields: false,
        isDisabledSubmit: true,
        rating: 8,
        text: '',
        isSubmitError: false,
      });
  });

  it('should change raiting', () => {
    const state = {
      isDisabledFields: false,
      isDisabledSubmit: true,
      rating: 8,
      text: '',
      isSubmitError: false,
    };

    const changeRatingAction = {
      type: ActionType.CHANGE_RATING,
      payload: RATING,
    };

    expect(form(state, changeRatingAction))
      .toEqual({
        isDisabledFields: false,
        isDisabledSubmit: true,
        rating: RATING,
        text: '',
        isSubmitError: false,
      });
  });

  it('should change text also block and unblock submit button', () => {
    const state = {
      isDisabledFields: false,
      isDisabledSubmit: true,
      rating: 8,
      text: '',
      isSubmitError: false,
    };

    let changeTextAction = {
      type: ActionType.CHANGE_TEXT,
      payload: TEXT_1,
    };

    expect(form(state, changeTextAction))
      .toEqual({
        isDisabledFields: false,
        isDisabledSubmit: true,
        rating: 8,
        text: TEXT_1,
        isSubmitError: false,
      });

    changeTextAction = {
      type: ActionType.CHANGE_TEXT,
      payload: TEXT_2,
    };

    expect(form(state, changeTextAction))
      .toEqual({
        isDisabledFields: false,
        isDisabledSubmit: false,
        rating: 8,
        text: TEXT_2,
        isSubmitError: false,
      });

    changeTextAction = {
      type: ActionType.CHANGE_TEXT,
      payload: TEXT_3,
    };

    expect(form(state, changeTextAction))
      .toEqual({
        isDisabledFields: false,
        isDisabledSubmit: true,
        rating: 8,
        text: TEXT_3,
        isSubmitError: false,
      });
  });

  it('should disable form during  new comment post', () => {
    const state = {
      isDisabledFields: false,
      isDisabledSubmit: false,
      rating: 8,
      text: '',
      isSubmitError: false,
    };

    const createCommentAction = {
      type: ActionType.CREATE_COMMENT,
    };

    expect(form(state, createCommentAction))
      .toEqual({
        isDisabledFields: true,
        isDisabledSubmit: true,
        rating: 8,
        text: '',
        isSubmitError: false,
      });
  });

  it('should unblock form and show submit error', () => {
    const state = {
      isDisabledFields: true,
      isDisabledSubmit: true,
      rating: 8,
      text: '',
      isSubmitError: false,
    };

    const createCommentErrorAction = {
      type: ActionType.CREATE_COMMENT_ERROR,
    };

    expect(form(state, createCommentErrorAction))
      .toEqual({
        isDisabledFields: false,
        isDisabledSubmit: false,
        rating: 8,
        text: '',
        isSubmitError: true,
      });
  });

  it('should reset form', () => {
    const state = {
      isDisabledFields: true,
      isDisabledSubmit: true,
      rating: 8,
      text: TEXT_2,
      isSubmitError: false,
    };

    const resetAction = {
      type: ActionType.RESET,
    };

    expect(form(state, resetAction))
      .toEqual({
        isDisabledFields: false,
        isDisabledSubmit: true,
        rating: 8,
        text: '',
        isSubmitError: false,
      });
  });
});
