import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Transactions from 'views/Transactions';
import * as api from 'services/api';

const mockedApiResponse = [
  {
    currency: 'BRL',
    programId: '2314f371-39b1-4c80-8040-4144ff1bad09',
    id: '5f68d602-664a-493f-89d4-901a053077cb',
    accountId: 'd346d574-d5c2-4a0e-8e02-ffd713fd1a8d',
    created: '2017-06-16T17:15:25.866Z',
    updated: '2017-06-16T17:15:25.866Z',
    amount: 48.77943451477946,
    cleared: true,
    wallet: null,
    datetime: 'Wed Sep 27 2020 01:00:00 GMT+0100 (WEST)',
    card: {
      id: '61a401b5-5d92-402f-8d86-89dfa15b515b',
      lastNumbers: '4009',
      scheme: 'visa',
    },
    location: {
      address: 'Google Street 4',
      city: 'Angular4',
      countryCode: 'GBR',
      id: '3690099c-1970-4f96-891e-11f991ccce71',
      geolocation: null,
      postcode: 'NG-4',
      timezone: null,
      metadata: null,
    },
    brand: {
      id: '073f6cda-1846-42df-845a-2a28e9be10f9',
      name: null,
      logoURL: null,
      metadata: null,
    },
    identifiers: {
      MID: '770055002234',
      mastercardTransactionSequenceNumber: null,
      mastercardRefNumber: null,
      amexApprovalCode: null,
      visaAuthCode: null,
    },
  },
  {
    currency: 'GBP',
    programId: '2314f371-39b1-4c80-8040-4144ff1bad09',
    id: '1e96402f-bbef-4962-87b1-83763288d4ad',
    accountId: 'd346d574-d5c2-4a0e-8e02-ffd713fd1a8d',
    created: '2017-06-16T17:11:18.929Z',
    updated: '2017-06-16T17:11:18.929Z',
    amount: 12.200070802482522,
    cleared: true,
    wallet: null,
    datetime: 'Wed Sep 27 2017 01:00:00 GMT+0100 (WEST)',
    card: {
      id: '61a401b5-5d92-402f-8d86-89dfa15b515b',
      lastNumbers: '4019',
      scheme: 'visa',
    },
    location: {
      address: 'Google Street 4',
      city: 'Angular4',
      countryCode: 'GBR',
      id: '3690099c-1970-4f96-891e-11f991ccce71',
      geolocation: null,
      postcode: 'NG-4',
      timezone: null,
      metadata: null,
    },
    brand: {
      id: '073f6cda-1846-42df-845a-2a28e9be10f9',
      name: null,
      logoURL: null,
      metadata: null,
    },
    identifiers: {
      MID: '770055002234',
      mastercardTransactionSequenceNumber: null,
      mastercardRefNumber: null,
      amexApprovalCode: null,
      visaAuthCode: null,
    },
  },
];

beforeEach(() => {
  // IntersectionObserver isn't available in test environment
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

test('Render Properly', async () => {
  jest.spyOn(api, 'fetchTransactions').mockResolvedValue({
    data: { items: mockedApiResponse },
    status: 200,
    config: {},
    statusText: 'sucess',
    headers: {},
  });
  render(<Transactions />);
  const headerElement = screen.getByText(/Fidel API/i);

  expect(headerElement).toBeInTheDocument();
  expect(await screen.findByText('9/26/2017, 8:00:00 PM, (GMT-5)')).toBeInTheDocument();
  expect(await screen.findByText('9/26/2020, 8:00:00 PM, (GMT-5)')).toBeInTheDocument();
  expect(await screen.findByText('£12.20')).toBeInTheDocument();
  expect(await screen.findByText('R$48.78')).toBeInTheDocument();
  expect(await screen.findByText('•••• 4009')).toBeInTheDocument();
  expect(await screen.findByText('•••• 4019')).toBeInTheDocument();
});
