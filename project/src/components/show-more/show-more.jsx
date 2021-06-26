import React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import PropTypes from 'prop-types';

function ShowMore({showMore}) {
  const showMoreButtonClick = (evt) => {
    evt.preventDefault();
    showMore();
  };

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={showMoreButtonClick}>Show more</button>
    </div>
  );
}

ShowMore.propTypes  = {
  showMore: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    showMore() {
      dispatch(ActionCreator.showMore());
    },
  };
};

export {ShowMore};
export default connect(null, mapDispatchToProps)(ShowMore);
