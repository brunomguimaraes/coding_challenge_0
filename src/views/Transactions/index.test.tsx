// import React so you can use JSX (React.createElement) in your test
import React from 'react';
import { render, screen } from '@testing-library/react';
import Transactions from '.';

test('Transactions View elements are all present', () => {
  render(<Transactions />);

  const headerElement = screen.getByText(/Fidel API/i);
  const showMoreButton = screen.getByTestId('show-more-button');

  expect(headerElement).toBeInTheDocument();
  expect(showMoreButton).toBeInTheDocument();
});
