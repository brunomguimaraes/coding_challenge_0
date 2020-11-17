import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Transactions from 'views/Transactions';

describe('Transactions View', () => {
  it('Should check if elements are all present', () => {
    render(<Transactions />);

    const headerElement = screen.getByText(/Fidel API/i);
    const tableHeaderElement = screen.getByText(/Amount/i);

    expect(headerElement).toBeInTheDocument();
    expect(tableHeaderElement).toBeInTheDocument();
  });
});
