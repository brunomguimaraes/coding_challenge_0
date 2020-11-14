import React, { useEffect, useState } from 'react';
import TransactionsTable from 'components/TransactionsTable';
import usePageBottom from 'utils/usePageBottom';

import fetchTransactions, { fetchNextTransactions, LastTransaction } from 'services/api';

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
  const [transactions, setTransactions] = useState<Transaction[]>(() => []);
  const [lastTransaction, setLastTransaction] = useState<LastTransaction>(
    () => emptyLastTransaction
  );

  const handlePagination = () => {
    setLoading(true);
    fetchNextTransactions(lastTransaction).then((res) => {
      setTransactions((oldTransactions) => [...oldTransactions, ...res.data.items]);
      setLastTransaction(res.data.last);
      setLoading(false);
    });
  };

  const isPageBottom = usePageBottom();

  useEffect(() => {
    if (!isPageBottom || !transactions || isLoading) return;
    handlePagination();
  }, [isPageBottom]);

  useEffect(() => {
    setLoading(true);
    fetchTransactions().then((res) => {
      setTransactions(res.data.items);
      setLastTransaction(res.data.last);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <h2>Fidel API</h2>
      <TransactionsTable isLoading={isLoading} transactions={transactions} />
    </div>
  );
};

export default Transactions;
