/* eslint-disable no-param-reassign */
import axios from 'axios';

export const api = axios.create({
  baseURL: "http://ptmsprintbootmysqlaws-env.eba-bfnvgyvm.us-east-1.elasticbeanstalk.com/"
  // Terminal IP is required field but not relevant for Orange
});

// request interceptor
api.interceptors.request.use(config => {
  return config;
});

// Use this intercept responses incase before they are handled by then or catch.
// api.interceptors.response.use(
//   response =>
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     response.data,
//   error =>
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     Promise.reject(error),
// );
