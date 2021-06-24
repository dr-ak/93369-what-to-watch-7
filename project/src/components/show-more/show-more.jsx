import React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import PropTypes from 'prop-types';

import FilmProp from '../film/film.prop';

function ShowMore({count, filmList, showMore}) {
  const showMoreButtonClick = (evt) => {
    // console.log("DDDDDDD")
    showMore();
  };

  return (
    <div className={`catalog__more ${count < filmList.length && 'visually-hidden'}`}>
      <button className="catalog__button" type="button" onClick={showMoreButtonClick}>Show more</button>
    </div>
  );
}

ShowMore.propTypes  = {
  count: PropTypes.number.isRequired,
  filmList: PropTypes.arrayOf(FilmProp),
  showMore: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    count: state.count,
    filmList: state.films,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showMore() {
      dispatch(ActionCreator.incCount());
    },
  };
};

export {ShowMore};
export default connect(mapStateToProps, mapDispatchToProps)(ShowMore);
