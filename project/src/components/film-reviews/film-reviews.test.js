import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import FilmReviews from './film-reviews';

const COMMENTS = [
  {
    id: 15,
    userId: 14,
    userName: 'Corey',
    rating: 8.3,
    text: 'The editing is a mess, and the transitions of the plot or characters are rather strange. There is no narrative focus and the storytelling is unbalanced. I cannot really understand why such a bad movie received an overwhelming approval from the critics.',
    date: '2021-05-15T09:55:44.868Z',
  },
  {
    id: 16,
    userId: 15,
    userName: 'Jack',
    rating: 5.3,
    text: 'A movie that will take you to another world full of emotions.',
    date: '2021-05-15T09:55:44.868Z',
  },
];

describe('Film reviews component', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <FilmReviews comments={COMMENTS}/>
      </Router>,
    );

    expect(screen.getByText(COMMENTS[0].text)).toBeInTheDocument();
    expect(screen.getByText(COMMENTS[1].text)).toBeInTheDocument();
  });

});
