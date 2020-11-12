import React, { useEffect, useState } from 'react';
import fetchTransactions from '../../services/api';
import currencyFormatter from '../../utils/formatters/currency';

import s from './styles.module.scss';

type Transaction = {
  accountId: string;
  amount: number;
  brand: Brand;
  card: Card;
  cleared: boolean;
  created: Date;
  currency: string;
  datetime: Date;
  id: string;
  identifiers: Identifier;
  location: PhysicalLocation;
  programId: string;
  updated: string;
  wallet: string;
};

type Brand = {
  id: string;
  logoURL: string;
  metadata: string;
  name: string;
};

type Card = {
  id: string;
  lastNumbers: string;
  scheme: string;
};

type Identifier = {
  MID: string;
  amexApprovalCode: string;
  mastercardAuthCode: string;
  mastercardRefNumber: string;
  mastercardTransactionSequenceNumber: string;
  visaAuthCode: string;
};

type PhysicalLocation = {
  address: string;
  city: string;
  countryCode: string;
  geolocation: Geolocation;
  id: string;
  metadata: string;
  postcode: string;
  timezone: string;
};

type Geolocation = {
  latitude: number;
  longitude: number;
};

const Transactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    fetchTransactions().then((res) => {
      setTransactions(res);
    });
  }, []);

  const renderRow = (transaction: Transaction) => {
    const amount: string = currencyFormatter(transaction.amount, transaction.currency);
    const { card, location } = transaction;

    return (
      <tr>
        <td>{card.scheme}</td>
        <td>{card.lastNumbers}</td>
        <td>{amount}</td>
        <td>{location.address}</td>
      </tr>
    );
  };

  return (
    <div className={s.wrapper}>
      <h2>Fidel API</h2>
      <table>{transactions.map((transaction) => renderRow(transaction))}</table>
    </div>
  );
};

export default Transactions;
