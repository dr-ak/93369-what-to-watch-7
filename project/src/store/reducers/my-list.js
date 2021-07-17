import {createReducer} from '@reduxjs/toolkit';
import {loadMyList} from '../actions/my-list';

const initialState = {
  myList: false,
  isDataLoaded: false,
};

const myList = createReducer(initialState, (builder) => {
  builder
    .addCase(loadMyList, (state, action) => {
      state.myList = action.payload;
      state.isDataLoaded = true;
    });
});

export default myList;
