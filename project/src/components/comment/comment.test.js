import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Comment from './comment';
import {formatCommentDate} from '../../utils/format-time';

const COMMENT = {
  id: 15,
  userId: 14,
  userName: 'Corey',
  rating: 8.3,
  text: 'The editing is a mess, and the transitions of the plot or characters are rather strange. There is no narrative focus and the storytelling is unbalanced. I cannot really understand why such a bad movie received an overwhelming approval from the critics. ',
  date: '2021-05-15T09:55:44.868Z',
};

describe('Comment component', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Comment comment={COMMENT}/>
      </Router>,
    );

    expect(screen.getByText(COMMENT.userName)).toBeInTheDocument();
    expect(screen.getByText(formatCommentDate(COMMENT.date))).toBeInTheDocument();
  });
});
