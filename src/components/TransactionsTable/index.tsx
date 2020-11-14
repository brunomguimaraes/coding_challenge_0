import React from 'react';
import currencyFormatter from '../../utils/formatters/currency';
import dateFormatter from '../../utils/formatters/date';

import { Table, TableCell, TableHeader, TableRow } from './style';

type ITransactionTable = {
  transactions: Transaction[];
  isLoading: boolean;
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

const columns = [
  {
    title: 'Scheme',
    key: 'scheme',
  },
  {
    title: 'Last Numbers',
    key: 'lastNumbers',
  },
  {
    title: 'Amount',
    key: 'amount',
  },
  {
    title: 'Adress',
    key: 'address',
  },
  {
    title: 'Date',
    key: 'date',
  },
];

const TransactionsTable = ({ transactions, isLoading }: ITransactionTable) => {
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

  return (
    <>
      {isLoading && <span>...Loading</span>}
      <Table>
        <thead>
          <TableRow>
            {columns.map((column) => (
              <TableHeader key={column.key}>{column.title}</TableHeader>
            ))}
          </TableRow>
        </thead>
        <tbody>
          {dataSource.map((data: any) => (
            <TableRow key={data.key}>
              <TableCell data-testid={`${data.key}-scheme-tid`}>{data.scheme}</TableCell>
              <TableCell data-testid={`${data.key}-number-tid`}>
                {`**** **** **** ${data.lastNumbers}`}
              </TableCell>
              <TableCell data-testid={`${data.key}-amount-tid`}>{data.amount}</TableCell>
              <TableCell data-testid={`${data.key}-address-tid`}>{data.address}</TableCell>
              <TableCell data-testid={`${data.key}-date-tid`}>{data.date}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default TransactionsTable;
