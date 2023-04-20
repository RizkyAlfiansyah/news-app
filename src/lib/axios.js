import axios from 'axios';

// get the base url from the environment variable
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// create an axios instance
const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY,
  },
});

// define a default error object
const defaultError = {
  status: 500,
  message: 'Something went wrong',
};

// define a request interceptor
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
