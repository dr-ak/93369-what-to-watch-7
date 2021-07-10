import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_RATING: 'form/changeRating',
  CHANGE_TEXT: 'form/changeText',
  CREATE_COMMENT: 'form/createComment',
  CREATE_COMMENT_ERROR: 'form/createCommentError',
  RESET: 'form/reset',
};

export const changeRating = createAction(ActionType.CHANGE_RATING, (val) => {
  return {
    payload: val,
  };
});


export const changeText = createAction(ActionType.CHANGE_TEXT, (text) => {
  return {
    payload: text,
  };
});

export const  createComment = createAction(ActionType.CREATE_COMMENT);

export const  createCommentError = createAction(ActionType.CREATE_COMMENT_ERROR);

export const reset = createAction(ActionType.RESET);
