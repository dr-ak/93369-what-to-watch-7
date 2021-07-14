import React from 'react';
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import {createComment} from '../../store/api-actions';
import {changeRating, changeText, createComment as createCommentAction} from '../../store/actions/form';
import {getRating, getText, getFieldsStatus, getSubmitStatus, getSubmitErrorStatus} from '../../store/selectors/form';

const MAX_SCORE = 10;

const scores = new Array(MAX_SCORE).fill(0).map((val, index) => index + 1).reverse();

function Form() {
  const filmId = useParams().id;

  const dispatch = useDispatch();

  const rating = useSelector(getRating);
  const comment = useSelector(getText);
  const isDisabledFields = useSelector(getFieldsStatus);
  const isDisabledSubmit = useSelector(getSubmitStatus);
  const isSubmitError = useSelector(getSubmitErrorStatus);

  const requestError = (
    <span style={{color: 'red'}}>
      Request error!
    </span>
  );

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(createCommentAction());
    dispatch(createComment(filmId, {rating, comment}));
  };

  return (
    <form action="#" className="add-review__form"
      onChange={(evt) => {
        if (evt.target.tagName === 'INPUT') {
          dispatch(changeRating(Number(evt.target.value)));
        }

        if (evt.target.tagName === 'TEXTAREA') {
          dispatch(changeText(evt.target.value));
        }
      }}
    >
      <div className="rating">
        <div className="rating__stars">
          {scores.map((score) => (
            <React.Fragment key={score}>
              <input className="rating__input" id={`star-${score}`} type="radio" name="rating" value={score} defaultChecked={rating === score} disabled={isDisabledFields}/>
              <label className="rating__label" htmlFor={`star-${score}`}>Rating {score}</label>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" defaultValue={comment} disabled={isDisabledFields}/>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" onClick={handleSubmit} disabled={isDisabledSubmit}>Post</button>
        </div>
      </div>
      {isSubmitError && requestError}
    </form>
  );
}

export default Form;
