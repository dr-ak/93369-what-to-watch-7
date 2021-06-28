export const ActionType = {
  CHANGE_FILTER: 'genre/changeFilter',
  SHOW_MORE: 'genre/showMore',
  LOAD_FILMS: 'data/loadFilms',
  LOAD_PROMO_FILM: 'data/loadPromoFilm',
};

export const ActionCreator = {
  loadPromoFilm: (film) => {
    return {
      type: ActionType.LOAD_PROMO_FILM,
      promoFilm: film,
    };
  },
  loadFilms: (films) => {
    return {
      type: ActionType.LOAD_FILMS,
      allFilms: films,
    };
  },
  changeFilter: (genre) => {
    return {
      type: ActionType.CHANGE_FILTER,
      genre: genre,
    };
  },
  showMore: () => {
    return {
      type: ActionType.SHOW_MORE,
    };
  },
};
