import React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import PropTypes from 'prop-types';

function ShowMore({isShowButton, showMore}) {
  const showMoreButtonClick = (evt) => {
    evt.preventDefault();
    showMore();
  };

  return (
    <div className={`catalog__more ${!isShowButton && 'visually-hidden'}`}>
      <button className="catalog__button" type="button" onClick={showMoreButtonClick}>Show more</button>
    </div>
  );
}

ShowMore.propTypes  = {
  isShowButton: PropTypes.bool.isRequired,
  showMore: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    isShowButton: state.isShowButton,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showMore() {
      dispatch(ActionCreator.showMore());
    },
  };
};

export {ShowMore};
export default connect(mapStateToProps, mapDispatchToProps)(ShowMore);
