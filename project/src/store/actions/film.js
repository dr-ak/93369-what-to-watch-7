export const ActionType = {
  LOAD_FILM: 'data/loadFilm',
  LOAD_SIMILAR_FILMS: 'data/loadSimilarFilms',
  LOAD_COMMENTS: 'data/loadComments',
  NOT_FOUND_PAGE: 'data/notFoundPage',
};

export const ActionCreator = {
  loadFilm: (film) => {
    return {
      type: ActionType.LOAD_FILM,
      film: film,
    };
  },
  loadSimilarFilms: (films) => {
    return {
      type: ActionType.LOAD_SIMILAR_FILMS,
      similarFilms: films,
    };
  },
  loadComments: (comments) => {
    return {
      type: ActionType.LOAD_COMMENTS,
      comments: comments,
    };
  },
  setNotFoundPage: () => {
    return {
      type: ActionType.NOT_FOUND_PAGE,
    };
  },
};
