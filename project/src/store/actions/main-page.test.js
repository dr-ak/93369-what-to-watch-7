import {
  loadPromoFilm,
  loadFilms,
  changeFilter,
  showMore,
  resetShowMore,
  ActionType as MainPageActionType
} from './main-page';

const GENRE = 'All films';

describe('Main page actions', () => {
  it('action creator for loading film returns promo film object', () => {
    const expectedAction = {
      type: MainPageActionType.LOAD_PROMO_FILM,
      payload: {},
    };

    expect(loadPromoFilm({})).toEqual(expectedAction);
  });

  it('action creator for loading similar films returns array of film objects', () => {
    const expectedAction = {
      type: MainPageActionType.LOAD_FILMS,
      payload: [{}, {}],
    };

    expect(loadFilms([{}, {}])).toEqual(expectedAction);
  });

  it('action creator for loading similar films returns genre', () => {
    const expectedAction = {
      type: MainPageActionType.CHANGE_FILTER,
      payload: GENRE,
    };

    expect(changeFilter(GENRE)).toEqual(expectedAction);
  });

  it('action creator for setting not found page returns show more action', () => {
    const expectedAction = {
      type: MainPageActionType.SHOW_MORE,
    };

    expect(showMore()).toEqual(expectedAction);
  });

  it('action creator for setting not found page returns reset show more action', () => {
    const expectedAction = {
      type: MainPageActionType.RESET_SHOW_MORE,
    };

    expect(resetShowMore()).toEqual(expectedAction);
  });
});
