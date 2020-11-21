import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from 'views/NotFound';
import { BrowserRouter } from 'react-router-dom';

test('NotFound 404 view renders properly', () => {
  render(
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>
  );
  const headerElement = screen.getByText(/404 - Not Found!/i);
  const linkElement = screen.getByText(/Go to Home/i);
  expect(headerElement).toBeInTheDocument();
  expect(linkElement).toBeInTheDocument();
});
