import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import TransactionsTable, { Transaction } from '../../components/TransactionsTable';

import fetchTransactions, { fetchNextTransactions, LastTransaction } from '../../services/api';

import s from './styles.module.scss';

const emptyLastTransaction = {
  id: '',
  programIdDel: '',
  time: '',
};

const Transactions = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [lastTransaction, setLastTransaction] = useState<LastTransaction>(emptyLastTransaction);

  useEffect(() => {
    setLoading(true);
    fetchTransactions().then((res) => {
      setTransactions(res.data.items);
      setLastTransaction(res.data.last);
      setLoading(false);
    });
  }, []);

  const handlePagination = () => {
    setLoading(true);
    fetchNextTransactions(lastTransaction).then((res) => {
      setTransactions([...transactions, ...res.data.items]);
      setLastTransaction(res.data.last);
      setLoading(false);
    });
  };

  return (
    <div className={s.wrapper}>
      <h2>Fidel API</h2>
      <TransactionsTable isLoading={isLoading} transactions={transactions} />
      <div className={s.buttonWrapper}>
        <Button type="primary" loading={isLoading} onClick={() => handlePagination()}>
          Load More
        </Button>
      </div>
    </div>
  );
};

export default Transactions;
