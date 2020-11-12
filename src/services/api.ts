/* eslint-disable no-console */
import axios from 'axios';

const fetchTransactions = () => {
  const baseURL = process.env.REACT_APP_FIDEL_API_STAGE_URL;
  const progId = process.env.REACT_APP_FIDEL_API_PROGRAM_ID;
  const secretKey = process.env.REACT_APP_FIDEL_API_SECRET_KEY;

  console.log('dotenv works?', process.env.REACT_APP_FIDEL_API_STAGE_URL);
  const url = `${baseURL}/programs/${progId}/transactions?limit=10`;

  const transactions = axios
    .get(url, {
      headers: {
        'content-type': 'application/json',
        'fidel-key': `${secretKey}`,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(JSON.stringify(error));
      return error.message;
    });

  return transactions;
};

export default fetchTransactions;
