import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
console.log('BASE_URL', BASE_URL);
const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY,
  },
});

const defaultError = {
  status: 500,
  message: 'Something went wrong',
};

instance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (err) {
    if (axios.isCancel(err)) {
      return Promise.reject('request canceled');
    }

    if (err.response && err.response.data) {
      if (err.response.status === 401) {
        console.log('unauthorized, logging out ...');
      }
      return Promise.reject(err.response.data);
    } else {
      return Promise.reject(defaultError);
    }
  }
);

export default instance;
