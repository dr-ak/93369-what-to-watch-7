import React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/actions/main-page';
import PropTypes from 'prop-types';

import FilmProp from '../film/film.prop';
import {ALL_GENRES, TAG_A_NAME} from '../../const';
import FilmList from '../film-list/film-list';
import FilmListTab from '../film-list-tab/film-list-tab';
import ShowMore from '../show-more/show-more';


const getGenres = (films) => [ALL_GENRES, ...new Set(films.map((film) => film.genre))];

function Catalog({films, allFilms, genre, changeFilter, isShowButton}) {
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
        {getGenres(allFilms).map((title) => <FilmListTab title={title} genre={genre} key={title} />)}
      </ul>
      <FilmList films={films} />
      {isShowButton && <ShowMore />}
    </section>
  );
}

Catalog.propTypes  = {
  films: PropTypes.arrayOf(FilmProp),
  allFilms: PropTypes.arrayOf(FilmProp),
  genre: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
  isShowButton: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    genre: state.mainPage.genre,
    promoFilm: state.mainPage.promoFilm,
    films: state.mainPage.films,
    allFilms: state.mainPage.allFilms,
    isShowButton: state.mainPage.isShowButton,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeFilter(genre) {
      dispatch(ActionCreator.changeFilter(genre));
    },
  };
};

export {Catalog};
export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
