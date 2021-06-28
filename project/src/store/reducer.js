import {ActionType} from './action';
import {getFilteredFilms} from '../film';
import {ALL_GENRES, FILM_COUNT} from '../const';

const initialState = {
  genre: ALL_GENRES,
  promoFilm: false,
  allFilms: false,
  films: [],
  isShowButton: false,
  isDataLoaded: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_PROMO_FILM: {
      return {
        ...state,
        promoFilm: action.promoFilm,
        isDataLoaded: state.allFilms && true,
      };
    }
    case ActionType.LOAD_FILMS: {
      const newFilms = getFilteredFilms(action.allFilms, state.genre);

      return {
        ...state,
        allFilms: action.allFilms,
        films: newFilms.slice(0, FILM_COUNT),
        isShowButton: newFilms.length > FILM_COUNT,
        isDataLoaded: state.promoFilm && true,
      };
    }
    case ActionType.CHANGE_FILTER: {
      const newFilms = getFilteredFilms(state.allFilms, action.genre);

      return {
        ...state,
        genre: action.genre,
        films: newFilms.slice(0, FILM_COUNT),
        isShowButton: newFilms.length > FILM_COUNT,
      };
    }
    case ActionType.SHOW_MORE: {
      const newCount = state.films.length + FILM_COUNT;
      const newFilms = getFilteredFilms(state.allFilms, state.genre);

      return {
        ...state,
        count: newCount,
        films:  newFilms.slice(0, newCount),
        isShowButton: newFilms.length > newCount,
      };
    }
    default:
      return state;
  }
};


export {reducer};
