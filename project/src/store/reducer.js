import {ActionType} from './action';
import {getFilms} from '../mocks/films';
import {getFilteredFilms} from '../film';
import {ALL_GENRES, FILM_COUNT} from '../const';

const initialState = {
  genre: ALL_GENRES,
  count: FILM_COUNT,
  films: getFilms().slice(0, FILM_COUNT),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_FILTER: {
      return {
        ...state,
        genre: action.genre,
        count: FILM_COUNT,
        films: getFilteredFilms(action.genre).slice(0, FILM_COUNT),
      };
    }
    case ActionType.RESET_FILTER: {
      return {
        ...initialState,
      };
    }
    case ActionType.INC_COUNT: {
      const newCount = state.count += FILM_COUNT;

      if (newCount >=)

      return {
        ...state,
        count: newCount,
        films: getFilms().slice(0, newCount),
      };
    }
    default:
      return state;
  }
};


export {reducer};
