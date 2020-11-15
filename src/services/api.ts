/* eslint-disable no-console */
import axios from 'axios';

export type LastTransaction = {
  id: string;
  programIdDel: string;
  time: string;
};

const secretKey = process.env.REACT_APP_FIDEL_API_SECRET_KEY;
const baseURL = process.env.REACT_APP_FIDEL_API_STAGE_URL;
const progId = process.env.REACT_APP_FIDEL_API_PROGRAM_ID;

const headers = {
  'fidel-key': `${secretKey}`,
};

const instance = axios.create({
  baseURL,
  headers,
});

export const fetchNextTransactions = (last: LastTransaction) => {
  const url = `${baseURL}/programs/${progId}/transactions?start=${encodeURIComponent(
    JSON.stringify(last)
  )}`;

  const transactions = instance
    .get(url)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error.message;
    });

  return transactions;
};

const fetchTransactions = () => {
  const url = `${baseURL}/programs/${progId}/transactions?limit=50`;

  const transactions = instance
    .get(url)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error.message;
    });

  return transactions;
};

export default fetchTransactions;
