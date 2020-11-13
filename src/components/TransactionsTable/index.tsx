import React from 'react';
import { Table } from 'antd';

import 'antd/dist/antd.css';
import currencyFormatter from '../../utils/formatters/currency';
import dateFormatter from '../../utils/formatters/date';

type ITransactionTable = {
  transactions: Transaction[];
};

export type Transaction = {
  accountId: string;
  amount: number;
  brand: Brand;
  card: Card;
  cleared: boolean;
  created: string;
  currency: string;
  datetime: string;
  id: string;
  identifiers: Identifier;
  location: PhysicalLocation;
  programId: string;
  updated: string;
  wallet: string;
};

type Brand = {
  id: string;
  logoURL: string;
  metadata: string;
  name: string;
};

type Card = {
  id: string;
  lastNumbers: string;
  scheme: string;
};

type Identifier = {
  MID: string;
  amexApprovalCode: string;
  mastercardAuthCode: string;
  mastercardRefNumber: string;
  mastercardTransactionSequenceNumber: string;
  visaAuthCode: string;
};

type PhysicalLocation = {
  address: string;
  city: string;
  countryCode: string;
  geolocation: Geolocation;
  id: string;
  metadata: string;
  postcode: string;
  timezone: string;
};

type Geolocation = {
  latitude: number;
  longitude: number;
};

const TransactionsTable = ({ transactions }: ITransactionTable) => {
  const dataSource = transactions.map((transaction) => {
    const amount: string = currencyFormatter(transaction.amount, transaction.currency);
    const date = dateFormatter(transaction.datetime);
    const { card, location, id } = transaction;

    return {
      key: id,
      scheme: card.scheme,
      lastNumbers: card.lastNumbers,
      amount,
      address: location.address,
      date,
    };
  });

  const columns = [
    {
      title: 'Scheme',
      dataIndex: 'scheme',
      key: 'scheme',
    },
    {
      title: 'Last Numbers',
      dataIndex: 'lastNumbers',
      key: 'lastNumbers',
      render: (lastNumbers: string) => <span>{`**** **** **** ${lastNumbers}`}</span>,
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Adress',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
  ];

  return <Table columns={columns} dataSource={dataSource} />;
};

export default TransactionsTable;
