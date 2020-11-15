import React from 'react';
import { render, screen } from '@testing-library/react';
import Loading from '.';

test('Loading renders properly', () => {
  render(<Loading title="Loading..." />);
  const LoadingTitle = screen.getByText(/Loading.../i);

  expect(LoadingTitle).toBeInTheDocument();
});
