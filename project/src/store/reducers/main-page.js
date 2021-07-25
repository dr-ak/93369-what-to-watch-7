import {createReducer} from '@reduxjs/toolkit';
import {loadPromoFilm, loadFilms, changeFilter, showMore, resetShowMore} from '../actions/main-page';
import {getFilteredFilms} from '../../film';
import {ALL_GENRES, FILM_COUNT} from '../../const';

const initialState = {
  genre: ALL_GENRES,
  promoFilm: false,
  allFilms: false,
  films: [],
  isShowButton: false,
  isDataLoaded: false,
};

const mainPage = createReducer(initialState, (builder) => {
  builder
    .addCase(loadPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
      state.isDataLoaded = state.allFilms && true;
    })
    .addCase(loadFilms, (state, action) => {
      const newFilms = getFilteredFilms(action.payload, state.genre);

      state.allFilms = action.payload;
      state.films =  newFilms.slice(0, FILM_COUNT);
      state.isShowButton = newFilms.length > FILM_COUNT;
      state.isDataLoaded = state.promoFilm && true;
    })
    .addCase(changeFilter, (state, action) => {
      const newFilms = getFilteredFilms(state.allFilms, action.payload);

      state.genre = action.payload;
      state.films = newFilms.slice(0, FILM_COUNT);
      state.isShowButton = newFilms.length > FILM_COUNT;
    })
    .addCase(showMore, (state, action) => {
      const newCount = state.films.length + FILM_COUNT;
      const newFilms = getFilteredFilms(state.allFilms, state.genre);

      state.films = newFilms.slice(0, newCount);
      state.isShowButton = newFilms.length > newCount;
    })
    .addCase(resetShowMore, (state, action) => {
      state.films = state.allFilms.slice(0, FILM_COUNT);
      state.isShowButton = state.allFilms.length > FILM_COUNT;
    });
});

export default mainPage;
