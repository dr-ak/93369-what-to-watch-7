import {NameSpace} from '../reducers/index';

export const getMyList = (state) => state[NameSpace.MY_LIST].myList;
export const getLoadDataStatus = (state) => state[NameSpace.MY_LIST].isDataLoaded;

