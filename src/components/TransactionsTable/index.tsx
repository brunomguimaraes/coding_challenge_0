import React from 'react';

import {
  TableBox,
  Table,
  TableCell,
  TableHeader,
  TableRow,
} from 'components/TransactionsTable/style';
import PaymentIcon from 'components/PaymentIcon';

import { Transaction } from 'views/Transactions';

import currencyFormatter from 'utils/formatters/currency';
import dateFormatter from 'utils/formatters/date';

type ITransactionTable = {
  transactions: Transaction[];
};

type TransactionDataSource = {
  key: string;
  scheme: string;
  lastNumbers: string;
  amount: string;
  address: string;
  date: string;
  city: string;
  postcode: string;
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
  {
    title: 'City',
    key: 'city',
  },
  {
    title: 'Postcode',
    key: 'postcode',
  },
];

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
      city: location.city,
      postcode: location.postcode,
    };
  });

  return (
    <TableBox>
      <Table>
        <thead>
          <TableRow>
            {columns.map((column) => (
              <TableHeader key={column.key}>{column.title}</TableHeader>
            ))}
          </TableRow>
        </thead>
        <tbody>
          {dataSource.map((data: TransactionDataSource) => (
            <TableRow key={data.key}>
              <TableCell data-testid={`${data.key}-scheme-tid`}>
                <PaymentIcon cardName={data.scheme} />
              </TableCell>
              <TableCell data-testid={`${data.key}-number-tid`}>
                {`•••• •••• •••• ${data.lastNumbers}`}
              </TableCell>
              <TableCell isCurrency isBold data-testid={`${data.key}-amount-tid`}>
                {data.amount}
              </TableCell>
              <TableCell data-testid={`${data.key}-address-tid`}>{data.address}</TableCell>
              <TableCell data-testid={`${data.key}-date-tid`}>{data.date}</TableCell>
              <TableCell data-testid={`${data.key}-city-tid`}>{data.city}</TableCell>
              <TableCell data-testid={`${data.key}-postcode-tid`}>{data.postcode}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableBox>
  );
};

export default TransactionsTable;
