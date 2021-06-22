import {ActionType} from './action';
import {getFilms} from '../mocks/films';
import {ALL_GENRES} from '../const';

const initialState = {
  genre: ALL_GENRES,
  films: getFilms(),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_FILTER: {
      return {
        ...state,
        genre: action.genre,
        films: action.films,
      };
    }
    case ActionType.RESET_FILTER: {
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
};


export {reducer};
