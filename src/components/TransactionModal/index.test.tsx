import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TransactionModal from '.';

const data = {
  amount: '23',
  key: '1',
  lastNumbers: '6666',
  scheme: 'mastercard',
  currency: 'BRL',
  date: 'Wed Sep 27 2017 01:00:00 GMT+0100 (WEST)',
  id: '2',
  address: 'Elm Street, New Salvador',
  postcode: 'GGWP',
  city: 'Wool City',
};
test('modal shows the children and a close button', () => {
  const handleClose = jest.fn();

  render(<TransactionModal handleClose={handleClose} show data={data} />);
  const closeButton = screen.getByTestId('close-button');

  fireEvent.click(closeButton);
  expect(handleClose).toHaveBeenCalledTimes(1);
});
