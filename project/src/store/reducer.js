import {ActionType} from './action';
import {getFilteredFilms} from '../film';
import {ALL_GENRES} from '../const';

const initialState = {
  genre: ALL_GENRES,
  allFilms: [],
  films: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_FILTER: {
      return {
        ...state,
        genre: action.genre,
        films: getFilteredFilms(state.allFilms, action.genre),
      };
    }
    case ActionType.SET_ALL_FILMS: {
      return {
        ...state,
        allFilms: action.allFilms,
      };
    }
    default:
      return state;
  }
};


export {reducer};
