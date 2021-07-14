import {createReducer} from '@reduxjs/toolkit';
import {changeRating, changeText, createComment, createCommentError, reset} from '../actions/form';

const SimbolRange = {
  MIN: 50,
  MAX: 400,
};

const initialState = {
  isDisabledFields: false,
  isDisabledSubmit: true,
  rating: 8,
  text: '',
  isSubmitError: false,
};

const form = createReducer(initialState, (builder) => {
  builder
    .addCase(changeRating, (state, action) => {
      state.rating = action.payload;
    })
    .addCase(changeText, (state, action) => {
      state.text = action.payload;
      state.isDisabledSubmit = action.payload.length < SimbolRange.MIN || action.payload.length > SimbolRange.MAX;
    })
    .addCase(createComment, (state, action) => {
      state.isDisabledFields = true;
      state.isDisabledSubmit = true;
    })
    .addCase(createCommentError, (state, action) => {
      state.isSubmitError = true;
      state.isDisabledFields = false;
      state.isDisabledSubmit = false;
    })
    .addCase(reset, (state, action) => {
      return {
        ...state,
        ...initialState,
      };
    });
});

export default form;
