import {ActionType} from './action';
import {getFilteredFilms} from '../film';
import {ALL_GENRES, FILM_COUNT} from '../const';

const initialState = {
  genre: ALL_GENRES,
  allFilms: [],
  films: [],
  isShowButton: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_ALL_FILMS: {
      return {
        ...state,
        allFilms: action.allFilms,
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
        isShowButton: newFilms > newCount,
      };
    }
    default:
      return state;
  }
};


export {reducer};
