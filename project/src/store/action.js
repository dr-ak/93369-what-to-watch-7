import {getFilteredFilms} from '../film';

export const ActionType = {
  SET_FILTER: 'genre/setFilter',
  RESET_FILTER: 'game/resetFilter',
};

export const ActionCreator = {
  resetFilter: () => {
    return {
      type: ActionType.RESET_FILTER,
    };
  },

  setFilter: (genre) => {
    return {
      type: ActionType.SET_FILTER,
      genre: genre,
      films: getFilteredFilms(genre),
    };
  },
};
