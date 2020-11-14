import React from 'react';
import { render, screen } from '@testing-library/react';
import TransactionsTable from '.';

test('TransactionsTable render with two transactions', () => {
  const transactions = [
    {
      amount: 23.9231321551,
      card: {
        id: '1',
        lastNumbers: '6666',
        scheme: 'mastercard',
      },
      currency: 'BRL',
      datetime: 'Wed Sep 27 2017 01:00:00 GMT+0100 (WEST)',
      id: '2',
      location: {
        address: 'Elm Street, New Salvador',
        id: '3',
      },
    },
    {
      amount: 990.2138328,
      card: {
        id: '22',
        lastNumbers: '7777',
        scheme: 'visa',
      },
      currency: 'USD',
      datetime: 'Fri Nov 13 2020 05:32:00 GMT+0100 (WEST)',
      id: '4',
      location: {
        address: 'Ohm Street, New California',
        id: '23',
      },
    },
  ];
  render(<TransactionsTable transactions={transactions} isLoading={false} />);
  const schemeRow = screen.getByTestId('4-scheme-tid');
  const cardNumberRow = screen.getByTestId('4-number-tid');
  const amountRow = screen.getByTestId('4-amount-tid');
  const addressRow = screen.getByTestId('4-address-tid');
  const dateRow = screen.getByTestId('4-date-tid');

  expect(schemeRow).toBeInTheDocument();
  expect(cardNumberRow).toBeInTheDocument();
  expect(amountRow).toBeInTheDocument();
  expect(addressRow).toBeInTheDocument();
  expect(dateRow).toBeInTheDocument();

  expect(schemeRow).toHaveTextContent('visa');
  expect(cardNumberRow).toHaveTextContent('•••• 7777');
  expect(amountRow).toHaveTextContent('$990.21');
  expect(addressRow).toHaveTextContent('Ohm Street, New California');
  expect(dateRow).toHaveTextContent('2020-11-13');
});