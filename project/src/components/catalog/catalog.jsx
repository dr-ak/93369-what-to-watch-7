import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeFilter, resetShowMore} from '../../store/actions/main-page';

import {ALL_GENRES, TAG_A_NAME} from '../../const';
import FilmList from '../film-list/film-list';
import FilmListTab from '../film-list-tab/film-list-tab';
import ShowMore from '../show-more/show-more';
import {getFilms, getAllFilms, getGenre, getShowButtonState} from '../../store/selectors/main-page';


const getGenres = (films) => [ALL_GENRES, ...new Set(films.map((film) => film.genre))];

function Catalog() {
  const dispatch = useDispatch();

  const films = useSelector(getFilms);
  const allFilms = useSelector(getAllFilms);
  const genre = useSelector(getGenre);
  const isShowButton = useSelector(getShowButtonState);

  useEffect(() => {
    dispatch(resetShowMore());
  }, [dispatch]);

  const tabClickHandler = (evt) => {
    const newGenre = evt.target.innerText;

    if (evt.target.tagName !== TAG_A_NAME || newGenre === genre) {
      return;
    }

    evt.preventDefault();

    dispatch(changeFilter(newGenre));
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

export default Catalog;
