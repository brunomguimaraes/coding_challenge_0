// import React so you can use JSX (React.createElement) in your test
import React from 'react';
import { render, screen } from '@testing-library/react';
import Transactions from '.';

test('Transactions View elements are all present', () => {
  render(<Transactions />);

  const headerElement = screen.getByText(/Fidel API/i);

  expect(headerElement).toBeInTheDocument();
});
