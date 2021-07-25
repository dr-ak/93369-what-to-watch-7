import {
  loadFilm,
  loadSimilarFilms,
  loadComments,
  setNotFoundPage,
  ActionType as FilmActionType
} from './film';

describe('Film actions', () => {
  it('action creator for loading film returns film object', () => {
    const expectedAction = {
      type: FilmActionType.LOAD_FILM,
      payload: {},
    };

    expect(loadFilm({})).toEqual(expectedAction);
  });

  it('action creator for loading similar films returns array of similar film objects', () => {
    const expectedAction = {
      type: FilmActionType.LOAD_SIMILAR_FILMS,
      payload: [{}, {}],
    };

    expect(loadSimilarFilms([{}, {}])).toEqual(expectedAction);
  });

  it('action creator for loading comments returns array of comment objects', () => {
    const expectedAction = {
      type: FilmActionType.LOAD_COMMENTS,
      payload: [{}, {}],
    };

    expect(loadComments([{}, {}])).toEqual(expectedAction);
  });

  it('action creator for setting not found page returns not found page action', () => {
    const expectedAction = {
      type: FilmActionType.NOT_FOUND_PAGE,
    };

    expect(setNotFoundPage()).toEqual(expectedAction);
  });
});
