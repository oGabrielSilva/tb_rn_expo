import axios from 'axios';
import { ISignIn } from '../types/api';

const url = 'https://testtb-api.herokuapp.com';

const get = () => {};

const account = () => ({
  signIn: (data: ISignIn) => axios.post(`${url}/account/signin`, data),
  getUserInfo: (token: string) => {
    const bearer = `Bearer ${token}`;
    return axios.get(`${url}/account`, {
      headers: {
        Authorization: bearer,
      },
    });
  },
});

const api = () => ({ get, account });

export default api;
