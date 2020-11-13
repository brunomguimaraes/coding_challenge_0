import React, { useEffect, useState } from 'react';
import TransactionsTable, { Transaction } from '../../components/TransactionsTable';

import fetchTransactions, { fetchNextTransactions, LastTransaction } from '../../services/api';

const emptyLastTransaction = {
  id: '',
  programIdDel: '',
  time: '',
};

const Transactions = () => {
  const [isLoading, setLoading] = useState<boolean>(() => false);
  const [transactions, setTransactions] = useState<Transaction[]>(() => []);
  const [lastTransaction, setLastTransaction] = useState<LastTransaction>(
    () => emptyLastTransaction
  );

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
      setTransactions((oldTransactions) => [...oldTransactions, ...res.data.items]);
      setLastTransaction(res.data.last);
      setLoading(false);
    });
  };

  return (
    <div>
      <h2>Fidel API</h2>
      <TransactionsTable isLoading={isLoading} transactions={transactions} />
      <div>
        <button
          data-testid="show-more-button"
          type="button"
          disabled={isLoading}
          onClick={() => handlePagination()}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default Transactions;
