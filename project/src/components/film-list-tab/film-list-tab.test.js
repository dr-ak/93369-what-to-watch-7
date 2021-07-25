import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import FilmListTab from './film-list-tab';

const GENRE = 'Action';

describe('Film tab component', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <FilmListTab genre={GENRE} title={GENRE}/>
      </Router>,
    );

    expect(screen.getByText(GENRE)).toBeInTheDocument();
  });

});
