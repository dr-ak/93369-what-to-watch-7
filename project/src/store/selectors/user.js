import {NameSpace} from '../reducers/index';

export const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;
