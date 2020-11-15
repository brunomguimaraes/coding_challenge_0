// import React so you can use JSX (React.createElement) in your test
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '.';

test('App renders properly', () => {
  render(<App />);

  const headerElement = screen.getByText(/Fidel API/i);

  expect(headerElement).toBeInTheDocument();
});
