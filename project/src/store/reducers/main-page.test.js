import mainPage from './main-page';
import {ActionType} from '../actions/main-page';

const FILM_FIRST = {
  'name': 'Aviator',
  'poster_image': 'https://7.react.pages.academy/static/film/poster/Aviator.jpg',
  'preview_image': 'https://7.react.pages.academy/static/film/preview/aviator.jpg',
  'background_image': 'https://7.react.pages.academy/static/film/background/Aviator.jpg',
  'background_color': '#D6CDAF',
  'description': 'A biopic depicting the early years of legendary Director and aviator Howard Hughes\' career from the late 1920s to the mid 1940s.',
  'rating': 9.8,
  'scores_count': 307174,
  'director': 'Martin Scorsese',
  'starring': [
    'Leonardo DiCaprio',
    'Cate Blanchett',
    'Kate Beckinsale',
  ],
  'run_time': 170,
  'genre': 'Drama',
  'released': 2014,
  'id': 2,
  'is_favorite': false,
  'video_link': 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
  'preview_video_link': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
};

const FILM_SECOND =   {
  'name': 'Matrix',
  'poster_image': 'https://7.react.pages.academy/static/film/poster/matrix.jpg',
  'preview_image': 'https://7.react.pages.academy/static/film/preview/matrix.jpg',
  'background_image': 'https://7.react.pages.academy/static/film/background/matrix.jpg',
  'background_color': '#B9B27E',
  'description': 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
  'rating': 4.4,
  'scores_count': 1503092,
  'director': 'Wachowski Brothers',
  'starring': [
    'Keanu Reeves',
    'Laurence Fishburne',
    'Carrie-Anne Moss',
  ],
  'run_time': 136,
  'genre': 'Action',
  'released': 1999,
  'id': 7,
  'is_favorite': false,
  'video_link': 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
  'preview_video_link': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
};

const Genres = {
  ALL_GENRES: 'All genres',
  ACTION: 'Action',
};

