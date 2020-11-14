/* eslint-disable no-console */
import axios from 'axios';

export type LastTransaction = {
  id: string;
  programIdDel: string;
  time: string;
};

const secretKey = process.env.REACT_APP_FIDEL_API_SECRET_KEY;

const headers = {
  'fidel-key': `${secretKey}`,
};

export const fetchNextTransactions = (last: LastTransaction) => {
  const baseURL = process.env.REACT_APP_FIDEL_API_STAGE_URL;
  const progId = process.env.REACT_APP_FIDEL_API_PROGRAM_ID;

  const url = `${baseURL}/programs/${progId}/transactions?start=${encodeURIComponent(
    JSON.stringify(last)
  )}`;

  const transactions = axios
    .get(url, {
      headers,
    })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      console.log(JSON.stringify(error));
      return error.message;
    });

  return transactions;
};

const fetchTransactions = () => {
  const baseURL = process.env.REACT_APP_FIDEL_API_STAGE_URL;
  const progId = process.env.REACT_APP_FIDEL_API_PROGRAM_ID;

  const url = `${baseURL}/programs/${progId}/transactions?limit=20`;

  const transactions = axios
    .get(url, {
      headers,
    })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      console.log(JSON.stringify(error));
      return error.message;
    });

  return transactions;
};

export default fetchTransactions;
