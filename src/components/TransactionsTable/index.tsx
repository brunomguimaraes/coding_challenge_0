import React, { useState } from 'react';
import PaymentIcon from 'components/PaymentIcon';
import Skeleton from 'components/Skeleton';
import TransactionModal from 'components/TransactionModal';
import { Transaction } from 'views/Transactions';
import currencyFormatter from 'utils/formatters/currency';
import dateFormatter from 'utils/formatters/date';
import { ReactComponent as MagnifyLogo } from 'assets/svg/magnify.svg';

import {
  TableBox,
  Table,
  TableCell,
  TableHeader,
  TableRow,
  Button,
} from 'components/TransactionsTable/style';

type ITransactionTable = {
  transactions: Transaction[];
  elementRef: any;
  isLoading: boolean;
  limit: number;
};

export type TransactionDataSource = {
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
    sizeL: true,
  },
  {
    title: 'Date',
    key: 'date',
    sizeM: true,
  },
  {
    title: 'City',
    key: 'city',
    sizeM: true,
  },
  {
    title: 'Postcode',
    key: 'postcode',
    sizeL: true,
  },
];

const emptyModalData = {
  key: '',
  scheme: '',
  lastNumbers: '',
  amount: '',
  address: '',
  date: '',
  city: '',
  postcode: '',
};

const TransactionsTable = ({ transactions, elementRef, isLoading, limit }: ITransactionTable) => {
  const [isModalShown, showModal] = useState<boolean>(() => false);
  const [modalData, setModalData] = useState<TransactionDataSource>(() => emptyModalData);
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

  const handleShowModal = (data: TransactionDataSource) => {
    setModalData(data);
    showModal(true);
  };

  const handleCloseModal = () => {
    setModalData(emptyModalData);
    showModal(false);
  };

  return (
    <TableBox>
      <TransactionModal handleClose={handleCloseModal} data={modalData} show={isModalShown} />
      <Table>
        <thead>
          <TableRow>
            {columns.map((column) => (
              <TableHeader sizeL={column.sizeL} sizeM={column.sizeM} key={column.key}>
                {column.title}
              </TableHeader>
            ))}
          </TableRow>
        </thead>
        <tbody>
          {dataSource.map((data: TransactionDataSource, index: number) => (
            <TableRow ref={dataSource.length === index + 1 ? elementRef : null} key={data.key}>
              <TableCell data-testid={`${data.key}-scheme-tid`}>
                <PaymentIcon cardName={data.scheme} />
              </TableCell>
              <TableCell data-testid={`${data.key}-number-tid`}>
                {`•••• ${data.lastNumbers}`}
              </TableCell>
              <TableCell isCurrency isBold data-testid={`${data.key}-amount-tid`}>
                {data.amount}
              </TableCell>
              <TableCell sizeL data-testid={`${data.key}-address-tid`}>
                {data.address}
              </TableCell>
              <TableCell sizeM data-testid={`${data.key}-date-tid`}>
                {data.date}
              </TableCell>
              <TableCell sizeM data-testid={`${data.key}-city-tid`}>
                {data.city}
              </TableCell>
              <TableCell sizeL data-testid={`${data.key}-postcode-tid`}>
                {data.postcode}
              </TableCell>
              <TableCell>
                <Button
                  tabIndex={index}
                  role="button"
                  onClick={() => handleShowModal(data)}
                  onKeyDown={() => handleShowModal(data)}
                >
                  <MagnifyLogo />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
      {isLoading && <Skeleton quantity={limit} />}
    </TableBox>
  );
};

export default TransactionsTable;
