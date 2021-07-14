import React from 'react';
import {useDispatch} from 'react-redux';
import {showMore} from '../../store/actions/main-page';

function ShowMore() {
  const dispatch = useDispatch();

  const showMoreButtonClick = (evt) => {
    evt.preventDefault();
    dispatch(showMore());
  };

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={showMoreButtonClick}>Show more</button>
    </div>
  );
}

export default ShowMore;