describe('Main page reducer', () => {
  it('without additional parameters should return initial state', () => {
    expect(mainPage(undefined, {}))
      .toEqual({
        genre: Genres.ALL_GENRES,
        promoFilm: false,
        allFilms: false,
        films: [],
        isShowButton: false,
        isDataLoaded: false,
      });
  });

  it('should load films and if another data was louded isDataLoaded shold be true and if count films more COUNT_FILM should cut films array', () => {
    let state = {
      genre: Genres.ALL_GENRES,
      promoFilm: false,
      allFilms: false,
      films: [],
      isShowButton: false,
      isDataLoaded: false,
    };

    let loadFilmsAction = {
      type: ActionType.LOAD_FILMS,
      payload: [FILM_FIRST, FILM_SECOND, FILM_FIRST, FILM_SECOND, FILM_FIRST, FILM_SECOND, FILM_FIRST, FILM_SECOND, FILM_FIRST, FILM_SECOND],
    };

    expect(mainPage(state, loadFilmsAction))
      .toEqual({
        genre: Genres.ALL_GENRES,
        promoFilm: false,
        allFilms: [FILM_FIRST, FILM_SECOND, FILM_FIRST, FILM_SECOND, FILM_FIRST, FILM_SECOND, FILM_FIRST, FILM_SECOND, FILM_FIRST, FILM_SECOND],
        films: [FILM_FIRST, FILM_SECOND, FILM_FIRST, FILM_SECOND, FILM_FIRST, FILM_SECOND, FILM_FIRST, FILM_SECOND],
        isShowButton: true,
        isDataLoaded: false,
      });

    loadFilmsAction = {
      type: ActionType.LOAD_FILMS,
      payload: [FILM_FIRST, FILM_SECOND],
    };

    expect(mainPage(state, loadFilmsAction))
      .toEqual({
        genre: Genres.ALL_GENRES,
        promoFilm: false,
        allFilms: [FILM_FIRST, FILM_SECOND],
        films: [FILM_FIRST, FILM_SECOND],
        isShowButton: false,
        isDataLoaded: false,
      });

    state = {
      genre: Genres.ALL_GENRES,
      promoFilm: FILM_FIRST,
      allFilms: false,
      films: [],
      isShowButton: false,
      isDataLoaded: false,
    };

    expect(mainPage(state, loadFilmsAction))
      .toEqual({
        genre: Genres.ALL_GENRES,
        promoFilm: FILM_FIRST,
        allFilms: [FILM_FIRST, FILM_SECOND],
        films: [FILM_FIRST, FILM_SECOND],
        isShowButton: false,
        isDataLoaded: true,
      });
  });

  it('should load promo film and if another data was louded isDataLoaded shold be true', () => {
    let state = {
      genre: Genres.ALL_GENRES,
      promoFilm: false,
      allFilms: false,
      films: [],
      isShowButton: false,
      isDataLoaded: false,
    };

    const loadPromoFilmAction = {
      type: ActionType.LOAD_PROMO_FILM,
      payload: FILM_FIRST,
    };

    expect(mainPage(state, loadPromoFilmAction))
      .toEqual({
        genre: Genres.ALL_GENRES,
        promoFilm: FILM_FIRST,
        allFilms: false,
        films: [],
        isShowButton: false,
        isDataLoaded: false,
      });

    state = {
      genre: Genres.ALL_GENRES,
      promoFilm: false,
      allFilms: [FILM_FIRST, FILM_SECOND],
      films: [FILM_FIRST, FILM_SECOND],
      isShowButton: false,
      isDataLoaded: false,
    };

    expect(mainPage(state, loadPromoFilmAction))
      .toEqual({
        genre: Genres.ALL_GENRES,
        promoFilm: FILM_FIRST,
        allFilms: [FILM_FIRST, FILM_SECOND],
        films: [FILM_FIRST, FILM_SECOND],
        isShowButton: false,
        isDataLoaded: true,
      });
  });

  it('should set genre and filter films by genre', () => {
    const state = {
      genre: Genres.ALL_GENRES,
      promoFilm: FILM_FIRST,
      allFilms: [FILM_FIRST, FILM_SECOND],
      films: [FILM_FIRST, FILM_SECOND],
      isShowButton: false,
      isDataLoaded: true,
    };

    const changeFilterAction = {
      type: ActionType.CHANGE_FILTER,
      payload: Genres.ACTION,
    };

    expect(mainPage(state, changeFilterAction))
      .toEqual({
        genre: Genres.ACTION,
        promoFilm: FILM_FIRST,
        allFilms: [FILM_FIRST, FILM_SECOND],
        films: [FILM_SECOND],
        isShowButton: false,
        isDataLoaded: true,
      });
  });

  it('if all films more than FILM_COUNT it should increase films', () => {
    const state = {
      genre: Genres.ALL_GENRES,
      promoFilm: false,
      allFilms: [FILM_FIRST, FILM_SECOND, FILM_FIRST, FILM_SECOND, FILM_FIRST, FILM_SECOND, FILM_FIRST, FILM_SECOND, FILM_FIRST, FILM_SECOND],
      films: [FILM_FIRST, FILM_SECOND, FILM_FIRST, FILM_SECOND, FILM_FIRST, FILM_SECOND, FILM_FIRST, FILM_SECOND],
      isShowButton: true,
      isDataLoaded: false,
    };

    const showMoreAction = {
      type: ActionType.SHOW_MORE,
    };

    expect(mainPage(state, showMoreAction))
      .toEqual({
        genre: Genres.ALL_GENRES,
        promoFilm: false,
        allFilms: [FILM_FIRST, FILM_SECOND, FILM_FIRST, FILM_SECOND, FILM_FIRST, FILM_SECOND, FILM_FIRST, FILM_SECOND, FILM_FIRST, FILM_SECOND],
        films: [FILM_FIRST, FILM_SECOND, FILM_FIRST, FILM_SECOND, FILM_FIRST, FILM_SECOND, FILM_FIRST, FILM_SECOND, FILM_FIRST, FILM_SECOND],
        isShowButton: false,
        isDataLoaded: false,
      });
  });

  it('reset films count to FILM_COUNT', () => {
    const state = {
      genre: Genres.ALL_GENRES,
      promoFilm: false,
      allFilms: [FILM_FIRST, FILM_SECOND, FILM_FIRST, FILM_SECOND, FILM_FIRST, FILM_SECOND, FILM_FIRST, FILM_SECOND, FILM_FIRST, FILM_SECOND],
      films: [FILM_FIRST, FILM_SECOND, FILM_FIRST, FILM_SECOND, FILM_FIRST, FILM_SECOND, FILM_FIRST, FILM_SECOND, FILM_FIRST, FILM_SECOND],
      isShowButton: false,
      isDataLoaded: false,
    };

    const resetShowMoreAction = {
      type: ActionType.RESET_SHOW_MORE,
    };

    expect(mainPage(state, resetShowMoreAction))
      .toEqual({
        genre: Genres.ALL_GENRES,
        promoFilm: false,
        allFilms: [FILM_FIRST, FILM_SECOND, FILM_FIRST, FILM_SECOND, FILM_FIRST, FILM_SECOND, FILM_FIRST, FILM_SECOND, FILM_FIRST, FILM_SECOND],
        films: [FILM_FIRST, FILM_SECOND, FILM_FIRST, FILM_SECOND, FILM_FIRST, FILM_SECOND, FILM_FIRST, FILM_SECOND],
        isShowButton: true,
        isDataLoaded: false,
      });
  });
});
