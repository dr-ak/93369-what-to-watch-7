import React from 'react';

import FilmProp from '../film/film.prop';

const Score = {
  BAD: {val: 3, name: 'Bad'},
  NORMAL: {val: 5, name: 'Normal'},
  GOOD: {val: 8, name: 'Good'},
  VERY_GOOD: {val: 10, name: 'Very good'},
  AWESOME: {name: 'Awesome'},
};


function FilmOverview({film}) {
  let filmScore = Score.AWESOME.name;
  if (film.rating < Score.BAD.val) {
    filmScore = Score.BAD.name;
  } else if (film.rating < Score.NORMAL.val) {
    filmScore = Score.NORMAL.name;
  } else if (film.rating < Score.GOOD.val) {
    filmScore = Score.GOOD.name;
  } else if (film.rating < Score.VERY_GOOD.val) {
    filmScore = Score.VERY_GOOD.name;
  }

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
          <span className="film-rating__level">{filmScore}</span>
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
