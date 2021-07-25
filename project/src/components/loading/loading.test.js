import {render, screen} from '@testing-library/react';
import React from 'react';
import Loading from './loading';

describe('Loading component', () => {
  it('should render correctly', () => {
    render(<Loading />);
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });
});
