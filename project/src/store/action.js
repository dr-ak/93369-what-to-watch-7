export const ActionType = {
  CHANGE_FILTER: 'genre/changeFilter',
  SET_ALL_FILMS: 'genre/setAllFilms',
  SHOW_MORE: 'genre/showMore',
};

export const ActionCreator = {
  changeFilter: (genre) => {
    return {
      type: ActionType.CHANGE_FILTER,
      genre: genre,
    };
  },
  setAllFilms: (films) => {
    return {
      type: ActionType.SET_ALL_FILMS,
      allFilms: films,
    };
  },
  showMore: () => {
    return {
      type: ActionType.SHOW_MORE,
    };
  },
};
