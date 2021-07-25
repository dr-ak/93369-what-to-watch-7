import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Footer from './footer';

const COPYRIGHT = '© 2019 What to watch Ltd.';

describe('Footer component', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Footer />
      </Router>,
    );

    expect(screen.getByText(COPYRIGHT)).toBeInTheDocument();
  });
});
