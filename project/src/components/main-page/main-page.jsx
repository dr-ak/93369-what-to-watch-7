import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';

import Header from '../header/header';
import Catalog from '../catalog/catalog';
import Footer from '../footer/footer';
import {getPromoFilm} from '../../store/selectors/main-page';
import {getAuthorizationStatus} from '../../store/selectors/user';
import {redirectToRoute} from '../../store/actions/redirect';
import {changeFavoriteStatus} from '../../store/api-actions';
import {AppRoute, AuthorizationStatus} from '../../const';

function MainPage() {
  const dispatch = useDispatch();

  const authorizationStatus = useSelector(getAuthorizationStatus);
  const promoFilm = useSelector(getPromoFilm);

  const {id, backgroundImage, name, posterImage, genre, released, isFavorite} = promoFilm;

  const myListButtonClickHandler = () => {
    if (authorizationStatus !== AuthorizationStatus.AUTH) {
      dispatch(redirectToRoute(AppRoute.LOGIN));
    }
    dispatch(changeFavoriteStatus({filmId: id, status: isFavorite ? 0 : 1, isFromMyPage: true}));
  };

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <Header />
        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={posterImage} alt={name} width={218} height={327} />
            </div>
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
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <Catalog />
        <Footer />
      </div>
    </>
  );
}

export default MainPage;
