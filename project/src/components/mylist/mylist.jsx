import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import Header from '../header/header';
import FilmList from '../film-list/film-list';
import Footer from '../footer/footer';
import Loading from '../loading/loading';
import {getMyList} from '../../store/selectors/my-list';
import {loadMyList} from '../../store/actions/my-list';
import {fetchFavoriteFilms} from '../../store/api-actions';

function MyList() {

  const dispatch = useDispatch();

  const films = useSelector(getMyList);

  useEffect(() => {
    if (!films) {
      dispatch(fetchFavoriteFilms());
    }

    return () => {
      if (films) {
        dispatch(loadMyList(false));
      }
    };
  }, [films, dispatch]);


  if (!films) {
    return <Loading />;
  }

  return (
    <div className="user-page">
      <Header />
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmList films={films} />
      </section>
      <Footer />
    </div>
  );
}

export default MyList;
