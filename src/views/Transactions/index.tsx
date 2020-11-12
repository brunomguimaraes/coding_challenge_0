import React, { useEffect, useState } from 'react';
import fetchTransactions from '../../services/api';

import s from './styles.module.scss';

const Login = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions().then((res) => {
      setTransactions(res);
    });
  }, []);

  // eslint-disable-next-line no-console
  console.log('transactions', transactions);

  return <div className={s.wrapper}>Fidel API</div>;
};

export default Login;
