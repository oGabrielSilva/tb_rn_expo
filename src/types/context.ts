import { ReactNode } from 'react';
import { IColors } from './colors';

export interface IUserInfo {
  name: string;
  email: string;
  gender: string;
  avatar: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ITBContext {
  bearerToken: string;
  darkMode: boolean;
  colors: IColors;
  setMode(): void;
  // eslint-disable-next-line no-unused-vars
  setBearerToken: (value: string) => void;
  userInfo: IUserInfo;
  handlerLogOut(): void;
}

export interface IPropsContext {
  children: ReactNode;
}
