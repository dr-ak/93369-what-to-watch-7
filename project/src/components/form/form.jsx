import React from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {createComment} from '../../store/api-actions';
import {changeRating, changeText, createComment as createCommentAction} from '../../store/actions/form';


const MAX_SCORE = 10;

const scores = new Array(MAX_SCORE).fill(0).map((val, index) => index + 1).reverse();

function Form({rating, comment, isDisabledFields, isDisabledSubmit, onSubmit, isSubmitError, disableForm}) {
  const filmId = useParams().id;
  const dispatch = useDispatch();
  const requestError = (
    <span style={{color: 'red'}}>
      Request error!
    </span>
  );

  const handleSubmit = (evt) => {
    evt.preventDefault();
    disableForm();
    onSubmit(filmId, {rating, comment});
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

Form.propTypes  = {
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  isDisabledFields: PropTypes.bool.isRequired,
  isDisabledSubmit: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isSubmitError: PropTypes.bool.isRequired,
  disableForm: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    rating: state.form.rating,
    comment: state.form.text,
    isDisabledFields: state.form.isDisabledFields,
    isDisabledSubmit: state.form.isDisabledSubmit,
    isSubmitError: state.form.isSubmitError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit(filmId, data) {
      dispatch(createComment(filmId, data));
    },
    disableForm() {
      dispatch(createCommentAction());
    },
  };
};

export {Form};
export default connect(mapStateToProps, mapDispatchToProps)(Form);
