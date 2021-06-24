import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import PropTypes from 'prop-types';

import FilmProp from '../film/film.prop';
import {ALL_GENRES, TAG_A_NAME} from '../../const';
import FilmList from '../film-list/film-list';
import FilmListTab from '../film-list-tab/film-list-tab';
import ShowMore from '../show-more/show-more';


const getGenres = (films) => {
  const genres = new Set();
  films.map((film) => genres.add(film.genre));
  return [ALL_GENRES, ...genres];
};

function Catalog({films, filmList, genre, changeFilter, setAllFilms}) {
  useEffect(() => {
    setAllFilms(films);
    changeFilter(ALL_GENRES);
  }, [films, setAllFilms, changeFilter]);

  const tabClickHandler = (evt) => {
    const newGenre = evt.target.innerText;

    if (evt.target.tagName !== TAG_A_NAME || newGenre === genre) {
      return;
    }

    evt.preventDefault();

    changeFilter(newGenre);
  };

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <ul className="catalog__genres-list" onClick={tabClickHandler}>
        {getGenres(films).map((title) => <FilmListTab title={title} genre={genre} key={title} />)}
      </ul>
      <FilmList films={filmList} />
      <ShowMore />
    </section>
  );
}

Catalog.propTypes  = {
  films: PropTypes.arrayOf(FilmProp),
  filmList: PropTypes.arrayOf(FilmProp),
  genre: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
  setAllFilms: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    genre: state.genre,
    filmList: state.films,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeFilter(genre) {
      dispatch(ActionCreator.changeFilter(genre));
    },

    setAllFilms(films) {
      dispatch(ActionCreator.setAllFilms(films));
    },
  };
};

export {Catalog};
export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
