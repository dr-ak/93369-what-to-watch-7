import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../services/api';
import {ActionType as FilmsActionType} from './actions/main-page';
import {ActionType as FilmActionType} from './actions/film';
import {ActionType as UserActionType} from './actions/user';
import {ActionType as MyListActionType} from './actions/my-list';
import {ActionType as RedirectActionType} from './actions/redirect';
import {ActionType as FormActionType} from './actions/form';
import {
  checkAuth, login, logout,
  fetchFilms, fetchPromoFilm,
  fetchFilm, fetchSimilarFilms, fetchComments, createComment,
  fetchFavoriteFilms, changeFavoriteStatus
} from './api-actions';
import {AuthorizationStatus, APIRoute} from '../const';
import {AppRoute} from '../const';

const FILM_ID = 2;

const STATUS = 1;

const RATING = 5;

const SERVER_FILM = {
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

const CLIENT_FILM = {
  'backgroundColor': '#D6CDAF',
  'backgroundImage': 'https://7.react.pages.academy/static/film/background/Aviator.jpg',
  'description': 'A biopic depicting the early years of legendary Director and aviator Howard Hughes\' career from the late 1920s to the mid 1940s.',
  'director': 'Martin Scorsese',
  'genre': 'Drama',
  'id': 2,
  'isFavorite': false,
  'name': 'Aviator',
  'posterImage': 'https://7.react.pages.academy/static/film/poster/Aviator.jpg',
  'previewImage': 'https://7.react.pages.academy/static/film/preview/aviator.jpg',
  'previewVideoLink': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  'rating': 9.8,
  'released': 2014,
  'runTime': 170,
  'scoresCount': 307174,
  'starring': [
    'Leonardo DiCaprio',
    'Cate Blanchett',
    'Kate Beckinsale',
  ],
  'videoLink': 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
};

const SERVER_COMMENT = {
  'id': 15,
  'user': {
    'id': 14,
    'name': 'Corey',
  },
  'rating': 8.3,
  'comment': 'The editing is a mess, and the transitions of the plot or characters are rather strange. There is no narrative focus and the storytelling is unbalanced. I cannot really understand why such a bad movie received an overwhelming approval from the critics. ',
  'date': '2021-05-15T09:55:44.868Z',
};

const CLIENT_COMMENT = {
  id: 15,
  userId: 14,
  userName: 'Corey',
  rating: 8.3,
  text: 'The editing is a mess, and the transitions of the plot or characters are rather strange. There is no narrative focus and the storytelling is unbalanced. I cannot really understand why such a bad movie received an overwhelming approval from the critics. ',
  date: '2021-05-15T09:55:44.868Z',
};

let api = null;

describe('Async operations', () => {
  beforeAll(() => {
    api = createAPI(() => {});
  });

  it('should make a correct API call to GET /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, [{fake: true}]);

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: UserActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it('should make a correct API call to POST /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {email: 'test@test.ru', password: '123456'};
    const loginLoader = login(fakeUser);

    apiMock
      .onPost(APIRoute.LOGIN)
      .reply(200, [{fake: true}]);

    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: UserActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it('should make a correct API call to DELETE /logout', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const logoutLoader = logout();

    Storage.prototype.removeItem = jest.fn();

    apiMock
      .onDelete(APIRoute.LOGOUT)
      .reply(204, [{fake: true}]);

    return logoutLoader(dispatch, jest.fn(() => {}), api)
      .then(() => {
        expect(dispatch).toBeCalledTimes(1);
        expect(dispatch).nthCalledWith(1, {
          type: UserActionType.LOGOUT,
        });

        expect(Storage.prototype.removeItem).toBeCalledTimes(1);
        expect(Storage.prototype.removeItem).nthCalledWith(1, 'token');
      });
  });

  it('should make a correct API call to fetch films', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmLoader = fetchFilms();

    apiMock
      .onGet(APIRoute.FILMS)
      .reply(200, [SERVER_FILM, SERVER_FILM]);

    return filmLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: FilmsActionType.LOAD_FILMS,
          payload: [CLIENT_FILM, CLIENT_FILM],
        });
      });
  });

  it('should make a correct API call to fetch promo film', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const promoFilmLoader = fetchPromoFilm();

    apiMock
      .onGet(APIRoute.PROMO_FILM)
      .reply(200, SERVER_FILM);

    return promoFilmLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: FilmsActionType.LOAD_PROMO_FILM,
          payload: CLIENT_FILM,
        });
      });
  });

  it('should make a correct API call to fetch film', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmLoader = fetchFilm(FILM_ID);

    apiMock
      .onGet(APIRoute.FILM.replace(':id', FILM_ID))
      .reply(200, SERVER_FILM);

    return filmLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: FilmActionType.LOAD_FILM,
          payload: CLIENT_FILM,
        });
      });
  });

  it('should make a correct API call to fetch similar films', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const similarFilmsLoader = fetchSimilarFilms(FILM_ID);

    apiMock
      .onGet(APIRoute.SIMILAR_FILMS.replace(':id', FILM_ID))
      .reply(200, [SERVER_FILM, SERVER_FILM]);

    return similarFilmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: FilmActionType.LOAD_SIMILAR_FILMS,
          payload: [CLIENT_FILM, CLIENT_FILM],
        });
      });
  });

  it('should make a correct API call to fetch favorite films', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteFilmsLoader = fetchFavoriteFilms();

    apiMock
      .onGet(APIRoute.FAVORITE_FILMS)
      .reply(200, [SERVER_FILM, SERVER_FILM]);

    return favoriteFilmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: MyListActionType.LOAD_MY_LIST,
          payload: [CLIENT_FILM, CLIENT_FILM],
        });
      });
  });

  it('should make a correct API call to change favorite films status on main page', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteStatusChanger = changeFavoriteStatus({filmId: FILM_ID, status: STATUS, isFromMyPage: true});

    apiMock
      .onPost(APIRoute.CHANGE_STATUS_FILM.replace(':film_id', FILM_ID).replace(':status', STATUS))
      .reply(200, {...SERVER_FILM, 'is_favorite': true});

    return favoriteStatusChanger(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: FilmsActionType.LOAD_PROMO_FILM,
          payload: {...CLIENT_FILM, isFavorite: true},
        });
      });
  });

  it('should make a correct API call to change favorite films status on film page', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteStatusChanger = changeFavoriteStatus({filmId: FILM_ID, status: STATUS, isFromMyPage: false});

    apiMock
      .onPost(APIRoute.CHANGE_STATUS_FILM.replace(':film_id', FILM_ID).replace(':status', STATUS))
      .reply(200, {...SERVER_FILM, 'is_favorite': true});

    return favoriteStatusChanger(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: FilmActionType.LOAD_FILM,
          payload: {...CLIENT_FILM, isFavorite: true},
        });
      });
  });

  it('should make a correct API call to fetch film comments', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const commentsLoader = fetchComments(FILM_ID);

    apiMock
      .onGet(APIRoute.COMMENTS.replace(':film_id', FILM_ID))
      .reply(200, [SERVER_COMMENT, SERVER_COMMENT]);

    return commentsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: FilmActionType.LOAD_COMMENTS,
          payload: [CLIENT_COMMENT, CLIENT_COMMENT],
        });
      });
  });

  it('should make a correct API call to make film comment', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteStatusChanger = createComment(FILM_ID, {rating: RATING, comment: SERVER_COMMENT.comment});

    apiMock
      .onPost(APIRoute.COMMENTS.replace(':film_id', FILM_ID), {rating: RATING, comment: SERVER_COMMENT.comment})
      .reply(200, [SERVER_COMMENT, SERVER_COMMENT]);

    return favoriteStatusChanger(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: FilmActionType.LOAD_COMMENTS,
          payload: [CLIENT_COMMENT, CLIENT_COMMENT],
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: RedirectActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.FILM.replace(':id', FILM_ID),
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: FormActionType.RESET,
        });
      });
  });
});
