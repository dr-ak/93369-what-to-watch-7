import {ActionType} from '../actions/user';
import {AuthorizationStatus} from '../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  backPath: '',
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    default:
      return state;
  }
};

export default user;
