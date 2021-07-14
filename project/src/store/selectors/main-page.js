import {NameSpace} from '../reducers/index';

export const getFilms = (state) => state[NameSpace.MAIN_PAGE].films;
export const getAllFilms = (state) => state[NameSpace.MAIN_PAGE].allFilms;
export const getPromoFilm = (state) => state[NameSpace.MAIN_PAGE].promoFilm;
export const getGenre = (state) => state[NameSpace.MAIN_PAGE].genre;
export const getShowButtonState = (state) => state[NameSpace.MAIN_PAGE].isShowButton;
export const getLoadDataStatus = (state) => state[NameSpace.MAIN_PAGE].isDataLoaded;
