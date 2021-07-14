import {createReducer} from '@reduxjs/toolkit';
import {loadFilm, loadSimilarFilms, loadComments, setNotFoundPage} from '../actions/film';

const initialState = {
  film: false,
  similarFilms: false,
  comments: false,
  isDataLoaded: false,
  isNotFoundPage: false,
};

const film = createReducer(initialState, (builder) => {
  builder
    .addCase(loadFilm, (state, action) => {
      state.film = action.payload;
      state.isDataLoaded = state.similarFilms && state.comments && true;
    })
    .addCase(loadSimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
      state.isDataLoaded = state.film && state.comments && true;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
      state.isDataLoaded = state.similarFilms && state.film && true;
    })
    .addCase(setNotFoundPage, (state, action) => {
      state.isNotFoundPage = true;
    });
});

export default film;
