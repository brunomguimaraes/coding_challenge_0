import React from 'react';
import { render, screen } from '@testing-library/react';
import App from 'views/App';

test('App renders properly', () => {
  render(<App />);

  const headerElement = screen.getByText(/Fidel API/i);

  expect(headerElement).toBeInTheDocument();
});
