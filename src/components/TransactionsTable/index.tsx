import React from 'react';
import { Table } from 'antd';

import 'antd/dist/antd.css';
import currencyFormatter from '../../utils/formatters/currency';
import dateFormatter from '../../utils/formatters/date';

type ITransactionTable = {
  transactions: Transaction[];
};

export type Transaction = {
  amount: number;
  card: Card;
  currency: string;
  datetime: string;
  id: string;
  location: PhysicalLocation;
};

type Card = {
  id: string;
  lastNumbers: string;
  scheme: string;
};

type PhysicalLocation = {
  address: string;
  id: string;
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
