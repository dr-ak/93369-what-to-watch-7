import React from 'react';

import {formatRuntime} from '../../utils/format-time';
import FilmProp from '../film/film.prop';

function FilmDetails({film}) {
  const starring = film.starring.join(', :').split(' :').map((star, index) =>
    (<React.Fragment key={star}>{star}{index !== film.starring.length - 1 && (<br/>)}</React.Fragment>));

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className="film-nav__item">
            <a href="#" className="film-nav__link">Overview</a>
          </li>
          <li className="film-nav__item film-nav__item--active">
            <a href="#" className="film-nav__link">Details</a>
          </li>
          <li className="film-nav__item">
            <a href="#" className="film-nav__link">Reviews</a>
          </li>
        </ul>
      </nav>
      <div className="film-card__text film-card__row">
        <div className="film-card__text-col">
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Director</strong>
            <span className="film-card__details-value">{film.director}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Starring</strong>
            <span className="film-card__details-value">
              {starring}
            </span>
          </p>
        </div>
        <div className="film-card__text-col">
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Run Time</strong>
            <span className="film-card__details-value">{formatRuntime(film.runTime)}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Genre</strong>
            <span className="film-card__details-value">{film.genre}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Released</strong>
            <span className="film-card__details-value">{film.released}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

FilmDetails.propTypes = {
  film: FilmProp,
};

export default FilmDetails;
