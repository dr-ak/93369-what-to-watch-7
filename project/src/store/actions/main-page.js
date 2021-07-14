import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_FILTER: 'genre/changeFilter',
  SHOW_MORE: 'data/showMore',
  RESET_SHOW_MORE: 'data/resetShowMore',
  LOAD_FILMS: 'data/loadFilms',
  LOAD_PROMO_FILM: 'data/loadPromoFilm',
};

export const loadPromoFilm = createAction(ActionType.LOAD_PROMO_FILM, (film) => {
  return {
    payload: film,
  };
});

export const loadFilms = createAction(ActionType.LOAD_FILMS, (films) => {
  return {
    payload: films,
  };
});

export const changeFilter = createAction(ActionType.CHANGE_FILTER, (genre) => {
  return {
    payload: genre,
  };
});

export const showMore = createAction(ActionType.SHOW_MORE);

export const resetShowMore = createAction(ActionType.RESET_SHOW_MORE);
