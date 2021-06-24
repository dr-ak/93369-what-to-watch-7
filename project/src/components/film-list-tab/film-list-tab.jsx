import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

function FilmListTab({genre, title}) {
  return (
    <li className={`catalog__genres-item ${genre === title && 'catalog__genres-item--active'}`} key={title}>
      <Link className="catalog__genres-link" to="/">{title}</Link>
    </li>
  );
}

FilmListTab.propTypes  = {
  genre: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default FilmListTab;
