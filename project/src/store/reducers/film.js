import {ActionType} from '../actions/film';

const initialState = {
  film: false,
  similarFilms: false,
  comments: false,
  isDataLoaded: false,
  isNotFoundPage: false,
};

const film = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILM:
      return {
        ...state,
        film: action.film,
        isDataLoaded: state.similarFilms && state.comments && true,
      };
    case ActionType.LOAD_SIMILAR_FILMS:
      return {
        ...state,
        similarFilms: action.similarFilms,
        isDataLoaded: state.film && state.comments && true,
      };
    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        comments: action.comments,
        isDataLoaded: state.similarFilms && state.film && true,
      };
    case ActionType.NOT_FOUND_PAGE:
      return {
        ...state,
        isNotFoundPage: true,
      };
    default:
      return state;
  }
};

export default film;
