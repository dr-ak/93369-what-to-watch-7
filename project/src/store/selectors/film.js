import {NameSpace} from '../reducers/index';

export const getFilm = (state) => state[NameSpace.FILM].film;
export const getSimilarFilms = (state) => state[NameSpace.FILM].similarFilms;
export const getComments = (state) => state[NameSpace.FILM].comments;
export const getLoadDataStatus = (state) => state[NameSpace.FILM].isDataLoaded;
export const getNotFoundPageStatus = (state) => state[NameSpace.FILM].isNotFoundPage;
