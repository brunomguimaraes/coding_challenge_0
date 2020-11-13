import React from 'react';
import { render } from '@testing-library/react';
import TransactionsTable from '.';

test('TransactionsTable render with only one transaction', () => {
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
  ];
  const comp = render(<TransactionsTable transactions={transactions} isLoading={false} />);
  const { container } = comp;
  const sampleTransactionRow = container.querySelector('[data-row-key="2"]');
  const cells = comp.getAllByRole('cell');

  expect(sampleTransactionRow).toBeInTheDocument();
  expect(cells).toHaveLength(5);
  expect(cells[0].textContent).toBe('mastercard');
  expect(cells[1].textContent).toBe('**** **** **** 6666');
  expect(cells[2].textContent).toBe('R$23.92');
  expect(cells[3].textContent).toBe('Elm Street, New Salvador');
  expect(cells[4].textContent).toBe('2017-09-26');
});

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
  const comp = render(<TransactionsTable transactions={transactions} isLoading={false} />);
  const { container } = comp;
  const firstTransactionRow = container.querySelector('[data-row-key="2"]');
  const secondTransactionRow = container.querySelector('[data-row-key="4"]');
  const cells = comp.getAllByRole('cell');

  expect(firstTransactionRow).toBeInTheDocument();
  expect(secondTransactionRow).toBeInTheDocument();
  expect(cells).toHaveLength(10);
  expect(cells[0].textContent).toBe('mastercard');
  expect(cells[1].textContent).toBe('**** **** **** 6666');
  expect(cells[2].textContent).toBe('R$23.92');
  expect(cells[3].textContent).toBe('Elm Street, New Salvador');
  expect(cells[4].textContent).toBe('2017-09-26');
  expect(cells[5].textContent).toBe('visa');
  expect(cells[6].textContent).toBe('**** **** **** 7777');
  expect(cells[7].textContent).toBe('$990.21');
  expect(cells[8].textContent).toBe('Ohm Street, New California');
  expect(cells[9].textContent).toBe('2020-11-13');
});
