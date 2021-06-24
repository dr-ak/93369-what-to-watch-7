import {getFilteredFilms} from '../film';

export const ActionType = {
  SET_FILTER: 'genre/setFilter',
  RESET_FILTER: 'genre/resetFilter',
  INC_COUNT: 'genre/incCount',
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
    };
  },

  incCount: () => {
    return {
      type: ActionType.INC_COUNT,
    };
  },
};
