import film from './film';
import {ActionType} from '../actions/film';

const FILM = {
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

const COMMENT = {
  'id': 15,
  'user': {
    'id': 14,
    'name': 'Corey',
  },
  'rating': 8.3,
  'comment': 'The editing is a mess, and the transitions of the plot or characters are rather strange. There is no narrative focus and the storytelling is unbalanced. I cannot really understand why such a bad movie received an overwhelming approval from the critics. ',
  'date': '2021-05-15T09:55:44.868Z',
};

describe('Film reducer', () => {
  it('without additional parameters should return initial state', () => {
    expect(film(undefined, {}))
      .toEqual({
        film: false,
        similarFilms: false,
        comments: false,
        isDataLoaded: false,
        isNotFoundPage: false,
      });
  });

  it('should load film and if another data was louded isDataLoaded shold be true', () => {
    let state = {
      film: false,
      similarFilms: false,
      comments: false,
      isDataLoaded: false,
      isNotFoundPage: false,
    };

    const loadFilmAction = {
      type: ActionType.LOAD_FILM,
      payload: FILM,
    };

    expect(film(state, loadFilmAction))
      .toEqual({
        film: FILM,
        similarFilms: false,
        comments: false,
        isDataLoaded: false,
        isNotFoundPage: false,
      });

    state = {
      film: false,
      similarFilms: [FILM, FILM],
      comments: false,
      isDataLoaded: false,
      isNotFoundPage: false,
    };

    expect(film(state, loadFilmAction))
      .toEqual({
        film: FILM,
        similarFilms: [FILM, FILM],
        comments: false,
        isDataLoaded: false,
        isNotFoundPage: false,
      });

    state = {
      film: false,
      similarFilms: false,
      comments: [COMMENT, COMMENT],
      isDataLoaded: false,
      isNotFoundPage: false,
    };

    expect(film(state, loadFilmAction))
      .toEqual({
        film: FILM,
        similarFilms: false,
        comments: [COMMENT, COMMENT],
        isDataLoaded: false,
        isNotFoundPage: false,
      });

    state = {
      film: false,
      similarFilms: [FILM, FILM],
      comments: [COMMENT, COMMENT],
      isDataLoaded: false,
      isNotFoundPage: false,
    };

    expect(film(state, loadFilmAction))
      .toEqual({
        film: FILM,
        similarFilms: [FILM, FILM],
        comments: [COMMENT, COMMENT],
        isDataLoaded: true,
        isNotFoundPage: false,
      });
  });

  it('should load similar films and if another data was louded isDataLoaded shold be true', () => {
    let state = {
      film: false,
      similarFilms: false,
      comments: false,
      isDataLoaded: false,
      isNotFoundPage: false,
    };

    const loadSimilarFilmsAction = {
      type: ActionType.LOAD_SIMILAR_FILMS,
      payload: [FILM, FILM],
    };

    expect(film(state, loadSimilarFilmsAction))
      .toEqual({
        film: false,
        similarFilms: [FILM, FILM],
        comments: false,
        isDataLoaded: false,
        isNotFoundPage: false,
      });

    state = {
      film: FILM,
      similarFilms: false,
      comments: false,
      isDataLoaded: false,
      isNotFoundPage: false,
    };

    expect(film(state, loadSimilarFilmsAction))
      .toEqual({
        film: FILM,
        similarFilms: [FILM, FILM],
        comments: false,
        isDataLoaded: false,
        isNotFoundPage: false,
      });

    state = {
      film: false,
      similarFilms: false,
      comments: [COMMENT, COMMENT],
      isDataLoaded: false,
      isNotFoundPage: false,
    };

    expect(film(state, loadSimilarFilmsAction))
      .toEqual({
        film: false,
        similarFilms: [FILM, FILM],
        comments: [COMMENT, COMMENT],
        isDataLoaded: false,
        isNotFoundPage: false,
      });

    state = {
      film: FILM,
      similarFilms: false,
      comments: [COMMENT, COMMENT],
      isDataLoaded: false,
      isNotFoundPage: false,
    };

    expect(film(state, loadSimilarFilmsAction))
      .toEqual({
        film: FILM,
        similarFilms: [FILM, FILM],
        comments: [COMMENT, COMMENT],
        isDataLoaded: true,
        isNotFoundPage: false,
      });
  });

  it('should load comments and if another data was louded isDataLoaded shold be true', () => {
    let state = {
      film: false,
      similarFilms: false,
      comments: false,
      isDataLoaded: false,
      isNotFoundPage: false,
    };

    const loadSimilarFilmsAction = {
      type: ActionType.LOAD_COMMENTS,
      payload: [COMMENT, COMMENT],
    };

    expect(film(state, loadSimilarFilmsAction))
      .toEqual({
        film: false,
        similarFilms: false,
        comments: [COMMENT, COMMENT],
        isDataLoaded: false,
        isNotFoundPage: false,
      });

    state = {
      film: FILM,
      similarFilms: false,
      comments: false,
      isDataLoaded: false,
      isNotFoundPage: false,
    };

    expect(film(state, loadSimilarFilmsAction))
      .toEqual({
        film: FILM,
        similarFilms: false,
        comments: [COMMENT, COMMENT],
        isDataLoaded: false,
        isNotFoundPage: false,
      });

    state = {
      film: false,
      similarFilms: [FILM, FILM],
      comments: false,
      isDataLoaded: false,
      isNotFoundPage: false,
    };

    expect(film(state, loadSimilarFilmsAction))
      .toEqual({
        film: false,
        similarFilms: [FILM, FILM],
        comments: [COMMENT, COMMENT],
        isDataLoaded: false,
        isNotFoundPage: false,
      });

    state = {
      film: FILM,
      similarFilms: [FILM, FILM],
      comments: false,
      isDataLoaded: false,
      isNotFoundPage: false,
    };

    expect(film(state, loadSimilarFilmsAction))
      .toEqual({
        film: FILM,
        similarFilms: [FILM, FILM],
        comments: [COMMENT, COMMENT],
        isDataLoaded: true,
        isNotFoundPage: false,
      });
  });

  it('should set not found page', () => {
    const state = {
      film: false,
      similarFilms: false,
      comments: false,
      isDataLoaded: false,
      isNotFoundPage: false,
    };

    const notFoundPageAction = {
      type: ActionType.NOT_FOUND_PAGE,
    };

    expect(film(state, notFoundPageAction))
      .toEqual({
        film: false,
        similarFilms: false,
        comments: false,
        isDataLoaded: false,
        isNotFoundPage: true,
      });
  });
});
