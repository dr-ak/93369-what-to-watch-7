import {ActionCreator as MainPageActionCreator} from './actions/main-page';
import {ActionCreator as UserActionCreator} from './actions/user';
import {ActionCreator as FilmActionCreator} from './actions/film';
import {reset, createCommentError} from './actions/form';
import {AuthorizationStatus, APIRoute} from '../const';
import {adaptFilmToClient, adaptCommentToClient} from '../adapters';
import {redirectToRoute} from './actions/redirect';
import {AppRoute} from '../const';

const NOT_FOUND_PAGE = 'code 404';

export const fetchFilms = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => dispatch(MainPageActionCreator.loadFilms(data.map((film) => adaptFilmToClient(film)))))
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO_FILM)
    .then(({data}) => dispatch(MainPageActionCreator.loadPromoFilm(adaptFilmToClient(data))))
);

export const fetchFilm = (filmId) => (dispatch, _getState, api) => (
  api.get(APIRoute.FILM.replace(':id', filmId))
    .then(({data}) => dispatch(FilmActionCreator.loadFilm(adaptFilmToClient(data))))
    .catch((error) => {
      if (error.toString().includes(NOT_FOUND_PAGE)) {
        dispatch(FilmActionCreator.setNotFoundPage());
      }
    })
);

export const fetchSimilarFilms = (filmId) => (dispatch, _getState, api) => (
  api.get(APIRoute.SIMILAR_FILMS.replace(':id', filmId))
    .then(({data}) => dispatch(FilmActionCreator.loadSimilarFilms(data.map((film) => adaptFilmToClient(film)))))
);

export const fetchComments = (filmId) => (dispatch, _getState, api) => (
  api.get(APIRoute.COMMENTS.replace(':film_id', filmId))
    .then(({data}) => dispatch(FilmActionCreator.loadComments(data.map((comment) => adaptCommentToClient(comment)))))
);


export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(UserActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => localStorage.setItem('token', data.token))
    .then(() => dispatch(UserActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(UserActionCreator.logout()))
);

export const createComment = (filmId, newComment) => (dispatch, _getState, api) => (
  api.post(APIRoute.COMMENTS.replace(':film_id', filmId), newComment)
    .then(({data}) => dispatch(FilmActionCreator.loadComments(data.map((elem) => adaptCommentToClient(elem)))))
    .then(() => dispatch(redirectToRoute(AppRoute.FILM.replace(':id', filmId))))
    .then(() => dispatch(reset()))
    .catch(() => dispatch(createCommentError()))
);
