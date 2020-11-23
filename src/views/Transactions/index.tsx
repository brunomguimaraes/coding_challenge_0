import React, { useEffect, useState, useRef } from 'react';
import TransactionsTable from 'components/TransactionsTable';
import getRowsLimit from 'views/Transactions/utils/viewHeight';
import { fetchTransactions, LastTransaction } from 'services/api';

import { Header, Error } from './style';

const emptyLastTransaction = {
  id: '',
  programIdDel: '',
  time: '',
};

export type TransactionData = {
  transactions: Transaction[];
  lastTransaction: LastTransaction;
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
  const [hasMoreRows, setHasMoreRows] = useState<boolean>(() => true);
  const [errorMessage, setErrorMessage] = useState<string>(() => '');
  const [transactionsData, setTransactionsData] = useState<TransactionData>(() => {
    return {
      transactions: [],
      lastTransaction: emptyLastTransaction,
    };
  });

  const limit = getRowsLimit(47);
  const intersectionObserverRef: any = useRef();

  const fetchTransactionsData = () => {
    setLoading(true);
    const { lastTransaction } = transactionsData;

    fetchTransactions({ lastTransaction, limit })
      .then((res) => {
        if (res.data.last !== lastTransaction) {
          setTransactionsData((oldTransactionsData) => {
            return {
              transactions: [...oldTransactionsData.transactions, ...res.data.items],
              lastTransaction: res.data.last,
            };
          });
        } else {
          setHasMoreRows(false);
        }
        setLoading(false);
      })
      .catch((error) => {
        if (error) {
          setErrorMessage('an error has occurred! Please contact technical support.');
        }
      });
  };

  const lastRowElementRef = (row: any) => {
    if (isLoading) return;
    if (intersectionObserverRef.current) intersectionObserverRef.current.disconnect();
    intersectionObserverRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMoreRows) {
          fetchTransactionsData();
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
      }
    );
    if (row) intersectionObserverRef.current.observe(row);
  };

  useEffect(() => {
    fetchTransactionsData();
  }, []);

  return (
    <div>
      {errorMessage && <Error data-testid="error-message">{errorMessage}</Error>}
      <Header>Fidel API</Header>
      {transactionsData && (
        <TransactionsTable
          data-testid="transactions-table"
          lastRowElementRef={lastRowElementRef}
          transactions={transactionsData.transactions}
          isLoading={isLoading}
          limit={Number(limit)}
        />
      )}
    </div>
  );
};

export default Transactions;
