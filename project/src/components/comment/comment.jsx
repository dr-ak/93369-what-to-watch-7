import React from 'react';

import CommentProp from './comment.prop';
import {formatCommentDate, formatDateTime} from '../../utils/format-time';

function Comment({comment}) {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment.comment}</p>
        <footer className="review__details">
          <cite className="review__author">{comment.userName}</cite>
          <time className="review__date" dateTime={formatDateTime(comment.date)}>{formatCommentDate(comment.date)}</time>
        </footer>
      </blockquote>
      <div className="review__rating">{comment.rating}</div>
    </div>
  );
}

Comment.propTypes = {
  comment: CommentProp,
};

export default Comment;
