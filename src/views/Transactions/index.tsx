import React, { useEffect, useState } from 'react';
import TransactionsTable, { Transaction } from '../../components/TransactionsTable';

import fetchTransactions from '../../services/api';

import s from './styles.module.scss';

const Transactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    fetchTransactions().then((res) => {
      setTransactions(res);
    });
  }, []);

  return (
    <div className={s.wrapper}>
      <h2>Fidel API</h2>
      <TransactionsTable transactions={transactions} />
    </div>
  );
};

export default Transactions;
