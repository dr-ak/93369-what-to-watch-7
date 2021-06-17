import React from 'react';

import FilmProp from '../film/film.prop';

const Score = {
  BAD: {val: 3, name: 'Bad'},
  NORMAL: {val: 5, name: 'Normal'},
  GOOD: {val: 8, name: 'Good'},
  VERY_GOOD: {val: 10, name: 'Very good'},
  AWESOME: {name: 'Awesome'},
};

const getFilmScore = (filmRating) => {
  if (filmRating < Score.BAD.val) {
    return Score.BAD.name;
  }
  if (filmRating < Score.NORMAL.val) {
    return Score.NORMAL.name;
  }
  if (filmRating < Score.GOOD.val) {
    return Score.GOOD.name;
  }
  if (filmRating < Score.VERY_GOOD.val) {
    return Score.VERY_GOOD.name;
  }
  return Score.AWESOME.name;
};


function FilmOverview({film}) {
  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className="film-nav__item  film-nav__item--active">
            <a href="#" className="film-nav__link">Overview</a>
          </li>
          <li className="film-nav__item">
            <a href="#" className="film-nav__link">Details</a>
          </li>
          <li className="film-nav__item">
            <a href="#" className="film-nav__link">Reviews</a>
          </li>
        </ul>
      </nav>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getFilmScore(film.rating)}</span>
          <span className="film-rating__count">{film.scoresCount} ratings</span>
        </p>
      </div>
      <div className="film-card__text">
        <p>{film.description}</p>
        <p className="film-card__director"><strong>Director: {film.director}</strong></p>
        <p className="film-card__starring"><strong>Starring: {film.starring.join(', ')}</strong></p>
      </div>
    </div>
  );
}

FilmOverview.propTypes = {
  film: FilmProp,
};

export default FilmOverview;
