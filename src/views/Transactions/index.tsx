import React, { useEffect, useState } from 'react';

import TransactionsTable from 'components/TransactionsTable';
import Skeleton from 'components/Skeleton';

import usePageBottom from 'utils/usePageBottom';
import getRowsLimit from 'utils/viewHeight';

import fetchTransactions, { fetchNextTransactions, LastTransaction } from 'services/api';

import { Header, Error } from './style';

const emptyLastTransaction = {
  id: '',
  programIdDel: '',
  time: '',
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
  city: string;
  postcode: string;
};

const Transactions = () => {
  const [isLoading, setLoading] = useState<boolean>(() => false);
  const [errorMessage, setErrorMessage] = useState<string>(() => '');
  const [transactions, setTransactions] = useState<Transaction[]>(() => []);
  const [lastTransaction, setLastTransaction] = useState<LastTransaction>(
    () => emptyLastTransaction
  );
  const isPageBottom = usePageBottom();
  const limit = getRowsLimit();

  const handlePagination = () => {
    setLoading(true);
    fetchNextTransactions({ lastTransaction, limit })
      .then((res) => {
        setTransactions((oldTransactions) => [...oldTransactions, ...res.data.items]);
        setLastTransaction(res.data.last);
        setLoading(false);
      })
      .catch((error) => {
        if (error) {
          setErrorMessage('an error has occurred! Please contact technical support.');
        }
      });
  };

  useEffect(() => {
    if (!isPageBottom || !transactions || isLoading) return;
    handlePagination();
  }, [isPageBottom]);

  useEffect(() => {
    setLoading(true);
    fetchTransactions({ limit })
      .then((res) => {
        setTransactions(res.data.items);
        setLastTransaction(res.data.last);
        setLoading(false);
      })
      .catch((error) => {
        if (error) {
          setErrorMessage('an error has occurred! Please contact technical support.');
        }
      });
  }, []);

  return (
    <div>
      {errorMessage && <Error>{errorMessage}</Error>}
      <Header>Fidel API</Header>
      <TransactionsTable data-testid="transactions-table" transactions={transactions} />
      {isLoading && <Skeleton quantity={Number(limit)} />}
    </div>
  );
};

export default Transactions;
