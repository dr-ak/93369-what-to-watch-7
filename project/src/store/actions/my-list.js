import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  LOAD_MY_LIST: 'data/loadMyList',
};

export const loadMyList = createAction(ActionType.LOAD_MY_LIST, (films) => {
  return {
    payload: films,
  };
});
