/* eslint-disable no-console */
import axios from 'axios';

type ApiParams = {
  lastTransaction?: LastTransaction;
  limit: string;
};

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

export const fetchNextTransactions = ({ lastTransaction, limit }: ApiParams) => {
  const url = `${baseURL}/programs/${progId}/transactions?start=${encodeURIComponent(
    JSON.stringify(lastTransaction)
  )}&limit=${limit}`;

  return instance.get(url);
};

const fetchTransactions = ({ limit }: ApiParams) => {
  const url = `${baseURL}/programs/${progId}/transactions?limit=${limit}`;

  return instance.get(url);
};

export default fetchTransactions;
