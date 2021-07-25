import React, {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import Header from '../header/header';
import FilmTabs from '../film-tabs/film-tabs';
import FilmList from '../film-list/film-list';
import Footer from '../footer/footer';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Loading from '../loading/loading';
import {changeFavoriteStatus} from '../../store/api-actions';
import {getFilm, getSimilarFilms, getComments, getLoadDataStatus, getNotFoundPageStatus} from '../../store/selectors/film';
import {fetchFilm, fetchSimilarFilms, fetchComments} from '../../store/api-actions';
import {getAuthorizationStatus} from '../../store/selectors/user';
import {redirectToRoute} from '../../store/actions/redirect';
import {AppRoute, AuthorizationStatus} from '../../const';

function Film() {

  const dispatch = useDispatch();

  const filmId = useParams().id;

  const authorizationStatus = useSelector(getAuthorizationStatus);
  const film = useSelector(getFilm);
  const similarFilms = useSelector(getSimilarFilms);
  const comments = useSelector(getComments);
  const isDataLoaded = useSelector(getLoadDataStatus);
  const isNotFoundPage = useSelector(getNotFoundPageStatus);

  useEffect(() => {
    if (!isDataLoaded) {
      dispatch(fetchFilm(filmId));
      dispatch(fetchSimilarFilms(filmId));
      dispatch(fetchComments(filmId));
    }
  }, [filmId, dispatch, isDataLoaded]);

  if (isNotFoundPage) {
    return <NotFoundScreen />;
  }

  if (!isDataLoaded) {
    return <Loading />;
  }

  const {backgroundImage, name, genre, released, id, posterImage, isFavorite} = film;

  const addReviewButton = (<Link className="btn film-card__button" to={AppRoute.FILM_REVIEW.replace(':id', id)}>Add review</Link>);

  const myListButtonClickHandler = () => {
    if (authorizationStatus !== AuthorizationStatus.AUTH) {
      dispatch(redirectToRoute(AppRoute.LOGIN));
    }
    dispatch(changeFavoriteStatus({filmId: id, status: isFavorite ? 0 : 1}));
  };

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <Header />
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>
              <div className="film-card__buttons">
                <Link to={AppRoute.PLAYER.replace(':id', id)} className="btn btn--play film-card__button">
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </Link>
                <button className="btn btn--list film-card__button" type="button" onClick={myListButtonClickHandler}>
                  <svg viewBox="0 0 19 20" width={19} height={20}>
                    <use xlinkHref={`#${isFavorite ? 'in-list' : 'add'}`} />
                  </svg>
                  <span>My list</span>
                </button>
                {authorizationStatus === AuthorizationStatus.AUTH && addReviewButton}
              </div>
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={posterImage} alt={name} width={218} height={327} />
            </div>
            <FilmTabs film={film} comments={comments} />
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmList films={similarFilms} />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default Film;
