import React, {useState} from 'react';

const MAX_SCORE = 10;
const DEFAULT_CHECKED = 8;

const rating = new Array(MAX_SCORE).fill(0).map((val, index) => index + 1).reverse();

function Form() {
  const[post, setPost] = useState({rating: 8});

  return (
    <form action="#" className="add-review__form"
      onChange={(evt) => {
        if (evt.target.tagName === 'INPUT') {
          setPost({ ...post, rating: Number(evt.target.value) });
        } else if (evt.target.tagName === 'TEXTAREA') {
          setPost({ ...post, comment: evt.target.value });
        }
      }}
    >
      <div className="rating">
        <div className="rating__stars">
          {rating.map((score) => (
            <React.Fragment key={score}>
              <input className="rating__input" id={`star-${score}`} type="radio" name="rating" defaultChecked={DEFAULT_CHECKED === score} />
              <label className="rating__label" htmlFor={`star-${score}`}>Rating {score}</label>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" defaultValue={''} />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
}

export default Form;
