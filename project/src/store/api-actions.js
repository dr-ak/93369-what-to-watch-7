import {loadFilms, loadPromoFilm} from './actions/main-page';
import {requireAuthorization, logout as logoutAction} from './actions/user';
import {loadFilm, loadSimilarFilms, loadComments, setNotFoundPage} from './actions/film';
import {reset, createCommentError} from './actions/form';
import {AuthorizationStatus, APIRoute} from '../const';
import {adaptFilmToClient, adaptCommentToClient} from '../adapters';
import {redirectToRoute} from './actions/redirect';
import {AppRoute} from '../const';

const NOT_FOUND_PAGE = 'code 404';

export const fetchFilms = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => dispatch(loadFilms(data.map((film) => adaptFilmToClient(film)))))
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO_FILM)
    .then(({data}) => dispatch(loadPromoFilm(adaptFilmToClient(data))))
);

export const fetchFilm = (filmId) => (dispatch, _getState, api) => (
  api.get(APIRoute.FILM.replace(':id', filmId))
    .then(({data}) => dispatch(loadFilm(adaptFilmToClient(data))))
    .catch((error) => {
      if (error.toString().includes(NOT_FOUND_PAGE)) {
        dispatch(setNotFoundPage());
      }
    })
);

export const fetchSimilarFilms = (filmId) => (dispatch, _getState, api) => (
  api.get(APIRoute.SIMILAR_FILMS.replace(':id', filmId))
    .then(({data}) => dispatch(loadSimilarFilms(data.map((film) => adaptFilmToClient(film)))))
);

export const fetchComments = (filmId) => (dispatch, _getState, api) => (
  api.get(APIRoute.COMMENTS.replace(':film_id', filmId))
    .then(({data}) => dispatch(loadComments(data.map((comment) => adaptCommentToClient(comment)))))
);


export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => localStorage.setItem('token', data.token))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(logoutAction()))
);

export const createComment = (filmId, newComment) => (dispatch, _getState, api) => (
  api.post(APIRoute.COMMENTS.replace(':film_id', filmId), newComment)
    .then(({data}) => dispatch(loadComments(data.map((elem) => adaptCommentToClient(elem)))))
    .then(() => dispatch(redirectToRoute(AppRoute.FILM.replace(':id', filmId))))
    .then(() => dispatch(reset()))
    .catch(() => dispatch(createCommentError()))
);
