import {ActionType} from '../actions/form';

const SimbolRange = {
  MIN: 50,
  MAX: 400,
};

const initialState = {
  isDisabledFields: false,
  isDisabledSubmit: true,
  rating: 8,
  text: '',
  isSubmitError: false,
};

const film = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_RATING:
      return {
        ...state,
        rating: action.payload,
      };
    case ActionType.CHANGE_TEXT:
      return {
        ...state,
        text: action.payload,
        isDisabledSubmit: action.payload.length < SimbolRange.MIN || action.payload.length > SimbolRange.MAX,
      };
    case ActionType.CREATE_COMMENT:
      return {
        ...state,
        isDisabledFields: true,
        isDisabledSubmit: true,
      };
    case ActionType.CREATE_COMMENT_ERROR:
      return {
        ...state,
        isSubmitError: true,
        isDisabledFields: false,
        isDisabledSubmit: false,
      };
    case ActionType.RESET:
      return initialState;
    default:
      return state;
  }
};

export default film;
