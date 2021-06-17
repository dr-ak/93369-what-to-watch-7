import React from 'react';
import {Link, useLocation, useParams} from 'react-router-dom';
import PropTypes from 'prop-types';

import {AppRoute} from '../../const';

const HeaderClass = {
  FILM_CARD: 'film-card__head',
  USER_PAGE: 'user-page__head',
};

function Header({filmName}) {
  const filmId = useParams().id;
  let {pathname} = useLocation();
  pathname = pathname.replace(filmId, ':id');
  let headerClass = HeaderClass.FILM_CARD;
  let myListTitle = null;
  let breadcrumbs = null;

  switch(pathname) {
    case AppRoute.MY_LIST:
      headerClass = HeaderClass.USER_PAGE;
      myListTitle = (<h1 className="page-title user-page__title">My list</h1>);
      break;
    case AppRoute.FILM_REVIEW:
      headerClass = '';
      breadcrumbs = (
        <nav className="breadcrumbs">
          <ul className="breadcrumbs__list">
            <li className="breadcrumbs__item">
              <Link className="breadcrumbs__link" to={`/films/${filmId}`}>{filmName}</Link>
            </li>
            <li className="breadcrumbs__item">
              <Link className="breadcrumbs__link" to={`/films/${filmId}/review`}>Add review</Link>
            </li>
          </ul>
        </nav>
      );
      break;
    default:
  }

  return (
    <header className={`page-header ${headerClass}`}>
      <div className="logo">
        <Link className="logo__link" to="/">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
      {myListTitle}
      {breadcrumbs}
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
          </div>
        </li>
        <li className="user-block__item">
          <a className="user-block__link">Sign out</a>
        </li>
      </ul>
    </header>
  );
}

Header.propTypes  = {
  filmName: PropTypes.string,
};

export default Header;
