import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  LOAD_FILM: 'data/loadFilm',
  LOAD_SIMILAR_FILMS: 'data/loadSimilarFilms',
  LOAD_COMMENTS: 'data/loadComments',
  NOT_FOUND_PAGE: 'data/notFoundPage',
};

export const loadFilm = createAction(ActionType.LOAD_FILM, (film) => {
  return {
    payload: film,
  };
});

export const loadSimilarFilms = createAction(ActionType.LOAD_SIMILAR_FILMS, (films) => {
  return {
    payload: films,
  };
});

export const loadComments = createAction(ActionType.LOAD_COMMENTS, (comments) => {
  return {
    payload: comments,
  };
});

export const setNotFoundPage = createAction(ActionType.NOT_FOUND_PAGE);
