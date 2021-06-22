import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import PropTypes from 'prop-types';

import FilmProp from '../film/film.prop';
import {ALL_GENRES, TAG_A_NAME} from '../../const';
import FilmList from '../film-list/film-list';


const getGenres = (films) => [ALL_GENRES, ...Object.keys(films.reduce((acc, film) => {
  acc[film.genre] = null;
  return acc;
}, []))];


function Catalog({films, filmList, genre, onFilteredFilmList, onAllFilmList}) {

  const showGenreNavTabs = (title) => (
    <li className={`catalog__genres-item ${genre === title && 'catalog__genres-item--active'}`} key={title}>
      <Link className="catalog__genres-link" to="/">{title}</Link>
    </li>
  );

  const tabClickHandler = (evt) => {
    const newGenre = evt.target.innerText;

    if (evt.target.tagName !== TAG_A_NAME || newGenre === genre) {
      return;
    }

    evt.preventDefault();

    if (newGenre === ALL_GENRES) {
      onAllFilmList();
    } else {
      onFilteredFilmList(newGenre);
    }
  };

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <ul className="catalog__genres-list" onClick={tabClickHandler}>
        {getGenres(films).map(showGenreNavTabs)}
      </ul>
      <FilmList films={filmList} />
      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
}

Catalog.propTypes  = {
  films: PropTypes.arrayOf(FilmProp),
  filmList: PropTypes.arrayOf(FilmProp),
  genre: PropTypes.string.isRequired,
  onFilteredFilmList: PropTypes.func.isRequired,
  onAllFilmList: PropTypes.func.isRequired,

};

const mapStateToProps = (state) => {
  return {
    genre: state.genre,
    filmList: state.films,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFilteredFilmList(genre) {
      dispatch(ActionCreator.setFilter(genre));
    },
    onAllFilmList() {
      dispatch(ActionCreator.resetFilter());
    },
  };
};

export {Catalog};
export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
